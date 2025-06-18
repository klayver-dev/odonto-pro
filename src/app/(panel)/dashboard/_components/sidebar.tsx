"use client"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import clsx from "clsx"
import { MenuIcons } from "./menu-icons"
import { MenuMobile } from "./menu-mobile"
import { SidebarDesktop } from "./sidebar-desktop"
import { Logo } from "./logo"

export function SidebarDashboard({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <div className="flex min-h-screen w-full">

      <aside className={clsx("flex flex-col border-r bg-background transition-all duration-100 p-4 h-full", {
        "w-20": isCollapsed,
        "w-64": !isCollapsed,
        "hidden md:flex md:fixed": true
      })}>

        <Logo isCollapsed={isCollapsed} />

        <Button
          className="bg-gray-200 hover:bg-gray-300 text-zinc-700 self-end cursor-pointer mb-2"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight className="w-12 h-12" /> : <ChevronLeft className="w-12 h-12" />}
        </Button>

        {/* Mostrar quando a sidebar estiver recolhida o menu apenas com icones sem escrita */}
        {isCollapsed && (
          <MenuIcons isCollapsed={isCollapsed} />
        )}

        <SidebarDesktop isCollapsed={isCollapsed} />
      </aside>

      {/* Menu mobile */}
      <div className={clsx("flex flex-1 flex-col transition-all duration-300", {
        "md:ml-20": isCollapsed,
        "md:ml-64": !isCollapsed
      })}>
        <MenuMobile isCollapsed={isCollapsed} />
        <main className="flex-1 py-4 px-2 md:p-6">
          {children}
        </main>
      </div>

    </div>
  )
}