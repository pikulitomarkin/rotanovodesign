/* Rota da Tattoo — App entry */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#ff3d00",
  "showWhatsApp": true,
  "density": "comfortable"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
  }, [t.accent]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <StylesStrip />
        <About />
        <Differentials />
        <Gallery />
        <Testimonials />
        <Team />
        <MapSection />
        <Reviews />
        <Banner />
        <FAQ />
      </main>
      <Footer />
      {t.showWhatsApp && <WhatsAppFloat />}

      <TweaksPanel title="Tweaks">
        <TweakSection title="Identidade">
          <TweakColor
            label="Cor de acento"
            value={t.accent}
            onChange={v => setTweak("accent", v)}
            options={["#ff3d00", "#e60023", "#ff8a00", "#c9a14a", "#7a5cff", "#00b894"]}
          />
        </TweakSection>
        <TweakSection title="Elementos">
          <TweakToggle
            label="Botão WhatsApp"
            value={t.showWhatsApp}
            onChange={v => setTweak("showWhatsApp", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
