import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/agent/Dashboard";
import Device from "./pages/agent/Device";
import Login from "../src/auth/Login";
import Register from "../src/auth/Register";
import Home from "./pages/Home";
import Setting from "./pages/agent/Setting";
import Customer from "./pages/agent/Customer";
import ChatCustomer from "./pages/agent/ChatCustomer";
import Agent from "./pages/user/Agent";
import ChatAgent from "./pages/user/ChatAgent";
import ChangePassword from "./pages/agent/ChangePassword";
import SidebarComp from "./components/Sidebar";

function App() {
  const shouldShowSidebar = (pathname) => {
    const dashboardPaths = [
      "/dashboard",
      "/dashboard/device",
      "/dashboard/setting",
      "/dashboard/change-password",
      "/dashboard/customer",
      "/dashboard/chat-customer",
      "/user/agent",
      "/user/chat-agent",
    ];

    return dashboardPaths.includes(pathname);
  };

  const contentClass = shouldShowSidebar(window.location.pathname)
    ? "p-4 mt-12 sm:ml-64 bg-[#F4F4F4] min-h-screen"
    : "";

  return (
    <>
      {shouldShowSidebar(window.location.pathname) && <SidebarComp />}
      <div className={contentClass}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/device" element={<Device />} />
            <Route path="/dashboard/setting" element={<Setting />} />
            <Route
              path="/dashboard/change-password"
              element={<ChangePassword />}
            />
            <Route path="/dashboard/customer" element={<Customer />} />
            <Route
              path="/dashboard/chat-customer/:remot_id"
              element={<ChatCustomer />}
            />
            <Route path="/user/agent" element={<Agent />} />
            <Route path="/user/chat-agent/:remot_id" element={<ChatAgent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
