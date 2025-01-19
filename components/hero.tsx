"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Commercial Vehicles"
        fill
        className="object-cover"
        priority
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-4">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg text-blue-400 mb-2">Commercial Vehicles</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Standing Strong
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Your trusted partner in commercial vehicle parts. Quality products for every need.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors">
                Explore Our Range
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

