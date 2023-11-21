"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react";
import { useRouter } from 'next/navigation';


const LoginButton = () => {
  const {data: session} = useSession();
  const router = useRouter();

  useEffect(() => {
    // If the user is already authenticated, redirect to the dashboard page
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);
  
  
  return (
    <div className="flex h-screen items-center justify-center">
      {/* Display the login button only if the user is not authenticated */}
      {!session && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => signIn()}
        >
          Login with Google
        </button>
      )}
    </div>
  );
};

export default LoginButton;
