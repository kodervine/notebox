export const Header = () => {
  return (
    <form className="flex gap-3">
      <section>
        <label
          htmlFor="search-notes"
          className="mb-2 text-sm font-medium text-gray-900"
        >
          Search
        </label>
        <div className="flex">
          <input
            type="search"
            id="search-notes"
            className="block w-full px-4 py-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
            placeholder="Search todo by tags..."
          />
          <button
            type="submit"
            className="text-white -ml-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </section>

      <section>
        <label
          htmlFor="sort-by"
          className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Sort by
        </label>
        <select
          id="sort-by"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2 cursor-pointer "
        >
          <option>Sort By</option>
          <option value="now">Now</option>
          <option value="hour">1 Hour Ago</option>
          <option value="day">A day Ago</option>
          <option value="oldest">Oldest</option>
        </select>
      </section>
    </form>
  );
};
