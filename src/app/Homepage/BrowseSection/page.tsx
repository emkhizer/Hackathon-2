import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { name: "Casual", image: "/images/casual.png" },
  { name: "Formal", image: "/images/formal.png" },
  { name: "Party", image: "/images/party.png" },
  { name: "Gym", image: "/images/gym.png" },
];

const BrowseSection = () => {
  return (
    <div>
      <section className="md:px-[6.25rem] mx-auto py-8 bg-[#f8f8f8] rounded-3xl">
        <h2 className="text-4xl font-black text-center mb-6 tracking-tight font-integralcf">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="h-[190px] bg-white rounded-3xl border-0 relative overflow-hidden">
              <CardContent className="p-0 relative">
                <AspectRatio ratio={120 / 110}>
                  <Image
                    className="object-cover object-left"
                    src={category.image}
                    alt={category.name}
                    fill
                    priority
                  />
                </AspectRatio>

                <h3 className="absolute text-2xl font-bold top-4 left-6">
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BrowseSection;
