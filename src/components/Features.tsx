import React from 'react'
import { Sparkles, Eye, Leaf, Shield, TrendingUp } from 'lucide-react'

export default function Features() {
  const features = [
    { title: 'Sharper Features', icon: Sparkles, description: 'Defined jawline and facial structure' },
    { title: 'Faster Results', icon: Eye, description: 'Quick, visible improvements' },
    { title: 'Natural Healing', icon: Leaf, description: 'Body-friendly treatments' },
    { title: 'Clean Protection', icon: Shield, description: 'Safe, medical-grade procedures' },
    { title: 'More Confidence', icon: TrendingUp, description: 'Feel unstoppable every day' }
  ]

  return (
    <section className="bg-medium-teal text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold">
          FINALLY - AESTHETICS THAT MAKE SENSE FOR MEN.
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-cream text-dark-teal p-8 rounded-lg">
          <h3 className="text-3xl font-display font-bold mb-4">
            SUBTLE NATURAL<br />TREATMENTS DESIGNED FOR MEN
          </h3>
          <p className="mb-4 text-lg">
            We deliver discreet, high-impact medically trained treatments that enhance your look without changing who you are.
          </p>
          <p className="mb-6 font-semibold text-xl">Feel Professional. Natural.</p>
          <button className="bg-gold text-dark-teal px-6 py-3 font-semibold hover:bg-opacity-90 transition rounded">
            GET EARLY ACCESS PRICING
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="bg-dark-teal p-6 rounded-lg text-center flex flex-col items-center justify-center hover:bg-opacity-80 transition">
                <Icon size={36} className="mb-3 text-gold" />
                <span className="font-semibold text-sm">{feature.title}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
