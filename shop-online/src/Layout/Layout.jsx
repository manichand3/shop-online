import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Home from "../pages/Home";
function Layout({ inputValue, setInputValue, category, setCategory }) {
  return (
    <div>
      <Header></Header>
      <div className="flex justify-center items-center">
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
        ></SearchBar>
        <CategoryFilter setCategory={setCategory}></CategoryFilter>
      </div>
      <Home inputValue={inputValue} category={category}></Home>
      <Footer></Footer>
    </div>
  );
}
export default Layout;
