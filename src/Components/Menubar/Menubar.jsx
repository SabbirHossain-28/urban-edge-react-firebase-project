const Menubar = () => {
  return (
    <div className="mb-24 bg-slate-200 border p-6 rounded-md">
      <div className="flex flex-col md:flex-row lg:flex-row gap-4">
        <select
          defaultValue=""
          className="select select-bordered w-full max-w-sm"
        >
          <option disabled value="">
            Property Types
          </option>
          <option value="office">Office buildings</option>
          <option value="retail">Retail spaces</option>
          <option value="warehouses">Warehouses</option>
          <option value="industrial">Industrial</option>
          <option value="restaurants">Restaurants</option>
        </select>
        <select
          defaultValue=""
          className="select select-bordered w-full max-w-sm"
        >
          <option disabled value="">
            Price
          </option>
          <option value="100k-200k">100k-200k</option>
          <option value="200k-300k">200k-300k</option>
          <option value="300k-500k">300k-500k</option>
          <option value="500k-600k">500k-600k</option>
          <option value="600k-800k">600k-800k</option>
        </select>
        <input
          type="text"
          placeholder="Location"
          className="input input-bordered w-full max-w-sm"
        />
        <label className="bg-[#9e7d54] text-white input input-bordered flex items-center gap-2 max-w-sm">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Menubar;
