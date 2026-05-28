"use client";
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { siteData } from '../lib/data'

// ===== Logo (gothic-style RT monogram) =====
export function Logo({ size = 56 }) {
  return (
    <Image 
      src="/images/EMBLEMA ROTA.webp" 
      alt="Rota da Tattoo Logo" 
      width={size} 
      height={size}
      style={{ width: size, height: 'auto', display: 'block' }} 
      priority
    />
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
  const [lang, setLang] = React.useState('pt');

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; googtrans=`);
      if (parts.length === 2) {
        const cookieVal = parts.pop().split(';').shift();
        if (cookieVal) {
          setLang(cookieVal.split('/')[2] || 'pt');
        }
      }
    }
  }, []);

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
            <li><a href="#piercing">PIERCING</a></li>
            <li>
              <select 
                value={lang}
                onChange={(e) => {
                  const newLang = e.target.value;
                  setLang(newLang);
                  if (newLang === 'pt') {
                    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
                  } else {
                    document.cookie = `googtrans=/pt/${newLang}; path=/`;
                  }
                  window.location.reload();
                }} 
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
  const cms = siteData
  const h = cms.hero
  const s = cms.settings
  const waLink = `https://wa.me/${(s.whatsapp || '5521999999999').replace(/\D/g, '')}`

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-left">
          
          {h.statsText && (
            <div className="hero-stats" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <p dangerouslySetInnerHTML={{ __html: h.statsText }} style={{ fontSize: '14px', color: '#ccc', lineHeight: 1.4, margin: 0, fontWeight: 500 }} />
            </div>
          )}

          <h1 className="hero-title display" dangerouslySetInnerHTML={{ __html: h.titleText }} />
          <h2 className="hero-sub" dangerouslySetInnerHTML={{ __html: h.subText }} />
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
          <img fetchpriority="high" src={h.mainImage} alt="Tattoo Artist" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />

          <div className="hero-cards">
            {[{src: h.card1, label: '001'}, {src: h.card2, label: '002'}, {src: h.card3, label: '003'}].map(({src, label}) => (
              <div className="h-card" key={label}>
                <span className="h-card-num">{label}</span>
                {src && <img loading="lazy" decoding="async" src={src} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
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
            <span style={{ color: i % 2 !== 0 ? 'var(--accent)' : '#fff' }}>{s}</span>
            {i < styles.length - 1 && <span className="dot">•</span>}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

// ===== About / Referência =====
export function About() {
  const cms = siteData
  return (
    <section className="about" id="sobre">
      <div className="container about-grid">
        <div className="about-logo">
          <Logo size={180} />
        </div>
        <div className="about-headline">
          <h2 className="display" dangerouslySetInnerHTML={{ __html: cms.about.titleText }} />
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
  const cms = siteData
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
            A <strong translate="no" className="notranslate">Rota da Tattoo</strong> é diferenciada pelo
            <div style={{ marginTop: '16px' }}>
              <img src="/images/AMBIENTE%20ACOLHEDOR.webp" alt="Ambiente Acolhedor" style={{ width: '100%', maxWidth: '450px', height: 'auto', display: 'block' }} />
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
  const cms = siteData
  const [selectedImage, setSelectedImage] = React.useState(null)
  const g = cms.gallery
  const blocks = [
    { eyebrow: "TATTOO",     title: "BLACKWORK",  key: "blackwork",  labelImg: null },
    { eyebrow: "TATTOO",     title: "REALISMO",   key: "realismo",   labelImg: null },
    { eyebrow: "ORNAMENTAL", title: "GEOMÉTRICO", key: "geometrico", labelImg: null },
    { eyebrow: "TATTOO",     title: "FINE LINE",  key: "fineline",   labelImg: null },
    { eyebrow: "ANIME",      title: "GEEK",       key: "oldschool",  labelImg: null },
    { eyebrow: "ESCRITA",    title: "LETTERING",  key: "polinesio",  labelImg: null },
  ]
  return (
    <section className="gallery" id="tattoos">
      <div className="container">
        <div className="gallery-header">
          <img loading="lazy" decoding="async" src="/images/ESTILOS DE TATTOO.webp" alt="ESTILOS DE TATTOO" style={{ margin: '0 auto 12px', maxWidth: '300px' }} />
          <p style={{ fontSize: '11px', letterSpacing: '0.4em' }}>CONTAMOS COM VÁRIOS ESTILOS ÚNICOS</p>
          <p style={{ color: '#888', fontSize: '12px', marginTop: '12px', fontStyle: 'italic' }}>
            Dica: Clique nas fotos para ver os detalhes
          </p>
        </div>
        <div className="featured-trio" style={{ display: 'block', marginBottom: '80px', textAlign: 'center' }}>
          <img loading="lazy" decoding="async" src="/images/CARD DE TATTOOS.webp" alt="Tattoos em destaque" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>
        {blocks.map((b) => {
          const imgs = g[b.key] || [null, null, null]
          return (
            <div className="style-block" key={b.key}>
              <div className="style-label" style={{ marginBottom: '24px' }}>
                {b.labelImg ? (
                  <img loading="lazy" decoding="async" src={b.labelImg} alt={b.title} style={{ maxWidth: '280px' }} />
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
                    onClick={() => imgs[j] && setSelectedImage(imgs[j])}
                    style={{ cursor: imgs[j] ? 'zoom-in' : 'default' }}>
                    {imgs[j] && (
                      <Image 
                        src={imgs[j]} 
                        alt={`${b.title} tattoo`} 
                        fill 
                        style={{ objectFit: 'cover' }} 
                        sizes="(max-width: 768px) 33vw, 250px"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {selectedImage && typeof document !== 'undefined' && createPortal(
        <div 
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.98)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div style={{ position: 'relative', display: 'flex' }} onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Tattoo Ampliada"
              style={{ 
                maxWidth: '95vw', 
                maxHeight: '90vh', 
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 10px 50px rgba(0,0,0,0.9)'
              }} 
            />
            <button 
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'var(--accent, #ff3d00)',
                border: 'none',
                color: '#fff',
                fontSize: '28px',
                lineHeight: 1,
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                transition: 'transform 0.2s ease-in-out'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              aria-label="Fechar"
            >
              &times;
            </button>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}

// ===== Testimonials =====
export function Testimonials() {
  const cms = siteData
  const videos = cms.testimonials?.videos || []

  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

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
          <img loading="lazy" decoding="async" src="/images/TURISTAS.webp" alt="Depoimentos" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div className="video-row" style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '18px',
          paddingBottom: '8px',
        }}>
          {videos.map((v, i) => {
            const ytId = getYouTubeId(v.url);
            const thumbUrl = v.thumb || (ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : null);
            return (
              <a key={i} href={v.url || '#'} target="_blank" rel="noreferrer" className="video-card" style={{ textDecoration: 'none', flexShrink: 0 }}>
                {thumbUrl ? (
                  <img loading="lazy" decoding="async" src={thumbUrl} className="vc-bg" alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                ) : (
                  <div className="vc-bg" />
                )}
                <div className="vc-tag">
                  <div className="av" />
                  <div className="label">{v.name || `Depoimento ${i + 1}`}<small>Cliente</small></div>
                </div>
                <div className="play"><svg width="22" height="22" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  )
}

// ===== Team =====
export function Team() {
  const cms = siteData
  const t = cms.team
  return (
    <section className="team">
      <div className="container">
        <h2 className="section-title text-center with-lines" style={{ marginBottom: '60px' }}>CONHEÇA NOSSOS ARTISTAS</h2>
        <div className="team-grid">
          <div className="team-copy" style={{ textAlign: 'left' }}>
            <p>{t.col2}</p>
          </div>
          
          <div className="team-lead">
            <p>{t.leadText}</p>
            <div className="team-faces" style={{ position: 'relative', width: '100%', minHeight: '500px' }}>
              {t.teamImage && (
                <Image 
                  src={t.teamImage} 
                  alt="Tatuadores" 
                  fill 
                  style={{ objectFit: 'contain', objectPosition: 'center' }} 
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
              )}
            </div>
          </div>
          
          <div className="team-copy" style={{ textAlign: 'left' }}>
            <p>{t.col3}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===== Map =====
export function MapSection() {
  return (
    <section className="map-section" id="contato">
      <div style={{ width: '100%', height: '500px', margin: '0 auto', overflow: 'hidden' }}>
        <iframe 
          src="https://www.google.com/maps?q=Rota+da+Tattoo,+Av.+Nossa+Sra.+de+Copacabana,+828,+Copacabana,+Rio+de+Janeiro&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
        />
      </div>
    </section>
  )
}

// ===== Reviews =====
export function Reviews() {
  const cms = siteData
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
      <div className="text" dangerouslySetInnerHTML={{ __html: c.text }} />
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

      <div style={{ 
        backgroundColor: 'var(--accent)', 
        padding: '60px 20px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 'clamp(20px, 4vw, 60px)', 
        flexWrap: 'wrap',
        marginTop: '20px'
      }}>
        <h3 style={{ 
          color: '#fff', 
          fontSize: 'clamp(24px, 3.5vw, 36px)', 
          fontWeight: '900', 
          maxWidth: '500px', 
          lineHeight: '1.2', 
          textAlign: 'right',
          margin: 0
        }}>
          Sua pele conta sua história! Vem marcar a próxima com a gente
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ 
            color: '#fff', 
            fontSize: 'clamp(60px, 7vw, 100px)', 
            fontWeight: '900', 
            letterSpacing: '-2px',
            lineHeight: '1'
          }}>
            +1000
          </div>
          <div style={{ 
            color: '#fff', 
            fontSize: 'clamp(14px, 1.5vw, 18px)', 
            fontWeight: '500', 
            maxWidth: '160px', 
            lineHeight: '1.3' 
          }}>
            Depoimentos de 5 estrelas no Google Meu Negócio.
          </div>
        </div>
      </div>
    </section>
  )
}

// ===== Tourists =====
export function Tourists() {
  const cms = siteData
  const t = cms.tourists
  if (!t) return null
  return (
    <section className="tourists" style={{ padding: '60px 0', backgroundColor: '#000' }}>
      <div className="container">
        <div style={{
          backgroundColor: '#111',
          borderRadius: '16px',
          padding: '60px 40px',
          textAlign: 'center',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          border: '1px solid #222',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}>
          {t.flagsImage && (
            <div style={{ marginBottom: '24px' }}>
              <img src={t.flagsImage} alt="Bandeiras" style={{ maxWidth: '300px', height: 'auto', display: 'inline-block' }} loading="lazy" />
            </div>
          )}
          <h3 style={{ 
            color: '#fff', 
            fontSize: 'clamp(16px, 2vw, 24px)', 
            fontWeight: '600',
            letterSpacing: '2px',
            marginBottom: '8px',
            textTransform: 'uppercase'
          }}>
            {t.line1}
          </h3>
          <div style={{ 
            color: '#fff', 
            fontSize: 'clamp(60px, 8vw, 120px)', 
            fontWeight: '900',
            lineHeight: '1',
            marginBottom: '8px',
            fontFamily: 'var(--font-inter), sans-serif'
          }}>
            {t.number}
          </div>
          <div style={{ 
            color: '#fff', 
            fontSize: 'clamp(20px, 3vw, 36px)', 
            fontWeight: '700',
            letterSpacing: '12px',
            textTransform: 'uppercase',
            marginLeft: '12px', // offset for letter spacing centering
            marginBottom: '40px'
          }}>
            {t.line2}
          </div>

          {t.videos && t.videos.length > 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              paddingTop: '40px',
              borderTop: '1px solid #333'
            }}>
              {t.videos.map(videoId => (
                <YouTubeShort key={videoId} videoId={videoId} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function YouTubeShort({ videoId }) {
  const [isPlaying, setIsPlaying] = useState(false)
  
  return (
    <div 
      style={{ position: 'relative', width: '100%', aspectRatio: '9/16', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', backgroundColor: '#000', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
      onClick={() => setIsPlaying(true)}
    >
      {isPlaying ? (
        <iframe 
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`} 
          title="YouTube Short"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
        />
      ) : (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <img 
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} 
            alt="Thumbnail do Vídeo" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, transition: 'opacity 0.3s' }} 
            loading="lazy"
            onMouseOver={(e) => e.currentTarget.style.opacity = 1}
            onMouseOut={(e) => e.currentTarget.style.opacity = 0.8}
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60px', height: '60px', backgroundColor: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
            <div style={{ width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '20px solid white', marginLeft: '6px' }} />
          </div>
        </div>
      )}
    </div>
  )
}

// ===== FAQ =====
export function FAQ() {
  const cms = siteData
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
  const cms = siteData
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
  const cms = siteData
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
  const cms = siteData
  const space = cms.space
  if (!space) return null
  const validImages = space.images?.filter(Boolean) || []
  // Duplicamos a lista para o efeito de loop infinito (-50%)
  const doubledImages = [...validImages, ...validImages]

  return (
    <section className="studio-space">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-title text-center with-lines">Nosso espaço</h2>
        <p className="space-subtitle text-center" dangerouslySetInnerHTML={{ __html: space.subtitle }} />
      </div>
      
      {validImages.length > 0 && (
        <div className="space-marquee-container" style={{ 
          marginTop: '60px',
          width: '100%', 
          overflow: 'hidden', 
          position: 'relative',
          display: 'flex',
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}>
          <div className="space-marquee-track" style={{
            display: 'flex',
            animation: 'marquee-left 40s linear infinite',
            width: 'max-content'
          }}>
            {doubledImages.map((img, i) => (
              <div key={i} style={{
                width: '320px',
                height: '420px',
                flexShrink: 0,
                marginRight: '24px',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                opacity: 0.6,
                transition: 'all 0.6s ease',
                filter: 'grayscale(40%) contrast(1.1) blur(1px)',
                cursor: 'pointer'
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.opacity = 1; 
                e.currentTarget.style.filter = 'grayscale(0%) contrast(1.1) blur(0px)';
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.parentElement.style.animationPlayState = 'paused';
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.opacity = 0.6; 
                e.currentTarget.style.filter = 'grayscale(40%) contrast(1.1) blur(1px)';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.parentElement.style.animationPlayState = 'running';
              }}
              >
                <Image src={img} alt={`Espaço ${i}`} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 80vw, 320px" />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

// ===== Piercing =====
export function Piercing() {
  const cms = siteData
  const s = cms.settings
  const p = cms.piercing
  if (!p) return null
  const waLink = `https://wa.me/${(s.whatsapp || '5521999999999').replace(/\D/g, '')}`
  return (
    <section className="piercing-section" id="piercing">
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
        <div className="piercing-images" style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px', borderRadius: '16px', overflow: 'hidden' }}>
          {p.image && (
            <Image 
              src={p.image} 
              alt="Body Piercing" 
              fill 
              style={{ objectFit: 'cover' }} 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>
      </div>
    </section>
  )
}
