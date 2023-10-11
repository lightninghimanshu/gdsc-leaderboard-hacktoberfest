import Head from 'next/head';
import Image from 'next/image';
// import { signIn } from 'next-auth/client';

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to Hacktoberfest
        </h1>

        <p className="mt-3 text-2xl">
          Sign in with GitHub to get started
        </p>

        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-md mt-6"
          // onClick={() => signIn('github')}
        >
          Sign in with GitHub
        </button>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="h-4 ml-2">
            GDSC logo
          </span>
        </a>
      </footer>
    </div>
  );
}
