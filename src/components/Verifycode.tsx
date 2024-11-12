import React from "react";
import loginpic from "./../assets/images/Frame 4.png";
import logo from "./../assets/images/cropped-WhatsApp-Image-2023-05-20-at-11.37 1-1.png"; // Assuming you have a logo image

const VerifyCode: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center  rounded-lg p-12 md:p-16 max-w-6xl w-full h-auto ">
        
        {/* Left Side: Logo and Form Section */}
        <div className="md:w-1/2 w-full px-6 md:px-12 flex flex-col justify-end items-center   border-red-800">
          {/* Logo Inside Form Section */}
          <div className="mb-20  ">
            <img src={logo} alt="Logo" className="h-18 w-18  mr-80" />
          </div>
          
          <a href="#" className="text-sm text-gray-500 hover:underline inline-flex items-center mb-6">
            <svg
              className="h-4 w-4 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <p className="">Back to login</p>
          </a>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 ">Verify code</h2>
          <p className="text-gray-500 mb-8">An authentication code has been sent to your email.</p>
          <form action="#" className="space-y-6 w-full mb-64">
            <input
              type="text"
              placeholder="Enter Code"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="text-sm">
              <span className="text-gray-500">Didn't receive a code?</span>
              <a href="#" className="text-indigo-600 hover:underline ml-1">Resend</a>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white rounded-md py-3 font-semibold hover:bg-indigo-700"
            >
              Verify
            </button>
          </form>
        </div>

        {/* Right Side: Illustration Section */}
        <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center">
          <div className="relative ">
            <img
              src={loginpic}
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
