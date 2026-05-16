/* Rota da Tattoo — Components */

// ===== Logo (gothic-style RT monogram) =====
function Logo({ size = 56, color = "#fff" }) {
  // Approximation of blackletter "RT" monogram. The real logo will be swapped in by the user.
  return (
    <svg width={size} height={size * 1.05} viewBox="0 0 100 105" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill={color}>
        {/* outer decorative frame strokes */}
        <path d="M8 18 L12 14 L18 16 L22 12 L26 16 L30 12 L34 16 L38 12 L42 16 L46 12 L50 16 L54 12 L58 16 L62 12 L66 16 L70 12 L74 16 L78 12 L82 16 L86 12 L90 16 L92 18 L92 22 L88 24 L92 26 L92 28" stroke={color} strokeWidth="0" />
        {/* Big R */}
        <path d="M14 28 C14 26, 16 24, 18 24 L42 24 C50 24, 56 28, 56 36 C56 42, 52 46, 46 48 L60 78 C61 80, 60 82, 58 82 L52 82 C50 82, 48 81, 47 79 L36 56 L30 56 L30 78 C30 80, 28 82, 26 82 L18 82 C16 82, 14 80, 14 78 Z M30 36 L30 46 L38 46 C42 46, 44 44, 44 41 C44 38, 42 36, 38 36 Z" />
        {/* Big T overlap */}
        <path d="M44 22 L88 22 C90 22, 92 24, 92 26 L92 32 C92 34, 90 36, 88 36 L74 36 L74 78 C74 80, 72 82, 70 82 L62 82 C60 82, 58 80, 58 78 L58 36 L52 36 L48 26 Z" />
        {/* Drips / serif accents */}
        <path d="M20 82 L24 88 L28 82 Z" />
        <path d="M62 82 L66 90 L70 82 Z" />
        <path d="M14 28 L10 30 L14 34 Z" />
        <path d="M92 28 L96 30 L92 34 Z" />
        {/* small ornament dots */}
        <circle cx="22" cy="20" r="1.6" />
        <circle cx="78" cy="20" r="1.6" />
        <circle cx="50" cy="14" r="2" />
      </g>
    </svg>
  );
}

// ===== "O" stamp for hero title (the diagonal-cut "O") =====
function StampO({ size = "1em" }) {
  // A circular orange "O" with a black diagonal stripe through it — recreating the logo's O.
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
        {/* diagonal cut */}
        <rect x="-10" y="44" width="120" height="12" fill="#000" transform="rotate(-32 50 50)" />
      </g>
    </svg>
  );
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
      {/* mountains — Sugarloaf-ish silhouettes */}
      <path d="M0 380 L80 360 L160 340 L240 300 L320 280 L420 250 L500 280 L580 290 L660 270 L740 290 L800 280 L800 600 L0 600 Z" fill="#0a0a0a" />
      <path d="M280 320 Q340 230, 400 280 Q460 320, 520 290 L520 600 L280 600 Z" fill="#050505" />
      <path d="M520 300 Q580 220, 640 270 Q700 320, 760 290 L760 600 L520 600 Z" fill="#080808" />
      {/* wet sand reflection */}
      <rect y="430" width="800" height="170" fill="url(#seaG)" />
      <ellipse cx="400" cy="500" rx="380" ry="20" fill="#1a1a1a" opacity="0.6" />
      {/* surfer silhouette */}
      <g transform="translate(540, 410)">
        <ellipse cx="0" cy="62" rx="14" ry="3" fill="#000" opacity="0.5" />
        <path d="M-2 0 Q-4 -8 0 -10 Q4 -8 2 0 L4 22 L8 50 L4 60 L-4 60 L-8 50 L-4 22 Z" fill="#000" />
        <path d="M6 8 L26 32 L24 36 L4 14 Z" fill="#000" />
        <path d="M22 20 Q30 8 36 -10 Q38 0 30 30 Z" fill="#000" />
      </g>
      {/* small figure on left */}
      <g transform="translate(440, 420)">
        <ellipse cx="0" cy="50" rx="10" ry="2" fill="#000" opacity="0.4" />
        <path d="M-1 0 Q-3 -6 0 -8 Q3 -6 1 0 L3 18 L6 42 L2 50 L-3 50 L-6 42 L-3 18 Z" fill="#000" />
      </g>
      {/* moonlight on water */}
      <ellipse cx="500" cy="470" rx="140" ry="2" fill="#3a3a3a" opacity="0.4" />
      <ellipse cx="500" cy="480" rx="100" ry="1.5" fill="#2a2a2a" opacity="0.5" />
    </svg>
  );
}

