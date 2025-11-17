import React from 'react'

export default function About() {
  return (
    <section className="bg-dark-teal text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
          THE FIRST MEN'S AESTHETICS CLINIC BECAUSE
        </h2>
        <p className="text-2xl text-gold font-semibold">APPEARANCE = CONFIDENCE.</p>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-3xl font-display font-bold mb-6">
            A SPACE MADE FOR MEN<br />WHO WANT RESULTS,<br />NOT RITUALS.
          </h3>
          <ul className="space-y-3 mb-8">
            <li>Modern. Alo-set environment</li>
            <li>Fast functional appointments</li>
            <li>No spa vibes.</li>
            <li>No judgement</li>
            <li>Professional, medically overseen</li>
          </ul>
          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-5 h-5" />
              <span>Medically Led</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-5 h-5" />
              <span>Natural Results</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-5 h-5" />
              <span>Discreet</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-5 h-5" />
              <span>Male Focused</span>
            </label>
          </div>
        </div>
        <div className="bg-medium-teal rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl font-semibold mb-4">A SPACE MADE FOR MEN WHO WANT RESULTS.</p>
            <ul className="space-y-2">
              <li>✓ Medically Led</li>
              <li>✓ Natural Results</li>
              <li>✓ Discreet</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
