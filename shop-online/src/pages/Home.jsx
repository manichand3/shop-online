import { useEffect, useState } from "react";
import useFilter from "../hooks/useFilter";

function Home({
  products,
  setProducts,
  inputValue,
  category,
  cartProducts,
  setCartProducts,
}) {
  const [cartQuantityMap, setCartQuantityMap] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  const handleQuantityChange = (productId, quantity) => {
    setCartQuantityMap({
      ...cartQuantityMap,
      [productId]: Number(quantity),
    });
  };

  const filterProducts = useFilter(products, inputValue, category);
  const displayProducts =
    filterProducts.length === 0 ? products : filterProducts;

  return (
    <div className="grid grid-cols-4 gap-4 w-100 m-10">
      {displayProducts.map((product) => {
        const quantity = cartQuantityMap[product.id] || 1;

        return (
          <div
            className="bg-slate-500 rounded-lg hover:bg-slate-400 cursor-pointer"
            key={product.id}
          >
            <div>
              <img src={product.images[0]} alt={product.title} />
            </div>
            <div className="flex flex-col items-center bg-slate-300">
              <p>{product.title}</p>
              <p>💰 {product.price}</p>
              <p>{product.category}</p>
              <p>⭐ {product.rating}</p>
            </div>
            <div className="flex justify-center gap-4 items-center h-14">
              <select
                value={quantity}
                onChange={(e) =>
                  handleQuantityChange(product.id, e.target.value)
                }
                className="rounded-md"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <button
                onClick={() => {
                  setCartProducts((prevCart) => {
                    const existingProduct = prevCart.find(
                      (item) => item.productId === product.id
                    );

                    if (existingProduct) {
                      // Update the quantity of the existing product
                      return prevCart.map((item) =>
                        item.productId === product.id
                          ? { ...item, quantity: quantity }
                          : item
                      );
                    } else {
                      // Add as new item
                      return [
                        ...prevCart,
                        { productId: product.id, quantity: quantity },
                      ];
                    }
                  });

                  setCartQuantityMap((prev) => ({
                    ...prev,
                    [product.id]: 1,
                  }));
                }}
                className="pl-4 pr-4 bg-gray-100 rounded-xl"
              >
                Add-to-Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
