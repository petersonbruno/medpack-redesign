// app/page.js
import Header from './components/static/Header'
import HeroSection from './components/static/HeroSection'
import PharmacySection from './components/static/PharmacySection'
import FeaturesSection from './components/static/FeaturesSection'
import TrustedBy from './components/static/TrustedBy'
import FAQAccordion from './components/dynamic/FAQAccordion'
import Footer from './components/static/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#CFD2D4]">
      <Header />
      <HeroSection />
      <PharmacySection />
      <FeaturesSection />
      <TrustedBy />
      <FAQAccordion />
      <Footer />
    </main>
  )
}