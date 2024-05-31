import React from "react";
import { userSidebarData, agentSidebarData } from "./sidebarData";

export default function SidebarComp() {
  const logout = () => {
    localStorage.clear();
  };

  const isUserRole = window.location.pathname.startsWith("/user");
  const sidebarData = isUserRole ? userSidebarData : agentSidebarData;
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-[#135D66] border-b border-gray-200    ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-300 rounded-lg sm:hidden hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200      "
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <span className="self-center text-xl text-gray-300 font-semibold sm:text-2xl whitespace-nowrap  ">
                  Flowbite
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden w-40 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                  id="dropdown-user"
                >
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="/dashboard/setting"
                        className="block px-4 py-2 text-center text-sm text-gray-700 hover:bg-gray-100  hover:text-gray-800"
                        role="menuitem"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="cursor-pointer block px-4 py-2 text-sm text-center text-gray-700 hover:bg-gray-100  hover:text-gray-800"
                        role="menuitem"
                        href="/"
                        onClick={logout}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-[#135D66] border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-[#135D66]">
          <ul className="space-y-2 font-medium">
            {sidebarData.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-gray-300 text-xl">{item.title}</span>
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.path}
                      className="flex items-center p-2 text-gray-300 rounded-lg hover:text-white group"
                    >
                      {link.icon}
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
