// app/signup/page.js

import Link from "next/link";
import SignupForm from "../components/signupform/page";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-xs bg-white rounded-2xl shadow-lg border border-pink-100 p-6">

        {/* SSR Static UI */}
        <div className="text-center">
          <div className="w-10 h-10 mx-auto rounded-full bg-pink-50 flex items-center justify-center border border-pink-200">
            <span className="text-base font-bold text-pink-500">CW</span>
          </div>

          <h2 className="mt-3 text-xl font-bold text-gray-800">
            Create Account
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Sign up to start shopping
          </p>
        </div>

        {/* CSR Form */}
        <SignupForm />

        {/* Login link */}
        <p className="mt-5 text-center text-xs text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-pink-500 font-medium hover:underline">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}
export default SignupPage;