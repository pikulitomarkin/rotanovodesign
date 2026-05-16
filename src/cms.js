// CMS Data — Vercel Blob via API routes (/api/data, /api/upload)
// In development, Vite proxies /api → localhost:3001
// In production, Vercel handles /api as serverless functions

const API = ''; // relative path works in both environments

export const DEFAULT_DATA = {
  settings: {
    whatsapp: "5521999999999",
    ctaText: "Agende seu horário!",
  },
  hero: {
    mainImage: "/images/Rota imagem tattoo.webp",
    card1: "/images/IMG_0380 1.webp",
    card2: "/images/tattoo realismo.webp",
    card3: "/images/IMG_1152 1.webp",
    bannerText: "Sua pele conta sua história! Vem marcar a próxima com a gente",
  },
  about: {
    paragraph: "Já são milhares de clientes atendidos ao redor do mundo, levando nossa arte para diferentes culturas e histórias. Nossa equipe reúne artistas especializados em diversos estilos, garantindo versatilidade e precisão em cada trabalho. Somos um estúdio consolidado em Copacabana, reconhecido pela consistência e pelo nível dos projetos realizados. Prezamos por um padrão elevado em cada detalhe, do primeiro contato ao resultado final na pele. Aqui, cada atendimento é pensado para oferecer uma experiência diferenciada.",
  },
  differentials: {
    sideImage: "/images/IMG_0380 1.webp",
    items: [
      { q: "Contamos com mais de 900 Avaliações positivas", a: "Mais de 900 avaliações 5 estrelas no Google Meu Negócio, reflexo do nosso compromisso com a qualidade e a experiência do cliente." },
      { q: "Studio descomplicado e atendimento humanizado", a: "Da primeira mensagem ao último retoque, você é tratado como pessoa — não como número. Conversamos, ajustamos referências e respeitamos seu tempo." },
      { q: "Cuidados do processo de criação até o de cicatrização", a: "Desenho exclusivo, materiais descartáveis, biossegurança rigorosa e acompanhamento pós-tattoo até a pele estar 100% cicatrizada." },
      { q: "Estúdio com licença sanitária e equipe certificada", a: "Operamos com alvará da vigilância sanitária e toda a equipe possui certificação em biossegurança. Sua saúde e segurança são prioridade absoluta." },
      { q: "Localização premium em Copacabana", a: "Av. Nossa Sra. de Copacabana, 828 — fácil acesso, próximo ao metrô e à orla. Ambiente climatizado e confortável." },
    ]
  },
  gallery: {
    blackwork: [null, null, null],
    realismo: [null, null, null],
    geometrico: [null, null, null],
    fineline: [null, null, null],
    oldschool: [null, null, null],
    polinesio: [null, null, null],
  },
  testimonials: {
    videos: [
      { url: "#", thumb: "/images/IMG_1152 1.webp", name: "Depoimento 1" },
      { url: "#", thumb: "/images/IMG_3329 1.webp", name: "Depoimento 2" },
    ]
  },
  team: {
    leadText: "Juntos os profissionais encontram mais de 10 anos de experiência no ramo.",
    leadAccent: "mais de 10 anos de experiência",
    teamImage: "/images/emblemas tatuadores.webp",
    col2: "Do moderno detalhado de linhas finas e minimalistas, do colorido vibrante ao preto mais intenso, aqui você encontra diversidade de estilos e a liberdade de escolher quem melhor representa a sua vibe.",
    col3: "Cada um deles possui um estilo próprio, técnica refinada e um olhar sensível para entender o que o cliente realmente quer expressar na pele! Mais do que desenhar, nossos artistas traduzem sentimentos.",
  },
  space: {
    subtitle: "Entre no espaço onde a arte ganha vida na pele. <b>Um estúdio feito para <span style='color: var(--accent)'>conforto, criatividade e tatuagens inesquecíveis.</span></b>",
    images: [null, null, null, null],
  },
  piercing: {
    title: "Para nós, <span style='color: var(--accent)'>Piercing</span> é uma forma de comunicar liberdade",
    text: "Aqui, você encontra <span style='color: var(--accent)'>profissionais experientes</span>, <span style='color: var(--accent)'>ambiente seguro</span> e <span style='color: var(--accent)'>materiais 100% esterilizados</span>, para que cada detalhe da sua experiência seja leve, tranquila e cheia de estilo.",
    guarantees: ["Higiene & Biossegurança garantidas com a Rota!"],
    img1: null,
    img2: null,
    img3: null,
  },
  reviews: [
    { name: "Lucas M.", initials: "LM", time: "Há 2 semanas", text: "Atendimento impecável e resultado incrível. A tatuagem ficou exatamente como eu imaginava. Equipe super atenciosa e ambiente muito limpo. Recomendo demais!" },
    { name: "Carla R.", initials: "CR", time: "Há 1 mês", text: "Melhor estúdio que já fui! O traço é perfeito e o cuidado com a higiene é de outro nível. Voltarei com certeza para fazer minha próxima." },
    { name: "Pedro V.", initials: "PV", time: "Há 3 semanas", text: "Profissionalismo do começo ao fim. Me explicaram cada etapa, do desenho à cicatrização. Vale cada centavo, estou apaixonado pelo resultado." },
    { name: "Fernanda S.", initials: "FS", time: "Há 5 dias", text: "Fiz minha primeira tattoo aqui e não poderia ter escolhido lugar melhor. Me senti super segura, o ambiente é lindo e o artista foi incrível. Amei cada detalhe!" },
    { name: "Rafael T.", initials: "RT", time: "Há 2 meses", text: "Já fiz 3 tatuagens na Rota da Tattoo e cada uma superou a anterior. O nível técnico é absurdo, principalmente no realismo. Studio referência no Rio!" },
    { name: "Julia K.", initials: "JK", time: "Há 1 semana", text: "Vim do exterior especialmente para tatuar aqui em Copacabana e valeu cada centavo da viagem. Arte incrível, atendimento em inglês, equipe super profissional." },
    { name: "Marcos A.", initials: "MA", time: "Há 3 meses", text: "Ambiente super acolhedor, equipe atenciosa e o resultado ficou perfeito. O fine line que fiz ficou impecável. Já indiquei para todos os meus amigos!" },
    { name: "Ana C.", initials: "AC", time: "Há 2 semanas", text: "Lugar incrível! Muito higiênico, profissionais capacitados e o resultado ficou exatamente como eu queria. Atendimento humanizado do começo ao fim." },
    { name: "Diego F.", initials: "DF", time: "Há 6 dias", text: "Top demais! Fiz um blackwork enorme e ficou show de bola. Artista muito talentoso, explicou tudo direitinho e deixou o ambiente bem confortável durante a sessão." },
    { name: "Isabela M.", initials: "IM", time: "Há 1 mês", text: "Studio incrível! O design ficou exatamente como eu queria, super atenciosos e caprichosos. Com certeza voltarei para fazer mais tattoos!" },
    { name: "Thiago B.", initials: "TB", time: "Há 2 semanas", text: "Fiz meu geométrico aqui e ficou perfeito! Traço preciso, equipe muito gente boa e o ambiente é muito limpo. Top de linha, recomendo muito!" },
    { name: "Sophie L.", initials: "SL", time: "Há 3 semanas", text: "Came here as a tourist and had an amazing experience! The team was welcoming, spoke English, and the tattoo came out perfectly. 5 stars without doubt!" },
  ],
  banner: {
    title: "",
    text: "<b>Sua pele conta sua<br/>história!</b> Vem marcar a<br/>próxima com a gente",
    image: "/images/depoimentos 900+ gmn.webp",
  },
  faq: [
    { q: "Onde fica o estúdio?", a: "Av. Nossa Sra. de Copacabana, 828 — Copacabana, Rio de Janeiro - RJ, CEP 22050-001. A duas quadras do metrô Cardeal Arcoverde." },
    { q: "Como posso marcar uma tattoo?", a: "Pelo botão 'Agende seu horário', via WhatsApp, ou passando no estúdio. Mande sua referência e a região do corpo que ajustamos data e orçamento." },
    { q: "O estúdio utiliza equipamentos seguros e esterilizados?", a: "Sim — todos os materiais são descartáveis (agulhas, cartuchos, bicos), abertos na sua frente. Superfícies e maquinismos passam por desinfecção entre sessões." },
    { q: "Vocês oferecem suporte de cicatrização?", a: "Sim, entregamos um guia de cuidados pós-tattoo e ficamos disponíveis para qualquer dúvida durante o período de cicatrização. Retoque gratuito quando necessário." },
    { q: "Posso levar meu filho ou acompanhante?", a: "Pode sim! Temos um espaço confortável para acompanhantes. Para menores de 18 anos é obrigatória a presença do responsável legal com documento." },
  ],
  footer: {
    cnpj: "00.000.000/0000-00",
  }
};

