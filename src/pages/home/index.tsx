import Hero from './hero'
import ToolsCarousel from '@/components/layout/ToolsCarousel'


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Carousel under hero */}
      <section id="tools">
        <ToolsCarousel />
      </section>

      {/* Optional spacing */}
      <div className="py-8" />
    </>
  )
}
