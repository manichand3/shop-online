import Layout from "./Layout/Layout";
import { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      <Layout
        inputValue={inputValue}
        setInputValue={setInputValue}
        category={category}
        setCategory={setCategory}
      ></Layout>
    </div>
  );
}

export default App;
