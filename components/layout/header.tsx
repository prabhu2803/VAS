"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { navigation } from "@/components/config/site"
import { usePathname } from 'next/navigation'

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const whatsappNumber = "+919876543210" // Replace with your actual WhatsApp number
  const whatsappMessage = encodeURIComponent("I'd like to get a quote for vehicle parts.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <header className="fixed top-0 z-50 w-full bg-[#000020]/90 backdrop-blur-sm border-b border-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg"
                alt="Vijay Autostores Logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <span className="text-xl font-bold text-white">Vijay</span>
                <span className="text-xl font-light text-white">Autostores</span>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm ${
                  pathname === item.href
                    ? "text-blue-400 font-semibold"
                    : "text-gray-300 hover:text-white"
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 border-0">
                Get a Quote
              </Button>
            </a>
          </nav>

          <Button
            variant="ghost"
            className="md:hidden"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="px-4 py-2 space-y-1 bg-[#000020] border-t border-blue-900/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base ${
                    pathname === item.href
                      ? "text-blue-400 font-semibold"
                      : "text-gray-300 hover:text-white"
                  } transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 border-0">
                    Get a Quote
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

