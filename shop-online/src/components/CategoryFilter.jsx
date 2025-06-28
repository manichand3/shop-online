function CategoryFilter({ setCategory }) {
  function handleCategory(category) {
    console.log(category);
    setCategory(category);
  }
  return (
    <div className="ml-6 flex items-center ">
      <label htmlFor="category">Category</label>
      <select
        onChange={(e) => {
          handleCategory(e.target.value);
        }}
        className="bg-slate-600 p-2 rounded-md ml-2"
      >
        <option value="All">All</option>
        <option value="beauty">beauty</option>
        <option value="groceries">groceries</option>
        <option value="fragrances">fragrances</option>
        <option value="furniture">furniture</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
