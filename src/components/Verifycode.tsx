import React from "react";

const VerifyCode: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 md:p-12 max-w-4xl">
        {/* Left Side: Form Section */}
        <div className="md:w-1/2 w-full px-4">
          <a href="#" className="text-sm text-gray-500 hover:underline inline-flex items-center mb-4">
            <svg
              className="h-4 w-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to login
          </a>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Verify code</h2>
          <p className="text-gray-500 mb-6">An authentication code has been sent to your email.</p>
          <form action="#" className="space-y-4">
            <input
              type="text"
              placeholder="Enter Code"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="text-sm">
              <span className="text-gray-500">Didn't receive a code?</span>
              <a href="#" className="text-indigo-600 hover:underline ml-1">Resend</a>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white rounded-md py-2 font-semibold hover:bg-indigo-700"
            >
              Verify
            </button>
          </form>
        </div>

        {/* Right Side: Illustration Section */}
        <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center">
          <div className="relative w-48 h-48 md:w-60 md:h-60">
            <img
              src="https://via.placeholder.com/150"
              alt="Illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
