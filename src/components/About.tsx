import React from 'react'
import { Check, Stethoscope, Leaf, Lock, Users } from 'lucide-react'

export default function About() {
  const checkpoints = [
    { icon: Stethoscope, label: 'Medically Led' },
    { icon: Leaf, label: 'Natural Results' },
    { icon: Lock, label: 'Discreet' },
    { icon: Users, label: 'Male Focused' }
  ]

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
          <ul className="space-y-3 mb-8 text-gray-300">
            <li className="flex items-center">
              <Check className="mr-2 text-gold" size={20} />
              Modern, professional environment
            </li>
            <li className="flex items-center">
              <Check className="mr-2 text-gold" size={20} />
              Fast, functional appointments
            </li>
            <li className="flex items-center">
              <Check className="mr-2 text-gold" size={20} />
              No spa vibes
            </li>
            <li className="flex items-center">
              <Check className="mr-2 text-gold" size={20} />
              No judgement
            </li>
            <li className="flex items-center">
              <Check className="mr-2 text-gold" size={20} />
              Professional, medically overseen
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            {checkpoints.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="flex items-center space-x-3 bg-medium-teal p-4 rounded-lg">
                  <Icon className="text-gold" size={24} />
                  <span className="font-semibold">{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="bg-medium-teal rounded-lg p-8 flex flex-col items-center justify-center text-center">
          <div className="text-6xl mb-6">🏢</div>
          <p className="text-2xl font-display font-bold mb-6">A SPACE MADE FOR MEN WHO WANT RESULTS.</p>
          <ul className="space-y-3 text-left">
            <li className="flex items-center">
              <Check className="mr-2 text-gold" size={20} />
              Medically Led
            </li>
            <li className="flex items-center">
              <Check className="mr-2 text-gold" size={20} />
              Natural Results
            </li>
            <li className="flex items-center">
              <Check className="mr-2 text-gold" size={20} />
              Discreet
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