function deepMerge(defaults, overrides) {
  if (!overrides) return defaults;
  const result = { ...defaults };
  for (const key of Object.keys(overrides)) {
    if (Array.isArray(overrides[key])) {
      result[key] = overrides[key];
    } else if (overrides[key] && typeof overrides[key] === 'object' && defaults[key] && typeof defaults[key] === 'object' && !Array.isArray(defaults[key])) {
      result[key] = deepMerge(defaults[key], overrides[key]);
    } else if (overrides[key] !== undefined) {
      result[key] = overrides[key];
    }
  }
  return result;
}

// Load from API (Vercel Blob), cache in localStorage
export async function loadCMSData() {
  try {
    const res = await fetch(`${API}/api/data`);
    if (!res.ok) throw new Error('API error');
    const remote = await res.json();
    if (remote) {
      const merged = deepMerge(DEFAULT_DATA, remote);
      localStorage.setItem('rotadatattoo_cms_cache', JSON.stringify(merged));
      return merged;
    }
  } catch (e) {
    console.warn('CMS API unavailable, using cache', e.message);
  }
  try {
    const cached = localStorage.getItem('rotadatattoo_cms_cache');
    if (cached) return deepMerge(DEFAULT_DATA, JSON.parse(cached));
  } catch (e) {}
  return DEFAULT_DATA;
}

