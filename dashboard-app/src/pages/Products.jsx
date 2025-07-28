import { Link, useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    image: "/pics/sofa.png",
    alt: "Modern Sofa",
    title: "Product List",
    description: "Manage your products, inventory, and variants.",
    link: "/product-list",
    button: "View",
  },
  {
    id: 2,
    image: "/pics/desk2.jpg",
    alt: "Wooden Bench",
    title: "Add Product",
    description: "Add a new product to your store.",
    link: "/add-product",
    button: "Add",
  },
  {
    id: 3,
    image: "/pics/desk.jpg",
    alt: "Rattan Settee",
    title: "Edit Product",
    description: "Edit an existing product in your store.",
    link: "/edit-product/1",
    button: "Edit",
  },
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-10 text-gray-800 dark:text-white tracking-tight">
        Products
      </h1>

      <div className="space-y-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image with hover zoom */}
            <div className="relative w-40 h-40 overflow-hidden rounded-xl">
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text & Button */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {product.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-300 mb-4 text-sm">
                {product.description}
              </p>

              {product.title === "Edit Product" ? (
                <button
                  onClick={() => navigate(product.link)}
                  className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg shadow hover:opacity-90 transition"
                >
                  {product.button}
                </button>
              ) : (
                <Link
                  to={product.link}
                  className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg shadow hover:opacity-90 transition"
                >
                  {product.button}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
