"use client";

import { RedirectToSignIn, useAuth, UserButton } from "@clerk/nextjs";
import AddCourse from "./_components/AddCourse";

export default function Dashboard() {
  const { isLoaded, isSignedIn } = useAuth();

  // Wait for the auth state to load
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // Redirect to sign-in if the user is not signed in
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  // Render the dashboard content if authenticated
  return ( <AddCourse/> )
  
}
