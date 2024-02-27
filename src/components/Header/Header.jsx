import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import amazon from "../../../public/assets/amazon.png";
import cart from "../../../public/assets/cart.svg";
import { useState } from "react";
import { Snackbar } from "@mui/base/Snackbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={amazon} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Aliaas
          </span>
        </a>
        <div className="flex items-center md:order-2 gap-4">
          <Link to="/cart" className="flex items-center text-gray-500 ">
            <img src={cart} className="h-6 text-white" alt="Cart" />
            <span className="ml-2 text-sm font-medium">Cart</span>
          </Link>
          <Button variant="outlined">Sign In</Button>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={handleDropDown}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white   ">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    isActive ? "text-blue-600" : "text-gray-700"
                  }
                lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0`
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="products"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    isActive ? "text-blue-600" : "text-gray-700"
                  }
                lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0`
                }
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to="mens"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    isActive ? "text-blue-600" : "text-gray-700"
                  }
                lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0`
                }
              >
                Mens
              </NavLink>
            </li>
            <li>
              <NavLink
                to="womens"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    isActive ? "text-blue-600" : "text-gray-700"
                  }
                lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0`
                }
              >
                Womens
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
