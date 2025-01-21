// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Minus, Plus } from "lucide-react";
// import { Mail, X, ChevronRight, ArrowRight } from "lucide-react";
// import { Input } from "@/components/ui/input";

// const cartItems = [
//   {
//     id: 1,
//     name: "Gradient Graphic T-shirt",
//     size: "Large",
//     color: "white",
//     price: 145,
//     image: "/images/graphicteas.png", // Placeholder for images
//     quantity: 1,
//   },

//   {
//     id: 2,
//     name: "Checkered Shirt",
//     size: "Medium",
//     color: "Red",
//     price: 180,
//     image: "/images/checkered.png", // Placeholder for image
//     quantity: 1,
//   },
//   {
//     id: 3,
//     name: "Skinny Fit Jeans",
//     size: "Large",
//     color: "Blue",
//     price: 240,
//     image: "/images/jeans.png", // Placeholder for image
//     quantity: 1,
//   },
// ];

// const Cart = () => {
//   return (
//     <div className="font-satoshi">
//       {/* Breadcrumb */}
//       <nav className="flex items-center font-satoshi gap-2 p-4 text-sm">
//         <span className="text-gray-500 text-sm ">Home</span>
//         <ChevronRight className="text-gray-500 h-4 " />
//         <span className="text-black text-sm">Cart</span>
//       </nav>

//       <main className="p-4">
//         <h1 className="text-3xl font-integralcf mb-4 font-bold">Your cart</h1>

//         {/* Cart Items */}
//         <Card className="mb-6">
//           <CardContent className="p-4 space-y-4">
//             {cartItems.map((item, index) => (
//               <div key={item.id}>
//                 <div className="flex gap-4">
//                   <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="flex-1 flex flex-col justify-between">
//                     <div className="flex justify-between">
//                       <div>
//                         <h3 className="font-bold">{item.name}</h3>

//                         <p className="text-xs text-gray-500">
//                           Size: {item.size}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           Color: {item.color}
//                         </p>
//                       </div>
//                       <X className="w-5 h-5" />
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="font-bold text-xl">${item.price}</span>
//                       <div className="flex items-center gap-4 bg-gray-100 rounded-full px-4 py-2">
//                         <Minus className="w-4 h-4" />
//                         <span>1</span>
//                         <Plus className="w-4 h-4" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {index < cartItems.length - 1 && <Separator className="my-4" />}
//               </div>
//             ))}
//           </CardContent>
//         </Card>
//         {/* Order Summary */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Order Summary</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="flex justify-between">
//               <span className="text-gray-500">Subtotal</span>
//               <span className="font-bold">$565</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500">Discount (-20%)</span>
//               <span className="font-bold text-red-500">-$113</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500">Delivery Fee</span>
//               <span className="font-bold">$15</span>
//             </div>
//             <Separator />
//             <div className="flex justify-between">
//               <span>Total</span>
//               <span className="font-bold text-xl">$467</span>
//             </div>

//             <div className="flex gap-2">
//               <div className="flex-1 h-[48px] flex items-center gap-2 hover:bg-slate-200 bg-gray-100 rounded-full px-4 py-3">
//                 <Mail className="w-5 h-5 text-gray-400" />
//                 <Input
//                   className="border-0 bg-transparent p-0 focus-visible:ring-0"
//                   placeholder="Add promo code"
//                 />
//               </div>
//               <Button className="rounded-full h-[48px]  hover:bg-slate-800 bg-black text-white px-6">
//                 Apply
//               </Button>
//             </div>
//             <Button
//               className="w-full flex bg-black hover:bg-slate-800 text-white rounded-full items-center justify-center gap-2"
//               size="lg"
//             >
//               {" "}
//               Go to Checkout
//               <ArrowRight className="w-5 h-5" />
//             </Button>
//           </CardContent>
//         </Card>
//       </main>
//     </div>
//   );
// };

// export default Cart;
import React from "react";
import Image from "next/image"; // Import the Next.js Image component
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus } from "lucide-react";
import { Mail, X, ChevronRight, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const cartItems = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "white",
    price: 145,
    image: "/images/graphicteas.png", // Placeholder for images
    quantity: 1,
  },
  {
    id: 2,
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    image: "/images/checkered.png", // Placeholder for image
    quantity: 1,
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    image: "/images/jeans.png", // Placeholder for image
    quantity: 1,
  },
];

const Cart = () => {
  return (
    <div className="font-satoshi">
      {/* Breadcrumb */}
      <nav className="flex items-center font-satoshi gap-2 p-4 text-sm">
        <span className="text-gray-500 text-sm">Home</span>
        <ChevronRight className="text-gray-500 h-4" />
        <span className="text-black text-sm">Cart</span>
      </nav>

      <main className="p-4">
        <h1 className="text-3xl font-integralcf mb-4 font-bold">Your cart</h1>

        {/* Cart Items */}
        <Card className="mb-6">
          <CardContent className="p-4 space-y-4">
            {cartItems.map((item, index) => (
              <div key={item.id}>
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-xs text-gray-500">
                          Size: {item.size}
                        </p>
                        <p className="text-xs text-gray-500">
                          Color: {item.color}
                        </p>
                      </div>
                      <X className="w-5 h-5" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xl">${item.price}</span>
                      <div className="flex items-center gap-4 bg-gray-100 rounded-full px-4 py-2">
                        <Minus className="w-4 h-4" />
                        <span>1</span>
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                {index < cartItems.length - 1 && <Separator className="my-4" />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-bold">$565</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Discount (-20%)</span>
              <span className="font-bold text-red-500">-$113</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Delivery Fee</span>
              <span className="font-bold">$15</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span>Total</span>
              <span className="font-bold text-xl">$467</span>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 h-[48px] flex items-center gap-2 hover:bg-slate-200 bg-gray-100 rounded-full px-4 py-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <Input
                  className="border-0 bg-transparent p-0 focus-visible:ring-0"
                  placeholder="Add promo code"
                />
              </div>
              <Button className="rounded-full h-[48px] hover:bg-slate-800 bg-black text-white px-6">
                Apply
              </Button>
            </div>
            <Button
              className="w-full flex bg-black hover:bg-slate-800 text-white rounded-full items-center justify-center gap-2"
              size="lg"
            >
              Go to Checkout
              <ArrowRight className="w-5 h-5" />
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Cart;
