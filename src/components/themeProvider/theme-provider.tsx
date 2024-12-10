'use client'
import { useTheme } from "next-themes";

import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";


export default function ThemeColor() {
  const {theme, setTheme } = useTheme()
  return (
   
    <button
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    aria-label="Toggle Theme"
    className="flex items-center justify-center p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
  >
    {theme === 'dark' ? <MdOutlineLightMode size={24} /> : <MdDarkMode size={24} />}
  </button>
   
  );
}
