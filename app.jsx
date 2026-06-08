/* eslint-disable */
/* App entry — IBH LP Alopecia Androgenética */

const { useEffect: useEf } = React;

function App() {
  const defaults = window.__IBH_DEFAULTS || {};
  const [t, setTweak] = useTweaks(defaults);

  // Apply mode + accent at root
  useEf(() => {
    document.documentElement.setAttribute("data-mode", t.mode || "light");
    document.documentElement.setAttribute("data-accent", t.accent || "caramel");
  }, [t.mode, t.accent]);

  // dismiss splash
  useEf(() => {
    const s = document.getElementById("splash");
    if (s) {
      setTimeout(() => s.classList.add("gone"), 250);
      setTimeout(() => s.remove(), 900);
    }
  }, []);

  return (
    <>
      <TopNav />
      <main>
        <HeroSection layout={t.heroLayout} />
        <ContextSection />
        <DiagnosticoSection />
        <TratamentosSection />
        <EquipeSection />
        <ResultadosSection show={t.showBeforeAfter !== false} />
        <InvestimentoSection />
        <DiferenciaisSection />
        <DepoimentosSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Aparência">
          <TweakRadio
            label="Modo"
            value={t.mode}
            options={[{ value: "light", label: "Claro" }, { value: "dark", label: "Noite" }]}
            onChange={v => setTweak("mode", v)}
          />
          <TweakRadio
            label="Acento"
            value={t.accent}
            options={[{ value: "caramel", label: "Caramelo" }, { value: "petroleo", label: "Petróleo" }]}
            onChange={v => setTweak("accent", v)}
          />
        </TweakSection>
        <TweakSection label="Layout">
          <TweakRadio
            label="Hero"
            value={t.heroLayout}
            options={[{ value: "editorial", label: "Editorial" }, { value: "centrado", label: "Centrado" }]}
            onChange={v => setTweak("heroLayout", v)}
          />
          <TweakToggle
            label="Mostrar antes/depois"
            value={t.showBeforeAfter !== false}
            onChange={v => setTweak("showBeforeAfter", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
