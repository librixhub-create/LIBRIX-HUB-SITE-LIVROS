"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WA_NUM = "5532998491620";
function solicitar(s: string) {
  window.open(`https://wa.me/${WA_NUM}?text=${encodeURIComponent("Olá! Usei a calculadora de precificação KDP e gostaria de ajuda para publicar: " + s)}`, "_blank");
}

function parseNumber(value: string): number {
  const normalized = value.replace(/\./g, "").replace(",", ".");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function formatMoney(value: number, currency: "BRL" | "USD"): string {
  return value.toLocaleString(currency === "BRL" ? "pt-BR" : "en-US", {
    style: "currency",
    currency,
  });
}

// Faixas oficiais de preço para o plano de 70% de royalty em eBooks (KDP, 2026).
const EBOOK_BANDS: Record<"BRL" | "USD", { min: number; max: number; deliveryPerMb: number }> = {
  BRL: { min: 5.99, max: 31.99, deliveryPerMb: 0.3 },
  USD: { min: 2.99, max: 12.99, deliveryPerMb: 0.15 },
};

type Ink = "bw" | "standardColor" | "premiumColor";

// Fórmulas oficiais de custo de impressão da KDP (Amazon.com, em USD) — capa comum.
function paperbackPrintingCost(pages: number, ink: Ink): number {
  if (pages <= 0) return 0;
  if (ink === "bw") {
    if (pages < 24) return 0;
    if (pages <= 110) return 2.3;
    return 1.0 + pages * 0.012;
  }
  if (ink === "standardColor") {
    if (pages < 72) return 0;
    return 1.0 + pages * 0.0255;
  }
  // premiumColor
  if (pages < 24) return 0;
  if (pages <= 40) return 3.6;
  return 1.0 + pages * 0.065;
}

// Fórmulas oficiais de custo de impressão da KDP (Amazon.com, em USD) — capa dura.
function hardcoverPrintingCost(pages: number, ink: "bw" | "premiumColor"): number {
  if (pages < 75) return 0;
  if (ink === "bw") {
    if (pages <= 108) return 6.8;
    return 5.65 + pages * 0.012;
  }
  return 5.65 + pages * 0.065;
}

// Royalty de impresso (capa comum e capa dura) é escalonado: 50% até US$9,98, 60% a partir de US$9,99.
function printRoyaltyRate(price: number): number {
  return price >= 9.99 ? 0.6 : 0.5;
}

type Tab = "kindle" | "paperback" | "hardcover";

function KdpCalculator() {
  const [tab, setTab] = useState<Tab>("kindle");

  // Kindle
  const [currency, setCurrency] = useState<"BRL" | "USD">("BRL");
  const [kindlePrice, setKindlePrice] = useState("19,90");
  const [fileSizeMb, setFileSizeMb] = useState("3");
  const [forcedPlan, setForcedPlan] = useState<"auto" | "35">("auto");

  // Capa comum
  const [pbPages, setPbPages] = useState("200");
  const [pbInk, setPbInk] = useState<Ink>("bw");
  const [pbPrice, setPbPrice] = useState("14.99");

  // Capa dura
  const [hcPages, setHcPages] = useState("300");
  const [hcInk, setHcInk] = useState<"bw" | "premiumColor">("bw");
  const [hcPrice, setHcPrice] = useState("24.99");

  const kindle = useMemo(() => {
    const price = parseNumber(kindlePrice);
    const mb = parseNumber(fileSizeMb);
    const band = EBOOK_BANDS[currency];
    const eligibleFor70 = price >= band.min && price <= band.max;
    const usesPlan70 = forcedPlan === "auto" && eligibleFor70;
    const delivery = usesPlan70 ? mb * band.deliveryPerMb : 0;
    const royalty = usesPlan70 ? Math.max(0, price - delivery) * 0.7 : price * 0.35;
    return { price, band, eligibleFor70, usesPlan70, delivery, royalty };
  }, [kindlePrice, fileSizeMb, forcedPlan, currency]);

  const paperback = useMemo(() => {
    const pages = Math.round(parseNumber(pbPages));
    const price = parseNumber(pbPrice);
    const printingCost = paperbackPrintingCost(pages, pbInk);
    const rate = printRoyaltyRate(price);
    const royalty = rate * price - printingCost;
    const minPrice = rate > 0 ? printingCost / rate : 0;
    return { pages, printingCost, rate, royalty, minPrice };
  }, [pbPages, pbInk, pbPrice]);

  const hardcover = useMemo(() => {
    const pages = Math.round(parseNumber(hcPages));
    const price = parseNumber(hcPrice);
    const printingCost = hardcoverPrintingCost(pages, hcInk);
    const rate = printRoyaltyRate(price);
    const royalty = rate * price - printingCost;
    const minPrice = rate > 0 ? printingCost / rate : 0;
    return { pages, printingCost, rate, royalty, minPrice };
  }, [hcPages, hcInk, hcPrice]);

  return (
    <div className="calc-card reveal">
      <div className="calc-tabs">
        <button type="button" className={`calc-tab ${tab === "kindle" ? "active" : ""}`} onClick={() => setTab("kindle")}>📱 Kindle (eBook)</button>
        <button type="button" className={`calc-tab ${tab === "paperback" ? "active" : ""}`} onClick={() => setTab("paperback")}>📘 Capa Comum</button>
        <button type="button" className={`calc-tab ${tab === "hardcover" ? "active" : ""}`} onClick={() => setTab("hardcover")}>📕 Capa Dura</button>
      </div>

      {tab === "kindle" && (
        <div className="calc-body">
          <div className="calc-grid">
            <div className="calc-field">
              <label>Loja / moeda</label>
              <select value={currency} onChange={(e) => setCurrency(e.target.value as "BRL" | "USD")}>
                <option value="BRL">Amazon.com.br — R$</option>
                <option value="USD">Amazon.com — US$</option>
              </select>
            </div>
            <div className="calc-field">
              <label>Preço de venda ({currency === "BRL" ? "R$" : "US$"})</label>
              <input value={kindlePrice} onChange={(e) => setKindlePrice(e.target.value)} inputMode="decimal" />
            </div>
            <div className="calc-field">
              <label>Tamanho do arquivo (MB)</label>
              <input value={fileSizeMb} onChange={(e) => setFileSizeMb(e.target.value)} inputMode="decimal" />
            </div>
            <div className="calc-field">
              <label>Plano de royalty</label>
              <select value={forcedPlan} onChange={(e) => setForcedPlan(e.target.value as "auto" | "35")}>
                <option value="auto">Automático (70% quando elegível)</option>
                <option value="35">Forçar 35%</option>
              </select>
            </div>
          </div>

          <p className="calc-note">
            O plano de 70% só se aplica a preços entre {formatMoney(kindle.band.min, currency)} e {formatMoney(kindle.band.max, currency)}
            {" "}nessa loja — fora dessa faixa a Amazon paga sempre 35%, sem desconto de taxa de entrega.
          </p>

          <div className="calc-results">
            <div className="calc-result">
              <span>Plano aplicado</span>
              <strong>{kindle.usesPlan70 ? "70%" : "35%"}</strong>
            </div>
            {kindle.usesPlan70 && (
              <div className="calc-result">
                <span>Custo de entrega</span>
                <strong>{formatMoney(kindle.delivery, currency)}</strong>
              </div>
            )}
            <div className="calc-result highlight">
              <span>Você recebe por venda</span>
              <strong>{formatMoney(kindle.royalty, currency)}</strong>
            </div>
          </div>
        </div>
      )}

      {(tab === "paperback" || tab === "hardcover") && (
        <div className="calc-body">
          <p className="calc-note top">
            Capa comum e capa dura da KDP são impressas e vendidas pela Amazon.com (US$) — a Amazon.com.br ainda não distribui livros impressos diretamente. Os valores abaixo seguem a tabela oficial da loja americana.
          </p>
          {tab === "paperback" ? (
            <>
              <div className="calc-grid">
                <div className="calc-field">
                  <label>Número de páginas</label>
                  <input value={pbPages} onChange={(e) => setPbPages(e.target.value)} inputMode="numeric" />
                </div>
                <div className="calc-field">
                  <label>Tipo de tinta / papel</label>
                  <select value={pbInk} onChange={(e) => setPbInk(e.target.value as Ink)}>
                    <option value="bw">Preto e branco</option>
                    <option value="standardColor">Colorido padrão</option>
                    <option value="premiumColor">Colorido premium</option>
                  </select>
                </div>
                <div className="calc-field">
                  <label>Preço de venda (US$)</label>
                  <input value={pbPrice} onChange={(e) => setPbPrice(e.target.value)} inputMode="decimal" />
                </div>
              </div>
              <div className="calc-results">
                <div className="calc-result">
                  <span>Custo de impressão</span>
                  <strong>{formatMoney(paperback.printingCost, "USD")}</strong>
                </div>
                <div className="calc-result">
                  <span>Taxa de royalty</span>
                  <strong>{Math.round(paperback.rate * 100)}%</strong>
                </div>
                <div className="calc-result">
                  <span>Preço mínimo (sem prejuízo)</span>
                  <strong>{formatMoney(paperback.minPrice, "USD")}</strong>
                </div>
                <div className="calc-result highlight">
                  <span>Você recebe por venda</span>
                  <strong>{formatMoney(paperback.royalty, "USD")}</strong>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="calc-grid">
                <div className="calc-field">
                  <label>Número de páginas</label>
                  <input value={hcPages} onChange={(e) => setHcPages(e.target.value)} inputMode="numeric" />
                </div>
                <div className="calc-field">
                  <label>Tipo de tinta</label>
                  <select value={hcInk} onChange={(e) => setHcInk(e.target.value as "bw" | "premiumColor")}>
                    <option value="bw">Preto e branco</option>
                    <option value="premiumColor">Colorido premium</option>
                  </select>
                </div>
                <div className="calc-field">
                  <label>Preço de venda (US$)</label>
                  <input value={hcPrice} onChange={(e) => setHcPrice(e.target.value)} inputMode="decimal" />
                </div>
              </div>
              <div className="calc-results">
                <div className="calc-result">
                  <span>Custo de impressão</span>
                  <strong>{formatMoney(hardcover.printingCost, "USD")}</strong>
                </div>
                <div className="calc-result">
                  <span>Taxa de royalty</span>
                  <strong>{Math.round(hardcover.rate * 100)}%</strong>
                </div>
                <div className="calc-result">
                  <span>Preço mínimo (sem prejuízo)</span>
                  <strong>{formatMoney(hardcover.minPrice, "USD")}</strong>
                </div>
                <div className="calc-result highlight">
                  <span>Você recebe por venda</span>
                  <strong>{formatMoney(hardcover.royalty, "USD")}</strong>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <p className="calc-disclaimer">
        Estimativa baseada nas tabelas públicas de custo de impressão e royalties da Amazon KDP. Os valores reais podem variar por promoções, impostos locais e atualizações da Amazon — confirme sempre no seu painel do KDP antes de publicar.
      </p>
    </div>
  );
}

export default function CalculadoraKdpPage() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        :root {
          --ink:#111111;--ink2:#3D3530;--ink3:#7A6E68;
          --bg:#F7F3EE;--bg2:#F0EBE3;--white:#FFFFFF;
          --gold:#C9A84C;--gold2:#D4A855;--gold-bg:rgba(201,168,76,.10);
          --border:#D9D3C8;--sh:0 2px 8px rgba(17,17,17,.06);--sh-lg:0 16px 48px rgba(17,17,17,.1);
          --dark:#111111;--dark2:#1C1916;
        }
        body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--ink2);line-height:1.65;-webkit-font-smoothing:antialiased}
        h1,h2,h3,h4{font-family:'Fraunces',Georgia,serif}
        nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 40px;background:rgba(247,243,238,.96);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center}
        .nav-logo img{height:32px}
        .nav-back{display:inline-flex;align-items:center;gap:8px;color:var(--ink2);text-decoration:none;font-size:.85rem;font-weight:500;transition:color .3s}
        .nav-back:hover{color:var(--ink)}
        .nav-back svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2}
        .hero{min-height:70vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:140px 24px 70px;position:relative;overflow:hidden;background:linear-gradient(180deg,#0D0D0D 0%,#1C1916 50%,#111111 100%)}
        .hero-glow{position:absolute;top:20%;left:50%;transform:translateX(-50%);width:700px;height:700px;background:radial-gradient(circle,rgba(201,168,76,.18) 0%,transparent 70%);pointer-events:none}
        .hero-content{position:relative;z-index:1;max-width:800px}
        .hero-badge{display:inline-flex;align-items:center;gap:10px;background:rgba(201,168,76,.15);border:1px solid rgba(201,168,76,.35);padding:10px 22px;border-radius:100px;font-size:.78rem;font-weight:600;color:var(--gold2);letter-spacing:.08em;text-transform:uppercase;margin-bottom:32px}
        .hero-badge::before{content:'';width:8px;height:8px;background:var(--gold);border-radius:50%;animation:pulse 2s infinite}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}
        .hero h1{font-size:clamp(2.4rem,6vw,4.2rem);font-weight:800;line-height:1.08;letter-spacing:-.04em;margin-bottom:22px;color:#F7F3EE}
        .hero h1 em{font-style:italic;color:var(--gold)}
        .hero-sub{font-size:1.1rem;color:rgba(247,243,238,.65);max-width:600px;margin:0 auto;line-height:1.75}
        .section{padding:70px 24px 100px}
        .container{max-width:900px;margin:0 auto}

        .calc-card{background:var(--white);border:1.5px solid var(--border);border-radius:24px;box-shadow:var(--sh-lg);overflow:hidden}
        .calc-tabs{display:flex;border-bottom:1px solid var(--border);background:var(--bg)}
        .calc-tab{flex:1;padding:18px 12px;background:none;border:none;cursor:pointer;font-family:inherit;font-size:.88rem;font-weight:600;color:var(--ink3);transition:all .25s;border-bottom:3px solid transparent}
        .calc-tab:hover{color:var(--ink)}
        .calc-tab.active{color:var(--ink);background:var(--white);border-bottom-color:var(--gold)}
        .calc-body{padding:36px}
        .calc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;margin-bottom:20px}
        .calc-field{display:flex;flex-direction:column;gap:6px}
        .calc-field label{font-size:.8rem;font-weight:600;color:var(--ink2)}
        .calc-field input,.calc-field select{padding:12px 14px;border:1.5px solid var(--border);border-radius:10px;font-family:inherit;font-size:.95rem;color:var(--ink);background:var(--bg);outline:none;transition:border-color .2s}
        .calc-field input:focus,.calc-field select:focus{border-color:var(--gold)}
        .calc-note{font-size:.82rem;color:var(--ink3);background:var(--gold-bg);border:1px solid rgba(201,168,76,.25);border-radius:12px;padding:12px 16px;margin-bottom:24px;line-height:1.6}
        .calc-note.top{margin-bottom:24px}
        .calc-results{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;padding-top:8px;border-top:1px solid var(--border)}
        .calc-result{padding-top:20px;display:flex;flex-direction:column;gap:4px}
        .calc-result span{font-size:.78rem;color:var(--ink3)}
        .calc-result strong{font-size:1.35rem;color:var(--ink);font-weight:700}
        .calc-result.highlight strong{color:#7a5b10}
        .calc-result.highlight{grid-column:1/-1;background:var(--gold-bg);border:1px solid rgba(201,168,76,.3);border-radius:14px;padding:18px 20px;margin-top:4px}
        .calc-disclaimer{font-size:.75rem;color:var(--ink3);padding:18px 36px 28px;border-top:1px solid var(--border);line-height:1.6}

        .info-section{margin-top:56px}
        .info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:8px}
        .info-card{background:var(--white);border:1px solid var(--border);border-radius:18px;padding:26px 22px}
        .info-card h4{font-size:1rem;font-weight:700;margin-bottom:8px;color:var(--ink)}
        .info-card p{font-size:.85rem;color:var(--ink3);line-height:1.65}

        .cta-final{background:var(--dark);padding:80px 24px;text-align:center;margin-top:80px}
        .cta-final h2{font-size:clamp(1.8rem,4.5vw,2.8rem);font-weight:800;color:#F7F3EE;margin-bottom:16px}
        .cta-final p{font-size:1rem;color:rgba(247,243,238,.65);max-width:480px;margin:0 auto 36px;line-height:1.7}
        .btn-blue{display:inline-flex;align-items:center;gap:10px;background:var(--gold);color:var(--ink);padding:16px 34px;border-radius:2px;font-weight:700;font-size:.95rem;text-decoration:none;border:none;cursor:pointer;transition:all .3s;font-family:inherit}
        .btn-blue:hover{background:var(--gold2);transform:translateY(-2px)}
        .btn-blue svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2}

        footer{background:var(--dark2);color:rgba(247,243,238,.45);padding:60px 24px 28px;border-top:1px solid rgba(247,243,238,.06)}
        .footer-inner{max-width:1080px;margin:0 auto;text-align:center}
        .footer-copy{font-size:.78rem}
        .wa{position:fixed;bottom:22px;right:22px;width:54px;height:54px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:999;box-shadow:0 4px 18px rgba(37,211,102,.4);transition:transform .3s}
        .wa:hover{transform:scale(1.1)}
        .wa svg{width:27px;height:27px;fill:#fff}
        .reveal{opacity:0;transform:translateY(24px);transition:all .6s ease}
        .reveal.active{opacity:1;transform:translateY(0)}
        @media(max-width:720px){.calc-grid,.calc-results,.info-grid{grid-template-columns:1fr}.calc-body{padding:24px}.calc-disclaimer{padding:18px 24px 24px}.calc-tab{font-size:.78rem;padding:14px 8px}nav{padding:14px 20px}}
      `}</style>

      <nav>
        <Link href="/" className="nav-logo"><Image src="/logo.png" alt="Librix Hub" width={1536} height={1024} style={{ height: "48px", width: "auto" }} /></Link>
        <Link href="/" className="nav-back">
          <svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Voltar à página principal
        </Link>
      </nav>

      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-badge">🧮 Ferramenta gratuita LIBRIX HUB</div>
          <h1>Calculadora de <em>precificação Amazon KDP</em></h1>
          <p className="hero-sub">Descubra quanto a Amazon cobra para imprimir cada formato do seu livro e quanto você recebe de royalty — Kindle, capa comum e capa dura, com as fórmulas oficiais da KDP.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <KdpCalculator />

          <div className="info-section reveal">
            <div className="info-grid">
              <div className="info-card">
                <h4>📱 Kindle (eBook)</h4>
                <p>Royalty de 70% só dentro da faixa de preço da loja, com desconto de uma taxa de entrega por MB. Fora da faixa, o royalty cai para 35% sem desconto.</p>
              </div>
              <div className="info-card">
                <h4>📘 Capa Comum</h4>
                <p>A Amazon cobra um custo de impressão (fixo + por página) e paga 50% ou 60% do preço de capa, dependendo da faixa de preço escolhida.</p>
              </div>
              <div className="info-card">
                <h4>📕 Capa Dura</h4>
                <p>Mesmo modelo da capa comum, com custo de impressão mais alto — ideal para edições especiais e de colecionador.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <h2>Quer publicar sem<br />complicação?</h2>
        <p>A LIBRIX HUB cuida da diagramação, capa e formatação — você só define o preço com a calculadora e publica.</p>
        <button className="btn-blue" onClick={() => solicitar("orçamento de publicação")}>
          Falar connosco no WhatsApp
          <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.19 19a19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
        </button>
      </section>

      <footer>
        <div className="footer-inner">
          <p className="footer-copy">© 2026 LIBRIX HUB · Todos os direitos reservados</p>
        </div>
      </footer>

      <a href={`https://wa.me/${WA_NUM}?text=${encodeURIComponent("Olá! Usei a calculadora de precificação KDP e tenho uma dúvida.")}`} className="wa" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>
    </>
  );
}
