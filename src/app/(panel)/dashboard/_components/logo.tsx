import Image from "next/image";
import logoOdonto from "../../../../../public/logo-odonto.png"

export function Logo({ isCollapsed }: { isCollapsed: boolean}) {
  return (
    <div className="mb-6 mt-4">
      {!isCollapsed && 
        <Image
        src={logoOdonto}
        alt="Logo do odontopro"
        priority
        quality={100}
        style={{
          width: "auto",
          height: "auto"
        }}
      />
      }
    </div>
  )
}