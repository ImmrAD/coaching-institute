"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
   <nav className="flex justify-between items-center px-8 py-4 bg-[var(--color-light-cream)] shadow-md">
  <h1 className="text-2xl font-bold text-[var(--color-dark-brown)]">
    Durga & P K Classes
  </h1>

  <div className="flex gap-6 items-center">
    <Link href="/">Home</Link>
    <Link href="/courses">Courses</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>

    <Button className="bg-gradient-to-r from-[#ffc926] to-[#D23D2D] text-white">
      Login
    </Button>
  </div>
</nav>

  );
}
