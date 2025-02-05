"use client";

import React from "react";
import { SignOutButton, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut } from "lucide-react";

function Logout() {
  const router = useRouter();
  const { signOut } = useClerk(); // Get signOut function

  const handleLogout = async () => {
    await signOut(); // Log out the user
    router.push("/"); // Redirect to homepage
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <Card className="w-full max-w-md p-6 bg-white shadow-2xl rounded-xl">
        <CardHeader className="text-center">
          <LogOut className="w-12 h-12 mx-auto text-purple-500" />
          <CardTitle className="text-2xl font-semibold mt-4">
            Are you sure you want to logout?
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <Button
            className="w-full bg-purple-600 hover:bg-black text-white font-medium py-2 px-4 rounded-lg"
            onClick={handleLogout}
          >
            Yes, Logout
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Logout;
