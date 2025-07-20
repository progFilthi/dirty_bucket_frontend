"use client";
import { Moon, Sun } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  return (
    <div className="flex items-center justify-between py-2 px-4">
      <h1>Navbar</h1>
      <div className="gap-4 flex">
        {theme === "light" ? (
          <Button onClick={() => setTheme("dark")}>
            <Moon />
          </Button>
        ) : (
          <Button onClick={() => setTheme("light")}>
            <Sun />
          </Button>
        )}
      </div>
    </div>
  );
}
