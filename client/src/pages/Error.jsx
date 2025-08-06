import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center px-4">
      <div className="text-center max-w-xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <h1 className="text-5xl font-bold text-red-500 mb-4 animate-bounce">
          Oops!
        </h1>
        <p className="text-xl text-gray-800 mb-2">Something went wrong.</p>
        <p className="text-gray-500 mb-6">
          {error.statusText || error.message || "Unknown error"}
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default Error;
