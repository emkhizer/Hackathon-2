import React from "react";

const BrandDisplay = () => {
  const brands = [
    { id: 1, name: "VERSACE" },
    { id: 2, name: "ZARA" },
    { id: 3, name: "GUCCI" },
    { id: 4, name: "PRADA" },
    { id: 5, name: "Calvin Klein" },
  ];

  return (
    <div className="w-full p-8 bg-black">
      <div className="flex flex-wrap items-center justify-center gap-8">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="text-2xl font-bold text-white md:text-4xl"
          >
            {brand.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDisplay;
