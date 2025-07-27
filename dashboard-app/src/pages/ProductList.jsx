// src/pages/ProductList.jsx
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Chairs",
    image: "https://via.placeholder.com/40?text=Chair",
    category: "Chairs",
    price: "GHS 1,200",
    status: "In Stock",
    stock: 50,
  },
  {
    id: 2,
    name: "Desks",
    image: "https://via.placeholder.com/40?text=Desk",
    category: "Desks",
    price: "GHS 2,500",
    status: "Out of Stock",
    stock: 0,
  },
];

export default function ProductList() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Products</h2>
        <Link
          to="/products/add"
          className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Add Product
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search products"
        className="w-full px-3 py-2 mb-4 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-sm text-gray-500 dark:text-gray-300">
              <th className="p-2">Product</th>
              <th className="p-2">Category</th>
              <th className="p-2">Price</th>
              <th className="p-2">Status</th>
              <th className="p-2">Stock</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr
                key={prod.id}
                className="text-sm border-t dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="p-2 flex items-center gap-2">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  {prod.name}
                </td>
                <td className="p-2">{prod.category}</td>
                <td className="p-2">{prod.price}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      prod.status === "In Stock"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {prod.status}
                  </span>
                </td>
                <td className="p-2">{prod.stock}</td>
                <td className="p-2">
                  <Link
                    to={`/products/edit/${prod.id}`}
                    className="text-blue-500 hover:underline text-sm"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
