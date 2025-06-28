function CategoryFilter() {
  return (
    <div className="ml-6 flex items-center ">
      <label htmlFor="category">Category</label>
      <select className="bg-slate-600 p-2 rounded-md ml-2" id="category">
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="beauty">Beauty</option>
        <option value="phones">Phones</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
