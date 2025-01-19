import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#000020] border-b border-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">Vijay</span>
              <span className="text-2xl font-light text-white">Autostores</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {["Vehicles", "Services", "About Us", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Get a Quote
            </Button>
          </nav>

          <Button variant="ghost" className="md:hidden" size="icon">
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>
    </header>
  )
}

