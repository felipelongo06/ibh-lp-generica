/* eslint-disable */
/* Shared primitive components for the IBH LP */

const { useState, useEffect, useRef, useCallback, useMemo } = React;

// — Wordmark —
function Wordmark({ size = 18, mono = false }) {
  if (mono) {
    return (
      <span className="wordmark" style={{ fontSize: size }}>
        <span className="ital">IBH</span>
      </span>
    );
  }
  return (
    <span className="wordmark" style={{ fontSize: size }}>
      <span style={{ fontStyle: "italic" }}>Instituto</span>{" "}Bárbara Helen
      <span className="small">Medicina capilar · Desde 2014</span>
    </span>
  );
}

// — Monogram circle —
function Monogram({ size = 44, color }) {
  return (
    <span className="monogram" style={{ width: size, height: size, fontSize: size * 0.42, color }}>
      <span style={{ display: "inline-block", transform: "translateY(-1px)" }}>I</span>
      <span style={{ display: "inline-block", transform: "translate(-2px, 1px)", opacity: .85 }}>B</span>
      <span style={{ display: "inline-block", transform: "translate(-3px, -1px)" }}>H</span>
    </span>
  );
}

// — Eyebrow —
function Eyebrow({ children, mark }) {
  return (
    <span className="eyebrow">
      {mark && <span style={{ width: 5, height: 5, borderRadius: 999, background: "var(--accent)" }} />}
      {children}
    </span>
  );
}

// — Image placeholder w/ optional drag-drop —
function ImageSlot({ id, label, ratio = "3 / 4", height, fillable = true, style, mask }) {
  // image-slot custom element doesn't honor aspect-ratio reliably (shadow-DOM
  // :host has explicit width:240/height:160). We measure the rendered width
  // and set an explicit pixel height matching the requested ratio.
  const ref = React.useRef(null);
  const [h, setH] = React.useState(height || 320);
  React.useEffect(() => {
    if (height) return;
    const el = ref.current;
    if (!el) return;
    const compute = () => {
      const w = el.getBoundingClientRect().width;
      if (!w) return;
      const [num, den] = String(ratio).split("/").map(s => parseFloat(s.trim()));
      if (!num || !den) return;
      setH(Math.round(w * (den / num)));
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (el.parentElement) ro.observe(el.parentElement);
    window.addEventListener("resize", compute);
    return () => { ro.disconnect(); window.removeEventListener("resize", compute); };
  }, [ratio, height]);

  const wrapStyle = {
    height: h,
    width: "100%",
    display: "block",
    ...style
  };
  if (fillable) {
    return (
      <image-slot
        ref={ref}
        id={id}
        placeholder={label}
        style={wrapStyle}
        shape="rounded"
        radius="10"
      ></image-slot>
    );
  }
  return (
    <div ref={ref} className="ph-img" style={wrapStyle}>
      <span className="label">{label}</span>
    </div>
  );
}

// — Hairline section divider —
function Hairline({ children }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 16,
      color: "var(--fg-muted)",
      margin: "32px 0"
    }}>
      <span style={{ flex: 1, height: 1, background: "var(--rule)" }} />
      {children && <span className="mono" style={{ flexShrink: 0 }}>{children}</span>}
      {children && <span style={{ flex: 1, height: 1, background: "var(--rule)" }} />}
    </div>
  );
}

// — Stat block —
function Stat({ value, label, source, large }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: large ? "clamp(56px, 8vw, 120px)" : "clamp(40px, 5vw, 72px)",
        lineHeight: 0.95,
        letterSpacing: "-0.03em",
        color: "var(--fg)"
      }}>
        {value}
      </div>
      <div style={{ color: "var(--fg-muted)", fontSize: 14, lineHeight: 1.45, maxWidth: "32ch" }}>
        {label}
      </div>
      {source && <div className="mono" style={{ marginTop: 4 }}>{source}</div>}
    </div>
  );
}

// — CTA pair —
function CTAPair({ on = "light" }) {
  const dark = on === "dark";
  return (
    <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
      <a className={dark ? "btn btn-on-deep" : "btn btn-primary"} href="#contato">
        Agendar avaliação no WhatsApp
        <span className="arrow" />
      </a>
      <a className="btn btn-ghost" href="#diagnostico" style={dark ? { color: "var(--on-deep)", borderColor: "rgba(232,226,212,.3)" } : {}}>
        Como diagnosticamos
      </a>
    </div>
  );
}

