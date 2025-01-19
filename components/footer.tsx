import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-900">
      <div className="container px-4 md:px-6">
        <motion.p 
          className="text-center text-sm text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          © 2023 Vijay Autostores. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

