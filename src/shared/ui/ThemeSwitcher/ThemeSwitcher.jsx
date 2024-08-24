"use client";
import { IconButton, Tooltip } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Tooltip
      title={
        theme === "dark" ? "Включить светлую тему" : "Включить темную тему"
      }
    >
      <IconButton
        className="border shadow-gray-300 dark:shadow-md dark:shadow-slate-200 shadow-sm drop-shadow border-gray-300 border-solid bg-white dark:bg-[#0f1214b3] dark:hover:bg-slate-100 hover:bg-[#0f1214b3] "
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <LightModeIcon color="info" />
        ) : (
          <DarkModeIcon color="info" />
        )}
      </IconButton>
    </Tooltip>
  );
}
