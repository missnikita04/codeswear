"use client";

import { useState } from "react";
// import Link from "next/link";

const SignupForm=()=> {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="mt-5 space-y-3">

      {/* Name */}
      <div>
        <label className="text-xs text-gray-700">Full Name</label>
        <input
          type="text"
          placeholder="Enter name"
          className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-xs text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
        />
      </div>

      {/* Password */}
      <div>
        <label className="text-xs text-gray-700">Password</label>

        <div className="relative mt-1">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 text-xs text-pink-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-pink-500 text-white py-2 text-sm rounded-lg font-medium hover:bg-pink-600 transition"
      >
        Create Account
      </button>

      {/* Google */}
      <button
        type="button"
        className="w-full border border-gray-300 py-2 text-sm rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          className="w-4 h-4"
        />
        Continue with Google
      </button>

    </form>
  );
}
export default SignupForm;