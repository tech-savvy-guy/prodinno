import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Benefits from '@/components/benefits'
import CaseStudy from '@/components/case-study'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import Footer from '@/components/footer'
import CursorEffect from '@/components/cursor-effect'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <CursorEffect />
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <CaseStudy />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

