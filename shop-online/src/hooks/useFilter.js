import { useEffect, useState } from "react";

function useFilter(products, inputValue, category) {
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    let result = products;
    if (category !== "All") {
      result = result.filter((product) => product.category === category);
    }
    if (inputValue !== "") {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(inputValue.toLowerCase())
      );
    }

    setFilter(result);
  }, [products, category, inputValue]);
  return filter;
}
export default useFilter;
