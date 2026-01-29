import { Search, Menu, X } from "lucide-react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useState, useEffect } from "react";
import MegaMenu from "../MegaMenu/MegaMenu";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("token"));
  // eslint-disable-next-line no-unused-vars
  const [profileOpen, setProfileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [forceMobile, setForceMobile] = useState(false);

  useEffect(() => {
    const checkZoomAndWidth = () => {
      const isZoomed = window.devicePixelRatio >= 1.5;
      const isSmallScreen = window.innerWidth < 960;

      setForceMobile(isZoomed || isSmallScreen);

      // Close desktop menus when switching to mobile
      if (isZoomed) {
        setOpenMenu(null);
      }
    };

    checkZoomAndWidth();
    window.addEventListener("resize", checkZoomAndWidth);

    return () => window.removeEventListener("resize", checkZoomAndWidth);
  }, []);

  // Close mega menu when clicking outside

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!profileOpen) {
        setOpenMenu(null);
      }
    }, 300);
  };

  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      <nav className="flex items-center justify-between px-10 py-7 bg-gray-50 relative z-50">
        {/* LEFT - LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={(e) => {
            console.log("CLICK WORKED");
            navigate("/");
          }}
        >
          {/* Simple but elegant mark */}
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500 border-2 border-blue-500/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-lg transform -rotate-45">
                KT
              </span>
            </div>
          </div>

          {/* Clean typography */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="inline-block bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-300 dark:to-indigo-300 bg-clip-text ">
                Kalp
              </span>

              <span className="text-gray-900 dark:text-white font-medium">
                Tech
              </span>
            </h1>
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-blue-600 dark:via-blue-300 to-transparent mt-1"></div>
          </div>
        </div>

        {/* CENTER - DESKTOP MENU */}
        {!forceMobile && (
          <div className="hidden max-[960px]:hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 gap-8 text-xl ">
            {/* What We Do - WITH MEGA MENU */}
            <div className="relative">
              <NavItem
                label="What We Do"
                menu="what-we-do"
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                hasDropdown={true}
              />
            </div>

            {/* What We Think - SIMPLE LINK */}
            <div className="relative">
              <NavItem
                label="What We Think"
                to="/what-we-think"
                menu="what-we-think"
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                hasDropdown={false}
              />
            </div>

            {/* About KalpTech - WITH MEGA MENU */}
            <div className="relative" onMouseEnter={() => setOpenMenu("about")}>
              <NavItem
                label="About KalpTech"
                to="/about"
                menu="about"
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                hasDropdown={true}
              />
            </div>

            {/* Career - SIMPLE LINK */}
            <div className="relative">
              <NavItem
                label="Career"
                to="/career"
                menu="career"
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                hasDropdown={false}
              />
            </div>

            {/* Contact Us - SIMPLE LINK */}
            <div className="relative">
              <NavItem
                label="Contact Us"
                to="/contact"
                menu="contact"
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                hasDropdown={false}
              />
            </div>
          </div>
        )}

        {/* RIGHT - ACTIONS */}
        {!forceMobile && (
          <div className="flex items-center gap-3">
            <Link
              to="/trial-demos"
              className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              Trials & demos
            </Link>

            {/* <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
            <Search className="w-5 h-5 text-gray-700" />
          </button> */}

            <div className="relative">
              {/* <button
              onClick={() => {
                if (!isLoggedIn) {
                  navigate("/login");
                } else {
                  setProfileOpen(!profileOpen);
                }
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100"
            >
              <MdOutlineAccountCircle className="w-6 h-6" />
              {!isLoggedIn && <span>Log In</span>}
            </button> */}

              {/* PROFILE POPUP */}
              {/* {isLoggedIn && profileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
                <Link
                  to="/profile"
                  onClick={() => setProfileOpen(false)}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  👤 Profile
                </Link>

                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    setProfileOpen(false);
                    navigate("/login");
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  🚪 Logout
                </button>
              </div>
            )} */}
            </div>
          </div>
        )}

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`${
            forceMobile ? "flex" : "hidden"
          } items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100`}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {forceMobile && mobileOpen && (
        <div className="md:hidden max-[960px]:block absolute top-full left-0 w-full bg-white border-t shadow-lg z-40">
          <ul className="flex flex-col text-sm font-medium divide-y">
            <MobileItem
              label="What We Do"
              to="/what-we-do"
              menu="what-we-do"
              setOpenMenu={setOpenMenu}
              setMobileOpen={setMobileOpen}
            />

            <MobileItem
              label="What We Think"
              to="/what-we-think"
              menu="what-we-think"
              setOpenMenu={setOpenMenu}
              setMobileOpen={setMobileOpen}
            />

            <MobileItem
              label="About KalpTech"
              to="/about"
              menu="about"
              setOpenMenu={setOpenMenu}
              setMobileOpen={setMobileOpen}
            />

            <MobileItem
              label="Career"
              to="/career"
              menu="career"
              setOpenMenu={setOpenMenu}
              setMobileOpen={setMobileOpen}
            />

            <MobileItem
              label="Contact Us"
              to="/contact"
              menu="contact"
              setOpenMenu={setOpenMenu}
              setMobileOpen={setMobileOpen}
            />

            <li className="p-4">
              <Link
                to="/trial-demos"
                className="block w-full py-2 rounded-full border border-blue-600 text-blue-600 text-center"
              >
                Trials & demos
              </Link>
            </li>

            <li className="flex items-center gap-2 p-4">
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
                }}
                className="flex items-center gap-2 cursor-pointer hover:bg-slate-100"
              >
                <MdOutlineAccountCircle className="w-6 h-6" />
                <span>{isLoggedIn ? "Logout" : "Log In"}</span>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* MEGA MENU - Only for What We Do and About */}
      {(openMenu === "what-we-do" || openMenu === "about") && (
        <MegaMenu
          type={openMenu}
          onClose={() => setOpenMenu(null)}
          onMouseEnter={() => setOpenMenu(openMenu)}
          onMouseLeave={() => setOpenMenu(null)}
        />
      )}
    </div>
  );
}

/* ---------- Desktop Nav Item ---------- */
function NavItem({
  label,
  menu,
  openMenu,
  setOpenMenu,
  to,
  hasDropdown = false,
}) {
  return (
    <Link
      to={to}
      onMouseEnter={() => {
        if (hasDropdown) {
          setOpenMenu(menu);
        }
      }}
      className={`flex items-center gap-1 transition ${
        openMenu === menu
          ? "text-blue-600 font-semibold"
          : "text-gray-700 hover:text-blue-600"
      }`}
    >
      {label}
      {hasDropdown && (
        <FiChevronDown
          className={`transition-transform duration-200 ${openMenu === menu ? "rotate-180" : ""}`}
        />
      )}
    </Link>
  );
}

/* ---------- Mobile Item ---------- */
function MobileItem({ label, to, menu, setOpenMenu, setMobileOpen }) {
  return (
    <li className="hover:bg-gray-50">
      <Link
        to={to}
        onClick={() => {
          setOpenMenu(menu);
          setMobileOpen(false);
        }}
        className="block p-4 cursor-pointer"
      >
        {label}
      </Link>
    </li>
  );
}
