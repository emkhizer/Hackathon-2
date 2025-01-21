import { useState } from "react";
import Image from "next/image";


const ProductGallery: React.FC = () => {
  const images = [
    { id: 1, src: "/images/pdp1.png", alt: "Front View" },
    { id: 2, src: "/images/pdp2.png", alt: "Back View" },
    { id: 3, src: "/images/pdp3.png", alt: "Model Wearing Shirt" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center  py-0">
      {/* Main Image */}
      <div className="w-[358px] h-[290px] bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          width={358}
          height={290}
          className="object-cover"
        />
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-4 mt-4">
        {images.map((image) => (
          <button
            key={image.id}
            className={`w-full h-full rounded-3xl overflow-hidden ${
              selectedImage.id === image.id
                ? "border-black"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={111}
              height={106}
              className="object-cover h-[106px]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
