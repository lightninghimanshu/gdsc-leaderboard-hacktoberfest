import Link from 'next/link';

const UniversitySelection = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Select Your University</h1>
        <div className="flex flex-col space-y-4">
          <Link legacyBehavior href="/leaderboard">
            <a className="text-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded shadow-md cursor-pointer text-center">
              Uni A
            </a>
          </Link>
          <Link legacyBehavior href="/leaderboard">
            <a className="text-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded shadow-md cursor-pointer text-center">
              Uni B
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UniversitySelection;
