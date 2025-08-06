import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { Navbar, BigSidebar, SmallSidebar } from "../components";
import { createContext, useContext, useState } from "react";

export const loader = () => {
  return "hello world2";
};

const DashboardContext = createContext();

const DashboardLayout = () => {
  const data = useLoaderData();
  console.log(data);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("toggle dark theme");
  };
  const toggleSidebar = () => {
    console.log("click");
    setShowSidebar(!showSidebar);
  };
  return (
    <DashboardContext.Provider
      value={{ showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar }}
    >
      <main>
        <BigSidebar />
        <SmallSidebar />

        <div
          className={`transition-all duration-300 ${
            showSidebar ? "md:pl-72" : "md:pl-0"
          }`}
        >
          <Navbar />
          <div>
            <Outlet />
          </div>
        </div>
      </main>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
