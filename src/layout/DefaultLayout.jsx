import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
function DefaultLayout() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}

export default DefaultLayout;
