import { Hero } from "@/components/sections/hero"
import { Partners } from "@/components/sections/partners"
import { Features } from "@/components/sections/features"

export default function Home() {
  return (
    <main className="site-gradient">
      <Hero />
      <Partners />
      <Features />
    </main>
  )
}

