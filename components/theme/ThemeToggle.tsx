import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  return (
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
  );
}
