"use client"
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LoginButton from '../components/LoginButton';

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Conditional rendering based on user session */}
      {session ? (
        // If the user is logged in, show the Logout button
        <button
          className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded absolute top-4 right-4 mb-4 sm:mb-0"
          onClick={() => signOut()}
        >
          Logout
        </button>
      ) : (
        // If the user is not logged in, show the LoginButton component
        <LoginButton />
      )}

      {/* Main content container */}
      <div className="bg-white p-8 rounded-lg shadow-md text-center relative mt-16 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">Welcome, {session?.user?.name}!</h1>
        <div className="relative mb-8">
          {/* Display the user's profile image */}
          <Image
            src={session?.user?.image}
            alt="Profile Image"
            height={100}
            width={100}
            className="rounded-full mx-auto"
          />
        </div>
        <p className="text-gray-600">You have successfully logged in.</p>
      </div>
    </div>
  );
};

export default Dashboard;
