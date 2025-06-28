function SearchBar({ setInputValue }) {
  function handleInput(input) {
    setInputValue(input);
  }
  return (
    <div className="flex gap-2 justify-center mt-3 items-center">
      <div>
        <input
          onChange={(e) => {
            handleInput(e.target.value);
          }}
          className="p-2 bg-slate-500 mb-2 rounded-xl pl-20 pr-20"
          placeholder="Search"
        ></input>
      </div>
      <div>
        <button className="p-2 bg-red-300 mb-2 rounded-lg">🔎 Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
