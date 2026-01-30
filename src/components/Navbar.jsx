import { Search, Menu, X } from "lucide-react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import MegaMenu from "../MegaMenu/MegaMenu";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("token"));
  const [profileOpen, setProfileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const navRef = useRef(null);

  // Better responsive detection - only use screen width, not zoom
  useEffect(() => {
    const checkViewport = () => {
      const viewportWidth = window.innerWidth;

      // Use breakpoints based on typical responsive design
      // 1024px is standard lg breakpoint
      const shouldUseMobileView = viewportWidth < 1024;

      setIsMobileView(shouldUseMobileView);

      // Close mega menus when switching to mobile view
      if (shouldUseMobileView) {
        setOpenMenu(null);
      }
    };

    // Check immediately
    checkViewport();

    // Debounce resize events for better performance
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkViewport, 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", checkViewport);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", checkViewport);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Close mega menu when clicking outside (desktop only)
  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!profileOpen && !isMobileView) {
        setOpenMenu(null);
      }
    }, 300);
  };

  // Handle click outside for mobile menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target) && mobileOpen) {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  return (
    <div
      className="relative"
      ref={navRef}
      onMouseLeave={() => {
        if (!isMobileView) handleMouseLeave();
      }}
    >
      <nav className="bg-gray-50 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* LEFT - LOGO */}
            <div
              className="flex items-center gap-2 lg:gap-3 cursor-pointer group min-w-0 flex-shrink-0"
              onClick={() => {
                navigate("/");
              }}
            >
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500 border-2 border-blue-500/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-base lg:text-lg transform -rotate-45">
                    KT
                  </span>
                </div>
              </div>

              <div className="min-w-0">
                <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight truncate">
                  <span className="inline-block bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-300 dark:to-indigo-300 bg-clip-text ">
                    Kalp
                  </span>
                  <span className="text-gray-900 dark:text-black font-medium">
                    Tech
                  </span>
                </h1>
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-blue-600 dark:via-blue-300 to-transparent mt-1"></div>
              </div>
            </div>

            {/* CENTER - DESKTOP MENU (show on large screens) */}
            {/* Removed absolute positioning and use flex-grow with proper spacing */}
            <div className="hidden lg:flex flex-grow items-center justify-center mx-4 xl:mx-8">
              <div className="flex items-center justify-center space-x-4 xl:space-x-6 2xl:space-x-8 text-base xl:text-lg">
                <div className="relative">
                  <DesktopNavItem
                    label="What We Do"
                    menu="what-we-do"
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                    hasDropdown={true}
                    to="/what-we-do"
                  />
                </div>

                <div className="relative">
                  <DesktopNavItem
                    label="What We Think"
                    to="/what-we-think"
                    menu="what-we-think"
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                    hasDropdown={false}
                  />
                </div>

                <div className="relative">
                  <DesktopNavItem
                    label="About KalpTech"
                    to="/about"
                    menu="about"
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                    hasDropdown={true}
                  />
                </div>

                <div className="relative">
                  <DesktopNavItem
                    label="Career"
                    to="/career"
                    menu="career"
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                    hasDropdown={false}
                  />
                </div>

                <div className="relative">
                  <DesktopNavItem
                    label="Contact Us"
                    to="/contact"
                    menu="contact"
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                    hasDropdown={false}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT - ACTIONS (desktop and tablet) */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
              <Link
                to="/trial-demos"
                className="px-4 py-2 xl:px-5 xl:py-2.5 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition text-sm xl:text-base whitespace-nowrap"
              >
                Trials & demos
              </Link>

              {/* Profile section commented out for now */}
              {/* <div className="relative">
                <button
                  onClick={() => {
                    if (!isLoggedIn) {
                      navigate("/login");
                    } else {
                      setProfileOpen(!profileOpen);
                    }
                  }}
                  className="flex items-center gap-1 xl:gap-2 px-2 xl:px-3 py-1.5 xl:py-2 rounded-full hover:bg-gray-100"
                >
                  <MdOutlineAccountCircle className="w-5 h-5 xl:w-6 xl:h-6" />
                  {!isLoggedIn && <span className="hidden xl:inline">Log In</span>}
                </button>
              </div> */}
            </div>

            {/* MOBILE MENU BUTTON (visible on screens < 1024px) */}
            <button
              onClick={() => {
                setMobileOpen(!mobileOpen);
                if (mobileOpen) setOpenMenu(null);
              }}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 flex-shrink-0"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DROPDOWN MENU (only on screens < 1024px) */}
      {mobileOpen && isMobileView && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-xl z-40 mobile-dropdown">
          <div className="max-h-[80vh] overflow-y-auto">
            <ul className="flex flex-col text-base font-medium divide-y">
              <MobileNavItem
                label="What We Do"
                menu="what-we-do"
                hasDropdown={true}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                setMobileOpen={setMobileOpen}
              />

              <MobileNavItem
                label="What We Think"
                to="/what-we-think"
                menu="what-we-think"
                hasDropdown={false}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                setMobileOpen={setMobileOpen}
              />

              <MobileNavItem
                label="About KalpTech"
                menu="about"
                hasDropdown={true}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                setMobileOpen={setMobileOpen}
              />

              <MobileNavItem
                label="Career"
                to="/career"
                menu="career"
                hasDropdown={false}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                setMobileOpen={setMobileOpen}
              />

              <MobileNavItem
                label="Contact Us"
                to="/contact"
                menu="contact"
                hasDropdown={false}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                setMobileOpen={setMobileOpen}
              />

              <li className="p-4">
                <Link
                  to="/trial-demos"
                  onClick={() => {
                    setMobileOpen(false);
                    setOpenMenu(null);
                  }}
                  className="block w-full py-3 rounded-full border border-blue-600 text-blue-600 text-center hover:bg-blue-50 transition"
                >
                  Trials & demos
                </Link>
              </li>

              {/* Search and Login options */}
              <li className="flex items-center gap-3 p-4 hover:bg-gray-50">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </li>

              <li className="p-4">
                <Link
                  to={isLoggedIn ? "/" : "/login"}
                  onClick={() => {
                    if (isLoggedIn) {
                      localStorage.removeItem("token");
                    }
                    setMobileOpen(false);
                    setOpenMenu(null);
                  }}
                  className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                >
                  <MdOutlineAccountCircle className="w-6 h-6" />
                  <span>{isLoggedIn ? "Logout" : "Log In"}</span>
                </Link>
              </li>
            </ul>

            {/* MOBILE MEGA MENU - shows when openMenu is set */}
            {openMenu && (
              <div className="border-t">
                <MegaMenu
                  type={openMenu}
                  onClose={() => {
                    setOpenMenu(null);
                    setMobileOpen(false);
                  }}
                  isMobile={true}
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* DESKTOP MEGA MENU (for large screens) */}
      {!isMobileView && (openMenu === "what-we-do" || openMenu === "about") && (
        <MegaMenu
          type={openMenu}
          onClose={() => setOpenMenu(null)}
          onMouseEnter={() => setOpenMenu(openMenu)}
          onMouseLeave={() => setOpenMenu(null)}
          isMobile={false}
        />
      )}
    </div>
  );
}

