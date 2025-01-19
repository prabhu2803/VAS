import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeader({
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="h2 text-gradient mb-4">{title}</h2>
      {description && (
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}

