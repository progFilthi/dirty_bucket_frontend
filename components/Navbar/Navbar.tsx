"use client";
import React from "react";
import ThemeToggle from "../theme/ThemeToggle";
import Link from "next/link";

const Navlinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Beats",
    href: "/beats",
  },
  {
    label: "Cart",
    href: "/cart",
  },
];
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-2 px-4">
      <div className="flex items-center justify-center gap-2">
        <Link href={"/"}>DirtyBucket.</Link>
      </div>
      <ul className="flex items-center justify-center gap-8 text-sm">
        {/* <li>Dashboard</li>
        <li>Beats</li>
        <li>Cart</li> */}
        {Navlinks.map((link) => {
          return (
            <Link href={link.href} key={link.href}>
              <li>{link.label}</li>
            </Link>
          );
        })}
        <ThemeToggle />
      </ul>
    </nav>
  );
}