// ===== Header =====
function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="site-header" data-screen-label="00 Header">
      <div className="container nav">
        <a href="#top" aria-label="Rota da Tattoo">
          <Logo size={56} />
        </a>
        <nav>
          <ul className="nav-links">
            <li><a href="#sobre">SOBRE NÓS</a></li>
            <li><a href="#tattoos">TATTOOS</a></li>
            <li><a href="#estudio">O ESTÚDIO</a></li>
            <li><a href="#contato" className="cta">ENTRE EM CONTATO</a></li>
          </ul>
        </nav>
        <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}

// ===== Hero =====
function Hero() {
  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <div className="avatars">
              <div className="av av-1" />
              <div className="av av-2" />
              <div className="av av-3" />
            </div>
            <p>Mais de <strong>3500 Tatuagens</strong> já marcadas na pele.</p>
          </div>

          <h1 className="hero-title display">
            <span className="word-studio">STUDIO</span>
            <span className="word-rota">
              <span className="accent">R</span>
              <span className="stamp-o"><StampO /></span>
              <span className="accent">TA</span>
              <span> DA</span>
            </span>
            <span style={{ display: 'block' }}>TATTOO</span>
          </h1>

          <p className="hero-sub">Tatuagem e Piercing Copacabana</p>

          <a href="#agendar" className="btn-cta">Agende seu horário!</a>
        </div>

        <div className="hero-image">
          <div className="image-slot-ph" />
          <CopacabanaSilhouette />
          <div className="hero-pin">
            <div className="pin-ico">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
            </div>
            <div className="pin-text">
              Av. Nossa Sra. de Copacabana, 828.<br/>
              Copacabana, Rio de Janeiro - RJ, 22050-001
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Styles Strip =====
function StylesStrip() {
  const styles = ["Realismo", "Floral", "Cobertura", "Fine Line", "Polinésio Oriental", "Old School", "Ornamental", "Micro Realismo", "Blackwork", "Pontilismo", "Anime"];
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
  );
}

// ===== About / Referência =====
function About() {
  return (
    <section className="about" id="sobre" data-screen-label="02 Sobre">
      <div className="container about-grid">
        <div className="about-logo">
          <Logo size={180} />
        </div>
        <div className="about-headline">
          <h2 className="display">
            SOMOS<br/>
            REFERÊNCIA <span className="accent">EM</span><br/>
            COPACABANA/RJ
          </h2>
          <p>
            Já são milhares de clientes atendidos ao redor do mundo, levando nossa arte
            para diferentes culturas e histórias. Nossa equipe reúne artistas especializados
            em diversos estilos, garantindo versatilidade e precisão em cada trabalho.
            Somos um estúdio consolidado em Copacabana, reconhecido pela consistência
            e pelo nível dos projetos realizados. Prezamos por um padrão elevado em cada
            detalhe, do primeiro contato ao resultado final na pele. Aqui, cada atendimento é
            pensado para oferecer uma experiência diferenciada.
          </p>
        </div>
      </div>
    </section>
  );
}

// ===== Differentials with Accordion =====
function Differentials() {
  const items = [
    { q: "Contamos com mais de 900 Avaliações positivas", a: "Mais de 900 avaliações 5 estrelas no Google Meu Negócio, reflexo do nosso compromisso com a qualidade e a experiência do cliente." },
    { q: "Studio descomplicado e atendimento humanizado", a: "Da primeira mensagem ao último retoque, você é tratado como pessoa — não como número. Conversamos, ajustamos referências e respeitamos seu tempo." },
    { q: "Cuidados do processo de criação até o de cicatrização", a: "Desenho exclusivo, materiais descartáveis, biossegurança rigorosa e acompanhamento pós-tattoo até a pele estar 100% cicatrizada." },
    { q: "Estúdio com licença sanitária e equipe certificada", a: "Operamos com alvará da vigilância sanitária e toda a equipe possui certificação em biossegurança. Sua saúde e segurança são prioridade absoluta." },
    { q: "Localização premium em Copacabana", a: "Av. Nossa Sra. de Copacabana, 828 — fácil acesso, próximo ao metrô e à orla. Ambiente climatizado e confortável." }
  ];
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <section className="diff" id="estudio" data-screen-label="03 Diferenciais">
      <div className="container diff-grid">
        <div className="diff-image" aria-label="Foto: tatuador em ação (placeholder)" />
        <div className="diff-content">
          <h3>
            A <strong>Rota da Tattoo</strong> é diferenciada pelo
            <span className="display-italic">AMBIENTE ACOLHEDOR</span>
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
  );
}

