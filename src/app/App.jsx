import { Outlet } from "react-router-dom";
import NavBar from "../shared/components/navbar/NavBar"
import Footer from "../shared/components/footer/Footer"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ScrollToTop from "../shared/components/scrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
