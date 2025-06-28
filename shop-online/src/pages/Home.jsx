import { useEffect, useState } from "react";
import useFilter from "../hooks/useFilter";
function Home({ inputValue, category }) {
  const [products, setProducts] = useState([]);
  // const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  const filterProducts = useFilter(products, inputValue, category);
  console.log(filterProducts);
  const displayProducts =
    filterProducts.length === 0 ? products : filterProducts;

  // useEffect(() => {
  //   if (inputValue.trim() === "") {
  //     setFilterProducts(products);
  //     return; //stop code here
  //   }
  //   const filter = products.filter((product) => {
  //     return product.title.toLowerCase().includes(inputValue.toLowerCase());
  //   });
  //   setFilterProducts(filter);
  // }, [inputValue, products]);

  // console.log(products);
  return (
    <div className="grid grid-cols-4 gap-4 w-100 m-10">
      {displayProducts.map((product) => {
        return (
          <div
            className="bg-slate-500 rounded-lg hover:bg-slate-400 cursor-pointer"
            key={product.id}
          >
            <div>
              <img src={product.images[0]}></img>
            </div>
            <div className="flex flex-col items-center bg-slate-300 ">
              <div>
                <p>{product.title}</p>
              </div>
              <div>
                <p> 💰{product.price}</p>
              </div>
              <div>
                <p>{product.category}</p>
                <p>⭐{product.rating}</p>
              </div>
            </div>
            <div className="flex justify-center gap-4 items-center h-14">
              <div>
                <select className="rounded-md">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>

              <button className="pl-4 pr-4 bg-gray-100 rounded-xl">
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
