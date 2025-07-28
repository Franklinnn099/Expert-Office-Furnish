import { Link, useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    alt: "Modern Sofa",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    alt: "Wooden Bench",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1582582422014-5c3a9e167d9d",
    alt: "Rattan Settee",
  },
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="flex gap-8">
        {/* Left Section - Navigation */}
        <div className="w-1/3 space-y-6">
          {/* Product List */}
          <div>
            <p className="text-sm text-green-700">View all products</p>
            <h2 className="text-lg font-semibold">Product list</h2>
            <p className="text-sm text-gray-500">
              Manage your products, inventory, and variants
            </p>
            <Link
              to="/product-list"
              className="mt-2 inline-block px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
            >
              View
            </Link>
          </div>

          {/* Add Product */}
          <div>
            <p className="text-sm text-green-700">Add a new product</p>
            <h2 className="text-lg font-semibold">Add product</h2>
            <p className="text-sm text-gray-500">
              Add a new product to your store
            </p>
            <Link
              to="/add-product"
              className="mt-2 inline-block px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
            >
              Add
            </Link>
          </div>

          {/* Edit Product */}
          <div>
            <p className="text-sm text-green-700">Edit a product</p>
            <h2 className="text-lg font-semibold">Edit product</h2>
            <p className="text-sm text-gray-500">
              Edit an existing product in your store
            </p>
            <button
              onClick={() => navigate("/edit-product/1")}
              className="mt-2 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
            >
              Edit First Product
            </button>
          </div>
        </div>

        {/* Right Section - Product Images */}
        <div className="w-2/3 space-y-4">
          <Link
            to="/add-product"
            className="mb-4 inline-block px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
          >
            Add product
          </Link>
          {products.map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.alt}
                className="rounded-xl object-cover w-full h-40"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
