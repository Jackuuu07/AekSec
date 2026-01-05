import { X } from "lucide-react";

import ProductsMenu from "./Products/ProductsMenu";
import SolutionsMenu from "./Solutions/SolutionsMenu";
import SupportMenu from "./Support/SupportMenu";
import LearnMenu from "./Learn/LearnMenu";
import WhyAekSecMenu from "./WhyAekSec/WhyAekSecMenu";

export default function MegaMenu({ type, onClose }) {
  return (
    <div className="absolute top-full left-0 w-full z-40">
  <div className="bg-white h-[75vh] relative overflow-hidden">

    {/* TOP INNER SHADOW */}
    <div className="pointer-events-none absolute top-0 left-0 w-full h-8 z-20
      bg-gradient-to-b from-black/20 to-transparent" />

    {/* BOTTOM INNER SHADOW */}
    <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 z-20
      bg-gradient-to-t from-black/30 to-transparent" />

    {/* CONTENT */}
    <div className="relative z-10 h-full overflow-y-auto no-scrollbar
                    pt-6 pb-6">

        {/* Close */}
        <button onClick={onClose} className="absolute right-1 top-1">
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
  );
}
