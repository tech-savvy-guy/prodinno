'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import localFont from 'next/font/local'
import { Button } from '@/components/ui/button'
import { PiLightbulbFilamentFill } from "react-icons/pi";

const technor = localFont({
  src: '../app/fonts/Technor.woff',
  variable: '--font-technor',
  weight: '100 900'
});


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="container mx-auto px-4">
        <nav className="flex items-center h-16">
          <Link href="/" className="flex items-center gap-2">

            <PiLightbulbFilamentFill size={32} className="text-[#FFD700]" />

            <span className={`text-white text-2xl font-bold ${technor.className}`}>ProdInno</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 ml-8">
            <Link href="/" className="text-white hover:text-[#FFD700] transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-[#FFD700] transition-colors">
              Services
            </Link>
            <Link href="/case-studies" className="text-white hover:text-[#FFD700] transition-colors">
              Case Studies
            </Link>
            <Link href="/our-team" className="text-white hover:text-[#FFD700] transition-colors">
              Our Team
            </Link>
            <Link href="/faq" className="text-white hover:text-[#FFD700] transition-colors">
              FAQ
            </Link>
          </div>

          <div className="ml-auto flex items-center">
            <button
              className="md:hidden text-white mr-4 z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <PiLightbulbFilamentFill size={24} /> : <Menu size={24} />}
            </button>
            <Button className="hidden md:inline-flex bg-[#FFD700] text-black hover:bg-[#FFC700] font-medium px-6"
              onClick={() => {
                window.open('https://www.sohamdatta.com', '_blank')
              }}>
              Contact Us
            </Button>
          </div>
        </nav>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <Link
              href="/"
              className="text-white hover:text-[#FFD700] transition-colors py-4"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-[#FFD700] transition-colors py-4"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className="text-white hover:text-[#FFD700] transition-colors py-4"
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="/our-team"
              className="text-white hover:text-[#FFD700] transition-colors py-4"
              onClick={() => setIsOpen(false)}
            >
              Our Team
            </Link>
            <Link
              href="/faq"
              className="text-white hover:text-[#FFD700] transition-colors py-4"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Button className="bg-[#FFD700] text-black hover:bg-[#FFC700] font-medium mt-4"
              onClick={() => {
                window.open('https://www.sohamdatta.com', '_blank')
              }}>
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

