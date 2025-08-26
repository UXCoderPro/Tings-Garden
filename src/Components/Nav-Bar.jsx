import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.svg";
import { MdSearch } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import Button from "./Button";

const NavBar = () => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [cartCount] = useState(1);

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Plants",
      path: "/plants",
    },
    {
      name: "Flowers",
      path: "/flowers",
    },
    {
      name: "Fertilizer",
      path: "/fertilizer",
    },
    {
      name: "Service",
      path: "/service",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];
  return (
    <nav className="w-ful flex flex-col gap-0 h-auto items-center justify-center sticky top-0">
      {/* Top Nav */}
      <div className="w-full bg-white flex justify-between items-center px-80 py-6 ">
        <div className="w-52 min-w-36 relative">
          <input
            type="text"
            placeholder="Search Here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-10 px-4 border border-solid text-sm font-normal border-stroke rounded-md font-mont text-text placeholder:opacity-70 focus:outline-none focus:border-primary"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary text-lg ">
            <MdSearch />
          </div>
        </div>
        <img src={logo} alt="Tings Garden" className="pointer-events-none" />
        <button className="relative h-10 w-10 flex justify-center text-xl items-center bg-primary text-white rounded-md">
          <MdShoppingCart />
          {cartCount > 0 && (
            <div className="absolute -top-2 -right-2 border border-solid rounded-full  border-stroke w-6 h-6 text-sm font-mont font-semibold flex justify-center items-center bg-white text-primary">
              {cartCount}
            </div>
          )}
        </button>
      </div>

      {/* NavItems */}

      <div className="bg-bg border-b border-solid border-stroke w-full flex justify-between items-center px-80 py-6">
        <nav className="flex items-center justify-start gap-4">
          {navItems.map((items) => (
            <Link
              key={items.name}
              to={items.path}
              className={`px-4 py-2 font-mont text-base transition-colors ${
                location.pathname === items.path
                  ? "text-primary font-semibold border-b-2 border-primary"
                  : "text-text font-medium hover:text-primary"
              }`}
            >
              {items.name}
            </Link>
          ))}
        </nav>
        <Button
          title="Sign Up"
          color="bg-white"
          outline={true}
          txtColor="text-secondary"
        />
      </div>
    </nav>
  );
};

export default NavBar;
