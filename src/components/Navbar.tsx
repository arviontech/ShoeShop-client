import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
 
  const [isCategoriesHovered, setIsCategoriesHovered] = useState(false);
  const [cartCount] = useState(0);
  const [wishlistCount] = useState(0);

  // Handle scroll event to add shadow to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
     
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) setIsMenuOpen(false);
  };

  const categories = [
    "BRANDS",
    "MEN",
    "WOMEN",
    "KID'S",
    "SNEAKER STUDIO",
    "SPORT",
    "ACCESSORIES"
  ];

  return (
    <div className={`w-full bg-white sticky top-0 z-50 shadow-md transition-shadow duration-300`}>
      <div className="w-full max-w-7xl mx-auto">
        {/* Top navbar with account & info links */}
        <div className="hidden md:flex justify-end items-center px-6 py-2 bg-gray-50 text-xs text-gray-600">
          <div className="flex items-center space-x-4">
            <a href="/help" className="hover:text-gray-900 transition-colors">Help</a>
            <span>|</span>
            <a href="/track-order" className="hover:text-gray-900 transition-colors">Track Order</a>
            <span>|</span>
            <a href="/contact" className="hover:text-gray-900 transition-colors">Contact Us</a>
          </div>
        </div>

        {/* Main navbar with logo, search and icons */}
        <div className="flex justify-between items-center px-4 md:px-6 py-4">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="md:w-1/4">
            <a href="/" className="inline-block" aria-label="ShoeShop - Go to homepage">
              <h1 className="text-2xl md:text-3xl font-light text-gray-700 tracking-tight">
                Shoe<span className="text-blue-500 font-normal">Shop</span>
              </h1>
            </a>
          </div>

          {/* Search - Desktop */}
          <div className="hidden md:flex md:w-2/5 items-center">
            <div className="w-full flex group">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border border-gray-300 hover:border-gray-400 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                aria-label="Search products"
              />
              <div className="flex items-center border border-l-0 border-gray-300 group-hover:border-gray-400 rounded-r-md px-3 py-2 bg-gray-50 text-sm">
                
               
                <button className=" p-1 rounded-md hover:bg-gray-200 text-gray-700 transition-colors" aria-label="Search">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile search button */}
          <div className="flex md:hidden">
            <button 
              onClick={toggleSearch} 
              className="p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
              aria-label="Toggle search"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Icons section */}
          <div className="flex justify-end items-center space-x-1 md:space-x-6 md:w-1/3">
            {/* Login/About links - hidden on mobile */}
            <div className="hidden md:flex md:items-center md:gap-6">
              <div 
                className="relative"
                onMouseEnter={() => setIsCategoriesHovered(true)}
                onMouseLeave={() => setIsCategoriesHovered(false)}
              >
                <button className="text-gray-700 hover:text-gray-900 hover:underline transition-colors text-sm font-medium flex items-center">
                  Categories
                  <svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </button>
                
                {/* Categories dropdown */}
                {isCategoriesHovered && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-fadeIn">
                    {categories.map((category, index) => (
                      <a 
                        key={index} 
                        href={`/category/${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="/login" className="text-gray-700 hover:text-gray-900 hover:underline transition-colors text-sm font-medium flex items-center">
                <svg 
                  className="w-5 h-5 mr-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                </svg>
                Log In
              </a>
              <a href="/about" className="text-gray-700 hover:text-gray-900 hover:underline transition-colors text-sm font-medium">
                About Us
              </a>
            </div>

            {/* Wishlist icon */}
            <button className="flex items-center p-1 relative group" aria-label="Wishlist">
              <div className="relative">
                <svg
                  className="w-6 h-6 text-gray-700 group-hover:text-red-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </div>
            </button>

            {/* Cart icon */}
            <button className="flex items-center p-1 relative group" aria-label="Shopping cart">
              <div className="relative">
                <svg
                  className="w-6 h-6 text-gray-700 group-hover:text-blue-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        {isSearchOpen && (
          <div className="md:hidden px-4 pb-4 animate-fadeIn">
            <div className="w-full flex">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gray-50 border border-l-0 border-gray-300 rounded-r px-4 hover:bg-gray-100 transition-colors">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Mobile menu - slides in from left */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white animate-slideIn">
            <div className="flex flex-col px-4 py-2 divide-y divide-gray-100">
              <div className="py-3 space-y-3">
                <a href="/login" className="flex items-center py-2 text-gray-700 hover:text-gray-900">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Log In
                </a>
                <a href="/about" className="flex items-center py-2 text-gray-700 hover:text-gray-900">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About Us
                </a>
              </div>
              
              <div className="py-2">
                <p className="text-xs text-gray-500 uppercase tracking-wider py-2 font-semibold">Categories</p>
                {categories.map((category, index) => (
                  <a 
                    key={index} 
                    href={`/category/${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-2 rounded-md transition-colors"
                  >
                    {category}
                  </a>
                ))}
              </div>
              
              <div className="py-3 space-y-3">
                <a href="/help" className="flex items-center py-2 text-gray-700 hover:text-gray-900">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Help
                </a>
                <a href="/track-order" className="flex items-center py-2 text-gray-700 hover:text-gray-900">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  Track Order
                </a>
                <a href="/contact" className="flex items-center py-2 text-gray-700 hover:text-gray-900">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;