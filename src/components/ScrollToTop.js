import { useEffect } from "react";
import { useLocation } from "react-router-dom";
//FOR SCROLL RESTORATION//
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
