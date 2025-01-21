"use client";
import React, { useState, useEffect } from "react"; // React aur hooks ko import kar rahe hain
import { Badge } from "@/components/ui/badge"; // Badge component ko import kar rahe hain
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb"; // Breadcrumb components ko import kar rahe hain
import { Button } from "@/components/ui/button"; // Button component ko import kar rahe hain
import { Card, CardContent } from "@/components/ui/card"; // Card aur CardContent ko import kar rahe hain
import { Separator } from "@/components/ui/separator"; // Separator component ko import kar rahe hain
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Tabs components ko import kar rahe hain
import { ChevronRight, Minus, Plus, Star } from "lucide-react"; // Icons ko import kar rahe hain
import ProductDisplay from "./ProductShowcase/page"; // Product display ko import kar rahe hain
import ProductGallery from "./ProductGallery/page"; // Product gallery ko import kar rahe hain

// Color data ko define kar rahe hain
const colors = [
  { id: 1, name: "Brown", hex: "#4F4631" }, 
  { id: 2, name: "Green", hex: "#314F49" },
  { id: 3, name: "Blue", hex: "#31344F" },
];

// Sizes ke options ko define kar rahe hain
const sizes = ["Small", "Medium", "Large", "X-Large"];

// Reviews ka data define kar rahe hain
const reviews = [
  { id: 1, author: "Samantha D.", rating: 4.5, date: "August 14, 2023", content: "I absolutely love this t-shirt!", verified: true },
  { id: 2, author: "Alex M.", rating: 4, date: "August 15, 2023", content: "Exceeded my expectations!", verified: true },
  { id: 3, author: "Ethan R.", rating: 3.5, date: "August 16, 2023", content: "Great design, comfortable fit.", verified: true },
  { id: 4, author: "Olivia P.", rating: 4.5, date: "August 17, 2023", content: "Represents simplicity and functionality.", verified: true },
  { id: 5, author: "Liam K.", rating: 4, date: "August 18, 2023", content: "Fusion of comfort and creativity.", verified: true },
  { id: 6, author: "Ava H.", rating: 3.5, date: "August 19, 2023", content: "Intricate design details.", verified: true },
];

