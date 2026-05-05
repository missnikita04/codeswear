export default function TestComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Tailwind CSS Test
        </h1>
        <p className="text-gray-700 mb-6">
          If this card looks styled, Tailwind CSS is working correctly.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
          Click Me
        </button>
      </div>
    </div>
  );
}