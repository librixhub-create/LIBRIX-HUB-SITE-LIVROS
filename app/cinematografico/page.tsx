"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const WA_NUM = "5532998491620";
function solicitar(s: string) {
  window.open(`https://wa.me/${WA_NUM}?text=${encodeURIComponent("Olá! Tenho interesse em: " + s + " da LIBRIX HUB. Gostaria de receber um orçamento.")}`, "_blank");
}

export default function CinematograficoPage() {
  const demoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  function togglePlay() {
    if (!demoRef.current) return;
    demoRef.current.paused ? demoRef.current.play() : demoRef.current.pause();
  }

  return (
    <>
      <style>{`
        :root{
          --bg:#040e26;--bg2:#0c1a3e;--bg3:#0a1630;
          --blue:#2563eb;--blue2:#1a4db8;--blue-light:#60a5fa;
          --text:#eef2fb;--text2:rgba(238,242,251,.65);--text3:rgba(238,242,251,.38);
          --border:rgba(37,99,235,.2);--border2:rgba(255,255,255,.08);
          --sh-blue:0 12px 40px rgba(37,99,235,.4);
        }
        *{box-sizing:border-box;margin:0;padding:0}
        body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.65;-webkit-font-smoothing:antialiased}
        h1,h2,h3,h4{font-family:'Cinzel','Fraunces',Georgia,serif}
        nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 40px;background:rgba(4,14,38,.92);backdrop-filter:blur(20px);border-bottom:1px solid var(--border2);display:flex;justify-content:space-between;align-items:center}
        .nav-back{display:inline-flex;align-items:center;gap:8px;color:var(--text2);text-decoration:none;font-size:.83rem;font-weight:500;transition:color .3s;font-family:'Inter',sans-serif}
        .nav-back:hover{color:var(--blue-light)}
        .nav-back svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2}
        .hero{min-height:100vh;display:grid;grid-template-columns:1fr 1fr;gap:0;padding:0;overflow:hidden;position:relative}
        .hero-left{display:flex;flex-direction:column;justify-content:center;padding:140px 60px 80px;position:relative;z-index:1}
        .hero-glow{position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(ellipse at 20% 50%,rgba(37,99,235,.2) 0%,transparent 60%);pointer-events:none}
        .hero-pill{display:inline-flex;align-items:center;gap:8px;background:rgba(37,99,235,.15);border:1px solid rgba(37,99,235,.35);color:var(--blue-light);font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:8px 18px;border-radius:100px;margin-bottom:28px;font-family:'Inter',sans-serif;width:fit-content}
        .hero-pill::before{content:'';width:7px;height:7px;background:var(--blue-light);border-radius:50%;animation:pulse 2s infinite}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}
        h1{font-size:clamp(3rem,5vw,4.5rem);font-weight:700;line-height:1.0;letter-spacing:-.02em;margin-bottom:24px;color:var(--text)}
        h1 em{font-style:italic;background:linear-gradient(135deg,var(--blue),var(--blue-light));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .hero-sub{font-size:1rem;color:var(--text2);max-width:460px;margin-bottom:40px;line-height:1.8;font-family:'Inter',sans-serif}
        .ctas{display:flex;gap:14px;flex-wrap:wrap}
        .btn-blue{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,var(--blue2),var(--blue));color:#fff;padding:15px 30px;border-radius:11px;font-weight:700;font-size:.9rem;text-decoration:none;border:none;cursor:pointer;transition:all .3s;font-family:'Inter',sans-serif}
        .btn-blue:hover{transform:translateY(-3px);box-shadow:var(--sh-blue)}
        .btn-ghost{display:inline-flex;align-items:center;gap:10px;background:transparent;color:var(--text);padding:14px 28px;border-radius:11px;font-weight:600;font-size:.9rem;text-decoration:none;border:1.5px solid var(--border2);transition:all .3s;font-family:'Inter',sans-serif}
        .btn-ghost:hover{border-color:rgba(37,99,235,.5);color:var(--blue-light)}
        .btn-ghost svg,.btn-blue svg{width:17px;height:17px;stroke:currentColor;fill:none;stroke-width:2}
        .hero-right{position:relative;background:linear-gradient(135deg,var(--bg2),var(--bg3));display:flex;align-items:center;justify-content:center;padding:100px 40px 60px}
        .hero-right-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:500px;background:radial-gradient(circle,rgba(37,99,235,.15) 0%,transparent 70%);pointer-events:none}
        .demo-wrap{width:320px;height:568px;border-radius:20px;overflow:hidden;position:relative;border:1.5px solid var(--border);box-shadow:0 20px 60px rgba(0,0,0,.5);cursor:pointer;z-index:1}
        .demo-wrap video{width:100%;height:100%;object-fit:cover;display:block}
        .demo-ov{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:space-between;padding:18px;background:linear-gradient(180deg,rgba(4,14,38,.25) 0%,transparent 40%,transparent 60%,rgba(4,14,38,.7) 100%)}
        .demo-badge{background:var(--blue);color:#fff;font-size:.58rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:4px 10px;border-radius:2px;width:fit-content;font-family:'Inter',sans-serif}
        .play-wrap{width:50px;height:50px;background:rgba(37,99,235,.85);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:auto;transition:transform .3s;box-shadow:0 0 0 8px rgba(37,99,235,.2)}
        .play-wrap:hover{transform:scale(1.1)}
        .play-wrap svg{width:20px;height:20px;fill:#fff;margin-left:3px}
        .demo-meta{font-size:.68rem;color:rgba(238,242,251,.6);font-family:'Inter',sans-serif}
        .demo-float{position:absolute;top:50%;left:calc(100% - 20px);transform:translateY(-50%);background:rgba(4,14,38,.95);border:1px solid var(--border);border-radius:14px;padding:18px 20px;min-width:180px;display:flex;flex-direction:column;gap:12px;backdrop-filter:blur(12px)}
        .demo-float-item{display:flex;align-items:center;gap:10px;font-size:.78rem;color:var(--text2);font-family:'Inter',sans-serif}
        .demo-float-ic{width:32px;height:32px;background:rgba(37,99,235,.2);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0}
        .section-dark{padding:90px 24px;background:var(--bg)}
        .section-darker{padding:90px 24px;background:var(--bg2)}
        .container{max-width:1100px;margin:0 auto}
        .section-tag{display:inline-block;background:rgba(37,99,235,.12);border:1px solid rgba(37,99,235,.3);color:var(--blue-light);font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:5px 14px;border-radius:100px;margin-bottom:16px;font-family:'Inter',sans-serif}
        .section-title{font-size:clamp(1.9rem,3.5vw,2.8rem);font-weight:700;margin-bottom:14px;line-height:1.15;color:var(--text)}
        .section-desc{font-size:.95rem;color:var(--text2);line-height:1.75;font-family:'Inter',sans-serif}
        .formats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:48px}
        .format-card{border:1.5px solid var(--border2);border-radius:20px;padding:32px 26px;background:rgba(255,255,255,.02);transition:all .3s}
        .format-card:hover{border-color:var(--border);background:rgba(37,99,235,.04);transform:translateY(-4px)}
        .format-icon{font-size:2.4rem;margin-bottom:16px;display:block}
        .format-title{font-size:1rem;font-weight:700;color:var(--text);margin-bottom:8px}
        .format-desc{font-size:.83rem;color:var(--text2);line-height:1.65;margin-bottom:16px;font-family:'Inter',sans-serif}
        .format-specs{list-style:none;display:flex;flex-wrap:wrap;gap:8px}
        .format-spec{background:rgba(37,99,235,.1);border:1px solid rgba(37,99,235,.2);color:var(--blue-light);font-size:.7rem;font-weight:600;padding:4px 10px;border-radius:6px;font-family:'Inter',sans-serif}
        .plans-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:52px;align-items:start}
        .plan-card{border:1.5px solid var(--border2);border-radius:22px;padding:36px 28px;background:rgba(255,255,255,.02);position:relative;transition:all .3s}
        .plan-card.featured{border-color:var(--border);background:rgba(37,99,235,.05)}
        .plan-card:hover{transform:translateY(-5px)}
        .plan-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,var(--blue2),var(--blue));color:#fff;padding:5px 16px;border-radius:100px;font-size:.65rem;font-weight:700;white-space:nowrap;letter-spacing:.04em;font-family:'Inter',sans-serif}
        .plan-icon{font-size:2.2rem;margin-bottom:18px;display:block}
        .plan-name{font-size:1.35rem;font-weight:700;color:var(--text);margin-bottom:6px}
        .plan-count{font-size:.9rem;color:var(--text2);margin-bottom:20px;font-family:'Inter',sans-serif}
        .plan-feats{list-style:none;margin-bottom:28px}
        .plan-feat{display:flex;align-items:flex-start;gap:10px;padding:9px 0;border-bottom:1px solid var(--border2);font-size:.83rem;color:var(--text2);font-family:'Inter',sans-serif}
        .plan-feat:last-child{border-bottom:none}
        .plan-feat-ok{color:var(--blue-light);font-weight:700;flex-shrink:0}
        .plan-btn{width:100%;padding:14px;border-radius:11px;font-weight:700;font-size:.88rem;border:none;cursor:pointer;transition:all .3s;font-family:'Inter',sans-serif}
        .plan-btn-outline{background:transparent;color:var(--text);border:1.5px solid var(--border2)}
        .plan-btn-outline:hover{border-color:var(--blue);color:var(--blue-light)}
        .plan-btn-blue{background:linear-gradient(135deg,var(--blue2),var(--blue));color:#fff}
        .plan-btn-blue:hover{transform:translateY(-1px);box-shadow:var(--sh-blue)}
        .plats-section{padding:70px 24px;background:var(--bg3)}
        .plats-grid{display:flex;flex-wrap:wrap;justify-content:center;gap:16px;margin-top:44px}
        .plat-card{background:rgba(255,255,255,.04);border:1px solid var(--border2);border-radius:16px;padding:20px 28px;display:flex;flex-direction:column;align-items:center;gap:8px;transition:all .3s;min-width:120px}
        .plat-card:hover{border-color:var(--border);background:rgba(37,99,235,.07);transform:translateY(-3px)}
        .plat-icon{font-size:2rem}
        .plat-name{font-size:.8rem;font-weight:600;color:var(--text2);font-family:'Inter',sans-serif;text-align:center}
        .why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:48px}
        .why-card{background:rgba(255,255,255,.02);border:1px solid var(--border2);border-radius:18px;padding:30px 24px;transition:all .3s}
        .why-card:hover{border-color:var(--border)}
        .why-icon{font-size:2.2rem;margin-bottom:14px;display:block}
        .why-title{font-size:.95rem;font-weight:700;color:var(--text);margin-bottom:8px}
        .why-desc{font-size:.82rem;color:var(--text2);line-height:1.65;font-family:'Inter',sans-serif}
        .cta-final{padding:100px 24px;text-align:center;background:linear-gradient(180deg,var(--bg) 0%,var(--bg2) 100%);position:relative;overflow:hidden}
        .cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:400px;background:radial-gradient(ellipse,rgba(37,99,235,.18) 0%,transparent 70%);pointer-events:none}
        .cta-final h2{font-size:clamp(2.2rem,5vw,3.5rem);font-weight:800;margin-bottom:18px;position:relative;z-index:1}
        .cta-final p{font-size:1rem;color:var(--text2);max-width:500px;margin:0 auto 44px;line-height:1.75;position:relative;z-index:1;font-family:'Inter',sans-serif}
        footer{background:rgba(2,7,20,1);color:var(--text3);padding:60px 24px 28px;border-top:1px solid var(--border2)}
        .footer-inner{max-width:1100px;margin:0 auto}
        .footer-top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;padding-bottom:40px;border-bottom:1px solid var(--border2)}
        .footer-col h4{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;margin-bottom:14px;color:var(--text2);font-family:'Inter',sans-serif}
        .footer-col ul{list-style:none}
        .footer-col li{margin-bottom:9px}
        .footer-col a{color:var(--text3);text-decoration:none;font-size:.82rem;transition:color .3s;font-family:'Inter',sans-serif}
        .footer-col a:hover{color:var(--blue-light)}
        .footer-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:26px;flex-wrap:wrap;gap:14px}
        .footer-copy{font-size:.75rem;font-family:'Inter',sans-serif}
        .footer-social{display:flex;gap:10px}
        .footer-social a{width:36px;height:36px;background:rgba(255,255,255,.04);border:1px solid var(--border2);border-radius:9px;display:flex;align-items:center;justify-content:center;transition:all .3s}
        .footer-social a:hover{background:var(--blue);border-color:var(--blue)}
        .footer-social a svg{width:16px;height:16px;fill:var(--text3);transition:fill .3s}
        .footer-social a:hover svg{fill:#fff}
        .wa{position:fixed;bottom:22px;right:22px;width:54px;height:54px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:999;box-shadow:0 4px 18px rgba(37,211,102,.4);transition:transform .3s}
        .wa:hover{transform:scale(1.1)}
        .wa svg{width:27px;height:27px;fill:#fff}
        .reveal{opacity:0;transform:translateY(24px);transition:all .6s ease}
        .reveal.active{opacity:1;transform:translateY(0)}
        @media(max-width:1024px){.hero{grid-template-columns:1fr}.hero-right{display:none}.hero-left{padding:140px 40px 80px}.formats-grid,.plans-grid,.why-grid{grid-template-columns:1fr 1fr}.footer-top{grid-template-columns:1fr 1fr}}
        @media(max-width:600px){.formats-grid,.plans-grid,.why-grid,.footer-top{grid-template-columns:1fr}nav{padding:14px 20px}}
      `}</style>

      <nav>
        <Link href="/" style={{display:"block"}}><Image src="/logo-white.png" alt="Librix Hub" width={1536} height={1024} style={{ height: "48px", width: "auto" }} /></Link>
        <Link href="/" className="nav-back">
          <svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Voltar
        </Link>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-glow"/>
          <div className="hero-pill">🎬 LIBRIX VÍDEO CINEMATOGRÁFICO</div>
          <h1>O seu livro<br/>como um <em>filme</em></h1>
          <p className="hero-sub">Trailers estilo Hollywood para o seu livro — vídeos profissionais que vendem e emocionam no Instagram, TikTok e YouTube.</p>
          <div className="ctas">
            <button className="btn-blue" onClick={() => solicitar("Vídeo Cinematográfico")}>
              Ver Planos e Solicitar
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <a href="#demo" className="btn-ghost">
              Ver Exemplo
              <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            </a>
          </div>
        </div>
        <div className="hero-right" id="demo">
          <div className="hero-right-glow"/>
          <div className="demo-wrap" onClick={togglePlay}>
            <video ref={demoRef} playsInline preload="metadata" loop>
              <source src="/videos/demo-cinematografico.mp4" type="video/mp4" />
            </video>
            <div className="demo-ov">
              <div className="demo-badge">🎬 EXEMPLO REAL</div>
              <div className="play-wrap">
                <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
              <p className="demo-meta">Vídeo para autora · LIBRIX HUB</p>
            </div>
          </div>
          <div className="demo-float">
            {[["📱","Reels & TikTok"],["📺","YouTube Shorts"],["🎬","Trailers"],].map(([icon,label]) => (
              <div key={label} className="demo-float-item">
                <div className="demo-float-ic">{icon}</div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATOS */}
      <section className="section-dark">
        <div className="container">
          <div style={{textAlign:"center",maxWidth:600,margin:"0 auto 48px"}}>
            <div className="section-tag">Formatos</div>
            <h2 className="section-title">Vídeos criados para<br/>cada plataforma</h2>
          </div>
          <div className="formats-grid">
            {[
              {icon:"📱",title:"Instagram Reels",desc:"Vídeos verticais 9:16 otimizados para o algoritmo do Instagram. Música, efeitos e ritmo perfeitos para viralizar.",specs:["9:16","60s max","MP4 HD"]},
              {icon:"🎵",title:"TikTok",desc:"Formato ultra-curto com ritmo acelerado e efeitos visuais cinematográficos para captar atenção nos primeiros segundos.",specs:["9:16","30–60s","Alta energia"]},
              {icon:"▶️",title:"YouTube Shorts & Longo",desc:"Do formato curto (Shorts) ao trailer completo de 2–3 minutos para o canal YouTube do autor.",specs:["9:16 ou 16:9","30s–3min","4K disponível"]},
            ].map(({icon,title,desc,specs}) => (
              <div key={title} className="format-card reveal">
                <span className="format-icon">{icon}</span>
                <h3 className="format-title">{title}</h3>
                <p className="format-desc">{desc}</p>
                <ul className="format-specs">
                  {specs.map(s => <li key={s} className="format-spec">{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className="section-darker" id="planos">
        <div className="container">
          <div style={{textAlign:"center",maxWidth:600,margin:"0 auto 52px"}}>
            <div className="section-tag">Planos</div>
            <h2 className="section-title">Escolha o seu pacote cinematográfico</h2>
            <p className="section-desc" style={{margin:"0 auto"}}>Todos os planos incluem vídeos com qualidade profissional de produção.</p>
          </div>
          <div className="plans-grid">
            {/* Starter */}
            <div className="plan-card reveal">
              <span className="plan-icon">🎞️</span>
              <h3 className="plan-name">Starter</h3>
              <p className="plan-count">10 vídeos cinematográficos</p>
              <ul className="plan-feats">
                {[
                  "5 vídeos curtos (Reels / TikTok)",
                  "5 vídeos médios (30–60s)",
                  "Trilha sonora profissional",
                  "Legendas automáticas",
                  "Efeitos visuais cinematográficos",
                  "Entrega em 7–10 dias úteis",
                  "Formatos: MP4 HD",
                ].map(f => <li key={f} className="plan-feat"><span className="plan-feat-ok">✦</span>{f}</li>)}
              </ul>
              <button className="plan-btn plan-btn-outline" onClick={() => solicitar("Vídeo Cinematográfico — Plano Starter")}>Solicitar →</button>
            </div>
            {/* Growth */}
            <div className="plan-card featured reveal">
              <div className="plan-badge">Mais Solicitado</div>
              <span className="plan-icon">🎬</span>
              <h3 className="plan-name">Growth</h3>
              <p className="plan-count">15 vídeos cinematográficos</p>
              <ul className="plan-feats">
                {[
                  "8 vídeos curtos (Reels / TikTok)",
                  "5 vídeos médios (30–60s)",
                  "2 trailers completos (1–2 min)",
                  "Trilha sonora premium",
                  "Legendas em 2 idiomas",
                  "Efeitos visuais avançados",
                  "Entrega em 10–12 dias úteis",
                  "Formatos: MP4 HD + 4K",
                ].map(f => <li key={f} className="plan-feat"><span className="plan-feat-ok">✦</span>{f}</li>)}
              </ul>
              <button className="plan-btn plan-btn-blue" onClick={() => solicitar("Vídeo Cinematográfico — Plano Growth")}>Solicitar →</button>
            </div>
            {/* Author Pro */}
            <div className="plan-card reveal">
              <span className="plan-icon">🏆</span>
              <h3 className="plan-name">Author Pro</h3>
              <p className="plan-count">27 vídeos cinematográficos</p>
              <ul className="plan-feats">
                {[
                  "15 vídeos curtos (Reels / TikTok)",
                  "8 vídeos médios (30–60s)",
                  "4 trailers completos (2–3 min)",
                  "Trilha sonora exclusiva",
                  "Legendas em 3 idiomas",
                  "Efeitos e transições premium",
                  "Pack de thumbnails",
                  "Calendário editorial de conteúdo",
                  "Entrega em 15–18 dias úteis",
                  "Formatos: MP4 HD + 4K",
                ].map(f => <li key={f} className="plan-feat"><span className="plan-feat-ok">✦</span>{f}</li>)}
              </ul>
              <button className="plan-btn plan-btn-outline" onClick={() => solicitar("Vídeo Cinematográfico — Plano Author Pro")}>Solicitar →</button>
            </div>
          </div>
        </div>
      </section>

      {/* PLATAFORMAS */}
      <section className="plats-section">
        <div className="container">
          <h2 style={{textAlign:"center",fontSize:"clamp(1.6rem,3vw,2.2rem)",fontWeight:700,marginBottom:10}}>Criados para todas as plataformas</h2>
          <p style={{textAlign:"center",color:"var(--text2)",fontSize:".9rem",fontFamily:"'Inter',sans-serif"}}>Os seus vídeos entregues nos formatos exactos para cada rede social</p>
          <div className="plats-grid">
            {[["📸","Instagram Reels"],["🎵","TikTok"],["▶️","YouTube"],["▶️","YouTube Shorts"],["💬","WhatsApp Status"],["📘","Facebook"],["🐦","X / Twitter"],["💼","LinkedIn"],].map(([icon,name]) => (
              <div key={name} className="plat-card">
                <span className="plat-icon">{icon}</span>
                <p className="plat-name">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORQUÊ */}
      <section className="section-dark">
        <div className="container">
          <div style={{textAlign:"center",maxWidth:600,margin:"0 auto 48px"}}>
            <div className="section-tag">Vantagens</div>
            <h2 className="section-title">Porque o vídeo vende<br/>mais do que texto</h2>
          </div>
          <div className="why-grid">
            {[
              {icon:"🎯",title:"Capta atenção em 3 segundos",desc:"Num feed saturado, um trailer cinematográfico do seu livro pára o scroll e cria curiosidade imediata. É o formato que mais converte."},
              {icon:"🌊",title:"Viral por design",desc:"Criamos com os algoritmos em mente — ritmo, música, cortes e formatos que o Instagram e TikTok favorecem e distribuem organicamente."},
              {icon:"💰",title:"ROI directo em vendas",desc:"Autores que usam vídeos cinematográficos reportam aumento expressivo nas vendas da Amazon e pedidos diretos via WhatsApp."},
              {icon:"🎭",title:"Emoção que convence",desc:"Livros vendem emoção. Um trailer bem produzido cria o estado emocional certo para o leitor querer comprar imediatamente."},
              {icon:"🌍",title:"Alcance global",desc:"Com legendas em múltiplos idiomas, os seus vídeos chegam a audiências em Portugal, Brasil, Espanha, UK e muito mais."},
              {icon:"⚡",title:"Entrega rápida",desc:"Prazos definidos e cumpridos. Acompanhe a produção por WhatsApp e aprove cada fase antes da entrega final."},
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

      {/* CTA */}
      <section className="cta-final">
        <div className="cta-glow"/>
        <h2>O seu trailer começa aqui</h2>
        <p>Fale connosco e receba uma proposta personalizada. Resposta em menos de 24 horas.</p>
        <div className="ctas" style={{justifyContent:"center"}}>
          <button className="btn-blue" onClick={() => solicitar("Vídeo Cinematográfico")} style={{fontSize:".95rem",padding:"16px 32px"}}>
            Solicitar Orçamento
            <svg viewBox="0 0 24 24" style={{width:17,height:17,stroke:"currentColor",fill:"none",strokeWidth:2}}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <a href="https://instagram.com/librixhub" className="btn-ghost" style={{fontSize:".88rem"}}>
            Ver exemplos no Instagram
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <Image src="/logo-white.png" alt="Librix Hub" width={1536} height={1024} style={{height:"44px",width:"auto",marginBottom:14,display:"block"}}/>
              <p style={{fontSize:".82rem",color:"var(--text3)",lineHeight:1.65,maxWidth:260,fontFamily:"'Inter',sans-serif"}}>Transformamos livros em experiências visuais profissionais.</p>
            </div>
            <div className="footer-col">
              <h4>Serviços</h4>
              <ul>
                <li><Link href="/#planos">Livros</Link></li>
                <li><Link href="/audiobook">Audiobook</Link></li>
                <li><Link href="/traducao">Tradução</Link></li>
                <li><Link href="/cinematografico">Vídeo Cinematográfico</Link></li>
                <li><Link href="/#especial">Plano Especial Ultra</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Planos Vídeo</h4>
              <ul>
                <li><a href="#planos">Starter — 10 vídeos</a></li>
                <li><a href="#planos">Growth — 15 vídeos</a></li>
                <li><a href="#planos">Author Pro — 27 vídeos</a></li>
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
