import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import clsx from "clsx";
import { Banknote, CalendarCheck2, Folder, List, Settings } from "lucide-react";
import { SidebarLink } from "./sidebar-link";
import { usePathname } from "next/navigation";

export function MenuMobile({ isCollapsed }: { isCollapsed: boolean }) {
  const pathName = usePathname()
  return (
    <header className="md:hidden flex items-center justify-between border-b px-2 md:px-6 h-14 z-10 sticky top-0 bg-white">
      <Sheet>
        <div className="flex items-center gap-4">
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden cursor-pointer">
              <List className="h-5 w-5 cursor-pointer"/>
            </Button>
          </SheetTrigger>

          <h1 className="text-base md:text-lg font-semibold">
            Menu odontoPRO
          </h1>
        </div>

        <SheetContent side="left" className="sm:max-w-xs text-black">
          <SheetTitle>OdontoPRO</SheetTitle>
          <SheetDescription>
            Menu Administrativo
          </SheetDescription>

          <nav className="grid gap-2 text-base pt-5">
            <SidebarLink
              href="/dashboard"
              label="Agendamentos"
              pathname={pathName}
              isCollapsed={isCollapsed}
              icon={<CalendarCheck2 className="w-6 h-6" />}
            />
            <SidebarLink
              href="/dashboard/services"
              label="Serviços"
              pathname={pathName}
              isCollapsed={isCollapsed}
              icon={<Folder className="w-6 h-6" />}
            />
            <SidebarLink
              href="/dashboard/profile"
              label="Configurações"
              pathname={pathName}
              isCollapsed={isCollapsed}
              icon={<Settings className="w-6 h-6" />}
            />
            <SidebarLink
              href="/dashboard/plans"
              label="Planos"
              pathname={pathName}
              isCollapsed={isCollapsed}
              icon={<Banknote className="w-6 h-6" />}
            />
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}