import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-dark-teal text-white py-4 px-6 md:px-12 sticky top-0 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-xl font-display font-bold">eMANate</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li className="cursor-pointer hover:text-gold transition">About</li>
          <li className="cursor-pointer hover:text-gold transition">Services</li>
          <li className="cursor-pointer hover:text-gold transition">Prices</li>
        </ul>
        
        {/* CTA Button */}
        <button className="hidden md:block bg-gold text-dark-teal px-6 py-2 font-semibold hover:bg-opacity-90 transition rounded">
          Early Access
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <ul className="space-y-4">
            <li className="cursor-pointer hover:text-gold transition">About</li>
            <li className="cursor-pointer hover:text-gold transition">Services</li>
            <li className="cursor-pointer hover:text-gold transition">Prices</li>
          </ul>
          <button className="bg-gold text-dark-teal px-6 py-2 font-semibold hover:bg-opacity-90 transition rounded mt-4 w-full">
            Early Access
          </button>
        </div>
      )}
    </header>
  )
}
