"use client";

import { useState } from "react";

const WA_NUM = "5532998491620";

const COPY: Record<string, Record<string, string>> = {
  "pt-pt": { title: "Fale com a nossa equipa", sub: "Deixe os seus dados e respondemos no WhatsApp com preço e prazo. Sem compromisso.", name: "O seu nome", phone: "WhatsApp (com indicativo)", email: "O seu email", service: "Que serviço lhe interessa? (opcional)", unsure: "Ainda não sei — quero orientação", submit: "Quero ser contactado", sending: "A enviar...", error: "Confira os dados e tente de novo.", okTitle: "Recebemos o seu contacto!", okBody: "Já podemos falar agora pelo WhatsApp — é o mais rápido.", okCta: "Continuar no WhatsApp", wa: "Chamar no WhatsApp", waMsg: "Olá! Vi o site da Librix Hub e quero falar com a equipa.", okMsg: "Olá! Sou {n}, deixei os meus dados no site da Librix Hub.", svc: "Serviço de interesse: " },
  "pt-br": { title: "Fale com a nossa equipe", sub: "Deixe seus dados e respondemos no WhatsApp com preço e prazo. Sem compromisso.", name: "Seu nome", phone: "WhatsApp (com DDD)", email: "Seu e-mail", service: "Qual serviço te interessa? (opcional)", unsure: "Ainda não sei — quero orientação", submit: "Quero ser atendido", sending: "Enviando...", error: "Confira os dados e tente de novo.", okTitle: "Recebemos seu contato!", okBody: "Já podemos falar agora pelo WhatsApp — é o jeito mais rápido.", okCta: "Continuar no WhatsApp", wa: "Chamar no WhatsApp", waMsg: "Olá! Vi o site da Librix Hub e quero falar com a equipe.", okMsg: "Olá! Sou {n}, deixei meus dados no site da Librix Hub.", svc: "Serviço de interesse: " },
  es: { title: "Habla con nuestro equipo", sub: "Deja tus datos y te respondemos por WhatsApp con precio y plazo. Sin compromiso.", name: "Tu nombre", phone: "WhatsApp (con prefijo)", email: "Tu correo", service: "¿Qué servicio te interesa? (opcional)", unsure: "Aún no sé — quiero orientación", submit: "Quiero que me atiendan", sending: "Enviando...", error: "Revisa los datos e inténtalo de nuevo.", okTitle: "¡Recibimos tu contacto!", okBody: "Podemos hablar ahora mismo por WhatsApp: es lo más rápido.", okCta: "Continuar por WhatsApp", wa: "Escribir por WhatsApp", waMsg: "¡Hola! Vi el sitio de Librix Hub y quiero hablar con el equipo.", okMsg: "¡Hola! Soy {n}, dejé mis datos en el sitio de Librix Hub.", svc: "Servicio de interés: " },
  en: { title: "Talk to our team", sub: "Leave your details and we'll reply on WhatsApp with price and timeline. No obligation.", name: "Your name", phone: "WhatsApp (with country code)", email: "Your email", service: "Which service interests you? (optional)", unsure: "Not sure yet — I'd like guidance", submit: "Get in touch", sending: "Sending...", error: "Please check your details and try again.", okTitle: "We got your details!", okBody: "We can talk right now on WhatsApp — it's the fastest way.", okCta: "Continue on WhatsApp", wa: "Chat on WhatsApp", waMsg: "Hi! I saw the Librix Hub site and I'd like to talk to the team.", okMsg: "Hi! I'm {n}, I left my details on the Librix Hub site.", svc: "Service of interest: " },
  it: { title: "Parla con il nostro team", sub: "Lascia i tuoi dati e ti rispondiamo su WhatsApp con prezzo e tempi. Senza impegno.", name: "Il tuo nome", phone: "WhatsApp (con prefisso)", email: "La tua email", service: "Quale servizio ti interessa? (facoltativo)", unsure: "Non lo so ancora — vorrei una guida", submit: "Voglio essere contattato", sending: "Invio...", error: "Controlla i dati e riprova.", okTitle: "Abbiamo ricevuto il tuo contatto!", okBody: "Possiamo parlare subito su WhatsApp: è il modo più veloce.", okCta: "Continua su WhatsApp", wa: "Scrivi su WhatsApp", waMsg: "Ciao! Ho visto il sito di Librix Hub e vorrei parlare con il team.", okMsg: "Ciao! Sono {n}, ho lasciato i miei dati sul sito di Librix Hub.", svc: "Servizio di interesse: " },
};

export const leadWhatsAppLink = (lang: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent((COPY[lang] ?? COPY["pt-pt"]).waMsg)}`;
export const leadWhatsAppLabel = (lang: string) => (COPY[lang] ?? COPY["pt-pt"]).wa;

/** Formulário curto de captação de leads (nome, WhatsApp, e-mail, serviço) no topo do site. */
export default function LeadForm({ lang, services }: { lang: string; services: { value: string; label: string }[] }) {
  const c = COPY[lang] ?? COPY["pt-pt"];
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [sent, setSent] = useState({ name: "", service: "" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, lang }) });
      if (!res.ok) throw new Error("bad");
      const w = window as unknown as { fbq?: (...a: unknown[]) => void };
      if (typeof w.fbq === "function") w.fbq("track", "Lead");
      const service = data.service === "?" ? c.unsure : (services.find((s) => s.value === data.service)?.label ?? "");
      setSent({ name: data.name, service });
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    const text = c.okMsg.replace("{n}", sent.name) + (sent.service ? ` ${c.svc}${sent.service}.` : "");
    return (
      <div className="form-card lead-card" role="status">
        <h3>{c.okTitle}</h3>
        <p style={{ margin: "0 0 18px", fontSize: ".9rem" }}>{c.okBody}</p>
        <a className="btn-gold" href={`https://wa.me/${WA_NUM}?text=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer">{c.okCta}</a>
      </div>
    );
  }

  return (
    <form className="form-card lead-card" onSubmit={onSubmit}>
      <h3 style={{ marginBottom: 6 }}>{c.title}</h3>
      <p style={{ margin: "0 0 16px", fontSize: ".85rem", opacity: 0.75 }}>{c.sub}</p>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
      <div className="form-group"><input className="form-input" name="name" required maxLength={120} autoComplete="name" placeholder={c.name} aria-label={c.name} /></div>
      <div className="form-group"><input className="form-input" name="phone" type="tel" required maxLength={40} autoComplete="tel" placeholder={c.phone} aria-label="WhatsApp" /></div>
      <div className="form-group"><input className="form-input" name="email" type="email" required maxLength={160} autoComplete="email" placeholder={c.email} aria-label={c.email} /></div>
      <div className="form-group">
        <select className="form-input" name="service" defaultValue="" aria-label={c.service}>
          <option value="">{c.service}</option>
          <option value="?">{c.unsure}</option>
          {services.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
      </div>
      {status === "error" && <p role="alert" style={{ color: "#b91c1c", fontSize: ".85rem", margin: "0 0 10px" }}>{c.error}</p>}
      <button type="submit" className="btn-submit" disabled={status === "sending"}>{status === "sending" ? c.sending : c.submit}</button>
    </form>
  );
}
