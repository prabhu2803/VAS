"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7"
        alt="Commercial Vehicles Fleet"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={90}
      />
      
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative h-full container mx-auto px-4 pt-24">
        <div className="flex flex-col justify-center min-h-screen max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg text-blue-400 mb-2">Commercial Vehicle Parts</h2>
            <h1 className="h1 text-white mb-6">
              Your Trusted Partner in Vehicle Maintenance
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Providing quality parts and expert service for all your commercial vehicle needs in Madurai and beyond.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/inventory">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                  Explore Our Range
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

