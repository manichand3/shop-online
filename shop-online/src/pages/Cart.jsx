// function Cart({ cartProducts, products }) {
//   console.log(products);
//   console.log(cartProducts);
//   return <div>hi</div>;
// }
// export default Cart;
import { Link } from "react-router";
function Cart({ cartProducts, products }) {
  const cartDetails = cartProducts.map((cartItem) => {
    const fullProduct = products.find((p) => p.id === cartItem.productId);
    return {
      ...fullProduct,
      quantity: cartItem.quantity,
    };
  });

  return (
    <div className="p-4">
      <div className="flex justify-around">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold mb-4">Home</h1>
          </Link>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>
        </div>
      </div>
      {cartDetails.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {cartDetails.map((item) => (
            <div
              key={item.id}
              className="p-4 border rounded-lg bg-gray-100 shadow"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-32 h-32 object-cover"
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p>💰 Price: {item.price}</p>
              <p>🛍 Quantity: {item.quantity}</p>
              <p>Total: ₹ {item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
