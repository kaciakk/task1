import { Link } from "react-router-dom";
import logo from "../assets/Dashly.png";
const Register = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 min-h-screen">
      <div className="max-w-[35rem] mx-auto">
        <img src={logo} alt="Dashly Logo" className="w-125 sm:w-134 md:w-146" />

        <div className="mt-7 bg-white border border-gray-300 rounded-xl shadow-md">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-900">
                Sign up
              </h1>
              <div className="mt-2 text-sm text-gray-700">
                Already have an account?{" "}
                <Link to={"/login"}>
                  <div className="text-blue-700 decoration-2 hover:underline focus:outline-none focus:underline font-medium">
                    Sign in here
                  </div>
                </Link>
              </div>
            </div>

            <div className="mt-5">
              <button
                type="button"
                className="cursor-pointer w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-300 bg-white text-gray-900 shadow hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              >
                Sign up with Google
              </button>

              <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6">
                Or
              </div>

              <form>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 text-gray-900"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-lg sm:text-sm focus:border-blue-600 focus:ring-blue-600"
                      required
                    />
                  </div>

                  <div>
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <label
                        htmlFor="password"
                        className="block text-sm mb-2 text-gray-900"
                      >
                        Password
                      </label>
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-lg sm:text-sm focus:border-blue-600 focus:ring-blue-600"
                      required
                    />
                  </div>

                  <div>
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm mb-2 text-gray-900"
                      >
                        Confirm Password
                      </label>
                    </div>
                    <input
                      type="confirmPassword"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-lg sm:text-sm focus:border-blue-600 focus:ring-blue-600"
                      required
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 mt-0.5 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-600"
                    />
                    <label
                      htmlFor="remember-me"
                      className="cursor-pointer ms-3 text-sm text-gray-900"
                    >
                      I accept the {""}
                      <div className="text-blue-700 decoration-2 hover:underline focus:outline-none focus:underline font-medium">
                        Terms and Conditions
                      </div>
                    </label>
                  </div>
                  <Link to={"/login"}>
                    <button
                      type="submit"
                      className="cursor-pointer w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:bg-blue-800"
                    >
                      Sign up(demo)
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
