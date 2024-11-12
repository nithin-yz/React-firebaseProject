import React from 'react';
import { useNavigate } from 'react-router-dom';
import totalxpic from "./../assets/images/cropped-WhatsApp-Image-2023-05-20-at-11.37 1-1.png"
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../store/store';
// import { signOut } from '../store/slices/authSlice';
import toast from 'react-hot-toast';

const Home = () => {
  const navigate = useNavigate();
//   const dispatch = useDispatch<AppDispatch>();
//   const { user } = useSelector((state: RootState) => state.auth);

  const handleSignOut = async () => {
    try {
      await dispatch(signOut()).unwrap();
      navigate('/login');
      toast.success('Successfully logged out!');
    } catch (error) {
      toast.error('Failed to log out');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col  items-center p-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-end mb-[250px]">
          <img src={totalxpic} alt="TotalX" className="h-18 w-18" />
        </div>

        {/* Phone Number Display */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {/* {user?user.phoneNumber :"" || '91 9876543210'} */}
          </h2>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleSignOut}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Home;