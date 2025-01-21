
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";

const Box = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative lg:max-h-[490px] md:max-h-[368px] overflow-hidden xl:max-h-[663px] bg-[#f2f0f1]">
        <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center transition-all duration-700 ease-in-out">
            {/* Text Content */}
            <div className="px-4 pt-10 pb-2 md:pt-0 md:pb-0 lg:px-6 xl:px-14">
              <h1 className="xl:text-6xl md:text-4xl lg:text-[40px] text-4xl font-integralcf font-bold leading-[0.94] xl:leading-[1] text-left transition-all duration-700 ease-in-out">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="mt-4 text-sm text-gray-600 leading-tight text-left transition-all duration-700 ease-in-out">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
              </p>
              <button className="mt-8 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-700 ease-in-out sm:w-[210px] w-[358px] h-[52px] mx-4">
                Shop Now
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <AspectRatio ratio={390 / 448}>
                <Image
                  className="object-cover object-top transition-all duration-700 ease-in-out"
                  src="/images/home1.png"
                  alt="Fashion lifestyle photo"
                  fill
                  priority
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Box;
