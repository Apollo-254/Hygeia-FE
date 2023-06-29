"use client";
import NavBar from "@/app/components/NavBar";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <NavBar />
      <div className="h-screen pt-20 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <span>hi {session?.user?.email}</span>
          <p>have no Appointment</p>
        </div>
      </div>
    </>
  );
}
