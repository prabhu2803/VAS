"use client"

import Image from 'next/image'
import { SectionHeader } from "@/components/ui/section-header"

const vehicles = [
  { 
    name: "Eicher",
    image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
  },
  {
    name: "Ashok Leyland",
    image: "https://images.pexels.com/photos/2659939/pexels-photo-2659939.jpeg"
  },
  {
    name: "Tata",
    image: "https://images.pexels.com/photos/2804083/pexels-photo-2804083.jpeg"
  },
  {
    name: "Tata ACE",
    image: "https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg"
  },
  {
    name: "Dost",
    image: "https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg"
  }
]

export default function InventoryPage() {
  return (
    <div className="pt-20">
      <SectionHeader
        title="Our Inventory"
        description="We provide parts for a wide range of commercial vehicles"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div key={vehicle.name} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{vehicle.name}</h3>
              </div>
            </div>
          ))}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image
                src="https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg"
                alt="Oil and Grease"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">Oil and Grease</h3>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-2xl font-semibold text-white mb-4">
            Your one-stop shop for all commercial heavy vehicle retail parts and components
          </p>
          <blockquote className="text-xl italic text-gray-300">
            "We never say no until we've given 100% effort to find the right solution for you."
          </blockquote>
        </div>
      </div>
    </div>
  )
}

