"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/Logo.svg";
import { Input } from "./ui/input";
import navItems from "@/utils/navItems";
import { navCategories } from "@/types/navItems";
import { GoLocation } from "react-icons/go";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex flex-wrap justify-between items-center py-4">
        <Link href="/" className="flex-shrink-0">
          <Image src={logo} alt="Logo" className="w-32 h-16 sm:w-48 sm:h-24" />
        </Link>

        <div className="hidden md:flex-center md:space-x-2">
          <Input
            type="search"
            placeholder="Search products"
            className="bg-fm-1 w-72 p-4 rounded-3xl border-none focus-visible:ring-transparent"
          />
          <button className="w-64 bg-fm-1 p-2 rounded-3xl flex-center space-x-2">
            <GoLocation />
            <span className="text-fm-t1 text-sm">
              Deliver to <span className="font-bold">NONGSA</span>
            </span>
          </button>
        </div>

        <div className="flex items-center sm:space-x-2">
          <Link
            href="/sign-in"
            className="flex items-center space-x-2 mr-4 sm:mr-0"
          >
            <AiOutlineUser className="text-fm-6" size={20} />
            <span className="hidden sm:block text-fm-t1">Login</span>
          </Link>
          <div className="hidden sm:block text-fm-6">|</div>
          <Link href="/cart" className="flex items-center space-x-2">
            <AiOutlineShoppingCart className="text-fm-6" size={20} />
            <span className="hidden sm:block text-fm-t1">Cart</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-4 md:hidden"
          >
            {isMobileMenuOpen ? (
              <HiX className="text-fm-6" size={24} />
            ) : (
              <HiMenu className="text-fm-6" size={24} />
            )}
          </button>
        </div>

        <div
          className={`w-full md:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col mt-4">
            <Input
              type="search"
              placeholder="Search products"
              className="bg-fm-1 w-full p-4 rounded-3xl border-none focus-visible:ring-transparent mb-4"
            />
            <button className="w-full bg-fm-1 p-2 rounded-3xl flex items-center justify-center space-x-2 mb-4">
              <GoLocation />
              <span className="text-fm-t1 text-sm">
                Deliver to <span className="font-bold">NONGSA</span>
              </span>
            </button>
          </div>
          <div className="flex flex-wrap justify-between mt-4">
            {navItems.map((category: navCategories) => (
              <Link
                key={category.id}
                href={category.href}
                className="text-fm-t1 hover:text-fm-6 text-xs w-1/2 mb-2"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:flex justify-evenly items-center space-x-2 mt-4">
        {navItems.map((category: navCategories) => (
          <Link
            key={category.id}
            href={category.href}
            className="text-fm-t1 hover:text-fm-6 text-xs"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
