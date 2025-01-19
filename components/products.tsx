import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Products() {
  const products = [
    { name: "Brake Pads", image: "/placeholder.svg?height=200&width=200" },
    { name: "Air Filters", image: "/placeholder.svg?height=200&width=200" },
    { name: "Oil Filters", image: "/placeholder.svg?height=200&width=200" },
    { name: "Suspension Parts", image: "/placeholder.svg?height=200&width=200" },
  ]

  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container px-4 md:px-6">
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Products
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative w-40 h-40 mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-lg"></div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="rounded-full object-cover z-10 relative"
                />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-white">{product.name}</h3>
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                View Details
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

