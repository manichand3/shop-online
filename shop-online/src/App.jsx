import Layout from "./Layout/Layout";
import Cart from "../src/pages/Cart";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
function App() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("");
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                inputValue={inputValue}
                setInputValue={setInputValue}
                category={category}
                setCategory={setCategory}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                products={products}
                setProducts={setProducts}
              ></Layout>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart cartProducts={cartProducts} products={products}></Cart>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
