// app/login/page.js

import Link from "next/link";
import LoginForm from "../components/loginfrom/page";

export default function LoginPage() {
  return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">      
      {/* FIX: negative top padding remove + better centering */}
      <div className="w-full max-w-xs bg-white rounded-2xl shadow-lg border border-pink-100 p-6 -mt-10">
        
        {/* Static SSR Content */}
        <div className="text-center">
          <div className="w-10 h-10 mx-auto rounded-full bg-pink-50 flex items-center justify-center border border-pink-200">
            <span className="text-base font-bold text-pink-500">CW</span>
          </div>

          <h2 className="mt-3 text-xl font-bold text-gray-800">
            Welcome Back
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Sign in to continue
          </p>
        </div>

        <LoginForm />

        <p className="mt-5 text-center text-xs text-gray-500">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-pink-500 font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}