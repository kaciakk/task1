import { LuPanelRightClose, LuPanelLeftClose } from "react-icons/lu";
import { useDashboardContext } from "../pages/DashboardLayout";
import logo from "../assets/Dashly.png";

const Navbar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <div className="flex justify-between items-center px-4  p-2 sticky top-0 z-50 bg-white shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)]">
      <div className="text-4xl">
        <button className="cursor-pointer transition" onClick={toggleSidebar}>
          {showSidebar ? <LuPanelLeftClose /> : <LuPanelRightClose />}
        </button>
      </div>

      <img src={logo} />
    </div>
  );
};

export default Navbar;
