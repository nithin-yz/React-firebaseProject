import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import totalxpic from "./../assets/images/cropped-WhatsApp-Image-2023-05-20-at-11.37 1-1.png"
import loginpic from "./../assets/images/Frame 4.png"
import * as Yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../store/store';
// import { requestOTP, verifyOTP } from '../store/slices/authSlice';
import toast from 'react-hot-toast';

const Login = () => {
  const [showOTP, setShowOTP] = useState(false);
//   const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate();
//   const { loading, verificationId } = useSelector((state: RootState) => state.auth);

  const phoneFormik = useFormik({
    initialValues: {
      phone: '',
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
    }),
    onSubmit: async (values) => {
      try {
        // await dispatch(requestOTP('+91' + values.phone)).unwrap();
        setShowOTP(true);
        toast.success('OTP sent successfully!');
      } catch (err) {
        toast.error('Failed to send OTP');
      }
    },
  });

  const otpFormik = useFormik({
    initialValues: {
      otp: '',
    },
    validationSchema: Yup.object({
      otp: Yup.string()
        .matches(/^[0-9]{6}$/, 'OTP must be 6 digits')
        .required('OTP is required'),
    }),
    onSubmit: async (values) => {
      try {
        if (!verificationId) throw new Error('No verification ID');
        await dispatch(verifyOTP({ verificationId, otp: values.otp })).unwrap();
        navigate('/home');
        toast.success('Successfully logged in!');
      } catch (err) {
        toast.error('Invalid OTP');
      }
    },
  });

  return (
    <div className="min-h-screen flex ">
      {/* Left Section */}
      <div className="w-1/2 p-6 flex flex-col gap-y-10 items-center ">
        <div className="mb-10 mt-10 mr-28 ">
          <img src={totalxpic} alt="TotalX" className="h-18 w-18" />
        </div>
        
        <div className="max-w-md w-full mx-auto ml-[280px] mt-[20px]">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Login</h1>
          <p className="text-gray-600 mb-8">Login to access your travelwise account</p>

          <form onSubmit={phoneFormik.handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Enter mobile number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your mobile number"
                {...phoneFormik.getFieldProps('phone')}
              />
              {phoneFormik.touched.phone && phoneFormik.errors.phone && (
                <p className="mt-2 text-sm text-red-600">{phoneFormik.errors.phone}</p>
              )}
            </div>

            <button
              type="submit"
            //   disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {/* {loading ? 'Sending OTP...' : 'Get OTP'} */}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="w-1/2  flex items-center justify-center p-8">
        <img
          src={loginpic}
          alt="Security Illustration"
          className="max-w-md w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Login;