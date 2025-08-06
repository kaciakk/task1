import { useDashboardContext } from "../pages/DashboardLayout";
import NavLinks from "./NavLinks";
const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();

  return (
    <div
      className={`hidden md:flex flex-col text-center fixed top-0 left-0 h-full shadow-lg pt-3 transition-transform duration-300 z-40 w-72
      ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}
    >
      <h2 className="text-2xl">Dashboard</h2>

      <div className="bg-white-100 flex pl-4 pt-6">
        <NavLinks />
      </div>
    </div>
  );
};

export default BigSidebar;
