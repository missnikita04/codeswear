"use client";


const ForgotPasswordModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-80 rounded-xl p-5 shadow-xl">

        <h2 className="text-lg font-bold mb-2">Forgot Password</h2>
        <p className="text-xs text-gray-500 mb-4">
          Enter your email to reset password
        </p>

        <input
          type="email"
          placeholder="Enter email"
          className="w-full border p-2 rounded-lg text-sm mb-3"
        />

        <button className="w-full bg-pink-500 text-white py-2 rounded-lg text-sm">
          Send Reset Link
        </button>

        <button
          onClick={onClose}
          className="w-full mt-2 text-xs text-gray-500"
        >
          Close
        </button>

      </div>
    </div>
  );
}
export default ForgotPasswordModal;