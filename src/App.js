import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SidebarComp from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Device from "./pages/Device";
import Login from "../src/auth/Login";
import Register from "../src/auth/Register";
import Home from "./pages/Home";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";


function App() {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <>
      {/* <SidebarComp />
      <div className="p-4 mt-12 sm:ml-64 bg-[#F4F4F4]"> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/device" element={<Device />} />
          </Routes>
        </BrowserRouter>
      {/* </div> */}
    </>
  );
}

export default App;
