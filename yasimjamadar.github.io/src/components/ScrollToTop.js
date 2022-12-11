import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(1, 1);
  }, [pathname]);
  return null;
}

export default ScrollToTop;
