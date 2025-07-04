"use client"
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const session = null

  const navItems = [
    { href: "#profissionais", label: "Profissionais" }
  ]

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.href}
          asChild
          className="bg-transparent hover:bg-transparent text-black shadow-none"
          onClick={() => setIsOpen(false)}
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}

      {session ? (
        <Button className="cursor-pointer bg-emerald-500 hover:bg-emerald-500">
          <Link href="/dashboard">
            Acessar clínica
          </Link>
        </Button>
      ) : (<Button className="cursor-pointer bg-emerald-500 hover:bg-emerald-500">Fazer login</Button>)}
    </>
  )

  return (
    <header className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold text-zinc-900"
        >
          Odonto<span className="text-emerald-500">PRO</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-4">
          <NavLinks />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              className="text-black hover:bg-transparent cursor-pointer"
              variant="ghost"
              size="icon"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[240px] sm:w-[300px] z-[9999]">
            <SheetHeader>
              <SheetTitle className="pl-6 mt-8">Menu</SheetTitle>
                <SheetDescription className="pl-6">
                  Veja nossas seções
                </SheetDescription>
            </SheetHeader>
            
            <nav className="flex flex-col mt-4 px-4">
              <NavLinks />
            </nav>

          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}