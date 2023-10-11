import React from 'react';
import Image from 'next/image';
import NextLogo from '../../../public/next.svg';
import { useRouter } from 'next/navigation';

const Header = ({ username }) => {
  const router = useRouter();

  const handleParticipateClick = () => {
    router.push('/participate');
  };

  return (
    <header className="py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src={NextLogo} alt="Logo" width={100} height={100} priority />
          <h1 className="text-3xl font-bold text-gray-800 ml-4">Header Title</h1>
        </div>
        {username === null ? (
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleParticipateClick}
          >
            Participate
          </button>
        )
          : (
            <div className="flex items-center">
              <span className="text-gray-800 mr-2">Welcome, {username}</span>
            </div>
          )}

      </div>
    </header>
  );
};

export default Header;
