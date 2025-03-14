"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Training Program", href: "/training" },
    { name: "Executive Board", href: "/board" },
    { name: "Events", href: "/events" },
    { name: "Competitions", href: "/competitions" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-[#0a2966] dark:text-gray-100">
              <span>
                <Image
                  src={`/ibc_logos/${isDark ? 'WhiteTransparent.png' : 'ibcbulllogo-removebg.png'}`}
                  width="40"
                  alt="IBC"
                  height="40"
                  className="w-14 h-14 object-contain"
                />
              </span>
            <span>IBC<span className="text-gray-800 dark:text-white">BSU</span></span>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
            <ThemeChanger />
            <div className="hidden mr-3 lg:flex nav__item">
              <Link href="/contact" className="px-6 py-2 text-white bg-[#0a2966] rounded-md md:ml-5 hover:bg-[#0a2966]/80 transition-colors">
                Join Us
              </Link>
            </div>
        </div>
                
        <Disclosure>
          {({ open }) => (
            <>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-[#0a2966] focus:text-[#0a2966] focus:bg-[#0a2966]/10 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link 
                        key={index} 
                        href={item.href} 
                        className={`w-full px-4 py-2 -ml-4 rounded-md dark:text-gray-300 hover:text-[#0a2966] focus:text-[#0a2966] focus:bg-[#0a2966]/10 dark:focus:bg-gray-800 focus:outline-none ${
                          pathname === item.href
                            ? "text-[#0a2966] font-medium"
                            : "text-gray-500"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link href="/contact" className="w-full px-6 py-2 mt-3 text-center text-white bg-[#0a2966] rounded-md lg:ml-5 hover:bg-[#0a2966]/80 transition-colors">         
                        Join Us
                    </Link>
                  </>
                </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link 
                  href={menu.href} 
                  className={`inline-block px-4 py-2 text-lg font-normal no-underline rounded-md dark:text-gray-200 hover:text-[#0a2966] focus:text-[#0a2966] focus:bg-[#0a2966]/10 focus:outline-none dark:focus:bg-gray-800 ${
                    pathname === menu.href
                      ? "text-[#0a2966] font-medium"
                      : "text-gray-800"
                  }`}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </div>
  );
}

