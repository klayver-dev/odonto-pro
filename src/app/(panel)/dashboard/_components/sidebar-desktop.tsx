import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { SidebarLink } from "./sidebar-link";
import { usePathname } from "next/navigation";
import { Banknote, CalendarCheck2, Folder, Settings } from "lucide-react";

export function SidebarDesktop({ isCollapsed }: { isCollapsed: boolean }) {
  const pathName = usePathname()
  return (
    <Collapsible open={!isCollapsed}>
      <CollapsibleContent>
        <nav className="flex flex-col gap-1 overflow-hidden">
          <span className="text-sm text-gray-500 font-medium mt-1 uppercase">
            Painel
          </span>

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
          
          <span className="text-sm text-gray-500 font-medium mt-1 uppercase">
            Configurações
          </span>

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
      </CollapsibleContent>
    </Collapsible>
  )
}