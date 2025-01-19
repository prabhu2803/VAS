"use client"

import { SectionHeader } from "@/components/ui/section-header"

export default function OnlineRetailPage() {
  return (
    <div className="pt-20">
      <SectionHeader
        title="Online Retail"
        description="Our online store is coming soon. Stay tuned for a seamless shopping experience!"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl mb-8">
            <svg 
              viewBox="0 0 800 600" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              {/* SVG content */}
            </svg>
          </div>
          <div className="text-center space-y-6 max-w-2xl">
            <h2 className="text-3xl font-bold text-white">
              Building Something Amazing
            </h2>
            <p className="text-xl text-gray-300">
              We're working hard to bring you an amazing online shopping experience. 
              Soon you'll be able to browse and order from our full range of commercial vehicle parts and accessories from the comfort of your office or home.
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-400">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-100"></div>
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

