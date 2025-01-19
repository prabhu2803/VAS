"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, PenToolIcon as Tool, Clock, Award } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Genuine Parts",
      description: "Original equipment quality parts for optimal performance",
      image: "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg"
    },
    {
      icon: Tool,
      title: "Expert Service",
      description: "Professional guidance and support for all your needs",
      image: "https://images.pexels.com/photos/4489734/pexels-photo-4489734.jpeg"
    },
    {
      icon: Clock,
      title: "Quick Delivery",
      description: "Fast and reliable delivery to minimize downtime",
      image: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg"
    },
    {
      icon: Award,
      title: "Warranty Support",
      description: "Comprehensive warranty on all our products",
      image: "https://images.pexels.com/photos/4489742/pexels-photo-4489742.jpeg"
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
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
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <feature.icon className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

