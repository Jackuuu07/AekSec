import { Search, Menu, X } from "lucide-react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useState } from "react";
import MegaMenu from "../MegaMenu/MegaMenu";
import { useNavigate } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="flex items-center justify-between px-10 py-4 bg-gray-50 relative z-50">
        {/* LEFT */}
        <div className="flex items-center gap-10">
          <h1
            onClick={() => (window.location.href = "/")}
            className="cursor-pointer text-2xl font-extrabold tracking-tight
             bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600
             bg-clip-text text-transparent hover:opacity-90 transition"
          >
            Aek<span className="font-light">Sec</span>
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden max-[960px]:hidden md:flex gap-6 text-sm font-medium">
            <NavItem
              label="Products & Services"
              path="/products"
              menu="products"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
            <NavItem
              label="Solutions"
              path="/solutions"
              menu="solutions"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
            <NavItem
              label="Support"
              path="/support"
              menu="support"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
            <NavItem
              label="Learn"
              path="/learn"
              menu="learn"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
            <NavItem
              label="Why AekSec"
              path="/why-aeksec"
              menu="why"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden max-[960px]:hidden md:flex items-center gap-3">
          <button onClick={()=>navigate('/trial-demos')} className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
            Trials & demos
          </button>

          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
            <Search className="w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100"
          >
            <MdOutlineAccountCircle className="w-6 h-6" />
            <span>Log In</span>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden max-[960px]:flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {mobileOpen && (
        <div className="md:hidden max-[960px]:block absolute top-full left-0 w-full bg-white border-t shadow-lg z-40">
          <ul className="flex flex-col text-sm font-medium divide-y">
            <MobileItem label="Products & Services" />
            <MobileItem label="Solutions" />
            <MobileItem label="Support" />
            <MobileItem label="Learn" />
            <MobileItem label="Why AekSec" />

            <li className="p-4">
              <button className="w-full py-2 rounded-full border border-blue-600 text-blue-600">
                Trials & demos
              </button>
            </li>

            <li className="flex items-center gap-2 p-4">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </li>

            <li
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 p-4 cursor-pointer hover:bg-slate-100"
            >
              <MdOutlineAccountCircle className="w-6 h-6" />
              <span>Log In</span>
            </li>
          </ul>
        </div>
      )}

      {/* MEGA MENU */}
      {openMenu && (
        <MegaMenu type={openMenu} onClose={() => setOpenMenu(null)} />
      )}
    </div>
  );
}

/* ---------- Desktop Nav Item ---------- */
function NavItem({ label, menu, openMenu, setOpenMenu, path }) {
  return (
    <button
      onClick={() => {
        setOpenMenu(menu);
        window.history.pushState({}, "", path);
      }}
      className={`transition ${
        openMenu === menu
          ? "text-blue-600 font-semibold"
          : "text-gray-700 hover:text-blue-600"
      }`}
    >
      {label}
    </button>
  );
}

/* ---------- Mobile Item ---------- */
function MobileItem({ label }) {
  return <li className="p-4 hover:bg-gray-50 cursor-pointer">{label}</li>;
}
