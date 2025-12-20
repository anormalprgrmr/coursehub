import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../shared/components/navbar/NavBar";
import Footer from "../shared/components/footer/Footer";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ScrollToTop from "../shared/components/scrollToTop/ScrollToTop";

function App() {
  const location = useLocation();
  const hideFooter =
    location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/profile";
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
