import React from 'react'

export default function PriorityAccess() {
  return (
    <section className="bg-cream text-dark-teal py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-display font-bold mb-8">PRIORITY ACCESS +</h2>
        <p className="text-lg mb-8">Safety things in your best interests you?</p>
        <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <input 
            type="email" 
            placeholder="Your email" 
            className="flex-1 px-6 py-4 border-2 border-dark-teal rounded focus:outline-none focus:border-gold"
          />
          <button 
            type="submit" 
            className="bg-gold text-dark-teal px-8 py-4 font-semibold hover:bg-opacity-90 transition whitespace-nowrap"
          >
            Get Early Access
          </button>
        </form>
      </div>
    </section>
  )
}
