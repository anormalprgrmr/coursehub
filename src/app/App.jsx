import { Outlet } from "react-router-dom";
import NavBar from "../shared/components/navbar/NavBar"
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
