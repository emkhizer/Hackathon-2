import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Menu,
  Search,
  ShoppingBag,
  CircleUser,
  ShoppingCart,
  User,
} from "lucide-react";

const navigationItems = [
  { label: "On Sale", href: "/on-sale" },
  { label: "New Arrivals", href: "/Category" },
  { label: "Brands", href: "/brands" },
];

const dropdownItems = [
  { label: "Shop", href: "/shop" },
  { label: "Category", href: "/Category" },
  { label: "ProductDetailPage", href: "/ProductDetailPage" },
  { label: "Cart", href: "/Cart" },
];

const Header2 = () => {
  return (
    <header className="border-b font-satoshi">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side: Menu and Logo */}
        <div className="flex items-center gap-3">
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
          <div>
            <span className="font-bold font-integralcf uppercase text-2xl">
              SHOP.CO
            </span>
          </div>
        </div>

        {/* Mobile Icons: Only visible on small screens (sm) */}
        <div className="flex md:hidden justify-center items-center gap-4">
          <Search className="h-6 w-6" />
          <ShoppingBag className="h-6 w-6" />
          <CircleUser className="h-6 w-6" />
        </div>

        {/* Navigation Menu - Available on medium screens and larger */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-normal text-base">
                  Shop
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-4 shadow-lg rounded-md">
                  <ul className="space-y-2">
                    {dropdownItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <Link
                    href={item.href}
                    className="font-normal text-base text-black hover:text-gray-600"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Search Bar - Always visible on medium screens and larger */}
        <div className="hidden md:flex items-center gap-3 px-4 py-3 flex-1 bg-[#efefef] rounded-[62px]">
          <Search className="h-6 w-6 text-gray-400" />
          <input
            type="search"
            placeholder="Search for Products..."
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-200"
          />
        </div>

        {/* Icons: ShoppingCart and User - Only visible on medium screens and above */}
        <div className="hidden md:flex items-center gap-4">
          <ShoppingCart className="h-6 w-6" />
          <User className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header2;
