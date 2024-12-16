import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();  

  return (
    <div>
      <header>
        <nav className="fixed top-0 left-0 right-0 bg-white border-gray-50 px-4 lg:px-6 py-2.5 dark:bg-gray-800 z-50 shadow-md">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Solar Panel Monitoring
              </span>
            </a>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link to="/">
                    <a
                      className={`block py-2 pr-4 pl-3 ${
                        location.pathname === '/' 
                          ? 'text-blue-600 border-b-2 border-blue-600' 
                          : 'text-gray-700 border-b border-gray-100'
                      } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                      aria-current={location.pathname === '/' ? 'page' : undefined}
                    >
                      Real-Time
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/watt">
                    <a
                      className={`block py-2 pr-4 pl-3 ${
                        location.pathname === '/watt' 
                          ? 'text-blue-600 border-b-2 border-blue-600' 
                          : 'text-gray-700 border-b border-gray-100'
                      } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                      aria-current={location.pathname === '/watt' ? 'page' : undefined}
                    >
                      Watt
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/ampere">
                    <a
                      className={`block py-2 pr-4 pl-3 ${
                        location.pathname === '/ampere' 
                          ? 'text-blue-600 border-b-2 border-blue-600' 
                          : 'text-gray-700 border-b border-gray-100'
                      } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                      aria-current={location.pathname === '/ampere' ? 'page' : undefined}
                    >
                      Ampere
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/voltage">
                    <a
                      className={`block py-2 pr-4 pl-3 ${
                        location.pathname === '/voltage' 
                          ? 'text-blue-600 border-b-2 border-blue-600' 
                          : 'text-gray-700 border-b border-gray-100'
                      } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                      aria-current={location.pathname === '/voltage' ? 'page' : undefined}
                    >
                      Voltage
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
