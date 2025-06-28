function Header() {
  return (
    <div className="flex justify-around items-center bg-slate-600 h-20 ">
      <div>
        <img
          className="h-10 w-10 rounded-lg"
          src="https://logo.clearbit.com/flipkart.com"
          alt="logo"
        />
      </div>
      <div>
        <button>🛒 Cart</button>
      </div>
      <div>
        <button>LogIn</button>
      </div>
    </div>
  );
}
export default Header;
