import React from 'react'

export default function Header() {
  return (
    <header className="bg-dark-teal text-white py-4 px-6 md:px-12">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-xl font-display font-bold">eMANate</div>
        <ul className="hidden md:flex space-x-8">
          <li className="cursor-pointer hover:text-gold transition">About</li>
          <li className="cursor-pointer hover:text-gold transition">Services</li>
          <li className="cursor-pointer hover:text-gold transition">Prices</li>
        </ul>
        <button className="bg-gold text-dark-teal px-6 py-2 font-semibold hover:bg-opacity-90 transition">
          Early Access
        </button>
      </nav>
    </header>
  )
}
