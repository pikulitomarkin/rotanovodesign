import React from 'react'
import { useCMSData } from './cms'

// ===== Logo (gothic-style RT monogram) =====
export function Logo({ size = 56, color = "#fff" }) {
  return (
    <img src="/images/EMBLEMA ROTA.webp" alt="Rota da Tattoo Logo" width={size} style={{ height: 'auto', display: 'block' }} />
  )
}

// ===== "O" stamp for hero title =====
export function StampO({ size = "1em" }) {
  return (
    <svg viewBox="0 0 100 100" style={{ width: size, height: size, verticalAlign: "baseline" }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="oMask">
          <rect width="100" height="100" fill="#fff" />
          <circle cx="50" cy="50" r="22" fill="#000" />
        </mask>
        <clipPath id="oClip">
          <circle cx="50" cy="50" r="48" />
        </clipPath>
      </defs>
      <g clipPath="url(#oClip)">
        <circle cx="50" cy="50" r="48" fill="var(--accent, #ff3d00)" mask="url(#oMask)" />
        <rect x="-10" y="44" width="120" height="12" fill="#000" transform="rotate(-32 50 50)" />
      </g>
    </svg>
  )
}

// ===== Beach / Copacabana silhouette for hero image placeholder =====
function CopacabanaSilhouette() {
  return (
    <svg className="silhouette" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="60%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
        <linearGradient id="seaG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#222" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#skyG)" />
      <path d="M0 380 L80 360 L160 340 L240 300 L320 280 L420 250 L500 280 L580 290 L660 270 L740 290 L800 280 L800 600 L0 600 Z" fill="#0a0a0a" />
      <path d="M280 320 Q340 230, 400 280 Q460 320, 520 290 L520 600 L280 600 Z" fill="#050505" />
      <path d="M520 300 Q580 220, 640 270 Q700 320, 760 290 L760 600 L520 600 Z" fill="#080808" />
      <rect y="430" width="800" height="170" fill="url(#seaG)" />
      <ellipse cx="400" cy="500" rx="380" ry="20" fill="#1a1a1a" opacity="0.6" />
      <g transform="translate(540, 410)">
        <ellipse cx="0" cy="62" rx="14" ry="3" fill="#000" opacity="0.5" />
        <path d="M-2 0 Q-4 -8 0 -10 Q4 -8 2 0 L4 22 L8 50 L4 60 L-4 60 L-8 50 L-4 22 Z" fill="#000" />
        <path d="M6 8 L26 32 L24 36 L4 14 Z" fill="#000" />
        <path d="M22 20 Q30 8 36 -10 Q38 0 30 30 Z" fill="#000" />
      </g>
      <g transform="translate(440, 420)">
        <ellipse cx="0" cy="50" rx="10" ry="2" fill="#000" opacity="0.4" />
        <path d="M-1 0 Q-3 -6 0 -8 Q3 -6 1 0 L3 18 L6 42 L2 50 L-3 50 L-6 42 L-3 18 Z" fill="#000" />
      </g>
      <ellipse cx="500" cy="470" rx="140" ry="2" fill="#3a3a3a" opacity="0.4" />
      <ellipse cx="500" cy="480" rx="100" ry="1.5" fill="#2a2a2a" opacity="0.5" />
    </svg>
  )
}

// ===== Header =====
export function Header() {
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };
  const currentLangCookie = getCookie('googtrans');
  const currentLang = currentLangCookie ? currentLangCookie.split('/')[2] : 'pt';

  return (
    <header className="site-header">
      <div className="container nav">
        <a href="#top" aria-label="Rota da Tattoo">
          <Logo size={56} />
        </a>
        <nav>
          <ul className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <li><a href="#sobre">SOBRE NÓS</a></li>
            <li><a href="#tattoos">TATTOOS</a></li>
            <li><a href="#estudio">O ESTÚDIO</a></li>
            <li>
              <select 
                onChange={(e) => {
                  const lang = e.target.value;
                  if (lang === 'pt') {
                    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                    // clear from domain as well just in case
                    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
                  } else {
                    document.cookie = `googtrans=/pt/${lang}; path=/`;
                  }
                  window.location.reload();
                }} 
                defaultValue={currentLang} 
                style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  color: '#fff', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  padding: '6px 12px', 
                  borderRadius: '20px', 
                  cursor: 'pointer',
                  fontFamily: 'Inter',
                  fontSize: '12px',
                  outline: 'none'
                }}
              >
                <option value="pt" style={{ color: '#000' }}>🇧🇷 PT</option>
                <option value="en" style={{ color: '#000' }}>🇺🇸 EN</option>
                <option value="es" style={{ color: '#000' }}>🇪🇸 ES</option>
              </select>
            </li>
            <li><a href="#contato" className="cta">ENTRE EM CONTATO</a></li>
          </ul>
        </nav>
        <button className="menu-btn" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  )
}

