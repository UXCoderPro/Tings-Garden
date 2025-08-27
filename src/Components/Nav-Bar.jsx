import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.svg";
import { MdSearch, MdShoppingCart, MdMenu, MdClose } from "react-icons/md";
import Button from "./Button";

const NavBar = () => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [cartCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Plants", path: "/plants" },
    { name: "Flowers", path: "/flowers" },
    { name: "Fertilizer", path: "/fertilizer" },
    { name: "Service", path: "/service" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="w-full flex flex-col h-auto sticky top-0 bg-white z-50">
      {/* Top Nav */}
      <div className="w-full bg-white flex justify-between items-center lg:px-80 md:px-12 px-4 py-4 ">
        {/* Search (hidden on small screens) */}
        <div className="hidden md:block lg:w-52 min-w-36 relative">
          <input
            type="text"
            placeholder="Search Here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-10 px-4 border border-solid text-sm font-normal border-stroke rounded-md font-mont text-text placeholder:opacity-70 focus:outline-none focus:border-primary"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary text-lg">
            <MdSearch />
          </div>
        </div>

        {/* Logo */}
        <img src={logo} alt="Tings Garden" className="w-28 md:w-36" />

        {/* Right side (Cart + Hamburger) */}
        <div className="flex items-center gap-4">
          <button className="relative h-10 w-10 flex justify-center text-xl items-center bg-primary text-white rounded-md">
            <MdShoppingCart />
            {cartCount > 0 && (
              <div className="absolute -top-2 -right-2 border border-solid rounded-full border-stroke w-6 h-6 text-sm font-mont font-semibold flex justify-center items-center bg-white text-primary">
                {cartCount}
              </div>
            )}
          </button>

          {/* Hamburger for mobile */}
          <button
            className="lg:hidden text-3xl text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Nav Items */}
      <div className="bg-bg border-b border-solid border-stroke w-full lg:flex hidden justify-between items-center lg:px-80 md:px-12 px-4 py-4">
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 font-mont lg:text-base md:text-sm transition-colors ${
                location.pathname === item.path
                  ? "text-primary font-semibold border-b-2 border-primary"
                  : "text-text font-medium hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Button
          title="Sign Up"
          color="bg-white"
          outline={true}
          txtColor="text-secondary"
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col bg-white px-6 py-4 gap-4 border-b border-stroke">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`py-2 text-base font-mont transition-colors ${
                location.pathname === item.path
                  ? "text-primary font-semibold bg-primaryShade"
                  : "text-text font-medium hover:text-primary"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button
            title="Sign Up"
            color="bg-white"
            outline={true}
            txtColor="text-secondary"
          />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
