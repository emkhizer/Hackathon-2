import Image from "next/image";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Polo with Contrast Trims",
      image: "/images/polo1.png", // Replace with your image path
      price: "$212",
      oldPrice: "$242",
      discount: "-20%",
      rating: 4.0,
      reviews: 350,
    },
    {
      id: 2,
      name: "Gradient Graphic T-shirt",
      image: "/images/graphic.png", // Replace with your image path
      price: "$145",
      rating: 3.5,
      reviews: 267,
    },
    {
      id: 3,
      name: "Polo with Contrast Trims",
      image: "/images/polo2.png", // Replace with your image path
      price: "$180",
      rating: 4.5,
      reviews: 350,
    },
    {
      id: 4,
      name: "Gradient Graphic T-shirt",
      image: "/images/tshirtlines.png", // Replace with your image path
      price: "$120",
      oldPrice: "$150",
      discount: "-30%",
      rating: 5,
      reviews: 267,
    },
  ];

  return (
    <div className="flex flex-col rounded-xl items-center bg-white  py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-transparent p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            {/* Product Image */}
            <div className="w-40 h-40 relative">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>

            {/* Product Details */}
            <div className="mt-4 text-center">
              <h2 className="text-lg font-bold">{product.name}</h2>

              {/* Rating and Reviews */}
              <div className="flex items-center justify-center gap-1 text-yellow-500 mt-2">
                {/* Stars */}
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < product.rating ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                ))}
                <span className="text-sm text-gray-500">
                  {product.rating}/5 ({product.reviews} Reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-xl font-bold text-black">
                  {product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-lg line-through text-gray-400">
                    {product.oldPrice}
                  </span>
                )}
                {product.discount && (
                  <span className="text-sm text-red-500 bg-red-100 px-2 py-1 rounded-full">
                    {product.discount}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
