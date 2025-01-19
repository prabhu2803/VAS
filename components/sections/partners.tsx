"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { partners } from '@/components/config/site'
import { SectionHeader } from '@/components/ui/section-header'

export function Partners() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    controls.start({
      x: -width,
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    })
  }, [controls, width])

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Partners"
          description="We sell original spares from these trusted partners"
        />
        <div className="mt-12 relative">
          <motion.div ref={carousel} className="cursor-grab overflow-hidden">
            <motion.div 
              className="flex"
              animate={controls}
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={index}
                  className="min-w-[250px] flex items-center justify-center px-4"
                >
                  <h3 className="fancy-font text-3xl font-bold text-white text-center">
                    {partner.name}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