// ===== Hero =====
export function Hero() {
  const cms = useCMSData()
  const h = cms.hero
  const s = cms.settings
  const waLink = `https://wa.me/${(s.whatsapp || '5521999999999').replace(/\D/g, '')}`

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-left">
          
          {h.statsText && (
            <div className="hero-stats" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div className="avatars" style={{ display: 'flex', marginLeft: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#222', marginLeft: '-12px', border: '2px solid var(--bg)' }} />
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#2a2a2a', marginLeft: '-12px', border: '2px solid var(--bg)' }} />
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#333', marginLeft: '-12px', border: '2px solid var(--bg)' }} />
              </div>
              <p dangerouslySetInnerHTML={{ __html: h.statsText }} style={{ fontSize: '14px', color: '#ccc', lineHeight: 1.4, margin: 0, fontWeight: 500 }} />
            </div>
          )}

          <div className="hero-title" style={{ marginBottom: '24px' }}>
            <img src={h.titleImg || "/images/Rota headline.webp"} alt="Rota da Tattoo" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <div className="hero-sub" style={{ marginBottom: '24px' }}>
            <img src={h.subImg || "/images/subline rota.webp"} alt="Tatuagem e Piercing Copacabana" style={{ maxWidth: '80%', height: 'auto' }} />
          </div>
          {h.bannerText && (
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 'clamp(16px, 1.6vw, 22px)', lineHeight: 1.4, marginBottom: '28px', maxWidth: '420px' }}>{h.bannerText}</p>
          )}
          <a href={waLink} className="btn-cta" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" style={{ marginRight: '8px' }}>
              <path d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.88 11.9L4 20l4.22-1.1a7.93 7.93 0 003.83.98h.01a7.94 7.94 0 005.55-13.55zm-5.54 12.2a6.58 6.58 0 01-3.36-.92l-.24-.14-2.5.65.67-2.44-.16-.25a6.6 6.6 0 0110.27-8.1 6.55 6.55 0 011.93 4.67 6.6 6.6 0 01-6.6 6.53zm3.62-4.94c-.2-.1-1.18-.58-1.36-.64-.18-.07-.31-.1-.45.1-.13.2-.5.64-.62.77-.11.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.6-.53-1-1.18-1.12-1.38-.11-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.06-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34l-.39-.01a.74.74 0 00-.54.25c-.18.2-.7.69-.7 1.67 0 .98.72 1.93.82 2.06.1.13 1.42 2.17 3.44 3.05.48.2.85.32 1.14.42.48.15.92.13 1.26.08.39-.06 1.18-.48 1.34-.95.17-.46.17-.86.12-.94-.05-.09-.18-.13-.38-.23z" />
            </svg>
            {s.ctaText || 'Agende seu horário!'}
          </a>
        </div>

        <div className="hero-image">
          <img src={h.mainImage} alt="Tattoo Artist" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
          <div className="hero-pin">
            <div className="pin-ico">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
            </div>
            <div className="pin-text">
              Av. Nossa Sra. de Copacabana, 828.<br />
              Copacabana, Rio de Janeiro - RJ, 22050-001
            </div>
          </div>
          <div className="hero-cards">
            {[{src: h.card1, label: '001'}, {src: h.card2, label: '002'}, {src: h.card3, label: '003'}].map(({src, label}) => (
              <div className="h-card" key={label}>
                <span className="h-card-num">{label}</span>
                {src && <img src={src} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ===== Styles Strip =====
export function StylesStrip() {
  const styles = ["Realismo", "Floral", "Cobertura", "Fine Line", "Polinésio Oriental", "Old School", "Ornamental", "Micro Realismo", "Blackwork", "Pontilismo", "Anime"]
  return (
    <section className="styles-strip">
      <div className="inner">
        {styles.map((s, i) => (
          <React.Fragment key={s}>
            {s}{i < styles.length - 1 && <span className="dot">•</span>}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

// ===== About / Referência =====
export function About() {
  const cms = useCMSData()
  return (
    <section className="about" id="sobre">
      <div className="container about-grid">
        <div className="about-logo">
          {cms.about.logoImg ? (
            <img src={cms.about.logoImg} alt="Logotipo Rota da Tattoo" style={{ maxWidth: '180px', height: 'auto' }} />
          ) : (
            <Logo size={180} />
          )}
        </div>
        <div className="about-headline">
          <h2>
            <img src={cms.about.titleImg || "/images/SOMOS REFERÊNCIA.webp"} alt="SOMOS REFERÊNCIA EM COPACABANA/RJ" style={{ maxWidth: '100%', height: 'auto' }} />
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '16px', lineHeight: 1.7, maxWidth: '60ch' }}>
            {cms.about.paragraph}
          </p>
        </div>
      </div>
    </section>
  )
}

// ===== Differentials with Accordion =====
export function Differentials() {
  const cms = useCMSData()
  const items = cms.differentials.items
  const [openIdx, setOpenIdx] = React.useState(0)
  const [imgIdx, setImgIdx] = React.useState(0)
  const images = cms.differentials.sideImages || (cms.differentials.sideImage ? [cms.differentials.sideImage] : [])

  React.useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setImgIdx(prev => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="diff" id="estudio">
      <div className="container diff-grid">
        <div className="diff-image" style={{ position: 'relative', overflow: 'hidden' }}>
          {images.map((src, idx) => (
            <img 
              key={idx} 
              src={src} 
              alt="Tatuador em ação" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                position: 'absolute', 
                inset: 0, 
                opacity: idx === imgIdx ? 1 : 0, 
                transition: 'opacity 1s ease-in-out' 
              }} 
            />
          ))}
        </div>
        <div className="diff-content">
          <h3 style={{ marginBottom: '32px' }}>
            A <strong>Rota da Tattoo</strong> é diferenciada pelo
            <div style={{ marginTop: '12px' }}>
              <img src="/images/AMBIENTE ACOLHEDOR.webp" alt="AMBIENTE ACOLHEDOR" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </h3>
          <div className="accordion">
            {items.map((it, i) => (
              <div key={i} className={`acc-item ${openIdx === i ? "open" : ""}`}>
                <button className="acc-head" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                  <span className="plus">+</span>
                  <span>{it.q}</span>
                </button>
                <div className="acc-body"><div><p>{it.a}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ===== Gallery / Estilos =====
export function Gallery() {
  const cms = useCMSData()
  const g = cms.gallery
  const blocks = [
    { eyebrow: "TATTOO",     title: "BLACKWORK",  key: "blackwork",  labelImg: "/images/tattoo blackwork.webp" },
    { eyebrow: "TATTOO",     title: "REALISMO",   key: "realismo",   labelImg: "/images/tattoo realismo.webp" },
    { eyebrow: "ORNAMENTAL", title: "GEOMÉTRICO", key: "geometrico", labelImg: "/images/ornamental geométrico.webp" },
    { eyebrow: "TATTOO",     title: "FINE LINE",  key: "fineline",   labelImg: "/images/tattoo fineline.webp" },
    { eyebrow: "TATTOO",     title: "OLD SCHOOL", key: "oldschool",  labelImg: null },
    { eyebrow: "TATTOO",     title: "POLINÉSIO",  key: "polinesio",  labelImg: null },
  ]
  return (
    <section className="gallery" id="tattoos">
      <div className="container">
        <div className="gallery-header">
          <img src="/images/ESTILOS DE TATTOO.webp" alt="ESTILOS DE TATTOO" style={{ margin: '0 auto 12px', maxWidth: '300px' }} />
          <p style={{ fontSize: '11px', letterSpacing: '0.4em' }}>CONTAMOS COM VÁRIOS ESTILOS ÚNICOS</p>
        </div>
        <div className="featured-trio" style={{ display: 'block', marginBottom: '80px', textAlign: 'center' }}>
          <img src="/images/CARD DE TATTOOS.webp" alt="Tattoos em destaque" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>
        {blocks.map((b) => {
          const imgs = g[b.key] || [null, null, null]
          return (
            <div className="style-block" key={b.key}>
              <div className="style-label" style={{ marginBottom: '24px' }}>
                {b.labelImg ? (
                  <img src={b.labelImg} alt={b.title} style={{ maxWidth: '280px' }} />
                ) : (
                  <>
                    <Logo size={32} />
                    <div className="text"><small>{b.eyebrow}</small><strong>{b.title}</strong></div>
                  </>
                )}
              </div>
              <div className="style-grid">
                {[0,1,2].map(j => (
                  <div key={j} className={`tile${!imgs[j] ? ' ph-skin-' + (((j + blocks.indexOf(b)) % 9) + 1) : ''}`}
                    style={imgs[j] ? { backgroundImage: `url(${imgs[j]})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

// ===== Testimonials =====
export function Testimonials() {
  const cms = useCMSData()
  const videos = cms.testimonials?.videos || []
  return (
    <section className="testimonials">
      <div className="bg-mark" />
      <div className="container inner">
        <div className="flags">
          <div className="flag" style={{ background: 'linear-gradient(180deg, #009c3b 50%, #ffdf00 50%)' }} />
          <div className="flag" style={{ background: 'linear-gradient(180deg, #c8102e 50%, #ffffff 50%)' }} />
          <div className="flag" style={{ background: 'linear-gradient(180deg, #0033a0 33%, #ffffff 33%, #ffffff 66%, #d52b1e 66%)' }} />
          <div className="flag" style={{ background: 'linear-gradient(180deg, #ed2939 33%, #ffffff 33%, #ffffff 66%, #002395 66%)' }} />
          <div className="flag" style={{ background: 'linear-gradient(135deg, #012169 33%, #ffffff 33%, #ffffff 66%, #c8102e 66%)' }} />
          <div className="flag" style={{ background: 'linear-gradient(180deg, #aa151b 33%, #f1bf00 33%, #f1bf00 66%, #aa151b 66%)' }} />
        </div>
        <div style={{ marginBottom: '36px', textAlign: 'center' }}>
          <img src="/images/TURISTAS.webp" alt="Depoimentos" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div className="video-row" style={{
          overflowX: videos.length > 3 ? 'auto' : 'visible',
          flexWrap: videos.length > 3 ? 'nowrap' : 'wrap',
          justifyContent: videos.length <= 3 ? 'center' : 'flex-start',
          paddingBottom: '8px',
        }}>
          {videos.map((v, i) => (
            <a key={i} href={v.url || '#'} target="_blank" rel="noreferrer" className="video-card" style={{ textDecoration: 'none', flexShrink: 0 }}>
              {v.thumb && <img src={v.thumb} className="vc-bg" alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />}
              <div className="vc-tag">
                <div className="av" />
                <div className="label">{v.name || `Depoimento ${i + 1}`}<small>Cliente</small></div>
              </div>
              <div className="play"><svg width="22" height="22" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== Team =====
export function Team() {
  const cms = useCMSData()
  const t = cms.team
  return (
    <section className="team">
      <div className="container team-grid">
        <div className="team-lead">
          <p>{t.leadText}</p>
          <div className="team-faces" style={{ display: 'block' }}>
            <img src={t.teamImage} alt="Tatuadores" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
        <div className="team-copy">
          <p>{t.col2}</p>
          <p>{t.col3}</p>
        </div>
      </div>
    </section>
  )
}

// ===== Map =====
export function MapSection() {
  return (
    <section className="map-section" id="contato">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img src="/images/Localização subline.webp" alt="Localização" style={{ maxWidth: '300px' }} />
        </div>
        <div className="map-card">
          <div className="map-head">
            <div className="map-ico">
              <Logo size={28} />
            </div>
            <div className="map-info">
              <h4>Rota de Tattoo - Tattoo e Piercing Copacabana</h4>
              <p>Av. Nossa Sra. de Copacabana,<br />828 - Copacabana, Rio de Janeiro - RJ, 22050-001</p>
              <div className="map-rating"><strong>5,0</strong> ★★★★★ (912)</div>
            </div>
            <div className="actions">
              <span /><span />
            </div>
          </div>
          <div className="map-canvas" style={{ width: '100%', aspectRatio: '16/9' }}>
            <iframe 
              src="https://www.google.com/maps?q=Rota+da+Tattoo,+Av.+Nossa+Sra.+de+Copacabana,+828,+Copacabana,+Rio+de+Janeiro&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Estúdio Rota da Tattoo"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===== Reviews =====
export function Reviews() {
  const cms = useCMSData()
  const cards = cms.reviews || []
  // Split into two rows for opposite-direction marquee
  const half = Math.ceil(cards.length / 2)
  const row1 = cards.slice(0, half)
  const row2 = cards.slice(half)

  const Card = ({ c }) => (
    <div className="review-card">
      <div className="who">
        <div className="avatar">{c.initials}</div>
        <div>
          <div className="name">{c.name}</div>
          <div className="time">{c.time}</div>
        </div>
      </div>
      <div className="stars">★★★★★</div>
      <div className="text">{c.text}</div>
    </div>
  )

  return (
    <section className="reviews">
      <div className="reviews-marquee-wrap">
        {/* Row 1 — scrolls left */}
        <div className="marquee-track">
          <div className="marquee-inner marquee-left">
            {[...row1, ...row1].map((c, i) => <Card key={i} c={c} />)}
          </div>
        </div>
        {/* Row 2 — scrolls right */}
        <div className="marquee-track">
          <div className="marquee-inner marquee-right">
            {[...row2, ...row2].map((c, i) => <Card key={i} c={c} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

// ===== Orange Banner =====
export function Banner() {
  const cms = useCMSData()
  const b = cms.banner
  return (
    <section className="banner">
      <div className="container banner-grid">
        <div className="banner-left">
          <p dangerouslySetInnerHTML={{ __html: b.text }} />
        </div>
        <div className="banner-right">
          <img src={b.image} alt="+900 Avaliações" style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
        </div>
      </div>
    </section>
  )
}

// ===== FAQ =====
export function FAQ() {
  const cms = useCMSData()
  const items = cms.faq || []
  const s = cms.settings
  const waLink = `https://wa.me/${(s.whatsapp || '5521999999999').replace(/\D/g, '')}`
  const [openIdx, setOpenIdx] = React.useState(-1)
  return (
    <section className="faq">
      <div className="container faq-grid">
        <div className="faq-head">
          <h2>Perguntas <span className="accent">Frequentes!</span></h2>
          <a className="btn-ghost" href={waLink} target="_blank" rel="noopener noreferrer">{s.ctaText || 'Agende seu horário!'}</a>
        </div>
        <div className="faq-list">
          {items.map((it, i) => (
            <div className={`acc-item ${openIdx === i ? "open" : ""}`} key={i}>
              <button className="acc-head" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                <span>{it.q}</span>
              </button>
              <div className="acc-body"><div><p>{it.a}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== Footer =====
export function Footer() {
  const cms = useCMSData()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="copy">CNPJ {cms.footer?.cnpj || '00.000.000/0000-00'}</div>
        <a href="#top" className="top-link">VOLTAR <span className="accent">PARA O TOPO</span></a>
      </div>
    </footer>
  )
}

// ===== WhatsApp Float =====
export function WhatsAppFloat() {
  const cms = useCMSData()
  const waLink = `https://wa.me/${(cms.settings.whatsapp || '5521999999999').replace(/\D/g, '')}`
  return (
    <a className="wa-float" href={waLink} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
        <path d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.88 11.9L4 20l4.22-1.1a7.93 7.93 0 003.83.98h.01a7.94 7.94 0 005.55-13.55zm-5.54 12.2a6.58 6.58 0 01-3.36-.92l-.24-.14-2.5.65.67-2.44-.16-.25a6.6 6.6 0 0110.27-8.1 6.55 6.55 0 011.93 4.67 6.6 6.6 0 01-6.6 6.53zm3.62-4.94c-.2-.1-1.18-.58-1.36-.64-.18-.07-.31-.1-.45.1-.13.2-.5.64-.62.77-.11.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.6-.53-1-1.18-1.12-1.38-.11-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.06-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34l-.39-.01a.74.74 0 00-.54.25c-.18.2-.7.69-.7 1.67 0 .98.72 1.93.82 2.06.1.13 1.42 2.17 3.44 3.05.48.2.85.32 1.14.42.48.15.92.13 1.26.08.39-.06 1.18-.48 1.34-.95.17-.46.17-.86.12-.94-.05-.09-.18-.13-.38-.23z" />
      </svg>
    </a>
  )
}

// ===== Studio Space =====
export function StudioSpace() {
  const cms = useCMSData()
  const space = cms.space
  if (!space) return null
  return (
    <section className="studio-space">
      <div className="container">
        <h2 className="section-title text-center with-lines">Nosso espaço</h2>
        <p className="space-subtitle text-center" dangerouslySetInnerHTML={{ __html: space.subtitle }} />
        <div className="space-gallery">
          {space.images?.filter(Boolean).map((img, i) => (
            <img key={i} src={img} alt={`Espaço ${i}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== Piercing =====
export function Piercing() {
  const cms = useCMSData()
  const s = cms.settings
  const p = cms.piercing
  if (!p) return null
  const waLink = `https://wa.me/${(s.whatsapp || '5521999999999').replace(/\D/g, '')}`
  return (
    <section className="piercing-section">
      <div className="container piercing-grid">
        <div className="piercing-content">
          <h2 dangerouslySetInnerHTML={{ __html: p.title }} />
          <p dangerouslySetInnerHTML={{ __html: p.text }} />
          
          <div style={{ padding: '16px 0', borderTop: '1px solid #333', borderBottom: '1px solid #333', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {(p.guarantees || (p.guarantee ? [p.guarantee] : [])).map((g, i) => (
              <div className="guarantee" style={{ border: 'none', padding: 0, margin: 0 }} key={i}>
                <div className="guarantee-icon">+</div>
                <span>{g}</span>
              </div>
            ))}
          </div>

          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-cta" style={{ maxWidth: '300px' }}>
            Agende seu horário!
          </a>
        </div>
        <div className="piercing-images">
          <div className="p-img-left">
            {p.img1 && <img src={p.img1} alt="Piercing 1" />}
          </div>
          <div className="p-img-right">
            {p.img2 && <img src={p.img2} alt="Piercing 2" />}
            {p.img3 && <img src={p.img3} alt="Piercing 3" />}
          </div>
        </div>
      </div>
    </section>
  )
}
