"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const WA_NUM = "5532998491620";
function solicitar(s: string) {
  window.open(`https://wa.me/${WA_NUM}?text=${encodeURIComponent("Olá! Tenho interesse em: " + s + " da LIBRIX HUB. Gostaria de receber um orçamento.")}`, "_blank");
}

export default function AudiobookPage() {
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
          --ink:#0e0e0e;--ink2:#3a3a3a;--ink3:#7a7a7a;
          --bg:#f0f4fa;--bg2:#e5edf8;--white:#fff;
          --blue:#1a4db8;--blue2:#60a5fa;--blue-bg:rgba(37,99,235,.1);
          --purple:#7c3aed;--purple2:#a78bfa;--purple-bg:rgba(124,58,237,.08);
          --border:#c0d0ec;--sh:0 2px 8px rgba(0,0,0,.06);--sh-lg:0 16px 48px rgba(0,0,0,.1);
        }
        body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--ink);line-height:1.65;-webkit-font-smoothing:antialiased}
        h1,h2,h3,h4{font-family:'Fraunces',Georgia,serif}
        nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 40px;background:rgba(240,244,250,.96);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center}
        .nav-logo img{height:32px}
        .nav-back{display:inline-flex;align-items:center;gap:8px;color:var(--ink2);text-decoration:none;font-size:.85rem;font-weight:500;transition:color .3s}
        .nav-back:hover{color:var(--purple)}
        .nav-back svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2}
        .hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 24px 80px;position:relative;overflow:hidden;background:linear-gradient(180deg,#040e26 0%,#0c1a3e 50%,#04102a 100%)}
        .hero-glow{position:absolute;top:20%;left:50%;transform:translateX(-50%);width:700px;height:700px;background:radial-gradient(circle,rgba(37,99,235,.25) 0%,transparent 70%);pointer-events:none}
        .hero-content{position:relative;z-index:1;max-width:800px}
        .hero-badge{display:inline-flex;align-items:center;gap:10px;background:rgba(37,99,235,.2);border:1px solid rgba(37,99,235,.4);padding:10px 22px;border-radius:100px;font-size:.78rem;font-weight:600;color:#60a5fa;letter-spacing:.08em;text-transform:uppercase;margin-bottom:32px}
        .hero-badge::before{content:'';width:8px;height:8px;background:#60a5fa;border-radius:50%;animation:pulse 2s infinite}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}
        .hero h1{font-size:clamp(2.8rem,7vw,5rem);font-weight:800;line-height:1.05;letter-spacing:-.04em;margin-bottom:24px;color:#fff}
        .hero h1 em{font-style:italic;background:linear-gradient(135deg,#2563eb,#60a5fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .hero-sub{font-size:1.15rem;color:rgba(255,255,255,.65);max-width:560px;margin:0 auto 48px;line-height:1.75}
        .hero-ctas{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
        .btn-blue{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,#1a4db8,#2563eb);color:#fff;padding:16px 34px;border-radius:12px;font-weight:700;font-size:.95rem;text-decoration:none;border:none;cursor:pointer;transition:all .3s;font-family:inherit}
        .btn-blue:hover{transform:translateY(-3px);box-shadow:0 12px 36px rgba(37,99,235,.4)}
        .btn-ghost{display:inline-flex;align-items:center;gap:10px;background:transparent;color:#fff;padding:16px 34px;border-radius:12px;font-weight:600;font-size:.95rem;text-decoration:none;border:1.5px solid rgba(255,255,255,.25);transition:all .3s}
        .btn-ghost:hover{border-color:rgba(255,255,255,.6);background:rgba(255,255,255,.05)}
        .btn-ghost svg,.btn-blue svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2}
        .hero-wave{position:absolute;bottom:0;left:0;right:0}
        .sound-bars{display:flex;align-items:center;justify-content:center;gap:4px;height:48px;margin-bottom:40px}
        .bar{width:4px;border-radius:2px;background:linear-gradient(180deg,#a78bfa,#2563eb);animation:soundbar 1.2s ease-in-out infinite}
        .bar:nth-child(1){height:20px;animation-delay:0s}.bar:nth-child(2){height:36px;animation-delay:.1s}.bar:nth-child(3){height:28px;animation-delay:.2s}.bar:nth-child(4){height:44px;animation-delay:.3s}.bar:nth-child(5){height:32px;animation-delay:.4s}.bar:nth-child(6){height:44px;animation-delay:.5s}.bar:nth-child(7){height:28px;animation-delay:.6s}.bar:nth-child(8){height:36px;animation-delay:.7s}.bar:nth-child(9){height:20px;animation-delay:.8s}
        @keyframes soundbar{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}
        .section{padding:90px 24px}
        .container{max-width:1080px;margin:0 auto}
        .section-tag{display:inline-block;background:var(--blue-bg);border:1px solid rgba(37,99,235,.25);color:var(--blue);font-size:.72rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:6px 14px;border-radius:100px;margin-bottom:18px}
        .section-tag.purple{background:var(--purple-bg);border-color:rgba(124,58,237,.25);color:var(--purple)}
        .section-title{font-size:clamp(1.9rem,4vw,2.8rem);font-weight:700;margin-bottom:14px;line-height:1.15}
        .section-desc{font-size:1rem;color:var(--ink2);max-width:560px;line-height:1.75}
        .steps-section{background:var(--white)}
        .steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:52px;position:relative}
        .steps-grid::before{content:'';position:absolute;top:40px;left:10%;right:10%;height:2px;background:linear-gradient(90deg,#2563eb,#a78bfa);z-index:0}
        .step-card{background:var(--bg);border:1px solid var(--border);border-radius:20px;padding:32px 22px;text-align:center;position:relative;z-index:1;transition:all .3s}
        .step-card:hover{border-color:#2563eb;box-shadow:var(--sh-lg);transform:translateY(-4px)}
        .step-num{width:52px;height:52px;background:linear-gradient(135deg,#1a4db8,#2563eb);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.1rem;color:#fff;margin:0 auto 16px;font-family:'Fraunces',Georgia,serif}
        .step-title{font-size:1rem;font-weight:700;margin-bottom:8px}
        .step-desc{font-size:.83rem;color:var(--ink2);line-height:1.6}
        .plans-section{background:var(--bg)}
        .plans-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:52px}
        .plan-card{background:var(--white);border:1.5px solid var(--border);border-radius:22px;padding:36px 28px;position:relative;transition:all .3s}
        .plan-card:hover{transform:translateY(-6px);box-shadow:var(--sh-lg)}
        .plan-card.featured{border-color:#2563eb;background:linear-gradient(180deg,rgba(37,99,235,.06) 0%,var(--white) 100%)}
        .plan-badge{position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#1a4db8,#2563eb);color:#fff;padding:6px 18px;border-radius:100px;font-size:.68rem;font-weight:700;white-space:nowrap;letter-spacing:.04em}
        .plan-icon{font-size:2.4rem;margin-bottom:16px;display:block}
        .plan-name{font-size:1.4rem;font-weight:700;margin-bottom:6px}
        .plan-desc{font-size:.85rem;color:var(--ink3);margin-bottom:24px}
        .plan-features{list-style:none;margin-bottom:28px}
        .plan-feat{display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);font-size:.85rem;color:var(--ink2)}
        .plan-feat:last-child{border-bottom:none}
        .plan-feat-check{color:#2563eb;font-weight:700;font-size:1rem;flex-shrink:0}
        .plan-btn{width:100%;padding:14px;border-radius:11px;font-weight:600;font-size:.9rem;border:none;cursor:pointer;transition:all .3s;font-family:inherit}
        .plan-btn-outline{background:var(--bg);color:var(--ink);border:1.5px solid var(--border)}
        .plan-btn-outline:hover{border-color:#2563eb;color:#2563eb}
        .plan-btn-blue{background:linear-gradient(135deg,#1a4db8,#2563eb);color:#fff}
        .plan-btn-blue:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(37,99,235,.35)}
        .voices-section{background:var(--white)}
        .voices-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:48px}
        .voice-card{border:1.5px solid var(--border);border-radius:20px;padding:36px 32px;transition:all .3s;position:relative;overflow:hidden}
        .voice-card::after{content:'';position:absolute;top:0;right:0;width:120px;height:120px;background:radial-gradient(circle,rgba(37,99,235,.08) 0%,transparent 70%)}
        .voice-card:hover{border-color:#2563eb;box-shadow:var(--sh-lg)}
        .voice-icon{font-size:3rem;margin-bottom:16px;display:block}
        .voice-title{font-size:1.3rem;font-weight:700;margin-bottom:10px}
        .voice-desc{font-size:.9rem;color:var(--ink2);margin-bottom:20px;line-height:1.7}
        .voice-tags{display:flex;flex-wrap:wrap;gap:8px}
        .voice-tag{background:var(--blue-bg);border:1px solid rgba(37,99,235,.2);color:#1a4db8;font-size:.75rem;font-weight:600;padding:5px 12px;border-radius:100px}
        .langs-section{background:linear-gradient(135deg,#040e26 0%,#0c1a3e 100%);padding:70px 24px}
        .langs-title{font-size:clamp(1.6rem,3vw,2.2rem);font-weight:700;color:#fff;text-align:center;margin-bottom:10px;font-family:'Fraunces',Georgia,serif}
        .langs-sub{font-size:.95rem;color:rgba(255,255,255,.55);text-align:center;margin-bottom:44px}
        .langs-grid{display:flex;flex-wrap:wrap;justify-content:center;gap:14px;max-width:700px;margin:0 auto}
        .lang-chip{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);padding:12px 20px;border-radius:12px;color:#fff;font-size:.88rem;font-weight:500;transition:all .3s}
        .lang-chip:hover{background:rgba(37,99,235,.15);border-color:rgba(37,99,235,.4)}
        .lang-chip span{font-size:1.3rem}
        .why-section{background:var(--bg)}
        .why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:48px}
        .why-card{background:var(--white);border:1px solid var(--border);border-radius:18px;padding:30px 24px;transition:all .3s}
        .why-card:hover{border-color:var(--purple);box-shadow:var(--sh)}
        .why-icon{font-size:2.2rem;margin-bottom:14px;display:block}
        .why-title{font-size:1rem;font-weight:700;margin-bottom:8px}
        .why-desc{font-size:.84rem;color:var(--ink2);line-height:1.65}
        .cta-final{background:linear-gradient(135deg,#1a4db8 0%,#0c1a3e 100%);padding:90px 24px;text-align:center}
        .cta-final h2{font-size:clamp(2rem,5vw,3.2rem);font-weight:800;color:#fff;margin-bottom:16px}
        .cta-final p{font-size:1rem;color:rgba(255,255,255,.7);max-width:480px;margin:0 auto 40px;line-height:1.7}
        footer{background:#040e26;color:rgba(255,255,255,.5);padding:60px 24px 28px}
        .footer-inner{max-width:1080px;margin:0 auto}
        .footer-top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,.08)}
        .footer-col h4{font-size:.72rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;margin-bottom:16px;color:rgba(255,255,255,.7)}
        .footer-col ul{list-style:none}
        .footer-col li{margin-bottom:10px}
        .footer-col a{color:rgba(255,255,255,.4);text-decoration:none;font-size:.83rem;transition:color .3s}
        .footer-col a:hover{color:#60a5fa}
        .footer-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:28px;flex-wrap:wrap;gap:16px}
        .footer-copy{font-size:.78rem}
        .footer-social{display:flex;gap:10px}
        .footer-social a{width:38px;height:38px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:10px;transition:all .3s}
        .footer-social a:hover{background:#2563eb;border-color:#2563eb}
        .footer-social a svg{width:17px;height:17px;fill:rgba(255,255,255,.5);transition:fill .3s}
        .footer-social a:hover svg{fill:#fff}
        .wa{position:fixed;bottom:22px;right:22px;width:54px;height:54px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:999;box-shadow:0 4px 18px rgba(37,211,102,.4);transition:transform .3s}
        .wa:hover{transform:scale(1.1)}
        .wa svg{width:27px;height:27px;fill:#fff}
        .reveal{opacity:0;transform:translateY(24px);transition:all .6s ease}
        .reveal.active{opacity:1;transform:translateY(0)}
        @media(max-width:900px){.steps-grid,.plans-grid,.why-grid{grid-template-columns:repeat(2,1fr)}.steps-grid::before{display:none}.voices-grid{grid-template-columns:1fr}.footer-top{grid-template-columns:1fr 1fr}}
        @media(max-width:600px){.steps-grid,.plans-grid,.why-grid{grid-template-columns:1fr}.footer-top{grid-template-columns:1fr}.footer-bottom{flex-direction:column;text-align:center}nav{padding:14px 20px}}
      `}</style>

      <nav>
        <Link href="/" className="nav-logo"><Image src="/logo.png" alt="Librix Hub" width={1536} height={1024} style={{ height: "48px", width: "auto" }} /></Link>
        <Link href="/" className="nav-back">
          <svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Voltar à página principal
        </Link>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-badge">🎙️ Serviço Exclusivo LIBRIX HUB</div>
          <div className="sound-bars">
            {Array.from({length:9}).map((_,i) => <div key={i} className="bar"/>)}
          </div>
          <h1>O seu livro com<br/><em>voz profissional</em></h1>
          <p className="hero-sub">Transformamos o seu livro num audiobook de alta qualidade — narrado com voz profissional e realista, masculina ou feminina, em vários idiomas.</p>
          <div className="hero-ctas">
            <button className="btn-blue" onClick={() => solicitar("Audiobook Profissional")}>
              Solicitar Orçamento
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <a href="#planos" className="btn-ghost">
              Ver Planos
              <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            </a>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" fill="none"><path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="#f0f4fa"/></svg>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section steps-section">
        <div className="container">
          <div style={{textAlign:"center",maxWidth:600,margin:"0 auto 0"}}>
            <div className="section-tag">Processo simples</div>
            <h2 className="section-title">Como criamos o seu audiobook</h2>
          </div>
          <div className="steps-grid">
            {[
              {n:1,title:"Envie o seu livro",desc:"Partilhe o texto em Word, PDF ou outro formato. Analisamos o conteúdo e o género literário."},
              {n:2,title:"Escolha a voz",desc:"Selecione voz masculina ou feminina e o idioma. Enviamos amostras para aprovação prévia."},
              {n:3,title:"Produção e revisão",desc:"Geramos o audiobook com IA avançada, ajustamos ritmo, emoção e entoação ao género do livro."},
              {n:4,title:"Entrega final",desc:"Recebe o audiobook em MP3 de alta qualidade, pronto para publicar no Audible, Spotify e outras plataformas."},
            ].map(({n,title,desc}) => (
              <div key={n} className="step-card reveal">
                <div className="step-num">{n}</div>
                <h4 className="step-title">{title}</h4>
                <p className="step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOZES */}
      <section className="section voices-section">
        <div className="container">
          <div style={{textAlign:"center",maxWidth:600,margin:"0 auto 48px"}}>
            <div className="section-tag">Escolha a sua voz</div>
            <h2 className="section-title">Voz masculina ou feminina —<br/>natural e expressiva</h2>
          </div>
          <div className="voices-grid">
            <div className="voice-card reveal">
              <span className="voice-icon">🎤</span>
              <h3 className="voice-title">Voz Masculina</h3>
              <p className="voice-desc">Profunda, autoritária e expressiva. Ideal para livros de negócios, auto-ajuda, ficção de acção e obras religiosas. Tom sério, confiante e envolvente.</p>
              <div className="voice-tags">
                {["Negócios","Auto-ajuda","Ficção","Religiosos","Técnicos"].map(t => <span key={t} className="voice-tag">{t}</span>)}
              </div>
            </div>
            <div className="voice-card reveal">
              <span className="voice-icon">🎙️</span>
              <h3 className="voice-title">Voz Feminina</h3>
              <p className="voice-desc">Cálida, expressiva e envolvente. Perfeita para romances, desenvolvimento pessoal, livros infantis e poesia. Tom emotivo, acolhedor e natural.</p>
              <div className="voice-tags">
                {["Romances","Infantis","Poesia","Desenvolvimento Pessoal"].map(t => <span key={t} className="voice-tag">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDIOMAS */}
      <section className="langs-section">
        <h2 className="langs-title">Disponível em vários idiomas</h2>
        <p className="langs-sub">Publique o seu audiobook para qualquer mercado do mundo</p>
        <div className="langs-grid">
          {[["🇵🇹","Português de Portugal"],["🇧🇷","Português do Brasil"],["🇪🇸","Español"],["🇬🇧","English (UK)"],["🇮🇹","Italiano"],["🇫🇷","Français"],["🇩🇪","Deutsch"],["🌍","Outros sob consulta"]].map(([flag,name]) => (
            <div key={name} className="lang-chip"><span>{flag}</span>{name}</div>
          ))}
        </div>
      </section>

      {/* PLANOS */}
      <section className="section plans-section" id="planos">
        <div className="container">
          <div style={{textAlign:"center",maxWidth:600,margin:"0 auto 52px"}}>
            <div className="section-tag">Planos</div>
            <h2 className="section-title">Escolha o plano ideal<br/>para o seu audiobook</h2>
            <p className="section-desc" style={{margin:"0 auto"}}>Preços adaptados ao tamanho e complexidade do projeto.</p>
          </div>
          <div className="plans-grid">
            <div className="plan-card reveal">
              <span className="plan-icon">🎵</span>
              <h3 className="plan-name">Essencial</h3>
              <p className="plan-desc">Para livros curtos e conteúdo simples</p>
              <ul className="plan-features">
                {["Até 100 páginas","Voz masculina ou feminina","1 idioma à escolha","Entrega em MP3 alta qualidade","1 revisão de amostra","Prazo: 5–7 dias úteis"].map(f => (
                  <li key={f} className="plan-feat"><span className="plan-feat-check">✓</span>{f}</li>
                ))}
              </ul>
              <button className="plan-btn plan-btn-outline" onClick={() => solicitar("Audiobook Essencial")}>Solicitar →</button>
            </div>
            <div className="plan-card featured reveal">
              <div className="plan-badge">Mais Escolhido</div>
              <span className="plan-icon">🎙️</span>
              <h3 className="plan-name">Premium</h3>
              <p className="plan-desc">Para livros completos com qualidade máxima</p>
              <ul className="plan-features">
                {["Até 300 páginas","Voz masculina ou feminina","1 idioma à escolha","Tom e ritmo ajustados ao género","2 revisões incluídas","Pronto para Audible & Spotify","Prazo: 7–10 dias úteis"].map(f => (
                  <li key={f} className="plan-feat"><span className="plan-feat-check">✓</span>{f}</li>
                ))}
              </ul>
              <button className="plan-btn plan-btn-blue" onClick={() => solicitar("Audiobook Premium")}>Solicitar →</button>
            </div>
            <div className="plan-card reveal">
              <span className="plan-icon">🌍</span>
              <h3 className="plan-name">Multilíngue</h3>
              <p className="plan-desc">Expanda o seu audiobook para vários mercados</p>
              <ul className="plan-features">
                {["Até 300 páginas","Até 3 idiomas incluídos","Voz masculina ou feminina","Tom adaptado a cada idioma","Revisões em cada versão","Suporte para publicação","Prazo: 12–15 dias úteis"].map(f => (
                  <li key={f} className="plan-feat"><span className="plan-feat-check">✓</span>{f}</li>
                ))}
              </ul>
              <button className="plan-btn plan-btn-outline" onClick={() => solicitar("Audiobook Multilíngue")}>Solicitar →</button>
            </div>
          </div>
        </div>
      </section>

      {/* PORQUÊ */}
      <section className="section why-section">
        <div className="container">
          <div style={{textAlign:"center",maxWidth:600,margin:"0 auto 48px"}}>
            <div className="section-tag purple">Porque escolher-nos</div>
            <h2 className="section-title">Qualidade editorial<br/>em formato áudio</h2>
          </div>
          <div className="why-grid">
            {[
              {icon:"🧠",title:"IA Avançada + Revisão Humana",desc:"Usamos as melhores ferramentas de síntese de voz com supervisão editorial humana para garantir naturalidade e expressividade."},
              {icon:"🎯",title:"Voz Adaptada ao Género",desc:"Um romance não soa como um manual técnico. Ajustamos ritmo, entoação e emoção ao tipo de livro — para uma experiência imersiva."},
              {icon:"⚡",title:"Entrega Rápida",desc:"Prazos definidos desde o início. Acompanhe o progresso por WhatsApp e receba amostras para aprovação antes da entrega final."},
              {icon:"📦",title:"Pacote Completo",desc:"Combine com tradução e diagramação LIBRIX. O seu livro traduzido, diagramado E narrado — tudo num só parceiro."},
              {icon:"🌐",title:"Plataformas Globais",desc:"Entregamos no formato correcto para Audible, Spotify, Google Play Books, Apple Books e outras plataformas internacionais."},
              {icon:"✅",title:"Satisfação Garantida",desc:"Revisões incluídas em todos os planos. Só aprovamos a entrega final quando estiver completamente satisfeito com o resultado."},
            ].map(({icon,title,desc}) => (
              <div key={title} className="why-card reveal">
                <span className="why-icon">{icon}</span>
                <h4 className="why-title">{title}</h4>
                <p className="why-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <h2>Pronto para dar voz<br/>ao seu livro?</h2>
        <p>Fale connosco agora e receba um orçamento personalizado em menos de 24 horas.</p>
        <button className="btn-blue" onClick={() => solicitar("Audiobook Profissional")} style={{fontSize:".95rem",padding:"16px 34px"}}>
          Falar connosco no WhatsApp
          <svg viewBox="0 0 24 24" style={{width:18,height:18,stroke:"currentColor",fill:"none",strokeWidth:2}}><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.19 19a19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        </button>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <Image src="/logo-white.png" alt="Librix Hub" width={1536} height={1024} style={{height:"44px",width:"auto",marginBottom:16,display:"block"}}/>
              <p style={{fontSize:".83rem",color:"rgba(255,255,255,.4)",lineHeight:1.65,maxWidth:260,marginBottom:18}}>Transformamos ideias em livros, audiobooks e publicações profissionais de alto impacto.</p>
            </div>
            <div className="footer-col">
              <h4>Serviços</h4>
              <ul>
                <li><Link href="/#planos">Planos de Livros</Link></li>
                <li><Link href="/#especial">Plano Especial Ultra</Link></li>
                <li><Link href="/audiobook">Audiobook</Link></li>
                <li><Link href="/traducao">Tradução</Link></li>
                <li><Link href="/#servicos">Registo ISBN</Link></li>
                <li><Link href="/#servicos">Publicação Amazon</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Planos</h4>
              <ul>
                <li><Link href="/#planos">Essencial</Link></li>
                <li><Link href="/#planos">Avançado</Link></li>
                <li><Link href="/#planos">Premium</Link></li>
                <li><Link href="/#planos">Ouro Exclusivo</Link></li>
                <li><Link href="/#especial">Especial Ultra</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contacto</h4>
              <ul>
                <li><a href="mailto:librixhub@gmail.com">librixhub@gmail.com</a></li>
                <li><a href="https://wa.me/5532998491620">+55 32 9 9849-1620</a></li>
                <li><a href="https://instagram.com/librixhub">@librixhub</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2025 LIBRIX HUB · Todos os direitos reservados</p>
            <div className="footer-social">
              <a href="https://instagram.com/librixhub" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><circle cx="12" cy="12" r="3.5"/></svg>
              </a>
              <a href="https://wa.me/5532998491620" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/5532998491620?text=Ol%C3%A1!%20Tenho%20interesse%20na%20cria%C3%A7%C3%A3o%20de%20um%20audiobook%20profissional%20pela%20LIBRIX%20HUB." className="wa" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  );
}
