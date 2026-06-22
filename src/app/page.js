import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Works from '@/components/Works'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Process from '@/components/Process'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <Pricing />
      <Testimonials />
      <Process />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
