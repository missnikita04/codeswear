"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import ForgotPasswordModal from "../fotgotpasswordmodal/page";
 const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <form className="space-y-2">

        {/* Email */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Email
          </label>

          <input
            type="email"
            required
            placeholder="Enter email"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        {/* Password */}
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-xs font-medium text-gray-700">
              Password
            </label>

            {/* ✅ FIXED: button instead of Link */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="text-[11px] text-pink-500 hover:underline"
            >
              Forgot?
            </button>
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter password"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-pink-500"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Remember */}
        <div className="flex items-center text-xs text-gray-600">
          <input type="checkbox" className="mr-2 accent-pink-500" />
          Remember me
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-pink-500 text-white py-2 text-sm font-medium hover:bg-pink-600"
        >
          Sign In
        </button>
      </form>

      {/* ✅ MODAL  for Forgot Password */}
      {open && (
        <ForgotPasswordModal onClose={() => setOpen(false)} />
      )}

      {/* Divider */}
      <div className="mt-4 flex items-center">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="mx-2 text-[10px] text-gray-400">OR</span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      {/* Google */}
      <button className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg border border-gray-300 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          className="w-4 h-4"
        />
        Continue with Google
      </button>
    </>
  );
}

export default LoginForm;