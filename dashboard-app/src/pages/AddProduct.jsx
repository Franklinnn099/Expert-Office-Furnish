// src/pages/AddProduct.jsx
import { useState } from "react";

export default function AddProduct() {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>
      <form className="space-y-4">
        {/* Product Image Upload */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
            Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-sm text-gray-700 dark:text-gray-200"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 h-32 object-cover rounded border"
            />
          )}
        </div>

        {/* Other Inputs */}
        {[
          "Product Name",
          "Description",
          "Quantity",
          "Category",
          "Subcategory",
          "Material",
          "Color",
          "Size",
          "Weight",
          "Dimensions",
          "SKU",
          "Barcode",
          "Status",
        ].map((label) => (
          <div key={label}>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              {label}
            </label>
            <input
              type="text"
              placeholder={`Enter ${label.toLowerCase()}`}
              className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded font-medium"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
