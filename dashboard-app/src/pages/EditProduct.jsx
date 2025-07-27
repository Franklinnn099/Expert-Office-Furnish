// src/pages/EditProduct.jsx
import { useParams } from "react-router-dom";

export default function EditProduct() {
  const { id } = useParams(); // Capture product ID from route param

  const fields = [
    "Product Name",
    "Description",
    "Price (GHS)",
    "Stock Quantity",
    "Category",
    "Material",
    "Color",
    "Image URL",
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Edit Product
        </h2>
        <form className="space-y-5">
          {fields.map((label) => (
            <div key={label}>
              <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200">
                {label}
              </label>
              <input
                type="text"
                placeholder={`Enter ${label.toLowerCase()}`}
                className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded-lg font-medium shadow transition duration-200"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}
