"use client"

import { Features } from "@/components/sections/features"
import { SectionHeader } from "@/components/ui/section-header"

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <SectionHeader
        title="Our Services"
        description="We provide comprehensive solutions for all your commercial vehicle needs."
      />
      <Features />
    </div>
  )
}

