"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { status } = useSession();
  return (
    <div className="p-4 flex justify-between items-center shadow-md">
      <Link className="font-bold text-lg text-blue-700" href={"/"}>
        YT
      </Link>
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
      />
      {status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign In
        </button>
      )}
    </div>
  );
}
