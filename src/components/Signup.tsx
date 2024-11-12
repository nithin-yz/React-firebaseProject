import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import totalxpic from "./../assets/images/cropped-WhatsApp-Image-2023-05-20-at-11.37 1-1.png"
import bannerpic from "./../assets/images/Rectangle 20-2.png"
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      terms: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, 'First name must be at least 2 characters')
        .required('First name is required'),
      lastName: Yup.string()
        .min(2, 'Last name must be at least 2 characters')
        .required('Last name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      terms: Yup.boolean()
        .oneOf([true], 'You must accept the terms and privacy policy')
        .required('You must accept the terms and privacy policy'),
    }),
    onSubmit: async (values) => {
      try {
        console.log('Registration values:', values);
        toast.success('Registration successful!');
        navigate('/home');
      } catch (error) {
        toast.error('Registration failed');
      }
    },
  });

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Illustration */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <img
          src={bannerpic}
          alt="Registration Illustration"
          className="max-w-md w-full h-5/6 object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="md:w-1/3 sm:md-1/2 p-8 flex flex-col">
        <div className="mb-12 flex justify-end">
          <img src={totalxpic} alt="TotalX" className="h-18 w-18 mr-1" />
        </div>
        
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Sign up</h1>
          <p className="text-gray-600 mb-8">Let's get you all set up so you can access your personal account.</p>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your first name"
                  {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <p className="mt-2 text-sm text-red-600">{formik.errors.firstName}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your last name"
                  {...formik.getFieldProps('lastName')}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className="mt-2 text-sm text-red-600">{formik.errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.email}</p>
              )}
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                {...formik.getFieldProps('terms')}
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to all the{' '}
                <a href="#" className="text-blue-600 hover:underline">Terms</a>
                {' '}and{' '}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policies</a>
              </label>
            </div>
            {formik.touched.terms && formik.errors.terms && (
              <p className="text-sm text-red-600">{formik.errors.terms}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create account
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;