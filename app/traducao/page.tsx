"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const WA_NUM = "5532998491620";
function solicitar(s: string) {
  window.open(`https://wa.me/${WA_NUM}?text=${encodeURIComponent("Olá! Tenho interesse em: " + s + " da LIBRIX HUB. Gostaria de receber um orçamento.")}`, "_blank");
}

export default function TraducaoPage() {
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
        :root{
          --bg:#eef2fb;--bg2:#e2eaf8;--white:#fff;--ink:#0c1a3e;--ink2:#1e3464;--ink3:#5570a4;
          --blue:#1a4db8;--blue2:#2563eb;--blue-light:#60a5fa;--blue-bg:rgba(37,99,235,.08);
          --green:#047857;--green-bg:rgba(4,120,87,.08);--border:#c0d0ec;
          --sh:0 2px 8px rgba(0,0,0,.06);--sh-lg:0 16px 48px rgba(12,26,62,.1);
        }
        *{box-sizing:border-box;margin:0;padding:0}
        body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--ink);line-height:1.65;-webkit-font-smoothing:antialiased}
        h1,h2,h3,h4{font-family:'Fraunces',Georgia,serif}
        nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 40px;background:rgba(238,242,251,.96);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center}
        .nav-back{display:inline-flex;align-items:center;gap:8px;color:var(--ink2);text-decoration:none;font-size:.85rem;font-weight:500;transition:color .3s}
        .nav-back:hover{color:var(--blue2)}
        .nav-back svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2}
        .hero{padding:160px 24px 80px;background:linear-gradient(180deg,#eef2fb 0%,var(--white) 100%);text-align:center;position:relative}
        .hero-pill{display:inline-flex;align-items:center;gap:8px;background:var(--blue-bg);border:1px solid rgba(37,99,235,.25);color:var(--blue);padding:9px 20px;border-radius:100px;font-size:.76rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:28px}
        .hero h1{font-size:clamp(2.6rem,6vw,4.2rem);font-weight:800;line-height:1.08;letter-spacing:-.04em;color:var(--ink);max-width:740px;margin:0 auto 22px}
        .hero h1 em{font-style:italic;color:var(--blue2)}
        .hero-sub{font-size:1.08rem;color:var(--ink3);max-width:560px;margin:0 auto 44px;line-height:1.8}
        .ctas{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
        .btn-blue{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,var(--blue),var(--blue2));color:#fff;padding:15px 32px;border-radius:12px;font-weight:700;font-size:.92rem;text-decoration:none;border:none;cursor:pointer;transition:all .3s;font-family:inherit}
        .btn-blue:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(37,99,235,.4)}
        .btn-outline{display:inline-flex;align-items:center;gap:10px;background:var(--white);color:var(--ink);padding:14px 28px;border-radius:12px;font-weight:600;font-size:.9rem;text-decoration:none;border:1.5px solid var(--border);transition:all .3s;cursor:pointer;font-family:inherit}
        .btn-outline:hover{border-color:var(--blue2);color:var(--blue2)}
        .btn-outline svg,.btn-blue svg{width:17px;height:17px;stroke:currentColor;fill:none;stroke-width:2}
        .flags-row{display:flex;justify-content:center;align-items:center;gap:12px;margin-top:44px;flex-wrap:wrap}
        .flag-item{display:flex;align-items:center;gap:8px;font-size:.8rem;color:var(--ink3);font-weight:500}
        .flag-item span{font-size:1.6rem}
        section{padding:80px 24px}
        .container{max-width:1080px;margin:0 auto}
        .section-tag{display:inline-block;background:var(--blue-bg);border:1px solid rgba(37,99,235,.2);color:var(--blue);font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:5px 14px;border-radius:100px;margin-bottom:16px}
        .section-tag.green{background:var(--green-bg);border-color:rgba(4,120,87,.25);color:var(--green)}
        .section-title{font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:700;margin-bottom:12px;line-height:1.2;color:var(--ink)}
        .section-desc{font-size:.95rem;color:var(--ink3);line-height:1.75}
        .diff-section{background:var(--white)}
        .diff-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:48px}
        .diff-col{border:1.5px solid var(--border);border-radius:22px;padding:36px 30px}
        .diff-col.bad{border-color:#fca5a5;background:rgba(239,68,68,.025)}
        .diff-col.good{border-color:rgba(37,99,235,.35);background:rgba(37,99,235,.03)}
        .diff-header{display:flex;align-items:center;gap:12px;margin-bottom:24px}
        .diff-icon{font-size:1.8rem}
        .diff-title{font-size:1.05rem;font-weight:700;color:var(--ink)}
        .diff-list{list-style:none}
        .diff-item{display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);font-size:.86rem;color:var(--ink2)}
        .diff-item:last-child{border-bottom:none}
        .diff-item .ic{font-weight:700;flex-shrink:0;font-size:1rem}
        .diff-item .ic.bad{color:#ef4444}
        .diff-item .ic.good{color:#2563eb}
        .modalities-section{background:var(--bg)}
        .modalities-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:48px}
        .mod-card{background:var(--white);border:1.5px solid var(--border);border-radius:20px;padding:32px 26px;transition:all .3s;position:relative;overflow:hidden}
        .mod-card::after{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--blue),var(--blue-light));opacity:0;transition:opacity .3s}
        .mod-card:hover{transform:translateY(-5px);box-shadow:var(--sh-lg);border-color:rgba(37,99,235,.4)}
        .mod-card:hover::after{opacity:1}
        .mod-icon{font-size:2.4rem;margin-bottom:16px;display:block}
        .mod-title{font-size:1.1rem;font-weight:700;margin-bottom:8px;color:var(--ink)}
        .mod-desc{font-size:.84rem;color:var(--ink3);margin-bottom:18px;line-height:1.7}
        .mod-tag{display:inline-block;background:var(--blue-bg);border:1px solid rgba(37,99,235,.18);color:var(--blue);font-size:.71rem;font-weight:600;padding:4px 12px;border-radius:100px}
        .librix-section{background:linear-gradient(135deg,#040e26 0%,#0c1a3e 60%,#1a4db8 100%);color:#fff;position:relative;overflow:hidden}
        .librix-inner{max-width:900px;margin:0 auto;position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
        .librix-glow{position:absolute;right:-10%;top:-20%;width:500px;height:500px;background:radial-gradient(circle,rgba(37,99,235,.25) 0%,transparent 70%);pointer-events:none}
        .librix-badge{display:inline-block;background:rgba(37,99,235,.25);border:1px solid rgba(96,165,250,.4);color:#60a5fa;font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:6px 16px;border-radius:100px;margin-bottom:20px}
        .librix-title{font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:800;line-height:1.15;margin-bottom:16px}
        .librix-desc{font-size:.95rem;color:rgba(238,242,251,.65);line-height:1.8;margin-bottom:28px}
        .librix-feats{list-style:none;display:grid;grid-template-columns:1fr;gap:12px}
        .librix-feat{display:flex;align-items:flex-start;gap:10px;font-size:.87rem;color:rgba(238,242,251,.8)}
        .librix-feat-ic{color:#60a5fa;font-weight:700;flex-shrink:0}
        .librix-cta-side{display:flex;flex-direction:column;align-items:flex-start;gap:18px}
        .price-tag{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.15);border-radius:18px;padding:24px 28px;text-align:center}
        .price-from{font-size:.75rem;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px}
        .price-val{font-size:2.2rem;font-weight:800;color:#fff;font-family:'Fraunces',Georgia,serif}
        .price-unit{font-size:.8rem;color:rgba(255,255,255,.5);margin-top:4px}
        .price-note{font-size:.74rem;color:rgba(255,255,255,.4);margin-top:14px;line-height:1.5}
        .langs-section{background:var(--white)}
        .langs-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:44px}
        .lang-card{background:var(--bg);border:1px solid var(--border);border-radius:16px;padding:22px 18px;text-align:center;transition:all .3s}
        .lang-card:hover{border-color:var(--blue2);box-shadow:var(--sh);transform:translateY(-3px)}
        .lang-flag{font-size:2.2rem;margin-bottom:10px;display:block}
        .lang-name{font-size:.85rem;font-weight:600;color:var(--ink);margin-bottom:4px}
        .lang-code{font-size:.73rem;color:var(--ink3)}
        .process-section{background:var(--bg)}
        .process-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin-top:48px;position:relative}
        .process-steps::before{content:'';position:absolute;top:36px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--blue2),var(--blue-light));z-index:0}
        .proc-card{background:var(--white);border:1px solid var(--border);border-radius:18px;padding:30px 20px;text-align:center;position:relative;z-index:1;transition:all .3s}
        .proc-card:hover{border-color:var(--blue2);box-shadow:var(--sh)}
        .proc-num{width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--blue2));color:#fff;font-weight:800;font-size:1rem;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-family:'Fraunces',Georgia,serif}
        .proc-title{font-size:.95rem;font-weight:700;margin-bottom:6px;color:var(--ink)}
        .proc-desc{font-size:.8rem;color:var(--ink3);line-height:1.6}
        .cta-section{background:linear-gradient(135deg,var(--blue) 0%,#0c1a3e 100%);padding:90px 24px;text-align:center}
        .cta-section h2{font-size:clamp(2rem,4.5vw,3rem);font-weight:800;color:#fff;margin-bottom:16px}
        .cta-section p{font-size:1rem;color:rgba(255,255,255,.65);max-width:480px;margin:0 auto 40px;line-height:1.75}
        footer{background:#040e26;color:rgba(255,255,255,.45);padding:60px 24px 28px}
        .footer-inner{max-width:1080px;margin:0 auto}
        .footer-top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,.07)}
        .footer-col h4{font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;margin-bottom:14px;color:rgba(255,255,255,.65)}
        .footer-col ul{list-style:none}
        .footer-col li{margin-bottom:9px}
        .footer-col a{color:rgba(255,255,255,.38);text-decoration:none;font-size:.83rem;transition:color .3s}
        .footer-col a:hover{color:#60a5fa}
        .footer-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:26px;flex-wrap:wrap;gap:14px}
        .footer-copy{font-size:.76rem}
        .footer-social{display:flex;gap:10px}
        .footer-social a{width:36px;height:36px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:9px;display:flex;align-items:center;justify-content:center;transition:all .3s}
        .footer-social a:hover{background:var(--blue2);border-color:var(--blue2)}
        .footer-social a svg{width:16px;height:16px;fill:rgba(255,255,255,.45);transition:fill .3s}
        .footer-social a:hover svg{fill:#fff}
        .wa{position:fixed;bottom:22px;right:22px;width:54px;height:54px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:999;box-shadow:0 4px 18px rgba(37,211,102,.4);transition:transform .3s}
        .wa:hover{transform:scale(1.1)}
        .wa svg{width:27px;height:27px;fill:#fff}
        .reveal{opacity:0;transform:translateY(24px);transition:all .6s ease}
        .reveal.active{opacity:1;transform:translateY(0)}
        @media(max-width:900px){.diff-grid,.librix-inner{grid-template-columns:1fr}.modalities-grid,.langs-grid,.process-steps{grid-template-columns:repeat(2,1fr)}.process-steps::before{display:none}.footer-top{grid-template-columns:1fr 1fr}}
        @media(max-width:600px){.modalities-grid,.langs-grid,.process-steps,.footer-top{grid-template-columns:1fr}nav{padding:14px 20px}}
      `}</style>

      <nav>
        <Link href="/" style={{display:"block"}}><Image src="/logo.png" alt="Librix Hub" width={1536} height={1024} style={{ height: "48px", width: "auto" }} /></Link>
        <Link href="/" className="nav-back">
          <svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Voltar à página principal
        </Link>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-pill">🌍 Serviço LIBRIX HUB</div>
        <h1>Tradução profissional<br/>para o seu <em>livro</em></h1>
        <p className="hero-sub">Levamos o seu livro a leitores de todo o mundo — com tradução de alta qualidade em múltiplos idiomas, mantendo o estilo e a essência do original.</p>
        <div className="ctas">
          <button className="btn-blue" onClick={() => solicitar("Tradução Profissional")}>
            Solicitar Orçamento
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <a href="#modalidades" className="btn-outline">
            Ver Modalidades
            <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          </a>
        </div>
        <div className="flags-row">
          {[["🇵🇹","PT-PT"],["🇧🇷","PT-BR"],["🇪🇸","ES"],["🇬🇧","EN"],["🇮🇹","IT"],["🇫🇷","FR"],["🇩🇪","DE"],["🌍","+ mais"]].map(([f,l]) => (
            <div key={l} className="flag-item"><span>{f}</span>{l}</div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="section diff-section">
        <div className="container">
          <div style={{textAlign:"center",maxWidth:600,margin:"0 auto 52px"}}>
            <div className="section-tag">Porquê importa</div>
            <h2 className="section-title">Tradução literária vs. tradução automática</h2>
            <p className="section-desc" style={{margin:"12px auto 0"}}>Não é só traduzir palavras — é preservar emoção, ritmo e estilo do autor.</p>
          </div>
          <div className="diff-grid">
            <div className="diff-col bad reveal">
              <div className="diff-header">
                <span className="diff-icon">❌</span>
                <h3 className="diff-title">Tradução Automática</h3>
              </div>
              <ul className="diff-list">
                {["Perde o estilo e voz do autor","Erros de contexto e cultura","Expressões idiomáticas mal traduzidas","Parece robótico e artificial","Danifica a credibilidade do livro","Revisão humana necessária do zero"].map(i => (
                  <li key={i} className="diff-item"><span className="ic bad">✗</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="diff-col good reveal">
              <div className="diff-header">
                <span className="diff-icon">✅</span>
                <h3 className="diff-title">Tradução Profissional LIBRIX</h3>
              </div>
              <ul className="diff-list">
                {["Preserva o estilo e voz do autor","Adaptação cultural ao mercado alvo","Expressões naturais e fluentes","Leitura natural e envolvente","Credibilidade editorial profissional","Revisão e entrega final incluídas"].map(i => (
                  <li key={i} className="diff-item"><span className="ic good">✓</span>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MODALIDADES */}
      <section className="section modalities-section" id="modalidades">
        <div className="container">
          <div style={{textAlign:"center",maxWidth:600,margin:"0 auto 52px"}}>
            <div className="section-tag">Serviços</div>
            <h2 className="section-title">O que traduzimos</h2>
          </div>
          <div className="modalities-grid">
            {[
              {icon:"📚",title:"Livros & Obras Literárias",desc:"Tradução completa de livros — ficção, auto-ajuda, negócios, religiosos, infantis. Preservamos o estilo e a voz do autor em cada idioma.",tag:"Alta Fidelidade"},
              {icon:"📄",title:"Textos e Documentos",desc:"Contratos, relatórios, certificados, dossiês de imprensa, materiais de marketing e outros documentos editoriais.",tag:"Profissional"},
              {icon:"🌐",title:"Conteúdo Web & Digital",desc:"Sites, blogs, landing pages, newsletters, redes sociais e conteúdo para plataformas digitais em múltiplos idiomas.",tag:"Digital"},
              {icon:"🎥",title:"Scripts e Roteiros",desc:"Legendas, scripts para vídeos, roteiros de podcasts e audiobooks — adaptados ao ritmo oral de cada idioma.",tag:"Áudio/Vídeo"},
              {icon:"📱",title:"Comunicação Empresarial",desc:"Emails, propostas, apresentações, manuais e qualquer conteúdo de comunicação interna ou externa da sua empresa.",tag:"Empresarial"},
              {icon:"🔬",title:"Conteúdo Técnico",desc:"Artigos científicos, manuais técnicos, documentação de software e conteúdo especializado com terminologia precisa.",tag:"Técnico"},
            ].map(({icon,title,desc,tag}) => (
              <div key={title} className="mod-card reveal">
                <span className="mod-icon">{icon}</span>
                <h3 className="mod-title">{title}</h3>
                <p className="mod-desc">{desc}</p>
                <span className="mod-tag">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACOTE LIBRIX */}
      <section className="section librix-section">
        <div className="librix-glow"/>
        <div className="librix-inner">
          <div>
            <div className="librix-badge">Pacote Completo</div>
            <h2 className="librix-title">O pacote editorial<br/>completo LIBRIX</h2>
            <p className="librix-desc">Combine a tradução com diagramação profissional e crie versões publicáveis do seu livro em vários idiomas — tudo a partir de um único parceiro.</p>
            <ul className="librix-feats">
              {[
                "Tradução profissional para o idioma desejado",
                "Diagramação do livro traduzido (layout pronto)",
                "Capa adaptada com texto no novo idioma",
                "Revisão editorial completa",
                "Pronto para publicar na Amazon KDP international",
                "Suporte total por WhatsApp em cada etapa",
              ].map(f => (
                <li key={f} className="librix-feat"><span className="librix-feat-ic">✓</span>{f}</li>
              ))}
            </ul>
          </div>
          <div className="librix-cta-side">
            <div className="price-tag">
              <p className="price-from">Pacote a partir de</p>
              <p className="price-val">Consulte</p>
              <p className="price-unit">preços personalizados por projeto</p>
              <p className="price-note">Orçamento sem compromisso em menos de 24h após análise do seu projeto.</p>
            </div>
            <button className="btn-blue" onClick={() => solicitar("Pacote Editorial LIBRIX — Tradução + Diagramação")}>
              Solicitar Orçamento Completo
              <svg viewBox="0 0 24 24" style={{width:17,height:17,stroke:"currentColor",fill:"none",strokeWidth:2}}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="btn-outline" onClick={() => solicitar("Tradução Profissional LIBRIX")} style={{color:"rgba(238,242,251,.7)",borderColor:"rgba(255,255,255,.15)",background:"rgba(255,255,255,.05)"}}>
              Só Tradução
            </button>
          </div>
        </div>
      </section>

      {/* IDIOMAS */}
      <section className="section langs-section">
        <div className="container">
          <div style={{textAlign:"center",maxWidth:600,margin:"0 auto 48px"}}>
            <div className="section-tag green">Idiomas</div>
            <h2 className="section-title">Traduzimos para os principais<br/>mercados editoriais</h2>
          </div>
          <div className="langs-grid">
            {[["🇵🇹","Português","Portugal (PT-PT)"],["🇧🇷","Português","Brasil (PT-BR)"],["🇪🇸","Español","Espanha / LatAm"],["🇬🇧","English","UK / USA"],["🇮🇹","Italiano","Itália"],["🇫🇷","Français","França / Belgique"],["🇩🇪","Deutsch","Alemanha / Áustria"],["🌍","Outros idiomas","Sob consulta"]].map(([flag,name,code]) => (
              <div key={code} className="lang-card reveal">
                <span className="lang-flag">{flag}</span>
                <p className="lang-name">{name}</p>
                <p className="lang-code">{code}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="section process-section">
        <div className="container">
          <div style={{textAlign:"center",maxWidth:600,margin:"0 auto 52px"}}>
            <div className="section-tag">Processo</div>
            <h2 className="section-title">Como funciona</h2>
          </div>
          <div className="process-steps">
            {[
              {n:1,title:"Envie o seu projeto",desc:"Partilhe o texto, o idioma de origem e o(s) idioma(s) alvo. Analisamos e enviamos orçamento em 24h."},
              {n:2,title:"Aprovação e início",desc:"Após aprovação, iniciamos a tradução com atenção ao estilo literário e adaptação cultural."},
              {n:3,title:"Revisão editorial",desc:"O texto traduzido passa por revisão rigorosa de ortografia, fluência e coerência estilística."},
              {n:4,title:"Entrega final",desc:"Recebe o texto traduzido em formato editável (Word/PDF). Com diagramação, pronto para publicar."},
            ].map(({n,title,desc}) => (
              <div key={n} className="proc-card reveal">
                <div className="proc-num">{n}</div>
                <h4 className="proc-title">{title}</h4>
                <p className="proc-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{maxWidth:700,textAlign:"center"}}>
          <h2>Leve o seu livro<br/>ao mundo inteiro</h2>
          <p>Orçamento rápido, resposta em menos de 24 horas. Sem compromisso.</p>
          <div className="ctas">
            <button className="btn-blue" onClick={() => solicitar("Tradução Profissional")} style={{fontSize:".95rem",padding:"15px 30px"}}>
              Falar no WhatsApp
              <svg viewBox="0 0 24 24" style={{width:17,height:17,stroke:"currentColor",fill:"none",strokeWidth:2}}><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.19 19a19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            </button>
            <a href="mailto:librixhub@gmail.com" className="btn-outline" style={{color:"rgba(238,242,251,.75)",borderColor:"rgba(255,255,255,.2)",background:"rgba(255,255,255,.05)"}}>
              Enviar Email
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <Image src="/logo-white.png" alt="Librix Hub" width={1536} height={1024} style={{height:"44px",width:"auto",marginBottom:14,display:"block"}}/>
              <p style={{fontSize:".83rem",color:"rgba(255,255,255,.38)",lineHeight:1.65,maxWidth:260}}>Especialistas em criar publicações profissionais de alto impacto.</p>
            </div>
            <div className="footer-col">
              <h4>Serviços</h4>
              <ul>
                <li><Link href="/#planos">Diagramação</Link></li>
                <li><Link href="/#especial">Plano Especial Ultra</Link></li>
                <li><Link href="/audiobook">Audiobook</Link></li>
                <li><Link href="/traducao">Tradução</Link></li>
                <li><Link href="/cinematografico">Vídeo Cinematográfico</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Idiomas</h4>
              <ul>
                <li><a href="#">Português (PT-PT)</a></li>
                <li><a href="#">Português (PT-BR)</a></li>
                <li><a href="#">Español</a></li>
                <li><a href="#">English</a></li>
                <li><a href="#">Italiano</a></li>
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

      <a href="https://wa.me/5532998491620" className="wa" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  );
}
