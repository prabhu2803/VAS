"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappNumber = "+919876543210" // Replace with your actual WhatsApp number
    const message = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Get in Touch
              </h3>
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

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
                <div className="space-y-2">
                  <p className="text-gray-300">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-300">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Your Phone"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                  onChange={handleChange}
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  rows={4}
                  required
                  onChange={handleChange}
                />
                <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Find Us on the Map</h3>
          <div className="max-w-2xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0594485960687!2d78.13745661479533!3d9.925072992901625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1625689961273!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://goo.gl/maps/YOUR_GOOGLE_MAPS_LINK_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              View Larger Map
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

