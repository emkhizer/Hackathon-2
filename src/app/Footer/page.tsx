import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import Image from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 font-satoshi text-gray-800">
      <div className="p-4">
        <Card className="bg-black text-white py-6 rounded-[20px] my-8">
          <CardContent className="p-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <CardTitle className="text-3xl md:text-4xl font-integralcf font-bold text-left text-white uppercase md:w-[551px]">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </CardTitle>
            <div className="flex flex-col items-center gap-4 md:items-start">
              <div className="flex items-center gap-2 w-[349px] h-11 bg-white rounded-full px-4 py-2">
                <Mail className="w-5 h-5 text-gray-400" />
                <Input
                  className="bg-transparent border-none text-gray-400"
                  placeholder="Enter your email address"
                />
              </div>
              <Button className="w-[349px] h-12 bg-white rounded-full text-black font-semibold hover:bg-gray-200">
                Subscribe to Newsletter
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div>
        {/* SHOP.CO Section */}
        <div className="text-left px-6">
          <h3 className="text-xl text-black font-semibold">SHOP.CO</h3>
          <p className="mt-2 text-sm">
            We have clothes that suit your style and which you are proud to
            wear. From women to men.
          </p>
          <div className="flex justify-start  space-x-4 mt-4">
            <FaTwitter className="cursor-pointer" aria-label="Twitter" />
            <FaFacebookF className="cursor-pointer" aria-label="Facebook" />
            <FaInstagram className="cursor-pointer" aria-label="Instagram" />
            <FaGithub className="cursor-pointer" aria-label="GitHub" />
          </div>
        </div>
        <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Company Links */}
          <div>
            <h4 className="text-xl font-semibold">COMPANY</h4>
            <ul className="space-y-2 mt-2 text-sm">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-xl font-semibold">HELP</h4>
            <ul className="space-y-2 mt-2 text-sm">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* FAQ Links */}
          <div>
            <h4 className="text-xl font-semibold">FAQ</h4>
            <ul className="space-y-2 mt-2 text-sm">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xl font-semibold">RESOURCES</h4>
            <ul className="space-y-2 mt-2 text-sm">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>YouTube Playlist</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 border-t border-gray-300">
        <p className="text-sm">Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex justify-center mt-2 space-x-2">
          <Image
            src="/images/Visa.png"
            alt="Visa"
            width={50}
            height={50}
            className="object-contain"
          />
          <Image
            src="/images/Master.png"
            alt="Mastercard"
            width={50}
            height={50}
            className="object-contain"
          />
          <Image
            src="/images/Paypal.png"
            alt="PayPal"
            width={50}
            height={50}
            className="object-contain"
          />
          <Image
            src="/images/Apple.png"
            alt="Apple Pay"
            width={50}
            height={50}
            className="object-contain"
          />
          <Image
            src="/images/Gpay.png"
            alt="Google Pay"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
