"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar for large screens */}
      <div className="hidden md:flex justify-between items-center bg-white shadow text-green-600 p-4">
        <span className="text-lg font-semibold">Borondwa Mix Farm</span>
        <nav className="space-x-4">
          <a href="#" className="p-2 hover:bg-green-100 rounded">
            Home
          </a>
          <a href="#" className="p-2 hover:bg-green-100 rounded">
            About
          </a>
          <a href="#" className="p-2 hover:bg-green-100 rounded">
            Services
          </a>
          <a href="#" className="p-2 hover:bg-green-100 rounded">
            Contact
          </a>
        </nav>
      </div>

      {/* Sidebar for mobile and tablet */}
      <div className="md:hidden flex">
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white text-green-600 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:hidden`}
        >
          <div className="p-5 flex justify-between items-center">
            <span className="text-lg font-semibold">Borondwa Mix Farm</span>
            <X
              className="h-6 w-6 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <nav className="p-5 space-y-4">
            <a href="#" className="block p-2 hover:bg-green-100 rounded">
              Home
            </a>
            <a href="#" className="block p-2 hover:bg-green-100 rounded">
              About
            </a>
            <a href="#" className="block p-2 hover:bg-green-100 rounded">
              Services
            </a>
            <a href="#" className="block p-2 hover:bg-green-100 rounded">
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Top bar with menu button for small screens */}
      <div className="bg-white text-green-600 p-4 flex items-center md:hidden">
        <Menu
          className="h-6 w-6 cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        <span className="ml-4 text-lg font-semibold">Borondwa Mix Farm</span>
      </div>
    </div>
  );
}
