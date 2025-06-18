import { usePathname } from "next/navigation";
import { SidebarLink } from "./sidebar-link";
import { Banknote, CalendarCheck2, Folder, Settings } from "lucide-react";

{/* Mostrar quando a sidebar estiver recolhida o menu apenas com icones sem escrita */}
export function MenuIcons({ isCollapsed }: { isCollapsed: boolean }) {
    const pathName = usePathname()
  return (
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
  )
}