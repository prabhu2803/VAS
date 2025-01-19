"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeader } from "@/components/ui/section-header"
import { vehicles } from "@/components/config/site"
import { Button } from "@/components/ui/button"

export function Vehicles() {
  return (
    <section id="vehicles" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Vehicle Range"
          description="Discover our comprehensive range of commercial vehicles designed for performance and reliability."
        />

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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{vehicle.name}</h3>
              <p className="text-gray-300 mb-4">{vehicle.description}</p>
              <Button
                variant="ghost"
                className="text-blue-400 hover:text-blue-300 p-0 hover:bg-transparent"
              >
                Learn More →
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

