import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
