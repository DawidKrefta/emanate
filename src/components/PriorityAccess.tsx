import React from 'react'
import { Mail, ArrowRight } from 'lucide-react'

export default function PriorityAccess() {
  return (
    <section className="bg-cream text-dark-teal py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-display font-bold mb-4">PRIORITY ACCESS +</h2>
        <p className="text-lg mb-8 text-gray-700">Safety and quality are in your best interests.</p>
        <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full pl-12 pr-6 py-4 border-2 border-dark-teal rounded focus:outline-none focus:border-gold transition"
            />
          </div>
          <button 
            type="submit" 
            className="bg-gold text-dark-teal px-8 py-4 font-semibold hover:bg-opacity-90 transition whitespace-nowrap rounded flex items-center justify-center gap-2"
          >
            Get Early Access
            <ArrowRight size={20} />
          </button>
        </form>
        <p className="text-sm text-gray-600">
          Join the waitlist for exclusive early access pricing and priority booking.
        </p>
      </div>
    </section>
  )
}
