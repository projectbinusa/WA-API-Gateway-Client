import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initFlowbite } from "flowbite";
import SidebarComp from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import Device from "./pages/device";
import Login from "../src/auth/Login";
import Register from "../src/auth/Register";
import Home from "./pages/Home";
import { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAddressBook } from "@fortawesome/free-regular-svg-icons";

function App() {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <>
      <SidebarComp />
      <div className="p-4 mt-12 sm:ml-64 bg-[#F4F4F4]">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/device" element={<Device />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
