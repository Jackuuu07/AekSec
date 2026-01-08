import { X } from "lucide-react";

import ProductsMenu from "./Products/ProductsMenu";
import SolutionsMenu from "./Solutions/SolutionsMenu";
import SupportMenu from "./Support/SupportMenu";
import LearnMenu from "./Learn/LearnMenu";
import WhyAekSecMenu from "./WhyAekSec/WhyAekSecMenu";

export default function MegaMenu({ type, onClose }) {
  return (
    <>
      {/* 🔹 OVERLAY (MOBILE ONLY) */}
      <div
        onClick={onClose}
        className="
          fixed inset-0 bg-black/40
          z-[998]
          md:hidden
        "
      />

      {/* 🔹 MEGA MENU */}
      <div
        className="
          fixed md:absolute
          top-0 md:top-full
          left-0
          w-full
          h-screen md:h-[75vh]
          bg-white
          z-[999]
        "
      >
        <div className="relative h-full overflow-hidden">
          {/* TOP INNER SHADOW (DESKTOP ONLY) */}
          <div
            className="
              pointer-events-none absolute top-0 left-0 w-full h-8
              bg-gradient-to-b from-black/20 to-transparent
              hidden md:block
            "
          />

          {/* BOTTOM INNER SHADOW (DESKTOP ONLY) */}
          <div
            className="
              pointer-events-none absolute bottom-0 left-0 w-full h-8
              bg-gradient-to-t from-black/30 to-transparent
              hidden md:block
            "
          />

          {/* CONTENT */}
          <div className="relative z-10 h-full overflow-y-auto no-scrollbar pt-6 pb-6">
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {type === "products" && <ProductsMenu />}
            {type === "solutions" && <SolutionsMenu />}
            {type === "support" && <SupportMenu />}
            {type === "learn" && <LearnMenu />}
            {type === "why" && <WhyAekSecMenu />}
          </div>
        </div>
      </div>
    </>
  );
}
