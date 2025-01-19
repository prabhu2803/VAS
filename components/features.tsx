"use client"

import { motion } from "framer-motion"
import { Shield, PenToolIcon as Tool, Clock, Award } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Genuine Parts",
      description: "Original equipment quality parts for optimal performance"
    },
    {
      icon: Tool,
      title: "Expert Service",
      description: "Professional guidance and support for all your needs"
    },
    {
      icon: Clock,
      title: "Quick Delivery",
      description: "Fast and reliable delivery to minimize downtime"
    },
    {
      icon: Award,
      title: "Warranty Support",
      description: "Comprehensive warranty on all our products"
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions for all your commercial vehicle needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-100">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

