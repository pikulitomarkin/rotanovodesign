import {
  Header,
  Hero,
  StylesStrip,
  About,
  Differentials,
  Gallery,
  Team,
  MapSection,
  Reviews,
  FAQ,
  Footer,
  WhatsAppProtector,
  StudioSpace,
  Piercing,
  Tourists
} from '../components/index';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <StylesStrip />
      <About />
      <Differentials />
      <Gallery />
      <Piercing />
      <StudioSpace />
      <Tourists />
      <Team />
      <MapSection />
      <Reviews />
      <FAQ />
      <Footer />
      <WhatsAppProtector />
    </main>
  );
}
