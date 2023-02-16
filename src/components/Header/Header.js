/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

const Header = () => {
  return (
    <header>
      <nav class=" px-4 lg:px-6 py-2.5">
        <div class="flex flex-row justify-between items-center mx-auto max-w-screen-xl text-black">
          <a href="#" class="flex items-center">
            <span class="self-center text-4xl font-semibold whitespace-nowrap">
              W
            </span>
          </a>
          <div class="flex justify-between items-center" id="mobile-menu-2">
            <ul class="flex flex-row gap-5 items-center">
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3  rounded"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3  border-b   lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3  border-b   lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3  border-b   lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3  border-b   lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3  border-b   lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
