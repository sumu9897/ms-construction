import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorbg from '../../assets/error/error.jpg';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center text-center text-white"
      style={{ backgroundImage: `url(${errorbg})` }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-lg">
        <h2 className="text-6xl font-bold uppercase text-secondary mb-6">Page Not Found</h2>
        <p className="text-lg mb-8">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-secondary text-black px-6 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-secondary transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