/* ---------- Desktop Nav Item Component ---------- */
function DesktopNavItem({
  label,
  menu,
  openMenu,
  setOpenMenu,
  to,
  hasDropdown = false,
}) {
  const isOpen = openMenu === menu;
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (!hasDropdown && to) {
      navigate(to);
    }
    // For dropdown items, we don't navigate on click in desktop
    // Mega menu opens on hover
  };

  return (
    <div
      onMouseEnter={() => {
        if (hasDropdown) {
          setOpenMenu(menu);
        }
      }}
      className="relative"
    >
      <Link
        to={to || "#"}
        onClick={handleClick}
        className={`flex items-center gap-1 px-2 py-1 transition whitespace-nowrap ${
          isOpen
            ? "text-blue-600 font-semibold"
            : "text-gray-700 hover:text-blue-600"
        }`}
      >
        {label}
        {hasDropdown && (
          <FiChevronDown
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </Link>
    </div>
  );
}

/* ---------- Mobile Nav Item Component ---------- */
function MobileNavItem({
  label,
  menu,
  to,
  hasDropdown = false,
  openMenu,
  setOpenMenu,
  setMobileOpen,
}) {
  const isOpen = openMenu === menu;
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (hasDropdown) {
      e.preventDefault();
      // Toggle the mega menu for this item
      const newOpenMenu = isOpen ? null : menu;
      setOpenMenu(newOpenMenu);

      // Don't close the mobile menu when opening a mega menu
      if (!newOpenMenu) {
        // If closing the mega menu, close mobile menu after delay
        setTimeout(() => {
          setMobileOpen(false);
        }, 300);
      }
    } else if (to) {
      // For non-dropdown items, navigate and close menu
      navigate(to);
      setOpenMenu(null);
      setMobileOpen(false);
    }
  };

  return (
    <li className="hover:bg-gray-50">
      <div
        onClick={handleClick}
        className={`flex items-center justify-between p-4 cursor-pointer ${
          isOpen ? "bg-blue-50 text-blue-600" : ""
        }`}
      >
        <span className="font-medium">{label}</span>
        {hasDropdown ? (
          <FiChevronDown
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        ) : to ? (
          <span className="text-gray-400">→</span>
        ) : null}
      </div>
    </li>
  );
}