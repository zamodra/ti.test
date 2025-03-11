import { usePropertyStore } from "@/store/propertyStore";

const PropertyFilterForm = () => {
  const { filters, setFilters, fetchProperties } = usePropertyStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({ [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchProperties();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 shadow-md rounded-lg flex flex-col gap-4"
    >
      {/* Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <input
          type="text"
          name="type"
          value={filters.type || ""}
          onChange={handleChange}
          placeholder="e.g., rumah, ruko, hotel"
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select
          name="status"
          value={filters.status || ""}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
        >
          <option value="">Select Status</option>
          <option value="new">New</option>
          <option value="second">Second</option>
        </select>
      </div>

      {/* Price Min */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Min Price</label>
        <input
          type="number"
          name="price_min"
          value={filters.price_min || ""}
          onChange={handleChange}
          placeholder="Minimum Price"
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Price Max */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Max Price</label>
        <input
          type="number"
          name="price_max"
          value={filters.price_max || ""}
          onChange={handleChange}
          placeholder="Maximum Price"
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Per Page */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Results Per Page</label>
        <input
          type="number"
          name="per_page"
          value={filters.per_page || 12}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Apply Filters
      </button>
    </form>
  );
};

export default PropertyFilterForm;
