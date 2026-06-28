/* eslint-disable */
/* Sections for the IBH LP — Alopecia Androgenética Feminina */

const { useState: useS, useEffect: useE, useRef: useR } = React;

/* =========================================================
   HERO
========================================================= */
function HeroSection({ layout = "editorial" }) {
  return (
    <section id="top" data-screen-label="01 Hero" style={{ paddingTop: 56 }}>
      <div className="shell">
        {layout === "editorial" && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: "clamp(32px, 5vw, 80px)",
            alignItems: "end"
          }} className="hero-grid">
            <div className="rise">
              <Eyebrow mark>Alopecia Androgenética · Padrão Feminino</Eyebrow>
              <h1 className="display" style={{ marginTop: 28, marginBottom: 28 }}>
                Sua queda capilar tem <em>causa,</em><br />
                diagnóstico e <em>tratamento.</em>
              </h1>
              <p className="lede" style={{ marginBottom: 36 }}>
                No Instituto Bárbara Helen, mulheres com afinamento e perda de densidade são atendidas por um protocolo médico próprio — com tricoscopia digital, medicina baseada em evidência e acompanhamento contínuo. Sem promessas milagrosas.
              </p>
              <CTAPair />
              <div style={{ display: "flex", gap: 24, marginTop: 48, flexWrap: "wrap" }}>
                <span className="tag">Tricoscopia digital</span>
                <span className="tag">Protocolos exclusivos</span>
                <span className="tag">Centro cirúrgico próprio</span>
              </div>
            </div>

            <div className="rise delay-2" style={{ position: "relative" }}>
              <ImageSlot
                id="hero-portrait"
                label="Retrato da paciente · vertical 3:4"
                ratio="3 / 4"
              />
              <div style={{
                position: "absolute",
                left: -24,
                bottom: 32,
                background: "var(--bg-elev)",
                border: "1px solid var(--rule)",
                borderRadius: "var(--r-md)",
                padding: "16px 20px",
                boxShadow: "var(--shadow-soft)",
                maxWidth: 240
              }}>
                <div className="mono" style={{ marginBottom: 6, color: "var(--accent)" }}>↳ Avaliação inicial</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 19, lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                  60 minutos com a equipe médica — diagnóstico e plano no mesmo dia.
                </div>
              </div>
            </div>
          </div>
        )}

        {layout === "centrado" && (
          <div className="rise" style={{ textAlign: "center", maxWidth: 980, margin: "0 auto", paddingTop: 40 }}>
            <Eyebrow mark>Alopecia Androgenética · Padrão Feminino</Eyebrow>
            <h1 className="display" style={{ marginTop: 28, marginBottom: 28 }}>
              Sua queda capilar tem <em>causa,</em> diagnóstico e <em>tratamento.</em>
            </h1>
            <p className="lede" style={{ margin: "0 auto 36px" }}>
              Medicina capilar de precisão para mulheres. Tricoscopia digital, protocolos exclusivos e medicina baseada em evidência — não em promessas.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a className="btn btn-primary" href="https://tintim.link/whatsapp/63084cce-c4a6-4224-8640-536b5f885bdb/629f9272-6ca5-44a2-87d3-980aa58b8796" target="_blank" rel="noopener">Agendar avaliação no WhatsApp <span className="arrow" /></a>
              <a className="btn btn-ghost" href="#diagnostico">Como diagnosticamos</a>
            </div>
            <div style={{ marginTop: 64 }}>
              <ImageSlot id="hero-portrait" label="Imagem editorial · 16:9" ratio="16 / 9" />
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 880px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   CONTEXT / STATS — “a condição em números”
========================================================= */
function ContextSection() {
  return (
    <section data-screen-label="02 Contexto" style={{ background: "var(--bg-tint)" }}>
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "start" }} className="ctx-grid">
          <div>
            <Eyebrow>A condição</Eyebrow>
            <h2 className="section-h" style={{ marginTop: 18 }}>
              Mais comum do que se fala. <em>Mais tratável do que parece.</em>
            </h2>
            <p className="lede" style={{ marginTop: 24 }}>
              A alopecia androgenética feminina é a principal causa de afinamento e perda de densidade em mulheres adultas. Tem base genética, hormonal e inflamatória — e responde bem ao tratamento médico quando diagnosticada cedo.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px 56px" }}>
            <Stat
              value="40%"
              label="das mulheres convivem com algum grau de alopecia ao longo da vida."
              source="American Academy of Dermatology"
            />
            <Stat
              value="50+"
              label="anos é a faixa em que 6 em cada 10 mulheres notam afinamento perceptível."
              source="Int. Journal of Trichology"
            />
            <Stat
              value="2 a 4"
              label="meses são os primeiros sinais clínicos com tratamento adequado."
              source="Protocolo IBH"
            />
            <Stat
              value="8+"
              label="meses de acompanhamento médico contínuo no plano completo."
              source="Protocolo IBH"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .ctx-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   DIAGNÓSTICO — tricoscopia digital + jornada
========================================================= */
function DiagnosticoSection() {
  const [step, setStep] = useS(0);
  const steps = [
    {
      n: "01",
      t: "Anamnese clínica",
      d: "Histórico familiar, hormonal, nutricional e emocional. Toda queda tem múltiplos gatilhos — entender qual pesa mais define o tratamento."
    },
    {
      n: "02",
      t: "Tricoscopia digital",
      d: "Microscopia capilar de alta resolução do couro cabeludo. Mapeamos densidade, miniaturização folicular e diâmetro dos fios em pontos específicos."
    },
    {
      n: "03",
      t: "Exames complementares",
      d: "Painel hormonal, ferritina, vitamina D, tireoide e marcadores inflamatórios — solicitados quando o quadro pede."
    },
    {
      n: "04",
      t: "Plano personalizado",
      d: "Protocolo desenhado pela Dra. Bárbara para o seu caso. Discutido em consulta, com cronograma, expectativas e investimento claros."
    }
  ];
  return (
    <section id="diagnostico" data-screen-label="03 Diagnóstico">
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 64, alignItems: "start" }} className="diag-grid">
          <div style={{ position: "sticky", top: 96 }}>
            <Eyebrow mark>Diagnóstico</Eyebrow>
            <h2 className="section-h" style={{ marginTop: 18 }}>
              Antes de qualquer protocolo, <em>um diagnóstico preciso.</em>
            </h2>
            <p className="lede" style={{ marginTop: 24 }}>
              Tratamento sem diagnóstico não é medicina — é palpite. Toda paciente passa pelo mesmo rito clínico antes de iniciar qualquer terapia.
            </p>
            <div style={{ marginTop: 40 }}>
              <ImageSlot id="tricoscopia" label="Tricoscopia digital · macro" ratio="4 / 3" />
            </div>
          </div>

          <div>
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                style={{
                  all: "unset",
                  display: "block",
                  width: "100%",
                  cursor: "pointer",
                  borderTop: "1px solid var(--rule)",
                  padding: "32px 0",
                  position: "relative"
                }}
              >
                <div style={{ display: "flex", gap: 32, alignItems: "baseline" }}>
                  <span className="mono" style={{ color: step === i ? "var(--accent)" : "var(--fg-soft)", flexShrink: 0, transition: "color .25s" }}>
                    {s.n}
                  </span>
                  <div style={{ flex: 1 }}>
                    <h3 className="card-h" style={{
                      color: step === i ? "var(--fg)" : "var(--fg-muted)",
                      transition: "color .25s"
                    }}>
                      {s.t}
                    </h3>
                    <div style={{
                      maxHeight: step === i ? 200 : 0,
                      overflow: "hidden",
                      transition: "max-height .4s ease, opacity .4s ease, margin-top .4s ease",
                      opacity: step === i ? 1 : 0,
                      marginTop: step === i ? 12 : 0,
                      color: "var(--fg-muted)",
                      lineHeight: 1.6,
                      maxWidth: "58ch"
                    }}>
                      {s.d}
                    </div>
                  </div>
                  <span style={{
                    width: 36, height: 36,
                    border: "1px solid " + (step === i ? "var(--fg)" : "var(--rule)"),
                    borderRadius: 999,
                    display: "inline-flex",
                    alignItems: "center", justifyContent: "center",
                    color: step === i ? "var(--fg)" : "var(--fg-muted)",
                    transition: "all .25s",
                    flexShrink: 0,
                    fontSize: 14
                  }}>
                    {step === i ? "–" : "+"}
                  </span>
                </div>
              </button>
            ))}
            <div style={{ height: 1, background: "var(--rule)" }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .diag-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .diag-grid > div:first-child { position: relative !important; top: auto !important; }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   TRATAMENTOS
========================================================= */
const TREATMENTS = [
  {
    id: "microinfusao",
    nome: "Microinfusão de medicamentos",
    tag: "Minimamente invasivo",
    resumo: "Administração precisa de medicações na profundidade folicular adequada do couro cabeludo.",
    objetivo: "Criar ambiente favorável ao crescimento e tratar as condições diagnosticadas no exame.",
    sessoes: "definidas em consulta",
    primeiros: "2 a 3 meses",
    indicacao: "Afinamento difuso, miniaturização folicular, queda ativa."
  },
  {
    id: "veiculacao",
    nome: "Veiculação de ativos",
    tag: "Pode complementar a cirurgia",
    resumo: "Técnica que potencializa a absorção e a entrega de ativos e medicações no couro cabeludo.",
    objetivo: "Fortalecer áreas tratadas e dar suporte à recuperação pós-operatória quando associado.",
    sessoes: "definidas em consulta",
    primeiros: "1 a 3 meses",
    indicacao: "Manutenção, pós-operatório, fortalecimento capilar."
  },
  {
    id: "regenerativa",
    nome: "Terapia regenerativa",
    tag: "Estímulo biológico",
    resumo: "Aplicação de fatores de crescimento e proteínas no couro cabeludo para estímulo do folículo.",
    objetivo: "Estimular crescimento e fortalecer fios em quadros de afinamento e enfraquecimento folicular.",
    sessoes: "definidas em consulta",
    primeiros: "2 a 4 meses",
    indicacao: "Queda capilar, afinamento, enfraquecimento. Não substitui a cirurgia."
  },
  {
    id: "cirurgia",
    nome: "Restauração capilar cirúrgica",
    tag: "Centro cirúrgico próprio",
    resumo: "Procedimento cirúrgico para áreas com perda definitiva, realizado em centro cirúrgico próprio do Instituto.",
    objetivo: "Restaurar densidade em regiões em que o folículo não responde mais a tratamento clínico.",
    sessoes: "1 procedimento",
    primeiros: "6 a 12 meses",
    indicacao: "Áreas com perda estabilizada e indicação cirúrgica precisa."
  }
];

function TratamentosSection() {
  const [active, setActive] = useS(0);
  const t = TREATMENTS[active];
  return (
    <section id="tratamentos" data-screen-label="04 Tratamentos" style={{ background: "var(--bg-deep)", color: "var(--on-deep)" }}>
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end", marginBottom: 64 }} className="tx-head">
          <div>
            <Eyebrow mark>Tratamentos</Eyebrow>
            <h2 className="section-h" style={{ marginTop: 18, color: "var(--on-deep)" }}>
              Quatro frentes, <em style={{ color: "var(--on-deep-muted)" }}>um plano único</em> para o seu caso.
            </h2>
          </div>
          <p className="lede" style={{ color: "var(--on-deep-muted)" }}>
            A combinação dos protocolos é definida em consulta. Nenhum tratamento isolado resolve a alopecia — a indicação correta resolve.
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
          {TREATMENTS.map((tr, i) => (
            <button
              key={tr.id}
              onClick={() => setActive(i)}
              className="btn"
              style={{
                background: active === i ? "var(--off-white)" : "transparent",
                color: active === i ? "var(--verde-petroleo)" : "var(--on-deep)",
                border: "1px solid " + (active === i ? "var(--off-white)" : "rgba(232,226,212,.3)"),
                padding: "10px 18px",
                fontSize: 13.5
              }}
            >
              {tr.nome}
            </button>
          ))}
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: 56,
          alignItems: "start",
          paddingTop: 40,
          borderTop: "1px solid rgba(232,226,212,.18)"
        }} className="tx-body">
          <div>
            <span className="mono" style={{ color: "var(--caramelo-soft)" }}>{t.tag}</span>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(38px, 4vw, 56px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              margin: "16px 0 24px",
              color: "var(--on-deep)"
            }}>
              <em>{t.nome}</em>
            </h3>
            <p style={{ color: "var(--on-deep)", fontSize: 18, lineHeight: 1.55, maxWidth: "52ch", margin: 0 }}>
              {t.resumo}
            </p>
            <p style={{ color: "var(--on-deep-muted)", fontSize: 15, lineHeight: 1.6, marginTop: 20, maxWidth: "56ch" }}>
              <strong style={{ color: "var(--on-deep)", fontWeight: 500 }}>Objetivo · </strong>{t.objetivo}
            </p>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            {[
              ["Sessões", t.sessoes],
              ["Primeiros resultados", t.primeiros],
              ["Indicação", t.indicacao]
            ].map(([k, v]) => (
              <div key={k} style={{
                background: "rgba(232,226,212,.06)",
                border: "1px solid rgba(232,226,212,.12)",
                borderRadius: "var(--r-md)",
                padding: "20px 22px"
              }}>
                <div className="mono" style={{ color: "var(--on-deep-muted)", marginBottom: 6 }}>{k}</div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontStyle: "italic",
                  color: "var(--on-deep)",
                  lineHeight: 1.3
                }}>
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .tx-head, .tx-body { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   EQUIPE
========================================================= */
function EquipeSection() {
  const docs = [
    {
      id: "barbara",
      nome: "Dra. Bárbara Helen",
      papel: "Médica fundadora · Tricologia & cirurgia capilar",
      bio: "Idealizadora dos protocolos do Instituto. Atua há mais de uma década em medicina capilar, com formação em dermatologia estética e cirurgia de transplante capilar.",
      crm: "CRM/UF 00000 · RQE 00000"
    },
    {
      id: "bruna",
      nome: "Dra. Bruna",
      papel: "Médica · Diagnóstico e clínica capilar",
      bio: "Responsável pelo acompanhamento clínico e tricoscopia digital. Formação complementar em medicina baseada em evidência aplicada à dermatologia.",
      crm: "CRM/UF 00000 · RQE 00000"
    }
  ];
  return (
    <section id="equipe" data-screen-label="05 Equipe">
      <div className="shell">
        <div style={{ maxWidth: 760, marginBottom: 64 }}>
          <Eyebrow mark>Equipe</Eyebrow>
          <h2 className="section-h" style={{ marginTop: 18 }}>
            Quem te atende é <em>quem te diagnostica</em> — e quem fecha o seu plano.
          </h2>
          <p className="lede" style={{ marginTop: 24 }}>
            No Instituto, a venda acontece dentro da consulta. É a médica que conduz o diagnóstico, indica o protocolo e apresenta o plano. Sem vendedor intermediando.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="eq-grid">
          {docs.map(d => (
            <article key={d.id} style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 24, alignItems: "start" }}>
              <ImageSlot id={`doc-${d.id}`} label={`Retrato · ${d.nome}`} ratio="3 / 4" />
              <div>
                <h3 className="card-h" style={{ fontStyle: "italic" }}>{d.nome}</h3>
                <div className="mono" style={{ marginTop: 8, color: "var(--accent)" }}>{d.papel}</div>
                <p style={{ marginTop: 16, color: "var(--fg-muted)", lineHeight: 1.6, fontSize: 15 }}>{d.bio}</p>
                <div className="fineprint" style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--rule)" }}>
                  {d.crm}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{
          marginTop: 80,
          padding: "32px 36px",
          background: "var(--bg-tint)",
          borderRadius: "var(--r-lg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
          flexWrap: "wrap"
        }}>
          <div>
            <div className="mono" style={{ color: "var(--accent)" }}>Acompanhamento integrado</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 22, marginTop: 8, letterSpacing: "-0.01em" }}>
              Equipe de <em>concierge</em>, fotoestímulo e Head Spa pós-operatório.
            </div>
          </div>
          <a className="btn btn-primary" href="#contato">
            Conhecer a equipe
            <span className="arrow" />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .eq-grid { grid-template-columns: 1fr !important; }
          .eq-grid > article { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   ANTES / DEPOIS
========================================================= */
function BeforeAfter({ before, after }) {
  const [pos, setPos] = useS(50);
  const ref = useR(null);
  const dragging = useR(false);

  const move = (clientX) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, x)));
  };
  const onDown = (e) => { dragging.current = true; e.preventDefault(); };
  const onUp = () => { dragging.current = false; };
  const onMove = (e) => {
    if (!dragging.current) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    move(x);
  };

  useE(() => {
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  const imgBase = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    pointerEvents: "none",
    userSelect: "none"
  };

  return (
    <div ref={ref} style={{
      position: "relative",
      aspectRatio: "4 / 5",
      borderRadius: "var(--r-md)",
      overflow: "hidden",
      cursor: "ew-resize",
      userSelect: "none",
      background: "var(--bg-tint)"
    }}
    onMouseDown={(e) => { onDown(e); move(e.clientX); }}
    onTouchStart={(e) => { onDown(e); move(e.touches[0].clientX); }}
    >
      {/* DEPOIS — imagem completa, ao fundo */}
      <img src={after} alt="Depois" draggable="false" style={imgBase} />

      {/* ANTES — recortada da esquerda até o divisor */}
      <img src={before} alt="Antes" draggable="false" style={{
        ...imgBase,
        clipPath: `inset(0 ${100 - pos}% 0 0)`
      }} />

      {/* labels */}
      <span style={{
        position: "absolute", left: 14, top: 14,
        background: "rgba(48,61,60,.85)", color: "var(--off-white)",
        padding: "4px 10px", borderRadius: 999, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase"
      }}>Antes</span>
      <span style={{
        position: "absolute", right: 14, top: 14,
        background: "var(--caramelo)", color: "white",
        padding: "4px 10px", borderRadius: 999, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase"
      }}>Depois</span>

      {/* handle */}
      <div style={{
        position: "absolute", top: 0, bottom: 0,
        left: `${pos}%`, transform: "translateX(-50%)",
        width: 2, background: "white", pointerEvents: "none"
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 40, height: 40, borderRadius: 999,
          background: "white", boxShadow: "0 4px 16px rgba(0,0,0,.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--verde-petroleo)", fontSize: 14, fontWeight: 600, letterSpacing: "0.05em"
        }}>‹ ›</div>
      </div>
    </div>
  );
}

