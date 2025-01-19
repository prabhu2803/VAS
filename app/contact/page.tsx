"use client"

import { Contact } from "@/components/sections/contact"
import { SectionHeader } from "@/components/ui/section-header"

export default function ContactPage() {
  return (
    <div className="pt-20">
      <SectionHeader
        title="Contact Us"
        description="Get in touch with us for all your commercial vehicle needs."
      />
      <Contact />
    </div>
  )
}

