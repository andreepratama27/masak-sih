import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Root = () => {
  return (
    <div className="bg-orange-50">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
