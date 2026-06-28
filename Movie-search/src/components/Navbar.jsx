import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-yellow-400">MovieFinder</h1>
      <ul className="flex space-x-6">
        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
        <li className="hover:text-yellow-400 cursor-pointer">Popular</li>
        <li className="hover:text-yellow-400 cursor-pointer">Top Rated</li>
      </ul>
    </nav>
  );
}

export default Navbar;
