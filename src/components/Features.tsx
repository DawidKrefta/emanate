import React from 'react'

export default function Features() {
  const features = [
    { title: 'Sharper Features', icon: '✦' },
    { title: 'Faster Over', icon: '👁' },
    { title: 'Heal True', icon: '🌱' },
    { title: 'Ruby Clean Protection', icon: '✚' },
    { title: 'More Confidence', icon: '💎' }
  ]

  return (
    <section className="bg-medium-teal text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold">
          FINALLY - AESTHETICS THAT MAKE SENSE FOR MEN.
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-cream text-dark-teal p-8 rounded-lg">
          <h3 className="text-2xl font-display font-bold mb-4">
            SUBTLE NATURAL<br />TREATMENTS DESIGNED FOR MEN
          </h3>
          <p className="mb-4">
            oil Ahere delivers discreet, high impact medically trained increases your look without changing who you are
          </p>
          <p className="mb-6 font-semibold">Feel Professional. Natural</p>
          <button className="bg-gold text-dark-teal px-6 py-3 font-semibold hover:bg-opacity-90 transition">
            GET EARLY ACCESS PRICING
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-dark-teal p-6 rounded-lg text-center flex flex-col items-center justify-center">
              <span className="text-3xl mb-2">{feature.icon}</span>
              <span className="font-semibold">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
