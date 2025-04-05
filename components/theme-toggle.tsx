"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Switch } from "@/components/ui/switch"
import { FiSun, FiMoon } from "react-icons/fi"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Switch />
  }

  return (
    <div className="flex items-center gap-1">
      <FiSun size={16} className="text-gray-600 dark:text-gray-400" />
      <Switch checked={theme === "dark"} onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <FiMoon size={16} className="text-gray-600 dark:text-gray-400" />
    </div>
  )
}

