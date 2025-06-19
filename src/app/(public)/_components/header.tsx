"use client"
import clsx from "clsx"
import { useState } from "react"
import { Logo } from "./logo"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
            <span className="ml-3 text-2xl font-bold text-gray-800">Odonto<span className="text-teal-500">PRO</span></span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              id="menu-toggle" 
              className="text-gray-600 focus:outline-none" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                // Ícone "X" (fechar)
                <svg className="w-6 h-6 fill-current cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
                </svg>
              ) : (
                // Ícone "Barras" (menu)
                <svg className="w-6 h-6 fill-current cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                </svg>
              )}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link text-gray-700 hover:text-teal-500 font-medium">Home</a>
            <a href="#features" className="nav-link text-gray-700 hover:text-teal-500 font-medium">Funcionalidades</a>
            <a href="#pricing" className="nav-link text-gray-700 hover:text-teal-500 font-medium">Preços</a>{/* 
            <a href="#contact" className="nav-link text-gray-700 hover:text-teal-500 font-medium">Contato</a> */}
            <Link
              href="/dashboard"
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300"
            >
              Teste Grátis
            </Link>
          </nav>
        </div>
        
        {/* --- CORREÇÃO PRINCIPAL: Lógica do Menu Mobile --- */}
        <div 
          className={clsx(
            "md:hidden mt-4 pb-4 overflow-hidden transition-all duration-300 ease-in-out", 
            {
              'max-h-96': isOpen, // Se isOpen for true, define uma altura máxima para exibir o menu
              'max-h-0 hidden': !isOpen, // Se isOpen for false, a altura é 0 e o menu fica oculto
            }
          )}>
            <a href="#home" className="block py-2 text-gray-700 hover:text-teal-500">Home</a>
            <a href="#features" className="block py-2 text-gray-700 hover:text-teal-500">Funcionalidades</a>
            <a href="#pricing" className="block py-2 text-gray-700 hover:text-teal-500">Preços</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-teal-500">Contato</a>
            <a href="#demo" className="block mt-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium text-center transition duration-300">Teste Grátis</a>
        </div>
      </div>
    </header>
  )
}