// Save to API (Vercel Blob) + update local cache
export async function saveCMSData(data) {
  localStorage.setItem('rotadatattoo_cms_cache', JSON.stringify(data));
  const res = await fetch(`${API}/api/data`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Failed to save to Vercel Blob');
  window.dispatchEvent(new CustomEvent('cms-updated', { detail: data }));
  return res.json();
}

// Upload image — sends raw file body, works with Vercel serverless function
export async function uploadImage(file) {
  const res = await fetch(`${API}/api/upload?filename=${encodeURIComponent(file.name)}`, {
    method: 'POST',
    headers: { 'Content-Type': file.type },
    body: file,
  });
  if (!res.ok) throw new Error('Upload failed');
  const { url } = await res.json();
  return url;
}

// React hook — loads on mount, listens for updates
import { useState, useEffect } from 'react';
export function useCMSData() {
  const [data, setData] = useState(() => {
    try {
      const cached = localStorage.getItem('rotadatattoo_cms_cache');
      if (cached) return deepMerge(DEFAULT_DATA, JSON.parse(cached));
    } catch(e) {}
    return DEFAULT_DATA;
  });

  useEffect(() => {
    loadCMSData().then(setData);
    const handler = (e) => setData(e.detail || DEFAULT_DATA);
    window.addEventListener('cms-updated', handler);
    return () => window.removeEventListener('cms-updated', handler);
  }, []);

  return data;
}
