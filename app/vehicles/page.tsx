"use client"

import { Vehicles } from "@/components/sections/vehicles"
import { SectionHeader } from "@/components/ui/section-header"

export default function VehiclesPage() {
  return (
    <div className="pt-20">
      <SectionHeader
        title="Our Vehicle Range"
        description="Discover our comprehensive range of commercial vehicles designed for performance and reliability."
      />
      <Vehicles />
    </div>
  )
}

