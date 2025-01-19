"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { AboutContent } from "@/components/sections/about-content"

export default function AboutPage() {
  return (
    <div className="pt-20">
      <SectionHeader
        title="About Vijay Autostores"
        description="Your trusted partner in commercial vehicle parts and services."
      />
      <AboutContent />
    </div>
  )
}

