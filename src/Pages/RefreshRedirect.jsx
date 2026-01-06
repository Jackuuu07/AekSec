import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RefreshRedirect({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
      // 🚫 Skip redirect for crawler
    if (navigator.userAgent.includes("PlaywrightCrawler")) {
      return;
    }
    
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload && location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, []);

  return children;
}
