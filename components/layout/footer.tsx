import Link from 'next/link'
import { socialLinks } from '@/components/config/site'

export function Footer() {
  return (
    <footer className="py-8 border-t border-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Vijay Autostores. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

