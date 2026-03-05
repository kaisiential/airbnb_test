"use client";

import { Search, Globe, Menu, UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <svg
              width="102"
              height="32"
              viewBox="0 0 102 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#FF385C]"
            >
              <path
                d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.49-.95-.76-1.4-.32-.53-.66-1.04-1.1-1.53-.8-.89-1.83-1.47-2.99-1.61-.56-.06-1.1-.02-1.63.14-.57.18-1.08.5-1.54.89-.36.31-.67.66-.93 1.04-.29.42-.54.87-.78 1.33l-.1.2c-2.49 4.8-4.83 9.68-7.04 14.48l-.03.06c-.23.53-.46 1.06-.71 1.58-.16.35-.32.73-.47 1.15-.44 1.22-.59 2.41-.42 3.6.28 1.98 1.41 3.7 3.1 4.72.93.56 1.95.88 3.01.95.13.01.26.01.38.01.96 0 1.87-.18 2.78-.56 1.12-.46 2.18-1.15 3.28-2.12 1.1.97 2.16 1.66 3.28 2.12.91.38 1.82.56 2.78.56.13 0 .26 0 .38-.01 1.06-.07 2.08-.39 3.01-.95 1.69-1.02 2.82-2.74 3.1-4.72.18-1.19.02-2.38-.42-3.6zm-16.7 2.55c-1.6-1.8-2.57-3.58-2.83-5.25-.11-.76-.09-1.45.07-2.08.14-.54.38-1.03.72-1.44.77-.93 1.95-1.46 3.25-1.46 1.3 0 2.48.53 3.25 1.46.34.41.58.9.72 1.44.16.63.18 1.32.07 2.08-.26 1.68-1.23 3.45-2.83 5.25-.55.62-1.14 1.2-1.75 1.77-.14.13-.29.26-.44.39l-.04.03-.04-.03a21.8 21.8 0 01-.44-.39c-.61-.57-1.2-1.15-1.75-1.77h.04zm21.44-2.55c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.49-.95-.76-1.4-.32-.53-.66-1.04-1.1-1.53"
                fill="currentColor"
              />
              <path
                d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.49-.95-.76-1.4-.32-.53-.66-1.04-1.1-1.53-.8-.89-1.83-1.47-2.99-1.61a4.56 4.56 0 00-1.63.14c-.57.18-1.08.5-1.54.89-.36.31-.67.66-.93 1.04-.29.42-.54.87-.78 1.33l-.1.2C8.94 8.98 6.6 13.86 4.4 18.66l-.03.06c-.23.53-.46 1.06-.71 1.58-.16.35-.32.73-.47 1.15-.44 1.22-.59 2.41-.42 3.6.28 1.98 1.41 3.7 3.1 4.72.93.56 1.95.88 3.01.95.13.01.26.01.38.01.96 0 1.87-.18 2.78-.56 1.12-.46 2.18-1.15 3.28-2.12 1.1.97 2.16 1.66 3.28 2.12.91.38 1.82.56 2.78.56.13 0 .26 0 .38-.01 1.06-.07 2.08-.39 3.01-.95 1.69-1.02 2.82-2.74 3.1-4.72.18-1.19.02-2.38-.42-3.6zm-16.7 2.55c-1.6-1.8-2.57-3.58-2.83-5.25-.11-.76-.09-1.45.07-2.08.14-.54.38-1.03.72-1.44.77-.93 1.95-1.46 3.25-1.46 1.3 0 2.48.53 3.25 1.46.34.41.58.9.72 1.44.16.63.18 1.32.07 2.08-.26 1.68-1.23 3.45-2.83 5.25-.55.62-1.14 1.2-1.75 1.77-.14.13-.29.26-.44.39l-.04.03-.04-.03a21.8 21.8 0 01-.44-.39c-.61-.57-1.2-1.15-1.75-1.77h.04z"
                fill="currentColor"
              />
            </svg>
            <span className="hidden md:inline text-[#FF385C] text-xl font-bold ml-1">
              airbnb
            </span>
          </a>

          {/* Search Bar */}
          <div className="hidden md:flex items-center border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow px-2 py-2">
            <button className="px-4 text-sm font-medium text-gray-800">
              Anywhere
            </button>
            <span className="h-6 w-px bg-gray-200" />
            <button className="px-4 text-sm font-medium text-gray-800">
              Any week
            </button>
            <span className="h-6 w-px bg-gray-200" />
            <button className="px-4 text-sm text-gray-400">
              Add guests
            </button>
            <div className="bg-[#FF385C] rounded-full p-2 ml-2">
              <Search className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Right Nav */}
          <div className="flex items-center gap-1">
            <button className="hidden md:block text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
              Airbnb your home
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Globe className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 hover:shadow-md transition-shadow ml-2">
              <Menu className="w-4 h-4" />
              <UserCircle className="w-8 h-8 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
