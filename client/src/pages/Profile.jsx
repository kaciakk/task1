import React from "react";
import { Form } from "react-router-dom";
const Profile = () => {
  return (
    <div>
      {" "}
      <div className="bg-white shadow-md rounded-lg max-w-6xl mx-auto px-4 py-8 mt-6 w-full">
        <Form method="post" className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Edit Profile
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition w-full sm:w-auto self-center"
          >
            Save Profile(test)
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
