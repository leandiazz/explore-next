"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

function ToggleTheme() {
  const [isDarkMode, setIsDarkMode] = useState<Boolean>(() => document.body.classList.contains("dark"));

  function handleToggle() {
    document.startViewTransition(() => {
      document.body.classList.toggle("dark");
      setIsDarkMode(document.body.classList.contains("dark"));
    });
  }

  return (
    <button type="button" onClick={handleToggle}>
      {isDarkMode ? "set light theme" : "set dark theme"}
    </button>
  );
}

export default dynamic(() => Promise.resolve(ToggleTheme), {
  ssr: false,
  loading: () => <span>Loading</span>,
});
