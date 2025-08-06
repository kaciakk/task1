import { Link } from "react-router-dom";
import logo from "../assets/Dashly.png";

const Landing = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 min-h-screen">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-10">
        <div className="max-w-3xl mx-auto flex flex-col justify-center items-center text-center">
          <img
            src={logo}
            alt="Dashly Logo"
            className="w-125 sm:w-134 md:w-146"
          />
          <h1 className="font-medium text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-4">
            Smarter Campaign Management
          </h1>

          <p className="text-lg text-gray-700">
            Create, track, and manage your advertising campaigns with ease.
            Dashly helps you stay on top of your budget, targeting, and
            performance — all in one intuitive dashboard.
          </p>
        </div>

        <div className="text-center flex justify-center gap-4">
          <Link to="/login">
            <button className="cursor-pointer inline-flex items-center gap-x-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full py-3 px-6 shadow-md transition">
              Login(demo to app)
            </button>
          </Link>

          <Link to="/register">
            <button className="cursor-pointer inline-flex items-center gap-x-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-full py-3 px-6 shadow-md transition">
              Register(demo)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
