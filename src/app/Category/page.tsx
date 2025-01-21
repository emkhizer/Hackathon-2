import { NextPage } from "next";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight, Menu } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"; // Added Card import
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination"; // Added Pagination imports

// Product type definition
type Product = {
  id: number;
  name: string;
  rating: number;
  price: number;
  originalPrice: number | null;
  discount: number | null;
  image: string;
};

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    rating: 3.5,
    price: 145,
    originalPrice: 242,
    discount: 20,
    image: "/images/graphicteas.png",
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    rating: 4.5,
    price: 180,
    originalPrice: 242,
    discount: 20,
    image: "/images/polopink.png",
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    rating: 4.0,
    price: 120,
    originalPrice: 150,
    discount: 30,
    image: "/images/tshirtlines.png",
  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    discount: 20,
    image: "/images/jeans.png",
  },
  {
    id: 5,
    name: "Checkered Shirt",
    rating: 4.5,
    price: 180,
    originalPrice: null,
    discount: null,
    image: "/images/checkered.png",
  },
  {
    id: 6,
    name: "Sleeve Striped T-shirt",
    rating: 4.5,
    price: 130,
    originalPrice: 160,
    discount: 30,
    image: "/images/orangelines.png",
  },
  {
    id: 7,
    name: "VERTICAL STRIPED SHIRT",
    rating: 5,
    price: 212,
    originalPrice: 232,
    discount: 20,
    image: "/images/VerticalSShirt.png",
  },
  {
    id: 8,
    name: "COURAGE GRAPHIC T-SHIRT",
    rating: 4.5,
    price: 145,
    originalPrice: null,
    discount: null,
    image: "/images/CourageGT.png",
  },
  {
    id: 9,
    name: "LOOSE FIT BERMUDA SHORTS",
    rating: 3.0,
    price: 80,
    originalPrice: null,
    discount: null,
    image: "/images/shorts.png",
  },
];

// FilterSidebar (now integrated into CatPage)
const FilterSidebar = () => {
  const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
  const colors = [
    "bg-[#00c12b]",
    "bg-[#f50606]",
    "bg-[#f5dd06]",
    "bg-[#f57906]",
    "bg-[#06caf5]",
    "bg-[#063af5]",
    "bg-[#7d06f5]",
    "bg-[#f506a4]",
    "bg-white",
    "bg-black",
  ];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];
  const dressStyles = ["Casual", "Formal", "Party", "Gym", "Jeans"];

  return (
    <div className="w-full max-w-[295px] bg-white border-r border-gray-200 py-4 px-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl text-black font-bold">Filters</h2>
        <Button className="text-sm text-gray-500 hover:text-gray-700" aria-label="Clear all filters">
          Clear All
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["categories", "price", "colors", "size", "Dress Style"]}>
        {/* Categories Accordion */}
        <AccordionItem value="categories">
          <AccordionTrigger className="text-black font-bold">Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="w-full text-left text-sm hover:text-primary font-medium"
                  aria-label={`Filter by ${category}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Accordion */}
        <AccordionItem value="price">
          <AccordionTrigger className="text-black font-bold">Price</AccordionTrigger>
          <AccordionContent>
            <Slider
              defaultValue={[50, 200]}
              max={200}
              min={0}
              step={1}
              className="mt-4 rounded-full h-2"
              style={{
                background: "linear-gradient(to right, #808080 0%, #2b2b2b 50%, #000000 100%)", 
              }}
            />
            <div className="flex justify-between mt-2 text-sm">
              <span>$50</span>
              <span>$200</span>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Colors Accordion */}
        <AccordionItem value="colors">
          <AccordionTrigger className="text-black font-bold">Colors</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-5 gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full ${color} border-2 border-[#0003] hover:border-primary hover:opacity-80`}
                  aria-label={`Filter by color ${color}`}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Size Accordion */}
        <AccordionItem value="size">
          <AccordionTrigger className="text-black font-bold">Size</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 text-sm rounded-full bg-[#f0f0f0] border border-transparent text-black font-medium hover:bg-primary hover:text-white hover:bg-black"
                  aria-label={`Filter by size ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Dress Style Accordion */}
        <AccordionItem value="Dress Style">
          <AccordionTrigger className="text-black font-bold">Dress Style</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {dressStyles.map((style) => (
                <button
                  key={style}
                  className="w-full text-left text-sm hover:text-primary font-medium"
                  aria-label={`Filter by dress style ${style}`}
                >
                  {style}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full mt-6 rounded-full bg-black text-white hover:bg-black/80">
        Apply Filters
      </Button>
    </div>
  );
};

// CatPage Component with combined filter sidebar and product grid
const Category: NextPage = () => {
  return (
    <div className="min-h-screen bg-white font-satoshi overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="px-4 py-3">
        <div className="text-gray-500">
          <span className="text-black">Home</span> <ChevronRight className="inline w-4 h-4 ml-2" /> <span className="text-black">Casual</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-full">
        {/* Sidebar: hidden on mobile */}
        <div className="hidden md:block w-[295px]">
          <FilterSidebar />
        </div>

        {/* Main Product Grid */}
        <div className="flex-1 p-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Casual</h1>
            <p className="text-sm text-gray-500">Showing 1-10 of 100 Products</p>
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="border-none">
                <CardContent className="p-0">
                  <div className="bg-[#f0eeed] rounded-lg aspect-square mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={358}
                      height={256}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-bold truncate">{product.name}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        >
                          ★
                        </span>
                      ))}
                      <span className="text-xs">{product.rating}/5</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">${product.price}</span>
                      {product.originalPrice && (
                        <>
                          <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                          <span className="px-2 py-1 text-xs text-red-500 rounded-full bg-red-50">-{product.discount}%</span>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <Pagination className="py-4">
            <PaginationContent>
              <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
              <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">...</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">9</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">10</PaginationLink></PaginationItem>
              <PaginationItem><PaginationNext href="#" /></PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Category;