// Main component ka function
const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1); // Quantity ka state define kar rahe hain
  const [selectedColor, setSelectedColor] = useState(colors[0]); // Selected color ka state define kar rahe hain
  const [selectedSize, setSelectedSize] = useState("Large"); // Selected size ka state define kar rahe hain
  const [loading, setLoading] = useState(false); // Loading ka state define kar rahe hain
  const [productData, setProductData] = useState<any>(null); // Product data ko fetch karne ke liye state
  const [error, setError] = useState<string | null>(null); // Error ko handle karne ke liye state

  // useEffect hook jo page load hone par data fetch karega
  useEffect(() => {
    const fetchProductData = () => {
      setLoading(true); // Loading ko true kar rahe hain
      setTimeout(() => {
        try {
          // Product data ko simulate kar rahe hain
          setProductData({
            name: "One Life Graphic T-shirt",
            description: "This graphic t-shirt is perfect for any occasion.",
            price: 260,
            originalPrice: 300,
          });
          setLoading(false); // Loading ko false kar rahe hain jab data mil jaye
        } catch (err) {
          setError("Failed to load product data."); // Agar koi error ho toh usse handle kar rahe hain
          setLoading(false); // Loading ko false kar rahe hain
        }
      }, 1500); // Simulated delay 1.5 seconds ka
    };

    fetchProductData(); // Function ko call kar rahe hain
  }, []); // Empty dependency array ka matlab hai yeh sirf component mount hone par chalega

  // Quantity ko increment karne ka function
  const handleIncrement = () => setQuantity((prev) => prev + 1); 
  // Quantity ko decrement karne ka function
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); 

  // Stars ko render karne ka function, fractional stars ka bhi handle karta hai
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating); // Full stars ka count
    const hasHalfStar = rating % 1 >= 0.5; // Agar half star ho toh usko handle kar rahe hain
    return (
      <>
        {/* Full stars ko render kar rahe hain */}
        {Array.from({ length: fullStars }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current text-yellow-300" />
        ))}
        {/* Half star ko render kar rahe hain */}
        {hasHalfStar && (
          <Star className="h-4 w-4 fill-current text-yellow-300" strokeWidth={0.5} />
        )}
        {/* Empty stars ko render kar rahe hain */}
        {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }).map(
          (_, index) => (
            <Star
              key={index + fullStars + (hasHalfStar ? 1 : 0)}
              className="h-4 w-4 fill-current text-gray-300"
            />
          )
        )}
      </>
    );
  };

  // Agar loading hai toh loading message dikhayenge
  if (loading) return <div>Loading...</div>;
  // Agar error hai toh error message dikhayenge
  if (error) return <div>{error}</div>;

  // Main JSX return kar rahe hain
  return (
    <div className="min-h-screen md:px-6 bg-white">
      {/* Breadcrumb ko dikhane ka section */}
      <Breadcrumb className="container flex font-satoshi mx-auto px-4 py-4">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <ChevronRight className="h-[3.5] w-[3.5] inline text-muted-foreground" />
        <BreadcrumbItem>
          <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
        </BreadcrumbItem>
        <ChevronRight className="h-[3.5] w-[3.5] inline text-muted-foreground" />
        <BreadcrumbItem>
          <BreadcrumbLink href="/men">Men</BreadcrumbLink>
        </BreadcrumbItem>
        <ChevronRight className="h-[3.5] w-[3.5] inline text-muted-foreground" />
        <BreadcrumbItem>T-shirts</BreadcrumbItem>
      </Breadcrumb>

      {/* Main product details ka section */}
      <main className="container mx-auto px-4 py-8">
        {/* Product Gallery ko dikhane ka section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
          <ProductGallery />
          {/* Product info ka section */}
          <div className="px-4 space-y-4">
            <h1 className="text-2xl w-[267px] lg:w-[400px] h-[56px] font-integralcf font-bold">
              {productData?.name || "Product Name"}
            </h1>

            {/* Rating section */}
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(4.5)}</div>
              <span className="text-sm font-satoshi">4.5/5</span>
            </div>

            {/* Price section */}
            <div className="flex items-center gap-4">
              <span className="text-2xl font-satoshi font-bold">
                ${productData?.price || "0.00"}
              </span>
              <span className="text-2xl font-bold font-satoshi text-gray-400 line-through">
                ${productData?.originalPrice || "0.00"}
              </span>
              <Badge className="bg-red-100 font-satoshi text-red-500">-40%</Badge>
            </div>

            {/* Description section */}
            <p className="text-gray-600 font-satoshi">
              {productData?.description || "Product description goes here."}
            </p>

            <Separator />

            {/* Color selection section */}
            <div className="space-y-4">
              <span className="text-sm font-satoshi text-gray-600">Select Colors</span>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <div
                    key={color.id}
                    className={`w-10 h-10 rounded-full cursor-pointer ${selectedColor.hex === color.hex ? "border-2 border-blue-500" : ""}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(color)} // Color change kar rahe hain
                    aria-label={`Select ${color.name} color`} // Accessibility ke liye aria-label
                  />
                ))}
              </div>
            </div>

            {/* Size selection section */}
            <div className="space-y-4">
              <span className="text-sm text-gray-600">Choose Size</span>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={size === selectedSize ? "default" : "secondary"} // Active size ko default style dena
                    className="rounded-full font-satoshi text-[#0009] bg-slate-300"
                    onClick={() => setSelectedSize(size)} // Size change kar rahe hain
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity and add to cart section */}
            <div className="flex font-satoshi gap-4">
              <div className="flex text-black items-center gap-4 px-4 py-3 bg-gray-100 rounded-full">
                <Minus className="h-5 w-5 cursor-pointer" onClick={handleDecrement} />
                <span className="font-medium">{quantity}</span>
                <Plus className="h-5 w-5 cursor-pointer" onClick={handleIncrement} />
              </div>
              <Button className="flex-1 bg-black hover:bg-gray-600 text-white rounded-full">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="reviews" className="font-satoshi w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="reviews">Rating & Reviews</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
          </TabsList>

          <TabsContent value="reviews">
            <div className="space-y-6">
              <div className="flex items-center justify-between px-6">
                <h3 className="text-xl font-bold">
                  All Reviews <span className="text-[#0009] text-sm">(451)</span>
                </h3>
                <Button className="bg-black text-white hover:bg-gray-600 rounded-full">
                  Write a Review
                </Button>
              </div>
              {/* Reviews ko map karke dikhana */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex">{renderStars(review.rating)}</div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold">{review.author}</span>
                          {review.verified && (
                            <Badge variant="secondary">Verified</Badge>
                          )}
                        </div>
                        <p className="text-gray-600">{review.content}</p>
                      </div>

                      <span className="text-sm text-gray-500">
                        Posted on {review.date}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-[195px] h-[47px] font-medium text-black border-none font-satoshi bg-slate-200 rounded-full flex flex-col items-center mx-auto hover:bg-sky-700"
              >
                Load More Reviews
              </Button>
            </div>
            <section className="w-[284px] md:w-[579px] flex flex-col items-center mx-auto">
              <h2 className="font-bold font-integralcf text-3xl text-center leading-9">
                You might also like
              </h2>
            </section>
            <ProductDisplay />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ProductDetailPage;
