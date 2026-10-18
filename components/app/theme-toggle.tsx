"use client";

import { useState, useEffect } from "react";
import { Toggle } from "../ui/toggle";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <Toggle
      size="lg"
      variant="default"
      className="fixed right-10 top-10 rounded-full bg-primary-foreground hover:bg-primary-foreground/80"
      onClick={() => setDark(!dark)}
    >
      {dark ? <Moon /> : <Sun />}
    </Toggle>
  );
}

export default ThemeToggle;
