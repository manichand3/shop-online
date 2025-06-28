import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
function Layout() {
  return (
    <div>
      <Header></Header>
      <div className="flex justify-center items-center">
        <SearchBar></SearchBar>
        <CategoryFilter></CategoryFilter>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Layout;
