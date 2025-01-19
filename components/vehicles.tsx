"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Vehicles() {
  const vehicles = [
    { name: "Heavy Trucks", image: "/placeholder.svg?height=300&width=400" },
    { name: "Medium Trucks", image: "/placeholder.svg?height=300&width=400" },
    { name: "Light Trucks", image: "/placeholder.svg?height=300&width=400" },
    { name: "Buses", image: "/placeholder.svg?height=300&width=400" },
  ]

  return (
    <section className="section-gradient py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Vehicle Range
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive range of commercial vehicles designed for performance and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{vehicle.name}</h3>
              <button className="text-blue-400 hover:text-blue-300 transition-colors">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

