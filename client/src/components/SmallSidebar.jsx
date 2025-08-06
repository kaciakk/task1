import { useDashboardContext } from "../pages/DashboardLayout";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  if (!showSidebar) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 md:hidden">
      <div className="bg-white rounded-xl shadow-xl w-11/12 max-w-md p-6 relative flex flex-col gap-2 justify-center text-center">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-500 transition"
          onClick={toggleSidebar}
        >
          x
        </button>
        <NavLinks onLinkClick={toggleSidebar} />
      </div>
    </div>
  );
};

export default SmallSidebar;
