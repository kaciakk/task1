import { LuPanelRightClose, LuPanelLeftClose } from "react-icons/lu";
import { useDashboardContext } from "../pages/DashboardLayout";

const Navbar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <div className="relative flex items-center justify-between px-4 p-2 top-0 z-50 bg-white shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)]">
      <div className="text-4xl z-10">
        <button className="cursor-pointer transition" onClick={toggleSidebar}>
          {showSidebar ? <LuPanelLeftClose /> : <LuPanelRightClose />}
        </button>
      </div>

      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-semibold">
        Dashboard
      </h1>
    </div>
  );
};

export default Navbar;