// — FAQ-style accordion item —
function Disclosure({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{
      borderTop: "1px solid var(--rule)",
      padding: "20px 0"
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          all: "unset",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          width: "100%",
          cursor: "pointer",
          padding: "4px 0"
        }}
      >
        <span style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(18px, 1.4vw, 22px)",
          letterSpacing: "-0.01em",
          color: "var(--fg)"
        }}>
          {title}
        </span>
        <span style={{
          width: 28, height: 28,
          border: "1px solid var(--rule)",
          borderRadius: 999,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontSize: 16,
          color: "var(--fg-muted)",
          transition: "transform .25s ease, background .25s ease"
        }}>
          {open ? "–" : "+"}
        </span>
      </button>
      <div style={{
        maxHeight: open ? 600 : 0,
        overflow: "hidden",
        transition: "max-height .35s ease, opacity .35s ease, margin-top .35s ease",
        opacity: open ? 1 : 0,
        marginTop: open ? 14 : 0
      }}>
        <div style={{ color: "var(--fg-muted)", maxWidth: "62ch", lineHeight: 1.6 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// — Top nav —
function TopNav() {
  return (
    <header className="top-nav">
      <div className="shell top-nav-inner">
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Monogram size={36} />
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: 16,
            letterSpacing: "0.01em",
            display: "flex",
            flexDirection: "column",
            lineHeight: 1.05,
            whiteSpace: "nowrap"
          }}>
            <span><em>Instituto</em> Bárbara Helen</span>
            <span style={{ fontFamily: "var(--font-text)", fontSize: 9.5, letterSpacing: "0.32em", color: "var(--fg-muted)", textTransform: "uppercase", marginTop: 5 }}>
              Medicina Capilar
            </span>
          </span>
        </a>

        <nav className="top-nav-links">
          <a href="#diagnostico">Diagnóstico</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#equipe">Equipe</a>
          <a href="#resultados">Resultados</a>
          <a href="#investimento">Investimento</a>
        </nav>

        <a className="btn btn-primary" style={{ padding: "12px 18px", fontSize: 13 }} href="#contato">
          Agendar avaliação
          <span className="arrow" />
        </a>
      </div>
    </header>
  );
}

// — Footer —
function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="shell">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <Monogram size={48} color="var(--on-deep)" />
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              color: "var(--on-deep)",
              letterSpacing: "0.01em"
            }}>
              <em>Instituto</em> Bárbara Helen
            </span>
          </div>
          <p style={{ color: "var(--on-deep-muted)", maxWidth: "44ch", fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>
            Medicina capilar de precisão para mulheres. Diagnóstico baseado em evidência, protocolos exclusivos e acompanhamento médico contínuo.
          </p>
          <a className="btn btn-on-deep" href="#" style={{ marginTop: 28 }}>
            Falar no WhatsApp
            <span className="arrow" />
          </a>
        </div>

        <div>
          <h4>Atendimento</h4>
          <a href="#">WhatsApp da clínica</a>
          <a href="#">+55 (00) 0000-0000</a>
          <a href="#">contato@ibh.med.br</a>
          <a href="#">Seg – Sex · 09h às 19h</a>
        </div>

        <div>
          <h4>Endereço</h4>
          <a href="#">Av. Placeholder, 0000 — sala 00</a>
          <a href="#">Bairro · Cidade — UF</a>
          <a href="#">CEP 00000-000</a>
          <a href="#" style={{ marginTop: 12, opacity: 1, textDecoration: "underline", textDecorationColor: "rgba(232,226,212,.4)" }}>Como chegar</a>
        </div>

        <div className="legal">
          <span>© 2026 Instituto Bárbara Helen · Todos os direitos reservados</span>
          <span>Resp. Téc.: Dra. Bárbara Helen — CRM/UF 00000 · RQE 00000</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Wordmark, Monogram, Eyebrow, ImageSlot, Hairline, Stat, CTAPair, Disclosure, TopNav, Footer
});
