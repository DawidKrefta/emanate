import React from 'react'

export default function Hero() {
  return (
    <section className="bg-dark-teal text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
            LOOK GOOD.<br />FEEL UNSTOPPABLE.
          </h1>
          <p className="text-lg mb-6">
            The first men's aesthetics clinic - because appearance means confidence.
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center">
              <span className="mr-2">•</span> Natural aesthetic results
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> No fent
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Medically led
            </li>
          </ul>
          <button className="bg-gold text-dark-teal px-8 py-4 font-semibold text-lg hover:bg-opacity-90 transition">
            JOIN THE EARLY ACCESS LIST
          </button>
        </div>
        <div className="bg-medium-teal rounded-lg h-96 flex items-center justify-center">
          <span className="text-gray-400">Image placeholder</span>
        </div>
      </div>
    </section>
  )
}
