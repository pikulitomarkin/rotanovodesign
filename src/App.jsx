import React from 'react'
import {
  Header, Hero, StylesStrip, About, Differentials,
  Gallery, StudioSpace, Piercing, Team, MapSection, Reviews,
  FAQ, Footer, WhatsAppFloat, Tourists
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
        <Tourists />
        <Piercing />
        <Team />
        <MapSection />
        <Reviews />
        <Tourists />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
