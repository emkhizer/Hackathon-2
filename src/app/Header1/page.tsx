import React from "react";

const Header1 = () => {
  return (
    <div className="bg-black text-white text-sm text-center w-full py-2">
      <div className="flex justify-center items-center space-x-1">
        <p className="text-[.75rem] font-satoshi sm:text-xs md:text-sm xl:text-[14px]">
          Sign up and get 20% off on your first order.
        </p>
        <p className="text-[.75rem] font-satoshi underline font-medium sm:text-xs md:text-sm xl:text-[14px]">
          Sign Up Now
        </p>
      </div>
    </div>
  );
};

export default Header1;