// ===== Gallery / Estilos =====
function Gallery() {
  const blocks = [
    { eyebrow: "TATTOO", title: "BLACKWORK", tiles: ["ph-skin-1", "ph-skin-2", "ph-skin-3"] },
    { eyebrow: "TATTOO", title: "REALISMO", tiles: ["ph-skin-4", "ph-skin-5", "ph-skin-6"] },
    { eyebrow: "ORNAMENTAL", title: "GEOMÉTRICO", tiles: ["ph-skin-7", "ph-skin-8", "ph-skin-9"] },
    { eyebrow: "TATTOO", title: "FINE LINE", tiles: ["ph-skin-2", "ph-skin-4", "ph-skin-7"] },
    { eyebrow: "TATTOO", title: "OLD SCHOOL", tiles: ["ph-skin-5", "ph-skin-1", "ph-skin-8"] },
    { eyebrow: "TATTOO", title: "POLINÉSIO", tiles: ["ph-skin-3", "ph-skin-6", "ph-skin-9"] },
  ];
  return (
    <section className="gallery" id="tattoos" data-screen-label="04 Galeria">
      <div className="container">
        <div className="gallery-header">
          <p>ESTILOS DE <span className="accent">TATTOO</span></p>
          <p style={{ fontSize: '11px', letterSpacing: '0.4em' }}>CONTAMOS COM VÁRIOS ESTILOS ÚNICOS</p>
        </div>

        <div className="featured-trio">
          <div className="tile ph-skin-1" />
          <div className="tile ph-skin-4" />
          <div className="tile ph-skin-7" />
        </div>

        {blocks.map((b, i) => (
          <div className="style-block" key={i}>
            <div className="style-label">
              <Logo size={32} />
              <div className="text">
                <small>{b.eyebrow}</small>
                <strong>{b.title}</strong>
              </div>
            </div>
            <div className="style-grid">
              {b.tiles.map((t, j) => <div key={j} className={`tile ${t}`} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ===== Testimonials =====
function Testimonials() {
  return (
    <section className="testimonials" data-screen-label="05 Depoimentos">
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
        <h3>
          <span className="accent">Depoimentos</span> dos Brasileiros até os Gringos<br/>
          em volta de todo o mundo!
        </h3>
        <div className="video-row">
          {[{ name: "Josh", role: "Cliente" }, { name: "Franco", role: "Cliente" }].map((v, i) => (
            <div className="video-card" key={i}>
              <div className="vc-bg" />
              <div className="vc-tag">
                <div className="av" />
                <div className="label">
                  Depoimento {v.name}
                  <small>{v.role}</small>
                </div>
              </div>
              <div className="play">
                <svg width="22" height="22" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Team =====
function Team() {
  return (
    <section className="team" data-screen-label="06 Equipe">
      <div className="container team-grid">
        <div className="team-lead">
          <p>
            Juntos os profissionais<br/>
            encontram <span className="accent">mais de 10 anos de</span><br/>
            <span className="accent">experiência</span> no ramo.
          </p>
          <div className="team-faces">
            <div className="face" />
            <div className="face" />
            <div className="face" />
          </div>
        </div>
        <div className="team-copy">
          <p>
            Do moderno detalhado de linhas finas e minimalistas, do colorido vibrante ao preto mais intenso, aqui você encontra <span className="accent">diversidade de estilos e a liberdade de escolher quem melhor representa a sua vibe.</span>
          </p>
          <p>
            Cada um deles possui um estilo próprio, técnica refinada e um olhar sensível para entender o que o cliente realmente quer expressar na pele! Mais do que desenhar, nossos artistas traduzem sentimentos.
          </p>
        </div>
      </div>
    </section>
  );
}

// ===== Map =====
function MapSection() {
  return (
    <section className="map-section" id="contato">
      <div className="container">
        <div className="map-card">
          <div className="map-head">
            <div className="map-ico">
              <Logo size={28} />
            </div>
            <div className="map-info">
              <h4>Rota de Tattoo - Tattoo e Piercing Copacabana</h4>
              <p>Av. Nossa Sra. de Copacabana,<br/>828 - Copacabana, Rio de Janeiro - RJ, 22050-001</p>
              <div className="map-rating"><strong>5,0</strong> ★★★★★ (912)</div>
            </div>
            <div className="actions">
              <span /><span />
            </div>
          </div>
          <div className="map-canvas">
            <div className="roads" />
            <div className="ocean" />
            <div className="pin" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Reviews =====
function Reviews() {
  const cards = [
    { name: "Lucas M.", initials: "LM", time: "Há 2 semanas", text: "Atendimento impecável e resultado incrível. A tatuagem ficou exatamente como eu imaginava. Equipe super atenciosa e ambiente muito limpo. Recomendo demais!" },
    { name: "Carla R.", initials: "CR", time: "Há 1 mês", text: "Melhor estúdio que já fui! O traço é perfeito e o cuidado com a higiene é de outro nível. Voltarei com certeza para fazer minha próxima." },
    { name: "Pedro V.", initials: "PV", time: "Há 3 semanas", text: "Profissionalismo do começo ao fim. Me explicaram cada etapa, do desenho à cicatrização. Vale cada centavo, estou apaixonado pelo resultado." },
  ];
  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews-row">
          {cards.map((c, i) => (
            <div className="review-card" key={i}>
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
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Orange Banner =====
function Banner() {
  return (
    <section className="banner">
      <div className="container banner-grid">
        <div className="banner-left">
          Sua pele conta sua<br/>
          história! Vem marcar a<br/>
          próxima com a gente
        </div>
        <div className="banner-mid">+900</div>
        <div className="banner-right">
          <strong>Depoimentos de 5</strong><br/>
          <strong>estrelas</strong> no Google<br/>
          Meu Negócio.
        </div>
      </div>
    </section>
  );
}

// ===== FAQ =====
function FAQ() {
  const items = [
    { q: "Onde fica o estúdio?", a: "Av. Nossa Sra. de Copacabana, 828 — Copacabana, Rio de Janeiro - RJ, CEP 22050-001. A duas quadras do metrô Cardeal Arcoverde." },
    { q: "Como posso marcar uma tattoo?", a: "Pelo botão 'Agende seu horário', via WhatsApp, ou passando no estúdio. Mande sua referência e a região do corpo que ajustamos data e orçamento." },
    { q: "O estúdio utiliza equipamentos seguros e esterilizados?", a: "Sim — todos os materiais são descartáveis (agulhas, cartuchos, bicos), abertos na sua frente. Superfícies e maquinários passam por desinfecção entre sessões." },
    { q: "Vocês oferecem suporte de cicatrização?", a: "Sim, entregamos um guia de cuidados pós-tattoo e ficamos disponíveis para qualquer dúvida durante o período de cicatrização. Retoque gratuito quando necessário." },
    { q: "Posso levar meu filho ou acompanhante?", a: "Pode sim! Temos um espaço confortável para acompanhantes. Para menores de 18 anos é obrigatória a presença do responsável legal com documento." },
  ];
  const [openIdx, setOpenIdx] = React.useState(-1);
  return (
    <section className="faq">
      <div className="container faq-grid">
        <div className="faq-head">
          <h2>Perguntas <span className="accent">Frequentes!</span></h2>
          <a className="btn-ghost" href="#agendar">Agende seu horário!</a>
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
  );
}

// ===== Footer =====
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="copy">CNPJ 00.000.000/0000-00</div>
        <a href="#top" className="top-link">VOLTAR <span className="accent">PARA O TOPO</span></a>
      </div>
    </footer>
  );
}

// ===== WhatsApp Float =====
function WhatsAppFloat() {
  return (
    <a className="wa-float" href="#" aria-label="WhatsApp">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
        <path d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.88 11.9L4 20l4.22-1.1a7.93 7.93 0 003.83.98h.01a7.94 7.94 0 005.55-13.55zm-5.54 12.2a6.58 6.58 0 01-3.36-.92l-.24-.14-2.5.65.67-2.44-.16-.25a6.6 6.6 0 0110.27-8.1 6.55 6.55 0 011.93 4.67 6.6 6.6 0 01-6.6 6.53zm3.62-4.94c-.2-.1-1.18-.58-1.36-.64-.18-.07-.31-.1-.45.1-.13.2-.5.64-.62.77-.11.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.6-.53-1-1.18-1.12-1.38-.11-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.06-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34l-.39-.01a.74.74 0 00-.54.25c-.18.2-.7.69-.7 1.67 0 .98.72 1.93.82 2.06.1.13 1.42 2.17 3.44 3.05.48.2.85.32 1.14.42.48.15.92.13 1.26.08.39-.06 1.18-.48 1.34-.95.17-.46.17-.86.12-.94-.05-.09-.18-.13-.38-.23z" />
      </svg>
    </a>
  );
}

Object.assign(window, {
  Logo, StampO, CopacabanaSilhouette,
  Header, Hero, StylesStrip, About, Differentials,
  Gallery, Testimonials, Team, MapSection, Reviews,
  Banner, FAQ, Footer, WhatsAppFloat
});
