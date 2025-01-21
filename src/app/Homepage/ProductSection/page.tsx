import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const productData = [
  {
    id: 1,
    title: "T-SHIRT WITH TAPE DETAILS",
    price: 120,
    rating: 4.5,
    image: "/images/blackteashirt.png",
  },
  {
    id: 2,
    title: "SKINNY FIT JEANS",
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
    image: "/images/jeans.png",
  },
  {
    id: 3,
    title: "T-SHIRT WITH TAPE DETAILS",
    price: 180,
    rating: 4.5,
    image: "/images/checkered.png",
  },
  {
    id: 4,
    title: "SKINNY FIT JEANS",
    price: 130,
    originalPrice: 260,
    discount: 20,
    rating: 4.5,
    image: "/images/orangelines.png",
  },
];
const NewArrival = [
  {
    id: 1,
    title: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 260,
    discount: 20,
    rating: 5.0,
    image: "/images/VerticalSShirt.png",
  },
  {
    id: 2,
    title: "Courage Graphic T-short",
    price: 145,
    rating: 4.0,
    image: "/images/CourageGT.png",
  },
  {
    id: 3,
    title: "LOOSE FIT BERMUDA SHORTS",
    price: 80,
    rating: 3.0,
    image: "/images/shorts.png",
  },
  {
    id: 4,
    title: "FADED SKINNY JEANS",
    price: 210,
    rating: 4.5,
    image: "/images/FADEDSJEANS.png",
  },
];

const ProductData = () => {
  return (
    // Products Section
    <section className="md:px-[6.25rem] font-satoshi py-10">
      <h2 className="mb-8 text-3xl font-integralcf font-bold text-center">
        NEW ARRIVALS
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {productData.map((product) => (
          <Card key={product.id} className="border-none">
            <CardContent className="p-0">
              <Image
                src={product.image}
                alt={product.title}
                width={400} // Set a width for the image
                height={200} // Set a height for the image
                className="w-full h-[200px] object-cover rounded-2xl bg-[#f0eeed]"
              />
              <div className="mt-4">
                <h3 className="text-base font-bold">{product.title}</h3>
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < product.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                  </div>
                  <span className="text-xs">{product.rating}/5</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                      <Badge
                        variant="secondary"
                        className="text-red-500 bg-red-100"
                      >
                        -{product.discount}%
                      </Badge>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center ">
        <Button
          variant="outline"
          className="w-full sm:w-[218px] h-[52px] mt-6 text-gray-400 rounded-full"
        >
          <span className="text-black">View All</span>
        </Button>
      </div>

      {/* Top Selling Section */}
      <h2 className="text-3xl py-10 px-4 font-integralcf font-bold text-center">
        Top Selling
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {NewArrival.map((product) => (
          <Card key={product.id} className="border-none">
            <CardContent className="p-0">
              <Image
                src={product.image}
                alt={product.title}
                width={400} // Set a width for the image
                height={200} // Set a height for the image
                className="w-full h-[200px] object-cover rounded-2xl bg-[#f0eeed]"
              />
              <div className="mt-4">
                <h3 className="text-base font-bold">{product.title}</h3>
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < product.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                  </div>
                  <span className="text-xs">{product.rating}/5</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                      <Badge
                        variant="secondary"
                        className="text-red-500 bg-red-100"
                      >
                        -{product.discount}%
                      </Badge>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center ">
        <Button
          variant="outline"
          className="w-full sm:w-[218px] h-[52px] mt-6 text-gray-400 rounded-full"
        >
          <span className="text-black">View All</span>
        </Button>
      </div>
    </section>
  );
};

export default ProductData;
