import React from "react";
import Box from "./BoxComponent/page";
import BrandSection from "./BrandSection/page";
import ProductData from "./ProductSection/page";
import BrowseSection from "./BrowseSection/page";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      <Box />
      <BrandSection />
      <ProductData />
      <BrowseSection />
    </div>
  );
}
