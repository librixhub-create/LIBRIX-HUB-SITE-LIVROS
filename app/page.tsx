"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const WA_NUM = "5532998491620";
const WA_BASE = `https://wa.me/${WA_NUM}`;

function waLink(msg: string) {
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`;
}

// ── i18n translations (simplified) ──
const T: Record<string, Record<string, string>> = {
  "pt-pt": {
    "topbar.text": "PLANO ESPECIAL MAIS COMPLETO",
    "nav.categories": "Categorias", "nav.plans": "Planos", "nav.services": "Serviços",
    "nav.testimonials": "Depoimentos", "nav.contact": "Contacto",
    "hero.badge": "Criação Profissional de Livros",
    "hero.title": "Transforme as suas ideias em livros profissionais",
    "hero.subtitle": "Especialistas em criar publicações digitais de alta qualidade, prontas para lançamento na Amazon KDP e outras plataformas.",
    "hero.cta1": "Qual é o plano ideal para si?",
    "hero.cta2": "Ver os Nossos Planos",
    "hero.cta3": "⭐ Plano Especial Ultra",
    "cat.label": "Trabalhamos em todas as categorias",
    "form.label": "Orçamento Grátis",
    "form.title": "Qual é o plano ideal para o seu projeto?",
    "form.desc": "Conte-nos sobre o seu livro e ajudaremos a escolher o melhor plano. Resposta em menos de 24 horas.",
    "form.b1": "Orçamento personalizado sem compromisso",
    "form.b2": "Atendimento direto por WhatsApp",
    "form.b3": "Orientação sobre o melhor formato",
    "form.b4": "Resposta rápida em até 24h",
    "form.card": "Solicite o seu Orçamento",
    "form.submit": "Enviar por WhatsApp",
    "form.custom": "Prefere escolher os serviços individualmente? Clique aqui",
    "plans.label": "Planos", "plans.title": "Escolha o seu plano",
    "plans.subtitle": "Soluções adaptadas a cada projeto", "plans.cta": "Solicitar",
    "plans.review": "Revisão ortográfica e gramatical — PDF + Word editável",
    "p1.name": "Essencial", "p1.desc": "Para projetos simples",
    "p1.f1": "Diagramação completa", "p1.f2": "Capa personalizada",
    "p1.f3": "1 Capa 3D", "p1.f4": "Layout otimizado", "p1.f5": "Aula Amazon KDP",
    "p2.name": "Avançado", "p2.desc": "Projetos elaborados",
    "p2.f1": "Tudo do Essencial", "p2.f2": "2 Capas 3D",
    "p2.f3": "20 ilustrações", "p2.f4": "1 alteração grátis",
    "p3.name": "Premium", "p3.desc": "O mais escolhido",
    "p3.f1": "Tudo do Avançado", "p3.f2": "Contracapa + Lombada",
    "p3.f3": "35 ilustrações", "p3.f4": "2 alterações grátis", "p3.f5": "Guia Amazon",
    "p4.name": "Ouro Exclusivo", "p4.desc": "Serviço completo",
    "p4.f1": "Tudo do Premium", "p4.f2": "50 artes exclusivas",
    "p4.f3": "Publicação KDP", "p4.f4": "Alterações ilimitadas",
    "p4.f5": "Consultoria VIP", "p4.f6": "Suporte WhatsApp",
    "srv.label": "Serviços", "srv.title": "Serviços Individuais",
    "srv.subtitle": "Soluções separadas para cada etapa",
    "srv1.name": "Registo do Livro", "srv1.desc": "Proteja a sua obra com registo oficial",
    "srv2.name": "Publicação Amazon", "srv2.desc": "Publique na maior plataforma",
    "audio.name": "Audiobook Profissional",
    "audio.desc": "Voz narrada profissional e realista — masculina ou feminina, em vários idiomas",
    "srv3.name": "Tradução Profissional",
    "srv3.desc": "Tradução de livros, conteúdos, textos e documentos em vários idiomas",
    "cine.name": "Vídeo Cinematográfico",
    "cine.desc": "Transforme o seu livro num trailer estilo filme — vídeos profissionais para Instagram, TikTok e YouTube que vendem e emocionam",
    "ultra.badge": "Plano Especial Ultra",
    "ultra.title": "Tudo o que precisa num plano",
    "ultra.desc": "A solução mais completa para autores que querem publicar com excelência.",
    "ultra.f1": "Todos os recursos do Plano Premium",
    "ultra.f2": "Diagramação e revisão completa",
    "ultra.f3": "Capa + Contracapa + Lombada",
    "ultra.f4": "50 artes ao redor do livro",
    "ultra.f5": "Amazon KDP + Kindle",
    "ultra.f6": "Catálogo profissional virtual",
    "ultra.f7": "Registo ISBN incluso",
    "ultra.f8": "IA automatizada",
    "ultra.f9": "Suporte diário",
    "ultra.f10": "Mentoria premium",
    "ultra.cta": "Solicitar Orçamento",
    "testi.label": "Depoimentos", "testi.title": "O que dizem os nossos clientes",
    "testi.subtitle": "Histórias reais de autores",
    "countries": "Atendemos autores em todo o mundo",
    "contact.label": "Contacto", "contact.title": "Tem dúvidas? Fale connosco",
    "contact.subtitle": "Estamos disponíveis para ajudar. Respondemos em menos de 24h.",
    "footer.desc": "Transformamos as suas ideias em livros profissionais.",
    "footer.srv": "Serviços", "footer.co": "Empresa",
  },
  "pt-br": {
    "topbar.text": "PLANO ESPECIAL MAIS COMPLETO",
    "nav.categories": "Categorias", "nav.plans": "Planos", "nav.services": "Serviços",
    "nav.testimonials": "Depoimentos", "nav.contact": "Contato",
    "hero.badge": "Criação Profissional de Livros",
    "hero.title": "Transforme suas ideias em livros profissionais",
    "hero.subtitle": "Especialistas em criar publicações digitais de alta qualidade, prontas para lançamento na Amazon KDP.",
    "hero.cta1": "Qual é o plano ideal para você?",
    "hero.cta2": "Ver Nossos Planos",
    "hero.cta3": "⭐ Plano Especial Ultra",
    "cat.label": "Trabalhamos em todas as categorias",
    "form.label": "Orçamento Grátis",
    "form.title": "Qual é o plano ideal para seu projeto?",
    "form.desc": "Conte-nos sobre seu livro e ajudaremos a escolher o melhor plano. Resposta em menos de 24 horas.",
    "form.b1": "Orçamento personalizado sem compromisso",
    "form.b2": "Atendimento direto por WhatsApp",
    "form.b3": "Orientação sobre o melhor formato",
    "form.b4": "Resposta rápida em até 24h",
    "form.card": "Solicite seu Orçamento",
    "form.submit": "Enviar por WhatsApp",
    "form.custom": "Prefere escolher os serviços individualmente? Clique aqui",
    "plans.label": "Planos", "plans.title": "Escolha seu plano",
    "plans.subtitle": "Soluções adaptadas a cada projeto", "plans.cta": "Solicitar",
    "plans.review": "Revisão ortográfica e gramatical — PDF + Word editável",
    "p1.name": "Essencial", "p1.desc": "Para projetos simples",
    "p1.f1": "Diagramação completa", "p1.f2": "Capa personalizada",
    "p1.f3": "1 Capa 3D", "p1.f4": "Layout otimizado", "p1.f5": "Aula Amazon KDP",
    "p2.name": "Avançado", "p2.desc": "Projetos elaborados",
    "p2.f1": "Tudo do Essencial", "p2.f2": "2 Capas 3D",
    "p2.f3": "20 ilustrações", "p2.f4": "1 alteração grátis",
    "p3.name": "Premium", "p3.desc": "O mais escolhido",
    "p3.f1": "Tudo do Avançado", "p3.f2": "Contracapa + Lombada",
    "p3.f3": "35 ilustrações", "p3.f4": "2 alterações grátis", "p3.f5": "Guia Amazon",
    "p4.name": "Ouro Exclusivo", "p4.desc": "Serviço completo",
    "p4.f1": "Tudo do Premium", "p4.f2": "50 artes exclusivas",
    "p4.f3": "Publicação KDP", "p4.f4": "Alterações ilimitadas",
    "p4.f5": "Consultoria VIP", "p4.f6": "Suporte WhatsApp",
    "srv.label": "Serviços", "srv.title": "Serviços Individuais",
    "srv.subtitle": "Soluções separadas para cada etapa",
    "srv1.name": "Registo do Livro", "srv1.desc": "Proteja sua obra com registro oficial",
    "srv2.name": "Publicação Amazon", "srv2.desc": "Publique na maior plataforma",
    "audio.name": "Audiobook Profissional",
    "audio.desc": "Voz narrada profissional e realista — masculina ou feminina, em vários idiomas",
    "srv3.name": "Tradução Profissional",
    "srv3.desc": "Tradução de livros, conteúdos, textos e documentos em vários idiomas",
    "cine.name": "Vídeo Cinematográfico",
    "cine.desc": "Transforme seu livro em um trailer estilo filme — vídeos profissionais para Instagram, TikTok e YouTube",
    "ultra.badge": "Plano Especial Ultra",
    "ultra.title": "Tudo o que precisa em um plano",
    "ultra.desc": "A solução mais completa para autores que querem publicar com excelência.",
    "ultra.f1": "Todos os recursos do Plano Premium",
    "ultra.f2": "Diagramação e revisão completa",
    "ultra.f3": "Capa + Contracapa + Lombada",
    "ultra.f4": "50 artes ao redor do livro",
    "ultra.f5": "Amazon KDP + Kindle",
    "ultra.f6": "Catálogo profissional virtual",
    "ultra.f7": "Registro ISBN incluso",
    "ultra.f8": "IA automatizada",
    "ultra.f9": "Suporte diário",
    "ultra.f10": "Mentoria premium",
    "ultra.cta": "Solicitar Orçamento",
    "testi.label": "Depoimentos", "testi.title": "O que dizem nossos clientes",
    "testi.subtitle": "Histórias reais de autores",
    "countries": "Atendemos autores em todo o mundo",
    "contact.label": "Contato", "contact.title": "Tem dúvidas? Fale conosco",
    "contact.subtitle": "Estamos disponíveis para ajudar. Respondemos em menos de 24h.",
    "footer.desc": "Transformamos suas ideias em livros profissionais.",
    "footer.srv": "Serviços", "footer.co": "Empresa",
  },
  "es": {
    "topbar.text": "PLAN ESPECIAL MÁS COMPLETO",
    "nav.categories": "Categorías", "nav.plans": "Planes", "nav.services": "Servicios",
    "nav.testimonials": "Testimonios", "nav.contact": "Contacto",
    "hero.badge": "Creación Profesional de Libros",
    "hero.title": "Transforma tus ideas en libros profesionales",
    "hero.subtitle": "Especialistas en crear publicaciones digitales de alta calidad, listas para el lanzamiento en Amazon KDP.",
    "hero.cta1": "¿Cuál es el plan ideal para ti?",
    "hero.cta2": "Ver Nuestros Planes",
    "hero.cta3": "⭐ Plan Especial Ultra",
    "cat.label": "Trabajamos en todas las categorías",
    "form.label": "Presupuesto Gratis",
    "form.title": "¿Cuál es el plan ideal para tu proyecto?",
    "form.desc": "Cuéntanos sobre tu libro y te ayudaremos a elegir el mejor plan. Respuesta en menos de 24 horas.",
    "form.b1": "Presupuesto personalizado sin compromiso",
    "form.b2": "Atención directa por WhatsApp",
    "form.b3": "Orientación sobre el mejor formato",
    "form.b4": "Respuesta rápida en 24h",
    "form.card": "Solicita tu Presupuesto",
    "form.submit": "Enviar por WhatsApp",
    "form.custom": "¿Prefieres elegir los servicios individualmente? Haz clic aquí",
    "plans.label": "Planes", "plans.title": "Elige tu plan",
    "plans.subtitle": "Soluciones adaptadas a cada proyecto", "plans.cta": "Solicitar",
    "plans.review": "Revisión ortográfica y gramatical — PDF + Word editable",
    "p1.name": "Esencial", "p1.desc": "Para proyectos simples",
    "p1.f1": "Maquetación completa", "p1.f2": "Portada personalizada",
    "p1.f3": "1 Portada 3D", "p1.f4": "Layout optimizado", "p1.f5": "Clase Amazon KDP",
    "p2.name": "Avanzado", "p2.desc": "Proyectos elaborados",
    "p2.f1": "Todo lo Esencial", "p2.f2": "2 Portadas 3D",
    "p2.f3": "20 ilustraciones", "p2.f4": "1 modificación gratis",
    "p3.name": "Premium", "p3.desc": "El más elegido",
    "p3.f1": "Todo lo Avanzado", "p3.f2": "Contraportada + Lomo",
    "p3.f3": "35 ilustraciones", "p3.f4": "2 modificaciones gratis", "p3.f5": "Guía Amazon",
    "p4.name": "Oro Exclusivo", "p4.desc": "Servicio completo",
    "p4.f1": "Todo lo Premium", "p4.f2": "50 artes exclusivas",
    "p4.f3": "Publicación KDP", "p4.f4": "Modificaciones ilimitadas",
    "p4.f5": "Consultoría VIP", "p4.f6": "Soporte WhatsApp",
    "srv.label": "Servicios", "srv.title": "Servicios Individuales",
    "srv.subtitle": "Soluciones separadas para cada etapa",
    "srv1.name": "Registro del Libro", "srv1.desc": "Protege tu obra con registro oficial",
    "srv2.name": "Publicación Amazon", "srv2.desc": "Publica en la mayor plataforma",
    "audio.name": "Audiolibro Profesional",
    "audio.desc": "Voz narrada profesional y realista — masculina o femenina, en varios idiomas",
    "srv3.name": "Traducción Profesional",
    "srv3.desc": "Traducción de libros, contenidos y documentos en varios idiomas",
    "cine.name": "Vídeo Cinematográfico",
    "cine.desc": "Transforma tu libro en un tráiler estilo película — vídeos profesionales para Instagram, TikTok y YouTube",
    "ultra.badge": "Plan Especial Ultra",
    "ultra.title": "Todo lo que necesitas en un plan",
    "ultra.desc": "La solución más completa para autores que quieren publicar con excelencia.",
    "ultra.f1": "Todos los recursos del Plan Premium",
    "ultra.f2": "Maquetación y revisión completa",
    "ultra.f3": "Portada + Contraportada + Lomo",
    "ultra.f4": "50 artes alrededor del libro",
    "ultra.f5": "Amazon KDP + Kindle",
    "ultra.f6": "Catálogo profesional virtual",
    "ultra.f7": "Registro ISBN incluido",
    "ultra.f8": "IA automatizada",
    "ultra.f9": "Soporte diario",
    "ultra.f10": "Mentoría premium",
    "ultra.cta": "Solicitar Presupuesto",
    "testi.label": "Testimonios", "testi.title": "Qué dicen nuestros clientes",
    "testi.subtitle": "Historias reales de autores",
    "countries": "Atendemos autores en todo el mundo",
    "contact.label": "Contacto", "contact.title": "¿Tienes dudas? Escríbenos",
    "contact.subtitle": "Estamos disponibles para ayudarte. Respondemos en menos de 24h.",
    "footer.desc": "Transformamos tus ideas en libros profesionales.",
    "footer.srv": "Servicios", "footer.co": "Empresa",
  },
  "en": {
    "topbar.text": "MOST COMPLETE SPECIAL PLAN",
    "nav.categories": "Categories", "nav.plans": "Plans", "nav.services": "Services",
    "nav.testimonials": "Testimonials", "nav.contact": "Contact",
    "hero.badge": "Professional Book Creation",
    "hero.title": "Transform your ideas into professional books",
    "hero.subtitle": "Specialists in creating high-quality digital publications, ready for launch on Amazon KDP and other platforms.",
    "hero.cta1": "What's the ideal plan for you?",
    "hero.cta2": "See Our Plans",
    "hero.cta3": "⭐ Ultra Special Plan",
    "cat.label": "We work in all categories",
    "form.label": "Free Quote",
    "form.title": "What's the ideal plan for your project?",
    "form.desc": "Tell us about your book and we'll help you choose the best plan. Response within 24 hours.",
    "form.b1": "Personalized quote with no commitment",
    "form.b2": "Direct WhatsApp support",
    "form.b3": "Guidance on the best format",
    "form.b4": "Fast response within 24h",
    "form.card": "Request your Quote",
    "form.submit": "Send via WhatsApp",
    "form.custom": "Prefer to choose services individually? Click here",
    "plans.label": "Plans", "plans.title": "Choose your plan",
    "plans.subtitle": "Solutions tailored to each project", "plans.cta": "Request",
    "plans.review": "Spelling & grammar review — PDF + editable Word",
    "p1.name": "Essential", "p1.desc": "For simple projects",
    "p1.f1": "Full layout", "p1.f2": "Custom cover",
    "p1.f3": "1 3D Cover", "p1.f4": "Optimized layout", "p1.f5": "Amazon KDP tutorial",
    "p2.name": "Advanced", "p2.desc": "Elaborate projects",
    "p2.f1": "Everything in Essential", "p2.f2": "2 3D Covers",
    "p2.f3": "20 illustrations", "p2.f4": "1 free revision",
    "p3.name": "Premium", "p3.desc": "Most chosen",
    "p3.f1": "Everything in Advanced", "p3.f2": "Back cover + Spine",
    "p3.f3": "35 illustrations", "p3.f4": "2 free revisions", "p3.f5": "Amazon guide",
    "p4.name": "Exclusive Gold", "p4.desc": "Full service",
    "p4.f1": "Everything in Premium", "p4.f2": "50 exclusive artworks",
    "p4.f3": "KDP publishing", "p4.f4": "Unlimited revisions",
    "p4.f5": "VIP consulting", "p4.f6": "WhatsApp support",
    "srv.label": "Services", "srv.title": "Individual Services",
    "srv.subtitle": "Separate solutions for each stage",
    "srv1.name": "Book Registration", "srv1.desc": "Protect your work with official registration",
    "srv2.name": "Amazon Publishing", "srv2.desc": "Publish on the largest platform",
    "audio.name": "Professional Audiobook",
    "audio.desc": "Professional narrated voice — male or female, in multiple languages",
    "srv3.name": "Professional Translation",
    "srv3.desc": "Translation of books, content, texts and documents in multiple languages",
    "cine.name": "Cinematic Video",
    "cine.desc": "Transform your book into a movie-style trailer — professional videos for Instagram, TikTok and YouTube",
    "ultra.badge": "Ultra Special Plan",
    "ultra.title": "Everything you need in one plan",
    "ultra.desc": "The most complete solution for authors who want to publish with excellence.",
    "ultra.f1": "All Premium Plan features",
    "ultra.f2": "Full layout and review",
    "ultra.f3": "Cover + Back cover + Spine",
    "ultra.f4": "50 artworks around the book",
    "ultra.f5": "Amazon KDP + Kindle",
    "ultra.f6": "Professional virtual catalog",
    "ultra.f7": "ISBN registration included",
    "ultra.f8": "Automated AI",
    "ultra.f9": "Daily support",
    "ultra.f10": "Premium mentorship",
    "ultra.cta": "Request Quote",
    "testi.label": "Testimonials", "testi.title": "What our clients say",
    "testi.subtitle": "Real stories from authors",
    "countries": "We serve authors worldwide",
    "contact.label": "Contact", "contact.title": "Have questions? Talk to us",
    "contact.subtitle": "We are available to help. We respond within 24h.",
    "footer.desc": "We transform your ideas into professional books.",
    "footer.srv": "Services", "footer.co": "Company",
  },
  "it": {
    "topbar.text": "PIANO SPECIALE IL PIÙ COMPLETO",
    "nav.categories": "Categorie", "nav.plans": "Piani", "nav.services": "Servizi",
    "nav.testimonials": "Testimonianze", "nav.contact": "Contatto",
    "hero.badge": "Creazione Professionale di Libri",
    "hero.title": "Trasforma le tue idee in libri professionali",
    "hero.subtitle": "Specialisti nella creazione di pubblicazioni digitali di alta qualità, pronte per il lancio su Amazon KDP.",
    "hero.cta1": "Qual è il piano ideale per te?",
    "hero.cta2": "Vedi i Nostri Piani",
    "hero.cta3": "⭐ Piano Speciale Ultra",
    "cat.label": "Lavoriamo in tutte le categorie",
    "form.label": "Preventivo Gratuito",
    "form.title": "Qual è il piano ideale per il tuo progetto?",
    "form.desc": "Raccontaci del tuo libro e ti aiuteremo a scegliere il piano migliore. Risposta in meno di 24 ore.",
    "form.b1": "Preventivo personalizzato senza impegno",
    "form.b2": "Assistenza diretta via WhatsApp",
    "form.b3": "Orientamento sul miglior formato",
    "form.b4": "Risposta rapida entro 24h",
    "form.card": "Richiedi il tuo Preventivo",
    "form.submit": "Invia via WhatsApp",
    "form.custom": "Preferisci scegliere i servizi individualmente? Clicca qui",
    "plans.label": "Piani", "plans.title": "Scegli il tuo piano",
    "plans.subtitle": "Soluzioni adattate ad ogni progetto", "plans.cta": "Richiedi",
    "plans.review": "Revisione ortografica e grammaticale — PDF + Word editabile",
    "p1.name": "Essenziale", "p1.desc": "Per progetti semplici",
    "p1.f1": "Impaginazione completa", "p1.f2": "Copertina personalizzata",
    "p1.f3": "1 Copertina 3D", "p1.f4": "Layout ottimizzato", "p1.f5": "Lezione Amazon KDP",
    "p2.name": "Avanzato", "p2.desc": "Progetti elaborati",
    "p2.f1": "Tutto dall'Essenziale", "p2.f2": "2 Copertine 3D",
    "p2.f3": "20 illustrazioni", "p2.f4": "1 revisione gratuita",
    "p3.name": "Premium", "p3.desc": "Il più scelto",
    "p3.f1": "Tutto dall'Avanzato", "p3.f2": "Quarta di copertina + Dorso",
    "p3.f3": "35 illustrazioni", "p3.f4": "2 revisioni gratuite", "p3.f5": "Guida Amazon",
    "p4.name": "Oro Esclusivo", "p4.desc": "Servizio completo",
    "p4.f1": "Tutto dal Premium", "p4.f2": "50 artwork esclusivi",
    "p4.f3": "Pubblicazione KDP", "p4.f4": "Revisioni illimitate",
    "p4.f5": "Consulenza VIP", "p4.f6": "Supporto WhatsApp",
    "srv.label": "Servizi", "srv.title": "Servizi Individuali",
    "srv.subtitle": "Soluzioni separate per ogni fase",
    "srv1.name": "Registrazione del Libro", "srv1.desc": "Proteggi la tua opera con registrazione ufficiale",
    "srv2.name": "Pubblicazione Amazon", "srv2.desc": "Pubblica sulla piattaforma più grande",
    "audio.name": "Audiobook Professionale",
    "audio.desc": "Voce narrata professionale e realistica — maschile o femminile, in vari idiomi",
    "srv3.name": "Traduzione Professionale",
    "srv3.desc": "Traduzione di libri, contenuti, testi e documenti in vari idiomi",
    "cine.name": "Video Cinematografico",
    "cine.desc": "Trasforma il tuo libro in un trailer stile film — video professionali per Instagram, TikTok e YouTube",
    "ultra.badge": "Piano Speciale Ultra",
    "ultra.title": "Tutto ciò di cui hai bisogno in un piano",
    "ultra.desc": "La soluzione più completa per autori che vogliono pubblicare con eccellenza.",
    "ultra.f1": "Tutte le risorse del Piano Premium",
    "ultra.f2": "Impaginazione e revisione completa",
    "ultra.f3": "Copertina + Quarta + Dorso",
    "ultra.f4": "50 artwork attorno al libro",
    "ultra.f5": "Amazon KDP + Kindle",
    "ultra.f6": "Catalogo professionale virtuale",
    "ultra.f7": "Registrazione ISBN inclusa",
    "ultra.f8": "IA automatizzata",
    "ultra.f9": "Supporto quotidiano",
    "ultra.f10": "Mentoring premium",
    "ultra.cta": "Richiedi Preventivo",
    "testi.label": "Testimonianze", "testi.title": "Cosa dicono i nostri clienti",
    "testi.subtitle": "Storie reali di autori",
    "countries": "Serviamo autori in tutto il mondo",
    "contact.label": "Contatto", "contact.title": "Hai dubbi? Parlaci",
    "contact.subtitle": "Siamo disponibili ad aiutarti. Rispondiamo in meno di 24h.",
    "footer.desc": "Trasformiamo le tue idee in libri professionali.",
    "footer.srv": "Servizi", "footer.co": "Azienda",
  },
};

export default function HomePage() {
  const [lang, setLang] = useState("pt-pt");
  const [scrolled, setScrolled] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizResult, setQuizResult] = useState<{icon:string;plan:string;desc:string} | null>(null);
  const [selectedPlan, setSelectedPlan] = useState("");
  const formNameRef = useRef<HTMLInputElement>(null);
  const formEmailRef = useRef<HTMLInputElement>(null);
  const formCountryRef = useRef<HTMLSelectElement>(null);
  const formPlanRef = useRef<HTMLSelectElement>(null);
  const formMsgRef = useRef<HTMLTextAreaElement>(null);

  const t = (key: string) => T[lang]?.[key] ?? T["pt-pt"]?.[key] ?? key;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  function setPlan(plan: string) {
    setSelectedPlan(plan);
    if (formPlanRef.current) formPlanRef.current.value = plan;
    document.getElementById("orcamento")?.scrollIntoView({ behavior: "smooth" });
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    const name = formNameRef.current?.value || "";
    const email = formEmailRef.current?.value || "";
    const country = formCountryRef.current?.value || "";
    const plan = formPlanRef.current?.value || "";
    const msg = formMsgRef.current?.value || "";
    const text = `Olá! Me chamo ${name} (${email}) de ${country}.\nPlano de interesse: ${plan}\nProjeto: ${msg}`;
    window.open(waLink(text), "_blank");
  }

  function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.open(waLink("Olá! Gostaria de mais informações sobre os serviços da LIBRIX HUB."), "_blank");
  }

  function playVideo(id: string, wrap: HTMLElement) {
    const vid = document.getElementById(id) as HTMLVideoElement;
    const ov = wrap.querySelector(".video-ov");
    if (!vid) return;
    if (vid.paused) {
      document.querySelectorAll("video").forEach((v) => { if (v !== vid) { v.pause(); v.closest(".video-wrap")?.querySelector(".video-ov")?.classList.remove("playing"); } });
      vid.play();
      ov?.classList.add("playing");
    } else {
      vid.pause();
      ov?.classList.remove("playing");
    }
  }

  function computeQuizResult() {
    const a = quizAnswers;
    if (a.q4 === "full" || a.q3 === "sell") {
      return { icon: "⭐", plan: t("p4.name"), desc: "Com base nas suas respostas, o Ouro Exclusivo oferece tudo o que precisa para um livro de alto impacto." };
    } else if (a.q4 === "mid") {
      return { icon: "🏆", plan: t("p3.name"), desc: "O Premium é o mais escolhido e inclui tudo para uma publicação profissional completa." };
    } else {
      return { icon: "📗", plan: t("p1.name"), desc: "O Essencial é o ponto de partida ideal para o seu projeto." };
    }
  }

  function openQuiz() {
    setQuizOpen(true);
    setQuizStep(1);
    setQuizAnswers({});
    setQuizResult(null);
  }

  function pickAnswer(q: string, val: string) {
    setQuizAnswers((prev) => ({ ...prev, [q]: val }));
  }

  function nextStep() {
    if (quizStep < 5) setQuizStep((s) => s + 1);
    else {
      setQuizResult(computeQuizResult());
    }
  }

  function showResultStep() {
    setQuizResult(computeQuizResult());
  }

  return (
    <>
      {/* ANN BAR */}
      <a href="#especial" className="ann-bar">
        <span>⭐</span>
        <span>{t("topbar.text")}</span>
        <span className="ann-bar-arrow">→</span>
      </a>

      {/* HEADER */}
      <header className={scrolled ? "scrolled" : ""}>
        <div className="header-inner">
          <a href="#" className="logo">
            <Image src="/logo.png" alt="Librix Hub" width={1536} height={1024} style={{ height: "48px", width: "auto" }} />
          </a>
          <nav>
            <a href="#categorias">{t("nav.categories")}</a>
            <a href="#planos">{t("nav.plans")}</a>
            <a href="#servicos">{t("nav.services")}</a>
            <a href="#depoimentos">{t("nav.testimonials")}</a>
            <a href="#contacto">{t("nav.contact")}</a>
          </nav>
          <div className="lang-selector">
            {(["pt-br","pt-pt","es","en","it"] as const).map((l) => (
              <button key={l} className={`lang-btn${lang === l ? " active" : ""}`} onClick={() => setLang(l)}>
                {l === "pt-br" ? "🇧🇷" : l === "pt-pt" ? "🇵🇹" : l === "es" ? "🇪🇸" : l === "en" ? "🇬🇧" : "🇮🇹"}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">{t("hero.badge")}</div>
          <h1>
            {t("hero.title").split("livros profissionais").length > 1 ? (
              <>
                {t("hero.title").replace(" livros profissionais", "").replace(" livros profissionais", "").split("em ")[0]}em <em>{t("hero.title").includes("livros profissionais") ? "livros profissionais" : t("hero.title")}</em>
              </>
            ) : (
              <em>{t("hero.title")}</em>
            )}
          </h1>
          <p className="hero-sub">{t("hero.subtitle")}</p>
          <div className="ctas">
            <button className="btn-primary" onClick={openQuiz}>{t("hero.cta1")}</button>
            <a href="#planos" className="btn-outline">
              <span>{t("hero.cta2")}</span>
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#especial" className="btn-outline btn-accent">
              <span>{t("hero.cta3")}</span>
            </a>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* CATEGORIAS */}
      <section id="categorias" style={{ background: "var(--surface2)", padding: "32px 28px", borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ fontSize: ".82rem", fontWeight: 500, color: "var(--text3)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 16 }}>{t("cat.label")}</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 }}>
            {["Romances & Ficção","Biografias","Desenvolvimento Pessoal","Negócios","Religiosos","Infantis","Educativos","Receitas","Fitness","Técnicos","Poesia & Teatro","Atividades"].map((cat) => (
              <span key={cat} className="genre-tag">{cat}</span>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* FORMULÁRIO */}
      <section className="section form-section" id="orcamento">
        <div className="container">
          <div className="form-grid">
            <div className="form-info reveal">
              <span className="eyebrow">{t("form.label")}</span>
              <h2>{t("form.title")}</h2>
              <p>{t("form.desc")}</p>
              <ul className="form-benefits">
                {["form.b1","form.b2","form.b3","form.b4"].map((k) => (
                  <li key={k} className="form-benefit">
                    <span className="form-benefit-check">✓</span>
                    <span>{t(k)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <form className="form-card reveal" onSubmit={handleFormSubmit}>
              <h3>{t("form.card")}</h3>
              <div className="form-group"><input ref={formNameRef} className="form-input" type="text" placeholder="O seu nome" required /></div>
              <div className="form-group"><input ref={formEmailRef} className="form-input" type="email" placeholder="O seu email" required /></div>
              <div className="form-group">
                <select ref={formCountryRef} className="form-input">
                  <option value="Portugal">🇵🇹 Portugal</option>
                  <option value="Brasil">🇧🇷 Brasil</option>
                  <option value="España">🇪🇸 Espanha</option>
                  <option value="UK">🇬🇧 Reino Unido</option>
                  <option value="Outro">🌍 Outro</option>
                </select>
              </div>
              <div className="form-group">
                <select ref={formPlanRef} className="form-input" value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>
                  <option value="">🤔 Não sei qual escolher</option>
                  <option value="Essencial">Essencial</option>
                  <option value="Avançado">Avançado</option>
                  <option value="Premium">Premium ⭐</option>
                  <option value="Ouro Exclusivo">Ouro Exclusivo</option>
                  <option value="Plano Especial">Plano Especial Ultra</option>
                  <option value="Registo">📜 Registo do Livro</option>
                  <option value="Amazon">🚀 Publicação Amazon</option>
                  <option value="Tradução">🌍 Tradução Profissional</option>
                  <option value="Audiobook">🎙️ Audiobook Profissional</option>
                </select>
              </div>
              <div className="form-group"><textarea ref={formMsgRef} className="form-input" placeholder="Descreva o seu projeto: tipo de livro, número de páginas..." required /></div>
              <button type="submit" className="btn-submit">{t("form.submit")}</button>
              <div className="custom-quote" onClick={() => window.open(waLink("Olá! Gostaria de escolher serviços individualmente da LIBRIX HUB."), "_blank")}>
                <svg viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                <span>{t("form.custom")}</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* PLANOS */}
      <section className="section plans-section" id="planos">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{t("plans.label")}</span>
            <h2>{t("plans.title")}</h2>
            <p className="lead">{t("plans.subtitle")}</p>
          </div>
          <div className="plans-grid">
            {/* Essencial */}
            <div className="plan-card reveal">
              <p className="plan-name">{t("p1.name")}</p>
              <p className="plan-desc">{t("p1.desc")}</p>
              <ul className="plan-feats">
                {["p1.f1","p1.f2","p1.f3","p1.f4","p1.f5","plans.review"].map((k) => (
                  <li key={k} className="plan-feat"><span className="plan-feat-ok">✓</span><span>{t(k)}</span></li>
                ))}
              </ul>
              <button className="plan-btn" onClick={() => setPlan(t("p1.name"))}>{t("plans.cta")}</button>
            </div>
            {/* Avançado */}
            <div className="plan-card reveal">
              <p className="plan-name">{t("p2.name")}</p>
              <p className="plan-desc">{t("p2.desc")}</p>
              <ul className="plan-feats">
                {["p2.f1","p2.f2","p2.f3","p2.f4","plans.review"].map((k) => (
                  <li key={k} className="plan-feat"><span className="plan-feat-ok">✓</span><span>{t(k)}</span></li>
                ))}
              </ul>
              <button className="plan-btn" onClick={() => setPlan(t("p2.name"))}>{t("plans.cta")}</button>
            </div>
            {/* Premium */}
            <div className="plan-card featured reveal">
              <div className="plan-badge">Popular</div>
              <p className="plan-name">{t("p3.name")}</p>
              <p className="plan-desc">{t("p3.desc")}</p>
              <ul className="plan-feats">
                {["p3.f1","p3.f2","p3.f3","p3.f4","p3.f5","plans.review"].map((k) => (
                  <li key={k} className="plan-feat"><span className="plan-feat-ok">✓</span><span>{t(k)}</span></li>
                ))}
              </ul>
              <button className="plan-btn" onClick={() => setPlan(t("p3.name"))}>{t("plans.cta")}</button>
            </div>
            {/* Ouro Exclusivo */}
            <div className="plan-card reveal">
              <p className="plan-name">{t("p4.name")}</p>
              <p className="plan-desc">{t("p4.desc")}</p>
              <ul className="plan-feats">
                {["p4.f1","p4.f2","p4.f3","p4.f4","p4.f5","p4.f6","plans.review"].map((k) => (
                  <li key={k} className="plan-feat"><span className="plan-feat-ok">✓</span><span>{t(k)}</span></li>
                ))}
              </ul>
              <button className="plan-btn" onClick={() => setPlan(t("p4.name"))}>{t("plans.cta")}</button>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* SERVIÇOS */}
      <section className="section services-section" id="servicos">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{t("srv.label")}</span>
            <h2>{t("srv.title")}</h2>
            <p className="lead">{t("srv.subtitle")}</p>
          </div>
          <div className="srv-grid">
            <div className="srv-card green reveal">
              <span className="srv-icon">📜</span>
              <h3 className="srv-name green">{t("srv1.name")}</h3>
              <p className="srv-desc">{t("srv1.desc")}</p>
              <ul className="srv-feats">
                <li className="srv-feat"><span className="srv-feat-ok green">✓</span><span>Direitos de autor</span></li>
                <li className="srv-feat"><span className="srv-feat-ok green">✓</span><span>Pedido ISBN</span></li>
                <li className="srv-feat"><span className="srv-feat-ok green">✓</span><span>Ficha catalográfica</span></li>
                <li className="srv-feat"><span className="srv-feat-ok green">✓</span><span>Suporte completo</span></li>
              </ul>
              <button className="srv-btn green" onClick={() => setPlan("Registo")}>{t("plans.cta")}</button>
            </div>
            <div className="srv-card green reveal">
              <span className="srv-icon">🚀</span>
              <h3 className="srv-name green">{t("srv2.name")}</h3>
              <p className="srv-desc">{t("srv2.desc")}</p>
              <ul className="srv-feats">
                <li className="srv-feat"><span className="srv-feat-ok green">✓</span><span>Kindle (eBook)</span></li>
                <li className="srv-feat"><span className="srv-feat-ok green">✓</span><span>Capa comum</span></li>
                <li className="srv-feat"><span className="srv-feat-ok green">✓</span><span>Capa dura</span></li>
                <li className="srv-feat"><span className="srv-feat-ok green">✓</span><span>Config. conta KDP</span></li>
              </ul>
              <button className="srv-btn green" onClick={() => setPlan("Amazon")}>{t("plans.cta")}</button>
            </div>
            <div className="srv-card purple reveal">
              <span className="srv-icon">🎙️</span>
              <h3 className="srv-name purple">{t("audio.name")}</h3>
              <p className="srv-desc">{t("audio.desc")}</p>
              <ul className="srv-feats">
                <li className="srv-feat"><span className="srv-feat-ok purple">✓</span><span>Voz profissional por IA avançada</span></li>
                <li className="srv-feat"><span className="srv-feat-ok purple">✓</span><span>Voz masculina ou feminina</span></li>
                <li className="srv-feat"><span className="srv-feat-ok purple">✓</span><span>PT-PT, PT-BR, ES, EN, IT e outros</span></li>
                <li className="srv-feat"><span className="srv-feat-ok purple">✓</span><span>Entrega em MP3 alta qualidade</span></li>
              </ul>
              <button className="srv-btn purple" onClick={() => window.location.href = "/audiobook"}>{t("plans.cta")}</button>
            </div>
          </div>
          {/* Tradução */}
          <div style={{ maxWidth: 560, margin: "16px auto 0" }}>
            <div className="srv-card reveal" style={{ textAlign: "center", background: "var(--bg)" }}>
              <span className="srv-icon">🌍</span>
              <h3 className="srv-name">{t("srv3.name")}</h3>
              <p className="srv-desc">{t("srv3.desc")}</p>
              <button className="srv-btn dark" onClick={() => window.location.href = "/traducao"}>{t("plans.cta")}</button>
            </div>
          </div>
          {/* Cinematográfico */}
          <div style={{ maxWidth: 760, margin: "16px auto 0" }}>
            <div className="srv-card reveal" style={{ background: "linear-gradient(135deg,#04102a 0%,#0c1a3e 100%)", borderColor: "rgba(37,99,235,.35)", color: "#eef2fb", textAlign: "left" }}>
              <div className="cine-card-inner">
                <div style={{ position: "relative", borderRadius: 6, overflow: "hidden", border: "1px solid rgba(37,99,235,.3)", cursor: "pointer", flexShrink: 0 }}>
                  <video id="landingDemo" preload="metadata" playsInline style={{ width: "100%", display: "block", aspectRatio: "9/16", objectFit: "cover" }}>
                    <source src="/videos/demo-cinematografico.mp4" type="video/mp4" />
                  </video>
                  <div onClick={() => { const v = document.getElementById("landingDemo") as HTMLVideoElement; if(v) v.paused ? v.play() : v.pause(); }} style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.65) 100%)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 14, transition: "opacity .2s" }}>
                    <div style={{ display: "inline-block", background: "#2563eb", color: "#fff", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".06em", padding: "3px 8px", borderRadius: 2, width: "fit-content" }}>🎬 EXEMPLO REAL</div>
                    <div style={{ width: 44, height: 44, background: "rgba(37,99,235,.9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "auto", transition: "transform .2s" }}>
                      <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "#fff", marginLeft: 3 }}><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </div>
                    <p style={{ fontSize: ".68rem", color: "rgba(255,255,255,.7)" }}>Vídeo para autora · LIBRIX HUB</p>
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <span className="srv-icon" style={{ marginBottom: 0, fontSize: "1.6rem" }}>🎬</span>
                    <h3 className="srv-name" style={{ color: "#60a5fa", fontSize: "1.05rem" }}>{t("cine.name")}</h3>
                  </div>
                  <p className="srv-desc" style={{ color: "rgba(238,242,251,.65)", marginBottom: 16 }}>{t("cine.desc")}</p>
                  <ul className="srv-feats" style={{ textAlign: "left", marginBottom: 20 }}>
                    <li className="srv-feat" style={{ borderBottomColor: "rgba(37,99,235,.12)", color: "rgba(238,242,251,.65)" }}><span style={{ color: "#60a5fa", fontWeight: 700, flexShrink: 0 }}>✦</span>Starter — 10 vídeos</li>
                    <li className="srv-feat" style={{ borderBottomColor: "rgba(37,99,235,.12)", color: "rgba(238,242,251,.65)" }}><span style={{ color: "#60a5fa", fontWeight: 700, flexShrink: 0 }}>✦</span>Growth — 15 vídeos</li>
                    <li className="srv-feat" style={{ borderBottomColor: "none", color: "rgba(238,242,251,.65)" }}><span style={{ color: "#60a5fa", fontWeight: 700, flexShrink: 0 }}>✦</span>Author Pro — 27 vídeos</li>
                  </ul>
                  <button className="srv-btn" style={{ background: "linear-gradient(135deg,#1a4db8,#2563eb)", color: "#fff", border: "none", fontWeight: 700, letterSpacing: ".03em", width: "auto", padding: "12px 24px" }} onClick={() => window.location.href = "/cinematografico"}>Ver Pacotes e Exemplo Completo →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ULTRA */}
      <section className="section ultra-section" id="especial">
        <div className="container">
          <div className="ultra-card reveal">
            <div className="ultra-pill">{t("ultra.badge")}</div>
            <h2>{t("ultra.title").split(" num plano")[0]} <em>{t("ultra.title").includes("num plano") ? "num plano" : ""}</em></h2>
            <p className="lead">{t("ultra.desc")}</p>
            <div className="ultra-feats">
              {["ultra.f1","ultra.f2","ultra.f3","ultra.f4","ultra.f5","ultra.f6","ultra.f7","ultra.f8","ultra.f9","ultra.f10"].map((k) => (
                <div key={k} className="ultra-feat"><span className="ultra-feat-ok">✓</span><span>{t(k)}</span></div>
              ))}
            </div>
            <a href="#orcamento" className="btn-primary" style={{ display: "inline-flex" }} onClick={() => setPlan("Plano Especial")}>
              <span>{t("ultra.cta")}</span>
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* DEPOIMENTOS */}
      <section className="section testi-section" id="depoimentos">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{t("testi.label")}</span>
            <h2>{t("testi.title")}</h2>
            <p className="lead">{t("testi.subtitle")}</p>
          </div>
          <div className="testi-grid">
            {[
              { id: "v1", src: "/videos/depoimento-5-marcelo.mp4", name: "Marcelo", role: "Autor" },
              { id: "v2", src: "/videos/depoimento-neldson.mp4", name: "Neldson", role: "Empresário" },
              { id: "v3", src: "/videos/depoimento-francisco.mp4", name: "Francisco", role: "Autor" },
              { id: "v4", src: "/videos/depoimento_regiane.mp4", name: "Regiane", role: "Autora" },
              { id: "v5", src: "/videos/depoimento_antoni.mp4", name: "Antoni", role: "Autor" },
            ].map(({ id, src, name, role }) => (
              <div key={id} className="testi-card reveal">
                <div className="video-wrap" onClick={(e) => playVideo(id, e.currentTarget)}>
                  <video id={id} preload="metadata">
                    <source src={src} type="video/mp4" />
                  </video>
                  <div className="video-ov">
                    <div className="play-btn">
                      <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </div>
                    <div>
                      <p className="testi-name">{name}</p>
                      <p className="testi-role">{role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAÍSES */}
      <div className="countries-section">
        <p>{t("countries")}</p>
        <div className="flags">
          {["🇵🇹","🇧🇷","🇪🇸","🇬🇧","🇮🇹","🇪🇺"].map((f) => <span key={f} className="flag">{f}</span>)}
        </div>
      </div>

      <hr className="divider" />

      {/* CONTACTO */}
      <section className="section contact-section" id="contacto">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <span className="eyebrow">{t("contact.label")}</span>
              <h2>{t("contact.title")}</h2>
              <p className="lead">{t("contact.subtitle")}</p>
              <div className="contact-links">
                <a href="mailto:librixhub@gmail.com" className="contact-link">
                  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  librixhub@gmail.com
                </a>
                <a href={waLink("Olá! Gostaria de mais informações.")} className="contact-link">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.19 19a19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  +55 32 9 9849-1620
                </a>
                <a href="https://instagram.com/librixhub" className="contact-link">
                  <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/></svg>
                  @librixhub
                </a>
              </div>
            </div>
            <form className="contact-form reveal" onSubmit={handleContactSubmit}>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Nome</label><input className="form-input" type="text" required /></div>
                <div className="form-group"><label className="form-label">Email</label><input className="form-input" type="email" required /></div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">País</label>
                  <select className="form-input">
                    <option value="Portugal">🇵🇹 Portugal</option>
                    <option value="Brasil">🇧🇷 Brasil</option>
                    <option value="España">🇪🇸 Espanha</option>
                    <option value="UK">🇬🇧 Reino Unido</option>
                    <option value="Outro">🌍 Outro</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Plano</label>
                  <select className="form-input">
                    <option>Essencial</option>
                    <option>Avançado</option>
                    <option>Premium</option>
                    <option>Ouro Exclusivo</option>
                    <option>Plano Especial</option>
                  </select>
                </div>
              </div>
              <div className="form-group"><label className="form-label">Projeto</label><textarea className="form-input" required /></div>
              <button type="submit" className="btn-submit">{t("form.submit")}</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <Image src="/logo-white.png" alt="Librix Hub" width={1536} height={1024} style={{ height: "44px", width: "auto", marginBottom: 14, display: "block" }} />
              <p style={{ fontSize: ".8rem", lineHeight: 1.65, maxWidth: 250, marginBottom: 18 }}>{t("footer.desc")}</p>
              <div className="footer-plans-row">
                {["📚 Essencial","📗 Avançado","⭐ Premium","🏆 Ouro Exclusivo","💎 Plano Especial Ultra","🎙️ Audiobook","🌍 Tradução","📜 Registo ISBN","🚀 Amazon KDP"].map((p) => (
                  <span key={p} className="f-plan">{p}</span>
                ))}
              </div>
            </div>
            <div className="footer-col">
              <h4>{t("footer.srv")}</h4>
              <ul>
                <li><a href="#planos">Diagramação</a></li>
                <li><a href="#planos">Capas</a></li>
                <li><a href="#servicos">Amazon KDP</a></li>
                <li><a href="/audiobook">Audiobook</a></li>
                <li><a href="/traducao">Tradução</a></li>
                <li><a href="#especial">Plano Especial Ultra</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{t("footer.co")}</h4>
              <ul>
                <li><a href="#orcamento">Orçamento</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <li><a href="https://librixhub.com">librixhub.com</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contacto</h4>
              <ul>
                <li><a href="mailto:librixhub@gmail.com">librixhub@gmail.com</a></li>
                <li><a href={waLink("Olá!")}>+55 32 9 9849-1620</a></li>
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
              <a href={waLink("Olá!")} aria-label="WhatsApp">
                <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WA FLOAT */}
      <a href={waLink("Olá! Gostaria de saber mais sobre a Librix Hub.")} className="wa-float" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* QUIZ MODAL */}
      <div className={`quiz-overlay${quizOpen ? " open" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) setQuizOpen(false); }}>
        <div className="quiz-modal">
          <button className="quiz-close" onClick={() => setQuizOpen(false)}>×</button>
          <div className="quiz-progress">
            {[1,2,3,4,5].map((n) => (
              <div key={n} className={`quiz-dot${quizStep > n || quizResult ? " done" : ""}`} />
            ))}
          </div>

          {!quizResult ? (
            <>
              {quizStep === 1 && (
                <div className="quiz-step active">
                  <p className="quiz-q">Já tem o conteúdo do seu livro escrito?</p>
                  <p className="quiz-hint">Isso ajuda-nos a perceber o ponto de partida.</p>
                  <div className="quiz-options">
                    {[["yes","✅","Sim, tenho tudo escrito"],["part","📝","Tenho parte escrito"],["no","💡","Ainda não, preciso de ajuda"]].map(([v,icon,label]) => (
                      <div key={v} className={`quiz-opt${quizAnswers.q1 === v ? " selected" : ""}`} onClick={() => pickAnswer("q1", v)}>
                        <span className="quiz-opt-icon">{icon}</span><span>{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="quiz-nav">
                    <span/>
                    <button className="quiz-next" onClick={() => setQuizStep(2)} disabled={!quizAnswers.q1}>Próximo →</button>
                  </div>
                </div>
              )}
              {quizStep === 2 && (
                <div className="quiz-step active">
                  <p className="quiz-q">Que tipo de livro pretende publicar?</p>
                  <p className="quiz-hint">Escolha a categoria mais próxima.</p>
                  <div className="quiz-options">
                    {[["rel","🙏","Religioso / Espiritual"],["self","🧠","Desenvolvimento pessoal / Auto-ajuda"],["biz","💼","Negócios / Autoridade"],["other","📚","Ficção / Infantil / Outro"]].map(([v,icon,label]) => (
                      <div key={v} className={`quiz-opt${quizAnswers.q2 === v ? " selected" : ""}`} onClick={() => pickAnswer("q2", v)}>
                        <span className="quiz-opt-icon">{icon}</span><span>{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="quiz-nav">
                    <button className="quiz-back" onClick={() => setQuizStep(1)}>← Voltar</button>
                    <button className="quiz-next" onClick={() => setQuizStep(3)} disabled={!quizAnswers.q2}>Próximo →</button>
                  </div>
                </div>
              )}
              {quizStep === 3 && (
                <div className="quiz-step active">
                  <p className="quiz-q">Qual é o seu principal objetivo com o livro?</p>
                  <p className="quiz-hint">Isso define qual plano serve melhor.</p>
                  <div className="quiz-options">
                    {[["sell","💰","Vender na Amazon e gerar rendimento"],["auth","🏆","Construir autoridade na minha área"],["leg","🌟","Deixar um legado / uso pessoal"]].map(([v,icon,label]) => (
                      <div key={v} className={`quiz-opt${quizAnswers.q3 === v ? " selected" : ""}`} onClick={() => pickAnswer("q3", v)}>
                        <span className="quiz-opt-icon">{icon}</span><span>{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="quiz-nav">
                    <button className="quiz-back" onClick={() => setQuizStep(2)}>← Voltar</button>
                    <button className="quiz-next" onClick={() => setQuizStep(4)} disabled={!quizAnswers.q3}>Próximo →</button>
                  </div>
                </div>
              )}
              {quizStep === 4 && (
                <div className="quiz-step active">
                  <p className="quiz-q">Qual é o perfil de investimento que prefere?</p>
                  <p className="quiz-hint">Temos opções para todos os perfis.</p>
                  <div className="quiz-options">
                    {[["basic","🟢","Essencial — quero o básico bem feito"],["mid","🔵","Avançado / Premium — quero qualidade"],["full","⭐","Quero o pacote mais completo"]].map(([v,icon,label]) => (
                      <div key={v} className={`quiz-opt${quizAnswers.q4 === v ? " selected" : ""}`} onClick={() => pickAnswer("q4", v)}>
                        <span className="quiz-opt-icon">{icon}</span><span>{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="quiz-nav">
                    <button className="quiz-back" onClick={() => setQuizStep(3)}>← Voltar</button>
                    <button className="quiz-next" onClick={() => setQuizStep(5)} disabled={!quizAnswers.q4}>Próximo →</button>
                  </div>
                </div>
              )}
              {quizStep === 5 && (
                <div className="quiz-step active">
                  <p className="quiz-q">Precisa de publicar na Amazon KDP?</p>
                  <p className="quiz-hint">Última pergunta!</p>
                  <div className="quiz-options">
                    {[["kdp","🚀","Sim, quero publicar na Amazon"],["priv","📖","Não, distribuição privada"],["idk","🤔","Ainda não sei"]].map(([v,icon,label]) => (
                      <div key={v} className={`quiz-opt${quizAnswers.q5 === v ? " selected" : ""}`} onClick={() => pickAnswer("q5", v)}>
                        <span className="quiz-opt-icon">{icon}</span><span>{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="quiz-nav">
                    <button className="quiz-back" onClick={() => setQuizStep(4)}>← Voltar</button>
                    <button className="quiz-next" onClick={showResultStep} disabled={!quizAnswers.q5}>Ver o meu plano →</button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="quiz-result active">
              <div className="quiz-result-icon">{quizResult.icon}</div>
              <h3 className="quiz-result-title">O seu plano ideal é:</h3>
              <div className="quiz-result-plan">{quizResult.plan}</div>
              <p className="quiz-result-desc">{quizResult.desc}</p>
              <button className="quiz-result-cta" onClick={() => { setQuizOpen(false); setPlan(quizResult.plan); }}>
                Solicitar este plano →
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
