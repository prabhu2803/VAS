"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

export function AboutContent() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg"
                alt="Mr. Vijay Kumar, Founder of Vijay Autostores"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Mr. Vijay Kumar</h3>
                <p className="text-lg text-gray-200">Founder, Vijay Autostores</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              Vijay Autostores has been a leading provider of commercial vehicle parts and services in Madurai for over two decades. Our commitment to quality, reliability, and customer satisfaction has made us the go-to destination for truck and bus owners across the region.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Founded in 2000 by Mr. Vijay Kumar, our company has grown from a small parts shop to a comprehensive service center for all types of commercial vehicles. We pride ourselves on our extensive inventory of genuine parts, our team of expert mechanics, and our dedication to keeping your vehicles on the road.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 italic text-xl text-gray-200">
              "Our goal is to minimize your downtime and maximize your productivity. We're not just a parts supplier; we're your partner in success."
            </blockquote>
            <p className="text-xl text-gray-300 leading-relaxed">
              At Vijay Autostores, we understand that time is money in the transportation industry. That's why we offer quick turnaround times, emergency services, and a mobile workshop for on-site repairs.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We aim to be the most trusted and reliable partner for commercial vehicle owners and operators in South India, providing unparalleled service, quality parts, and innovative solutions that keep businesses moving forward.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

