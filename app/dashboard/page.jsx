"use client";

import { RedirectToSignIn, useAuth, UserButton } from "@clerk/nextjs";
import AddCourse from "./_components/AddCourse";
import UserCourseList from "./_components/UserCourseList";

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
  return ( 
    <div>
      <AddCourse/> 
      
      {/* List of courses */}
      <UserCourseList/>
    </div>
)
  
}
