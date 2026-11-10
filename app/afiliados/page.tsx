"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WA_NUM = "5532998491620";
const COMISSAO = 0.05;
function waLink(msg: string) {
  return `https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`;
}
function fmtEur(v: number) {
  return v.toLocaleString("pt-PT", { style: "currency", currency: "EUR" });
}

export default function AfiliadosPage() {
  const [valor, setValor] = useState("1000");
  const [form, setForm] = useState({ nome: "", email: "", pais: "", canal: "" });
  const [codigo, setCodigo] = useState("");
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const valorNum = Math.max(0, Number(valor.replace(",", ".")) || 0);
  const codigoLimpo = codigo.trim().toUpperCase();
  const linkIndicacao = codigoLimpo
    ? waLink(`Olá! Fui indicado(a) por ${codigoLimpo} e gostaria de conhecer os serviços da LIBRIX HUB.`)
    : "";

  function candidatar(e: React.FormEvent) {
    e.preventDefault();
    const msg = [
      "Olá! Quero ser afiliado(a) da LIBRIX HUB.",
      `Nome: ${form.nome}`,
      `Email: ${form.email}`,
      `País: ${form.pais}`,
      `Como pretendo divulgar: ${form.canal}`,
    ].join("\n");
    window.open(waLink(msg), "_blank");
  }

  async function copiar() {
    try {
      await navigator.clipboard.writeText(linkIndicacao);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {}
  }

  return (
    <>
      <style>{`
        :root{
          --cream:#F7F3EE;--cream2:#F0EBE3;--white:#FFFFFF;--ink:#111111;--ink2:#3D3530;--ink3:#7A6E68;
          --gold:#C9A84C;--gold2:#D4A855;--gold-bg:rgba(201,168,76,.10);
          --green:#047857;--green-bg:rgba(4,120,87,.08);--border:#D9D3C8;
          --sh:0 2px 8px rgba(17,17,17,.06);--sh-lg:0 16px 48px rgba(17,17,17,.1);
          --dark:#111111;--dark2:#1C1916;
        }
        *{box-sizing:border-box;margin:0;padding:0}
        body{font-family:'Inter',system-ui,sans-serif;background:var(--cream);color:var(--ink2);line-height:1.65;-webkit-font-smoothing:antialiased}
        h1,h2,h3,h4{font-family:'Fraunces',Georgia,serif}
        nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 40px;background:rgba(247,243,238,.96);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center}
        .nav-back{display:inline-flex;align-items:center;gap:8px;color:var(--ink2);text-decoration:none;font-size:.85rem;font-weight:500;transition:color .3s}
        .nav-back:hover{color:var(--ink)}
        .nav-back svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2}
        .hero{padding:160px 24px 80px;background:linear-gradient(180deg,var(--cream) 0%,var(--white) 100%);text-align:center}
        .hero-pill{display:inline-flex;align-items:center;gap:8px;background:var(--gold-bg);border:1px solid rgba(201,168,76,.3);color:#7a5b10;padding:9px 20px;border-radius:100px;font-size:.76rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:28px}
        .hero h1{font-size:clamp(2.6rem,6vw,4.2rem);font-weight:800;line-height:1.08;letter-spacing:-.04em;color:var(--ink);max-width:760px;margin:0 auto 22px}
        .hero h1 em{font-style:italic;color:var(--gold)}
        .hero-sub{font-size:1.08rem;color:var(--ink3);max-width:580px;margin:0 auto 44px;line-height:1.8}
        .ctas{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
        .btn-blue{display:inline-flex;align-items:center;gap:10px;background:var(--ink);color:#F7F3EE;padding:15px 32px;border-radius:2px;font-weight:700;font-size:.92rem;text-decoration:none;border:none;cursor:pointer;transition:all .3s;font-family:inherit}
        .btn-blue:hover{background:var(--gold);color:var(--ink)}
        .btn-outline{display:inline-flex;align-items:center;gap:10px;background:var(--white);color:var(--ink);padding:14px 28px;border-radius:2px;font-weight:600;font-size:.9rem;text-decoration:none;border:1.5px solid var(--border);transition:all .3s;cursor:pointer;font-family:inherit}
        .btn-outline:hover{border-color:var(--gold);color:var(--ink)}
        .btn-outline svg,.btn-blue svg{width:17px;height:17px;stroke:currentColor;fill:none;stroke-width:2}
        .hero-stats{display:flex;justify-content:center;gap:48px;margin-top:52px;flex-wrap:wrap}
        .hero-stat strong{display:block;font-family:'Fraunces',Georgia,serif;font-size:2rem;font-weight:800;color:var(--ink)}
        .hero-stat span{font-size:.8rem;color:var(--ink3)}
        section{padding:80px 24px}
        .container{max-width:1080px;margin:0 auto}
        .head{text-align:center;max-width:620px;margin:0 auto 48px}
        .section-tag{display:inline-block;background:var(--gold-bg);border:1px solid rgba(201,168,76,.25);color:#7a5b10;font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:5px 14px;border-radius:100px;margin-bottom:16px}
        .section-tag.green{background:var(--green-bg);border-color:rgba(4,120,87,.25);color:var(--green)}
        .section-title{font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:700;margin-bottom:12px;line-height:1.2;color:var(--ink)}
        .section-desc{font-size:.95rem;color:var(--ink3);line-height:1.75}
        .process-section{background:var(--white)}
        .process-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;position:relative}
        .process-steps::before{content:'';position:absolute;top:36px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--gold),var(--gold2));z-index:0}
        .proc-card{background:var(--cream);border:1px solid var(--border);border-radius:18px;padding:30px 20px;text-align:center;position:relative;z-index:1;transition:all .3s}
        .proc-card:hover{border-color:var(--gold);box-shadow:var(--sh)}
        .proc-num{width:46px;height:46px;border-radius:50%;background:var(--gold);color:var(--ink);font-weight:800;font-size:1rem;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-family:'Fraunces',Georgia,serif}
        .proc-title{font-size:.95rem;font-weight:700;margin-bottom:6px;color:var(--ink)}
        .proc-desc{font-size:.8rem;color:var(--ink3);line-height:1.6}
        .earn-section{background:var(--dark);color:#F7F3EE;position:relative;overflow:hidden}
        .earn-glow{position:absolute;right:-10%;top:-20%;width:500px;height:500px;background:radial-gradient(circle,rgba(201,168,76,.15) 0%,transparent 70%);pointer-events:none}
        .earn-inner{max-width:960px;margin:0 auto;position:relative;z-index:1;display:grid;grid-template-columns:1.1fr 1fr;gap:56px;align-items:center}
        .earn-badge{display:inline-block;background:rgba(201,168,76,.2);border:1px solid rgba(201,168,76,.4);color:var(--gold);font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:6px 16px;border-radius:100px;margin-bottom:20px}
        .earn-title{font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:800;line-height:1.15;margin-bottom:16px}
        .earn-desc{font-size:.95rem;color:rgba(247,243,238,.65);line-height:1.8;margin-bottom:24px}
        .earn-feats{list-style:none;display:grid;gap:12px}
        .earn-feat{display:flex;align-items:flex-start;gap:10px;font-size:.87rem;color:rgba(247,243,238,.75)}
        .earn-feat-ic{color:var(--gold);font-weight:700;flex-shrink:0}
        .calc{background:rgba(255,255,255,.06);border:1px solid rgba(247,243,238,.15);border-radius:20px;padding:30px 28px}
        .calc label{display:block;font-size:.75rem;color:rgba(247,243,238,.55);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px}
        .calc-input{display:flex;align-items:center;background:rgba(255,255,255,.08);border:1px solid rgba(247,243,238,.2);border-radius:4px;padding:0 14px}
        .calc-input span{color:var(--gold);font-weight:700}
        .calc-input input{flex:1;min-width:0;background:transparent;border:none;outline:none;color:#F7F3EE;font-size:1.1rem;padding:14px 10px;font-family:inherit}
        .calc-out{margin-top:22px;padding-top:22px;border-top:1px solid rgba(247,243,238,.1);text-align:center}
        .calc-out p{font-size:.75rem;color:rgba(247,243,238,.5);text-transform:uppercase;letter-spacing:.06em}
        .calc-out strong{display:block;font-family:'Fraunces',Georgia,serif;font-size:2.6rem;font-weight:800;color:var(--gold);margin:6px 0}
        .calc-out small{font-size:.74rem;color:rgba(247,243,238,.4);line-height:1.5}
        .who-section{background:var(--cream2)}
        .who-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
        .who-card{background:var(--white);border:1.5px solid var(--border);border-radius:18px;padding:26px 22px;transition:all .3s}
        .who-card:hover{transform:translateY(-4px);box-shadow:var(--sh-lg);border-color:rgba(201,168,76,.4)}
        .who-icon{font-size:2rem;margin-bottom:12px;display:block}
        .who-title{font-size:1rem;font-weight:700;margin-bottom:6px;color:var(--ink)}
        .who-desc{font-size:.82rem;color:var(--ink3);line-height:1.6}
        .rules-section{background:var(--white)}
        .rules-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:900px;margin:0 auto}
        .rule{display:flex;gap:14px;align-items:flex-start;background:var(--cream);border:1px solid var(--border);border-radius:16px;padding:20px 22px}
        .rule-ic{width:34px;height:34px;flex-shrink:0;border-radius:50%;background:var(--gold-bg);color:#7a5b10;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.85rem}
        .rule h4{font-size:.95rem;color:var(--ink);margin-bottom:4px}
        .rule p{font-size:.83rem;color:var(--ink3);line-height:1.6}
        .join-section{background:var(--cream2)}
        .join-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;max-width:960px;margin:0 auto}
        .panel{background:var(--white);border:1.5px solid var(--border);border-radius:22px;padding:32px 28px}
        .panel h3{font-size:1.25rem;color:var(--ink);margin-bottom:6px}
        .panel > p{font-size:.85rem;color:var(--ink3);margin-bottom:22px;line-height:1.6}
        .field{margin-bottom:14px}
        .field label{display:block;font-size:.78rem;font-weight:600;color:var(--ink2);margin-bottom:6px}
        .field input,.field textarea{width:100%;border:1.5px solid var(--border);border-radius:4px;padding:12px 14px;font-size:.9rem;font-family:inherit;color:var(--ink);background:var(--cream);outline:none;transition:border-color .3s}
        .field input:focus,.field textarea:focus{border-color:var(--gold)}
        .field textarea{resize:vertical;min-height:80px}
        .panel .btn-blue{width:100%;justify-content:center;margin-top:6px}
        .link-box{margin-top:16px;background:var(--cream);border:1px dashed rgba(201,168,76,.6);border-radius:8px;padding:14px;font-size:.78rem;color:var(--ink2);word-break:break-all}
        .panel-note{font-size:.75rem;color:var(--ink3);margin-top:14px;line-height:1.55}
        .faq-section{background:var(--white)}
        .faq{max-width:760px;margin:0 auto}
        .faq details{border-bottom:1px solid var(--border);padding:18px 4px}
        .faq summary{cursor:pointer;font-weight:600;color:var(--ink);font-size:.95rem;list-style:none;display:flex;justify-content:space-between;gap:16px}
        .faq summary::-webkit-details-marker{display:none}
        .faq summary::after{content:'+';color:var(--gold);font-size:1.3rem;line-height:1}
        .faq details[open] summary::after{content:'−'}
        .faq details p{font-size:.88rem;color:var(--ink3);margin-top:10px;line-height:1.7}
        .cta-section{background:var(--dark);padding:90px 24px;text-align:center}
        .cta-section h2{font-size:clamp(2rem,4.5vw,3rem);font-weight:800;color:#F7F3EE;margin-bottom:16px}
        .cta-section p{font-size:1rem;color:rgba(247,243,238,.6);max-width:480px;margin:0 auto 40px;line-height:1.75}
        footer{background:var(--dark2);color:rgba(247,243,238,.4);padding:60px 24px 28px;border-top:1px solid rgba(247,243,238,.06)}
        .footer-inner{max-width:1080px;margin:0 auto}
        .footer-top{display:grid;grid-template-columns:2fr 1fr 1fr;gap:40px;padding-bottom:40px;border-bottom:1px solid rgba(247,243,238,.07)}
        .footer-col h4{font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;margin-bottom:14px;color:rgba(247,243,238,.55)}
        .footer-col ul{list-style:none}
        .footer-col li{margin-bottom:9px}
        .footer-col a{color:rgba(247,243,238,.35);text-decoration:none;font-size:.83rem;transition:color .3s}
        .footer-col a:hover{color:var(--gold)}
        .footer-bottom{padding-top:26px}
        .footer-copy{font-size:.76rem}
        .wa{position:fixed;bottom:22px;right:22px;width:54px;height:54px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:999;box-shadow:0 4px 18px rgba(37,211,102,.4);transition:transform .3s}
        .wa:hover{transform:scale(1.1)}
        .wa svg{width:27px;height:27px;fill:#fff}
        .reveal{opacity:0;transform:translateY(24px);transition:all .6s ease}
        .reveal.active{opacity:1;transform:translateY(0)}
        @media(max-width:900px){.earn-inner,.join-grid,.rules-grid{grid-template-columns:1fr}.process-steps,.who-grid{grid-template-columns:repeat(2,1fr)}.process-steps::before{display:none}.footer-top{grid-template-columns:1fr 1fr}}
        @media(max-width:600px){.process-steps,.who-grid,.footer-top{grid-template-columns:1fr}nav{padding:14px 20px}.hero-stats{gap:28px}}
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
        <div className="hero-pill">🤝 Programa de Afiliados</div>
        <h1>Indique autores.<br/>Ganhe <em>5%</em> por cada serviço.</h1>
        <p className="hero-sub">Conhece alguém que quer publicar um livro? Indique a LIBRIX HUB e receba 5% do valor de cada serviço que essa pessoa fechar connosco, pago em euros por transferência bancária.</p>
        <div className="ctas">
          <a href="#aderir" className="btn-blue">
            Quero ser afiliado
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#como-funciona" className="btn-outline">
            Como funciona
            <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><strong>5%</strong><span>por cada serviço fechado</span></div>
          <div className="hero-stat"><strong>15 dias</strong><span>prazo máximo de pagamento</span></div>
          <div className="hero-stat"><strong>€</strong><span>transferência bancária</span></div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="process-section" id="como-funciona">
        <div className="container">
          <div className="head">
            <div className="section-tag">Processo</div>
            <h2 className="section-title">Como funciona</h2>
          </div>
          <div className="process-steps">
            {[
              {n:1,title:"Inscreva-se",desc:"Preencha o formulário abaixo. Após aprovação, recebe o seu código de afiliado pessoal."},
              {n:2,title:"Indique",desc:"Partilhe o seu link ou peça ao autor que mencione o seu código ao falar connosco."},
              {n:3,title:"O cliente fecha",desc:"Quando o autor fecha um serviço e confirma o pagamento, a comissão é registada em seu nome."},
              {n:4,title:"Receba",desc:"Recebe 5% do valor do serviço por transferência bancária em euros, em até 15 dias."},
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

      {/* QUANTO GANHA */}
      <section className="earn-section">
        <div className="earn-glow"/>
        <div className="earn-inner">
          <div>
            <div className="earn-badge">Comissão</div>
            <h2 className="earn-title">5% sobre cada<br/>serviço fechado</h2>
            <p className="earn-desc">Vale para todos os serviços LIBRIX HUB: diagramação, capas, publicação na Amazon KDP, audiobook, tradução, ghostwriting, vídeo cinematográfico e planos premium.</p>
            <ul className="earn-feats">
              {[
                "Sem limite de indicações nem de ganhos",
                "Comissão em cada serviço que o cliente indicado fechar",
                "Pagamento em euros (€) por transferência bancária",
                "Pago em até 15 dias após o fecho do serviço",
              ].map(f => (
                <li key={f} className="earn-feat"><span className="earn-feat-ic">✓</span>{f}</li>
              ))}
            </ul>
          </div>
          <div className="calc">
            <label htmlFor="valor">Valor do serviço fechado</label>
            <div className="calc-input">
              <span>€</span>
              <input id="valor" inputMode="decimal" value={valor} onChange={(e) => setValor(e.target.value)} />
            </div>
            <div className="calc-out">
              <p>A sua comissão</p>
              <strong>{fmtEur(valorNum * COMISSAO)}</strong>
              <small>Simulação. O valor final corresponde a 5% do valor efetivamente pago pelo cliente.</small>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM PODE */}
      <section className="who-section">
        <div className="container">
          <div className="head">
            <div className="section-tag green">Para quem é</div>
            <h2 className="section-title">Quem pode ser afiliado</h2>
            <p className="section-desc">Qualquer pessoa que tenha contacto com autores ou com quem sonha publicar um livro.</p>
          </div>
          <div className="who-grid">
            {[
              {icon:"📚",title:"Autores e clientes",desc:"Já publicou connosco? Indique colegas escritores e seja recompensado."},
              {icon:"🎓",title:"Mentores e professores",desc:"Cursos de escrita, mentorias e comunidades de autores."},
              {icon:"📱",title:"Criadores de conteúdo",desc:"Perfis literários, bookstagram, booktok, blogs e podcasts."},
              {icon:"✍️",title:"Profissionais do livro",desc:"Revisores, ilustradores, consultores e outros parceiros editoriais."},
            ].map(({icon,title,desc}) => (
              <div key={title} className="who-card reveal">
                <span className="who-icon">{icon}</span>
                <h3 className="who-title">{title}</h3>
                <p className="who-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGRAS */}
      <section className="rules-section">
        <div className="container">
          <div className="head">
            <div className="section-tag">Regras</div>
            <h2 className="section-title">Regras do programa</h2>
            <p className="section-desc">Simples e transparentes, para que todos saibam exatamente quando e quanto recebem.</p>
          </div>
          <div className="rules-grid">
            {[
              {t:"Comissão de 5%",d:"Calculada sobre o valor do serviço efetivamente pago pelo cliente indicado."},
              {t:"Paga após o fecho",d:"O serviço considera-se fechado quando o cliente o confirma e o pagamento é recebido. A partir daí, pagamos em até 15 dias."},
              {t:"Em euros, por transferência",d:"Pagamento por transferência bancária em euros (€). Pedimos os seus dados bancários (IBAN) na primeira comissão."},
              {t:"Primeiro contacto registado",d:"Se dois afiliados indicarem o mesmo cliente, a comissão fica com quem fez o primeiro contacto registado connosco."},
              {t:"Sem autoindicação",d:"Serviços contratados pelo próprio afiliado não geram comissão."},
              {t:"Sem spam",d:"Proibido divulgar por spam, mensagens em massa não solicitadas ou promessas falsas em nome da LIBRIX HUB. O incumprimento leva à exclusão do programa."},
            ].map(({t,d},i) => (
              <div key={t} className="rule reveal">
                <span className="rule-ic">{i+1}</span>
                <div><h4>{t}</h4><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADERIR */}
      <section className="join-section" id="aderir">
        <div className="container">
          <div className="head">
            <div className="section-tag">Aderir</div>
            <h2 className="section-title">Comece a indicar hoje</h2>
          </div>
          <div className="join-grid">
            <form className="panel reveal" onSubmit={candidatar}>
              <h3>Inscrição de afiliado</h3>
              <p>Envie os seus dados pelo WhatsApp. Respondemos com o seu código de afiliado.</p>
              <div className="field">
                <label htmlFor="nome">Nome completo</label>
                <input id="nome" required value={form.nome} onChange={(e) => setForm({...form, nome: e.target.value})} />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
              </div>
              <div className="field">
                <label htmlFor="pais">País</label>
                <input id="pais" required value={form.pais} onChange={(e) => setForm({...form, pais: e.target.value})} />
              </div>
              <div className="field">
                <label htmlFor="canal">Como pretende divulgar?</label>
                <textarea id="canal" placeholder="Ex.: Instagram @..., comunidade de autores, mentoria..." value={form.canal} onChange={(e) => setForm({...form, canal: e.target.value})} />
              </div>
              <button type="submit" className="btn-blue">
                Enviar inscrição pelo WhatsApp
                <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </form>

            <div className="panel reveal">
              <h3>Já é afiliado? Gere o seu link</h3>
              <p>Escreva o seu código e partilhe o link. O cliente fala connosco pelo WhatsApp com a sua indicação já identificada.</p>
              <div className="field">
                <label htmlFor="codigo">O seu código de afiliado</label>
                <input id="codigo" placeholder="Ex.: MARIA10" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
              </div>
              {linkIndicacao && (
                <>
                  <div className="link-box">{linkIndicacao}</div>
                  <button type="button" className="btn-blue" onClick={copiar} style={{marginTop:14}}>
                    {copiado ? "Link copiado ✓" : "Copiar link"}
                  </button>
                </>
              )}
              <p className="panel-note">Se o cliente nos contactar por outro meio, basta mencionar o seu código na primeira mensagem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="head">
            <div className="section-tag">Dúvidas</div>
            <h2 className="section-title">Perguntas frequentes</h2>
          </div>
          <div className="faq">
            {[
              {q:"Tem algum custo para participar?",a:"Não. A inscrição no programa de afiliados é gratuita."},
              {q:"Quando recebo a comissão?",a:"Em até 15 dias depois de o cliente indicado fechar o serviço, ou seja, confirmar e pagar."},
              {q:"Como recebo?",a:"Por transferência bancária em euros (€). Na primeira comissão pedimos o seu IBAN e o nome do titular da conta."},
              {q:"E se o cliente fechar mais de um serviço?",a:"Recebe 5% de cada serviço que o cliente indicado fechar connosco."},
              {q:"Preciso de viver em Portugal?",a:"Não. Pode ser afiliado a partir de qualquer país, desde que consiga receber transferências em euros."},
            ].map(({q,a}) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{maxWidth:700,textAlign:"center"}}>
          <h2>Ajude um autor a publicar.<br/>E ganhe com isso.</h2>
          <p>Ficou com alguma dúvida sobre o programa? Fale connosco.</p>
          <div className="ctas">
            <a href="#aderir" className="btn-blue">Quero ser afiliado</a>
            <a href={waLink("Olá! Tenho uma dúvida sobre o programa de afiliados da LIBRIX HUB.")} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{color:"rgba(238,242,251,.75)",borderColor:"rgba(255,255,255,.2)",background:"rgba(255,255,255,.05)"}}>
              Falar no WhatsApp
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
                <li><Link href="/audiobook">Audiobook</Link></li>
                <li><Link href="/traducao">Tradução</Link></li>
                <li><Link href="/cinematografico">Vídeo Cinematográfico</Link></li>
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
          </div>
        </div>
      </footer>

      <a href="https://wa.me/5532998491620" className="wa" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  );
}
