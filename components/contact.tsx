"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section className="section-gradient py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Contact Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-300 mb-6">
                Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 mb-1">Address</p>
                  <p className="text-white">123 Auto Parts Street, Madurai, Tamil Nadu, India</p>
                </div>
                <div>
                  <p className="text-gray-300 mb-1">Phone</p>
                  <p className="text-white">+91 1234567890</p>
                </div>
                <div>
                  <p className="text-gray-300 mb-1">Email</p>
                  <p className="text-white">info@vijayautostores.com</p>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Textarea
                  placeholder="Your Message"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  rows={4}
                />
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

