import React, { useState, useEffect } from 'react';
import { loadCMSData, saveCMSData, uploadImage, DEFAULT_DATA } from './cms';

const S = {
  wrap: { background: '#0a0a0a', minHeight: '100vh', color: '#fff', fontFamily: 'Inter, sans-serif', padding: '0 0 80px' },
  topbar: { background: '#111', borderBottom: '1px solid #222', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', position: 'sticky', top: 0, zIndex: 100 },
  logo: { fontWeight: 900, fontSize: '18px', color: '#ff3d00', letterSpacing: '0.05em' },
  saveBtn: { background: '#ff3d00', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 28px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' },
  saveOk: { background: '#1a7a1a', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 28px', fontWeight: 700, fontSize: '15px', cursor: 'default' },
  saveErr: { background: '#7a1a1a', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 28px', fontWeight: 700, fontSize: '15px', cursor: 'default' },
  back: { color: '#888', fontSize: '13px', textDecoration: 'none', marginRight: '20px' },
  main: { maxWidth: '860px', margin: '0 auto', padding: '40px 20px 0' },
  section: { background: '#141414', border: '1px solid #222', borderRadius: '12px', padding: '28px', marginBottom: '24px' },
  title: { fontWeight: 800, fontSize: '15px', marginBottom: '20px', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '10px' },
  label: { display: 'block', fontSize: '11px', color: '#777', marginBottom: '5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em' },
  input: { width: '100%', padding: '10px 14px', background: '#1c1c1c', border: '1px solid #2a2a2a', color: '#fff', borderRadius: '8px', fontSize: '14px', marginBottom: '14px', outline: 'none', boxSizing: 'border-box', transition: 'border 0.2s' },
  textarea: { width: '100%', padding: '10px 14px', background: '#1c1c1c', border: '1px solid #2a2a2a', color: '#fff', borderRadius: '8px', fontSize: '14px', marginBottom: '14px', outline: 'none', boxSizing: 'border-box', minHeight: '90px', resize: 'vertical', fontFamily: 'Inter, sans-serif' },
  divider: { border: 'none', borderTop: '1px solid #1e1e1e', margin: '18px 0' },
  row: { display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '14px' },
  thumb: { width: '68px', height: '68px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #2a2a2a', background: '#111', flexShrink: 0 },
  uploadBtn: { display: 'inline-block', padding: '7px 14px', background: '#222', border: '1px solid #333', color: '#ccc', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', marginBottom: '6px', transition: 'background 0.2s' },
  accItem: { background: '#1a1a1a', border: '1px solid #252525', borderRadius: '8px', padding: '16px', marginBottom: '10px' },
  badge: { background: '#ff3d00', color: '#fff', fontSize: '10px', fontWeight: 800, padding: '2px 8px', borderRadius: '20px', letterSpacing: '0.05em' },
  galGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '10px' },
  status: { fontSize: '12px', color: '#888', marginTop: '8px' },
};

function ImageField({ label, value, onChange }) {
  const [uploading, setUploading] = useState(false);
  const [err, setErr] = useState('');

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true); setErr('');
    try {
      const url = await uploadImage(file);
      onChange(url);
    } catch (ex) {
      setErr('Erro ao enviar. Verifique se o servidor CMS está rodando.');
    }
    setUploading(false);
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={S.label}>{label}</label>
      <div style={S.row}>
        {value ? (
          <img src={value} style={S.thumb} alt="" onError={e => e.target.style.opacity = '0.2'} />
        ) : (
          <div style={{ ...S.thumb, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444', fontSize: '11px' }}>sem imagem</div>
        )}
        <div style={{ flex: 1 }}>
          <input style={{ ...S.input, marginBottom: '8px' }} placeholder="URL da imagem" value={value || ''} onChange={e => onChange(e.target.value)} />
          <label style={S.uploadBtn}>
            {uploading ? '⏳ Enviando...' : '📁 Upload para Vercel Blob'}
            <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFile} disabled={uploading} />
          </label>
          {err && <div style={{ color: '#f55', fontSize: '11px', marginTop: '4px' }}>{err}</div>}
        </div>
      </div>
    </div>
  );
}

export default function Admin() {
  const [form, setForm] = useState(DEFAULT_DATA);
  const [status, setStatus] = useState('idle'); // idle | saving | saved | error
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCMSData().then(d => { setForm(d); setLoading(false); });
  }, []);

  const update = (path, value) => {
    const keys = path.split('.');
    setForm(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      let ref = next;
      for (let i = 0; i < keys.length - 1; i++) ref = ref[keys[i]];
      ref[keys[keys.length - 1]] = value;
      return next;
    });
    setStatus('idle');
  };

  const updateGallery = (style, idx, value) => {
    setForm(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      if (!next.gallery[style]) next.gallery[style] = [null, null, null];
      next.gallery[style][idx] = value;
      return next;
    });
    setStatus('idle');
  };

  const updateAccordion = (idx, field, value) => {
    setForm(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      next.differentials.items[idx][field] = value;
      return next;
    });
    setStatus('idle');
  };

  const updateVideo = (idx, field, value) => {
    setForm(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      next.testimonials.videos[idx][field] = value;
      return next;
    });
    setStatus('idle');
  };

  const addVideo = () => {
    setForm(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      next.testimonials.videos.push({ url: '#', thumb: '', name: `Depoimento ${next.testimonials.videos.length + 1}` });
      return next;
    });
    setStatus('idle');
  };

  const removeVideo = (idx) => {
    setForm(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      next.testimonials.videos.splice(idx, 1);
      return next;
    });
    setStatus('idle');
  };

  const handleSave = async () => {
    setStatus('saving');
    try {
      await saveCMSData(form);
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (e) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const saveBtnStyle = status === 'saved' ? S.saveOk : status === 'error' ? S.saveErr : S.saveBtn;
  const saveBtnText = { idle: 'Salvar Alterações', saving: '⏳ Salvando...', saved: '✓ Salvo no Blob!', error: '✗ Erro ao salvar' }[status];

  if (loading) return (
    <div style={{ ...S.wrap, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: '#ff3d00', fontSize: '18px' }}>⏳ Carregando dados do Vercel Blob...</div>
    </div>
  );

  return (
    <div style={S.wrap}>
      <div style={S.topbar}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="/" style={S.back}>← Voltar ao site</a>
          <span style={S.logo}>CMS — Rota da Tattoo</span>
        </div>
        <button onClick={handleSave} disabled={status === 'saving'} style={saveBtnStyle}>{saveBtnText}</button>
      </div>

      <div style={S.main}>

        {/* Configurações gerais */}
        <div style={S.section}>
          <div style={S.title}>⚙️ Configurações Gerais</div>
          <label style={S.label}>Número do WhatsApp (só números: 5521999999999)</label>
          <input style={S.input} value={form.settings.whatsapp} onChange={e => update('settings.whatsapp', e.target.value)} />
          <label style={S.label}>Texto do botão CTA</label>
          <input style={S.input} value={form.settings.ctaText} onChange={e => update('settings.ctaText', e.target.value)} />
        </div>

        {/* Hero */}
        <div style={S.section}>
          <div style={S.title}>🖼️ Seção Inicial (Hero)</div>
          <ImageField label="Imagem principal (lado direito)" value={form.hero.mainImage} onChange={v => update('hero.mainImage', v)} />
          <hr style={S.divider} />
          <label style={S.label}>Texto do banner</label>
          <textarea style={S.textarea} value={form.hero.bannerText} onChange={e => update('hero.bannerText', e.target.value)} />
          <hr style={S.divider} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            <ImageField label="Card 001" value={form.hero.card1} onChange={v => update('hero.card1', v)} />
            <ImageField label="Card 002" value={form.hero.card2} onChange={v => update('hero.card2', v)} />
            <ImageField label="Card 003" value={form.hero.card3} onChange={v => update('hero.card3', v)} />
          </div>
        </div>

        {/* Sobre nós */}
        <div style={S.section}>
          <div style={S.title}>📝 Sobre Nós</div>
          <label style={S.label}>Texto descritivo</label>
          <textarea style={{ ...S.textarea, minHeight: '130px' }} value={form.about.paragraph} onChange={e => update('about.paragraph', e.target.value)} />
        </div>

        {/* Diferenciais */}
        <div style={S.section}>
          <div style={S.title}>🏆 Diferenciais</div>
          <ImageField label="Imagem lateral esquerda" value={form.differentials.sideImage} onChange={v => update('differentials.sideImage', v)} />
          <hr style={S.divider} />
          <label style={S.label}>Itens do acordeon</label>
          {form.differentials.items.map((item, idx) => (
            <div key={idx} style={S.accItem}>
              <div style={{ ...S.label, color: '#ff3d00', marginBottom: '10px' }}>Item {idx + 1}</div>
              <label style={S.label}>Título</label>
              <input style={S.input} value={item.q} onChange={e => updateAccordion(idx, 'q', e.target.value)} />
              <label style={S.label}>Descrição</label>
              <textarea style={{ ...S.textarea, minHeight: '60px' }} value={item.a} onChange={e => updateAccordion(idx, 'a', e.target.value)} />
            </div>
          ))}
        </div>

        {/* Galeria */}
        <div style={S.section}>
          <div style={S.title}>🎨 Galeria de Tatuagens</div>
          <p style={{ color: '#555', fontSize: '13px', marginBottom: '20px' }}>Adicione até 3 fotos por estilo. As imagens são enviadas direto ao Vercel Blob.</p>
          {[
            { key: 'blackwork', label: 'Blackwork' },
            { key: 'realismo', label: 'Realismo' },
            { key: 'geometrico', label: 'Ornamental Geométrico' },
            { key: 'fineline', label: 'Fine Line' },
            { key: 'oldschool', label: 'Old School' },
            { key: 'polinesio', label: 'Polinésio' },
          ].map(({ key, label }) => (
            <div key={key} style={{ marginBottom: '24px' }}>
              <div style={{ ...S.label, marginBottom: '10px' }}><span style={S.badge}>{label}</span></div>
              <div style={S.galGrid}>
                {[0, 1, 2].map(idx => (
                  <ImageField key={idx} label={`Foto ${idx + 1}`} value={(form.gallery[key] || [])[idx] || ''} onChange={v => updateGallery(key, idx, v)} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div style={S.section}>
          <div style={S.title}>🎥 Depoimentos (Vídeos)</div>
          <p style={{ color: '#555', fontSize: '13px', marginBottom: '20px' }}>Adicione quantos vídeos quiser. Cole o link do YouTube, Instagram Reels, TikTok, etc.</p>

          {(form.testimonials.videos || []).map((video, idx) => (
            <div key={idx} style={{ ...S.accItem, position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ ...S.label, color: '#ff3d00', margin: 0 }}><span style={S.badge}>Vídeo {idx + 1}</span></div>
                <button onClick={() => removeVideo(idx)} style={{ background: 'transparent', border: '1px solid #444', color: '#888', borderRadius: '6px', padding: '4px 12px', cursor: 'pointer', fontSize: '12px' }}>Remover</button>
              </div>
              <label style={S.label}>Nome (ex: Depoimento Josh)</label>
              <input style={S.input} value={video.name || ''} onChange={e => updateVideo(idx, 'name', e.target.value)} />
              <label style={S.label}>Link do vídeo (YouTube, Instagram, TikTok...)</label>
              <input style={S.input} placeholder="https://..." value={video.url || ''} onChange={e => updateVideo(idx, 'url', e.target.value)} />
              <ImageField label="Capa (thumbnail)" value={video.thumb || ''} onChange={v => updateVideo(idx, 'thumb', v)} />
            </div>
          ))}

          <button onClick={addVideo} style={{ display: 'block', width: '100%', padding: '14px', background: 'transparent', border: '2px dashed #333', color: '#666', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', marginTop: '8px', transition: 'all 0.2s' }}
            onMouseOver={e => { e.target.style.borderColor = '#ff3d00'; e.target.style.color = '#ff3d00'; }}
            onMouseOut={e => { e.target.style.borderColor = '#333'; e.target.style.color = '#666'; }}>
            + Adicionar Vídeo
          </button>
        </div>

        <button onClick={handleSave} disabled={status === 'saving'} style={{ ...saveBtnStyle, width: '100%', padding: '16px', fontSize: '16px' }}>
          {saveBtnText}
        </button>

        {/* Equipe */}
        <div style={S.section}>
          <div style={S.title}>👥 Seção Equipe</div>
          <ImageField label="Foto da equipe (imagem dos tatuadores)" value={form.team?.teamImage} onChange={v => update('team.teamImage', v)} />
          <label style={S.label}>Texto principal (coluna esquerda)</label>
          <textarea style={S.textarea} value={form.team?.leadText || ''} onChange={e => update('team.leadText', e.target.value)} />
          <label style={S.label}>Texto coluna 2</label>
          <textarea style={S.textarea} value={form.team?.col2 || ''} onChange={e => update('team.col2', e.target.value)} />
          <label style={S.label}>Texto coluna 3</label>
          <textarea style={S.textarea} value={form.team?.col3 || ''} onChange={e => update('team.col3', e.target.value)} />
        </div>

        {/* Avaliações */}
        <div style={S.section}>
          <div style={S.title}>⭐ Avaliações Google</div>
          <p style={{ color: '#555', fontSize: '13px', marginBottom: '20px' }}>Edite os cards de avaliação exibidos no site.</p>
          {(form.reviews || []).map((r, idx) => (
            <div key={idx} style={S.accItem}>
              <div style={{ ...S.label, color: '#ff3d00', marginBottom: '10px' }}>Avaliação {idx + 1}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={S.label}>Nome</label>
                  <input style={S.input} value={r.name || ''} onChange={e => {
                    const next = JSON.parse(JSON.stringify(form));
                    next.reviews[idx].name = e.target.value;
                    next.reviews[idx].initials = e.target.value.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
                    setForm(next); setStatus('idle');
                  }} />
                </div>
                <div>
                  <label style={S.label}>Tempo (ex: Há 2 semanas)</label>
                  <input style={S.input} value={r.time || ''} onChange={e => {
                    const next = JSON.parse(JSON.stringify(form));
                    next.reviews[idx].time = e.target.value;
                    setForm(next); setStatus('idle');
                  }} />
                </div>
              </div>
              <label style={S.label}>Texto da avaliação</label>
              <textarea style={{ ...S.textarea, minHeight: '70px' }} value={r.text || ''} onChange={e => {
                const next = JSON.parse(JSON.stringify(form));
                next.reviews[idx].text = e.target.value;
                setForm(next); setStatus('idle');
              }} />
            </div>
          ))}
        </div>

        {/* Banner laranja */}
        <div style={S.section}>
          <div style={S.title}>🟠 Banner Laranja</div>
          <ImageField label="Imagem do Banner (+900 Avaliações)" value={form.banner?.image} onChange={v => update('banner.image', v)} />
          <label style={S.label}>Texto do banner (use &lt;b&gt; para negrito e &lt;br/&gt; para quebra de linha)</label>
          <textarea style={{ ...S.textarea, minHeight: '80px' }} value={form.banner?.text || ''} onChange={e => update('banner.text', e.target.value)} />
        </div>

        {/* FAQ */}
        <div style={S.section}>
          <div style={S.title}>❓ Perguntas Frequentes (FAQ)</div>
          {(form.faq || []).map((item, idx) => (
            <div key={idx} style={S.accItem}>
              <div style={{ ...S.label, color: '#ff3d00', marginBottom: '10px' }}>Pergunta {idx + 1}</div>
              <label style={S.label}>Pergunta</label>
              <input style={S.input} value={item.q || ''} onChange={e => {
                const next = JSON.parse(JSON.stringify(form));
                next.faq[idx].q = e.target.value;
                setForm(next); setStatus('idle');
              }} />
              <label style={S.label}>Resposta</label>
              <textarea style={{ ...S.textarea, minHeight: '70px' }} value={item.a || ''} onChange={e => {
                const next = JSON.parse(JSON.stringify(form));
                next.faq[idx].a = e.target.value;
                setForm(next); setStatus('idle');
              }} />
            </div>
          ))}
        </div>

        {/* Rodapé */}
        <div style={S.section}>
          <div style={S.title}>📄 Rodapé</div>
          <label style={S.label}>CNPJ</label>
          <input style={S.input} value={form.footer?.cnpj || ''} onChange={e => update('footer.cnpj', e.target.value)} />
        </div>

        <button onClick={handleSave} disabled={status === 'saving'} style={{ ...saveBtnStyle, width: '100%', padding: '16px', fontSize: '16px' }}>
          {saveBtnText}
        </button>
      </div>
    </div>
  );
}
