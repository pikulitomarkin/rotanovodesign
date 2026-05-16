import React from 'react'
import {
  Header, Hero, StylesStrip, About, Differentials,
  Gallery, StudioSpace, Piercing, Testimonials, Team, MapSection, Reviews,
  Banner, FAQ, Footer, WhatsAppFloat
} from './components.jsx'

export default function App() {
  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', '#ff3d00')
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <StylesStrip />
        <About />
        <Differentials />
        <Gallery />
        <StudioSpace />
        <Piercing />
        <Testimonials />
        <Team />
        <MapSection />
        <Reviews />
        <Banner />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
