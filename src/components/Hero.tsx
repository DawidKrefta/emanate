import React from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-dark-teal text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
            LOOK GOOD.<br />FEEL UNSTOPPABLE.
          </h1>
          <p className="text-lg mb-6 text-gray-300">
            The first men's aesthetics clinic - because appearance means confidence.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <CheckCircle2 className="mr-3 text-gold" size={20} />
              <span>Natural aesthetic results</span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-3 text-gold" size={20} />
              <span>No fent</span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-3 text-gold" size={20} />
              <span>Medically led</span>
            </li>
          </ul>
          <button className="bg-gold text-dark-teal px-8 py-4 font-semibold text-lg hover:bg-opacity-90 transition rounded">
            JOIN THE EARLY ACCESS LIST
          </button>
        </div>
        <div className="bg-medium-teal rounded-lg h-96 flex items-center justify-center overflow-hidden">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">💪</div>
            <p className="text-gray-400">Hero Image</p>
          </div>
        </div>
      </div>
    </section>
  )
}