function ResultadosSection({ show = true }) {
  if (!show) return null;

  // Fotos hospedadas junto ao site (mesma pasta dos demais arquivos).
  // Se estiverem numa subpasta, ajuste IMG_BASE — ex.: "fotos/".
  const IMG_BASE = "";
  const casos = [
    { id: "case-1", before: `${IMG_BASE}antes-1.png`, after: `${IMG_BASE}depois-1.png` },
    { id: "case-2", before: `${IMG_BASE}antes-2.png`, after: `${IMG_BASE}depois-2.png` },
    { id: "case-3", before: `${IMG_BASE}antes-3.png`, after: `${IMG_BASE}depois-3.png` }
  ];

  return (
    <section id="resultados" data-screen-label="06 Resultados" style={{ background: "var(--bg-tint)" }}>
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end", marginBottom: 56 }} className="ra-head">
          <div>
            <Eyebrow mark>Resultados</Eyebrow>
            <h2 className="section-h" style={{ marginTop: 18 }}>
              Antes & depois <em>com critério clínico.</em>
            </h2>
          </div>
          <p className="lede">
            Os resultados a seguir são casos reais de pacientes do Instituto, divulgados com autorização. Não são promessa de resultado — cada caso responde de forma individual.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="ra-grid">
          {casos.map(c => (
            <BeforeAfter key={c.id} before={c.before} after={c.after} />
          ))}
        </div>

        <p className="fineprint" style={{ marginTop: 32, maxWidth: "72ch" }}>
          Resultados variam conforme o quadro individual, idade, comorbidades, adesão ao plano e tempo de tratamento. Os casos exibidos foram acompanhados pela equipe médica do Instituto Bárbara Helen.
        </p>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .ra-head, .ra-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   DIFERENCIAIS
========================================================= */
function DiferenciaisSection() {
  const items = [
    { n: "01", t: "Protocolos exclusivos", d: "Desenvolvidos pela Dra. Bárbara — não copiados, não terceirizados." },
    { n: "02", t: "Tricoscopia digital", d: "Diagnóstico preciso antes de qualquer protocolo. Sem exceção." },
    { n: "03", t: "Centro cirúrgico próprio", d: "Estrutura interna para transplante capilar — sem terceirização do procedimento." },
    { n: "04", t: "Medicina baseada em evidência", d: "Indicamos o que tem literatura. Recusamos o que não tem." },
    { n: "05", t: "A médica fecha", d: "Plano apresentado pela médica em consulta. Sem vendedor intermediando." },
    { n: "06", t: "Pós-op integrado", d: "Fotoestímulo e Head Spa no acompanhamento pós-operatório." }
  ];
  return (
    <section data-screen-label="08 Diferenciais">
      <div className="shell">
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
          <Eyebrow mark>Por que IBH</Eyebrow>
          <h2 className="section-h" style={{ marginTop: 18 }}>
            Seis razões para tratar <em>aqui — e não em outro lugar.</em>
          </h2>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 0,
          borderTop: "1px solid var(--rule)",
          borderLeft: "1px solid var(--rule)"
        }} className="dif-grid">
          {items.map(i => (
            <div key={i.n} style={{
              padding: "36px 32px",
              borderRight: "1px solid var(--rule)",
              borderBottom: "1px solid var(--rule)",
              minHeight: 220,
              display: "flex", flexDirection: "column", justifyContent: "space-between",
              gap: 24
            }}>
              <span className="mono" style={{ color: "var(--accent)" }}>{i.n}</span>
              <div>
                <h3 className="card-h" style={{ marginBottom: 10 }}>{i.t}</h3>
                <p style={{ color: "var(--fg-muted)", margin: 0, lineHeight: 1.55, fontSize: 15 }}>{i.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) { .dif-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 881px) and (max-width: 1100px) { .dif-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}

/* =========================================================
   DEPOIMENTOS
========================================================= */
function DepoimentosSection() {
  const items = [
    {
      q: "Cheguei já tendo passado por outras clínicas. A diferença foi na primeira consulta — entendi exatamente o que estava acontecendo no meu couro cabeludo, com imagem.",
      a: "Paciente M.A. · 38 anos",
      t: "Protocolo clínico combinado"
    },
    {
      q: "Foi a única clínica em que a médica me disse 'isto aqui não vai funcionar pro seu caso'. É raro ouvir isso. Confiei justamente por causa disso.",
      a: "Paciente C.L. · 44 anos",
      t: "Protocolo clínico personalizado"
    },
    {
      q: "Oito meses depois, eu finalmente paro de prender o cabelo o tempo todo. Não foi mágica — foi consulta após consulta.",
      a: "Paciente J.R. · 52 anos",
      t: "Protocolo combinado + cirúrgico"
    }
  ];
  return (
    <section data-screen-label="09 Depoimentos" style={{ background: "var(--bg-tint)" }}>
      <div className="shell">
        <div style={{ marginBottom: 56, maxWidth: 640 }}>
          <Eyebrow>Quem trata aqui</Eyebrow>
          <h2 className="section-h" style={{ marginTop: 18 }}>
            <em>Resultados</em> que ficam, em palavras de quem viveu.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="dp-grid">
          {items.map((d, i) => (
            <figure key={i} style={{ margin: 0, padding: "32px", background: "var(--bg-elev)", borderRadius: "var(--r-lg)", border: "1px solid var(--rule)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 36, lineHeight: 0.6, color: "var(--accent)" }}>“</div>
              <blockquote style={{
                margin: "16px 0 0",
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: 19,
                lineHeight: 1.4,
                color: "var(--fg)"
              }}>
                {d.q}
              </blockquote>
              <figcaption style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--rule)" }}>
                <div style={{ fontWeight: 500, fontSize: 14 }}>{d.a}</div>
                <div className="mono" style={{ marginTop: 4 }}>{d.t}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) { .dp-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 881px) and (max-width: 1100px) { .dp-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}

/* =========================================================
   FAQ + CTA Final
========================================================= */
function FAQSection() {
  return (
    <section data-screen-label="10 FAQ">
      <div className="shell shell-narrow">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 64, alignItems: "start" }} className="faq-grid">
          <div style={{ position: "sticky", top: 96 }}>
            <Eyebrow mark>FAQ</Eyebrow>
            <h2 className="section-h" style={{ marginTop: 18 }}>
              Perguntas que <em>toda paciente faz.</em>
            </h2>
          </div>
          <div>
            <Disclosure title="Em quanto tempo vou ver resultado?" defaultOpen>
              Os primeiros sinais clínicos aparecem entre 2 e 4 meses, dependendo do protocolo. O ganho de densidade significativo costuma ser percebido entre o 6º e o 12º mês de acompanhamento.
            </Disclosure>
            <Disclosure title="Tratamento clínico substitui a cirurgia?">
              Não. Tratamento clínico e cirúrgico são intervenções diferentes, com indicações diferentes. Em muitos casos, eles se complementam — a indicação correta é definida em consulta.
            </Disclosure>
            <Disclosure title="Vou precisar manter o tratamento pra sempre?">
              A alopecia androgenética é uma condição crônica de base genética. Após a fase ativa, a maioria das pacientes segue em manutenção, com sessões espaçadas. O plano de manutenção é desenhado caso a caso.
            </Disclosure>
            <Disclosure title="O que acontece na primeira consulta?">
              Anamnese, tricoscopia digital e — quando indicado — solicitação de exames. Ao final da consulta, a médica apresenta o diagnóstico, o plano de tratamento e o investimento. Tudo no mesmo dia.
            </Disclosure>
            <Disclosure title="Atendem outras condições além da AGA?">
              Sim. O Instituto trata diversas formas de alopecia (areata, cicatricial, eflúvio telógeno, entre outras). Esta página foca especificamente em alopecia androgenética feminina.
            </Disclosure>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .faq-grid > div:first-child { position: relative !important; top: auto !important; }
        }
      `}</style>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section style={{ paddingTop: 0 }} data-screen-label="11 CTA Final">
      <div className="shell">
        <div style={{
          background: "var(--off-white)",
          borderRadius: "var(--r-lg)",
          padding: "clamp(48px, 8vw, 96px) clamp(32px, 6vw, 72px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}>
          <Eyebrow mark>Próximo passo</Eyebrow>
          <h2 className="section-h" style={{ marginTop: 24, marginBottom: 24, maxWidth: 880, marginLeft: "auto", marginRight: "auto" }}>
            <em>Cabelo é tempo.</em><br />
            Quanto antes diagnosticar, melhor o resultado.
          </h2>
          <p className="lede" style={{ margin: "0 auto 36px" }}>
            Agende sua avaliação com a equipe médica do Instituto Bárbara Helen pelo WhatsApp. Diagnóstico e plano no mesmo dia.
          </p>
          <a className="btn btn-primary" href="https://tintim.link/whatsapp/63084cce-c4a6-4224-8640-536b5f885bdb/629f9272-6ca5-44a2-87d3-980aa58b8796" target="_blank" rel="noopener" style={{ padding: "18px 28px", fontSize: 15 }}>
            Falar no WhatsApp agora
            <span className="arrow" />
          </a>
          <div className="fineprint" style={{ marginTop: 24 }}>
            Atendimento Seg–Sex · 09h às 19h
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  HeroSection, ContextSection, DiagnosticoSection, TratamentosSection,
  EquipeSection, ResultadosSection,
  DiferenciaisSection, DepoimentosSection, FAQSection, FinalCTASection
});
