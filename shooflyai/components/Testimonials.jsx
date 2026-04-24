const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'ShooflyAI helped bring Christmas magic to the families of our school district with AI Santa, enhancing our year-end fundraising goals.',
      name: 'Dan Vehar',
      role: 'Marketing',
      company: 'Cobb County Schools',
      date: 'Dec 2024',
      tag: 'AI Avatar',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces',
    },
    {
      quote: 'We have significantly increased our reach using AI avatars and marketing automation with ShooflyAI. We will continue innovating our industry with them by our side.',
      name: 'Chris Lowe',
      role: 'Firm Director',
      company: 'Lowe Law',
      date: 'Jan 2025',
      tag: 'Automation',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces',
    },
    {
      quote: 'We are fascinated by some of the tools ShooflyAI brought us for increasing our catering revenue via AI-enabled email & smart lead strategies.',
      name: 'Jennifer Erdman',
      role: 'Founder',
      company: 'Pochino Italy',
      date: 'Jun 2024',
      tag: 'AI Outreach',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces',
    },
    {
      quote: 'ShooflyAI ignited my passion for AI. Now, their expert guidance enables me to drive innovation across my business, equipping my team with various advanced AI tools.',
      name: 'Walt Geer',
      role: 'President & CEO',
      company: 'PictureU',
      date: 'Nov 2023',
      tag: 'Strategy',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces',
    },
  ];

  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={tStyles.section}>
      <div style={tStyles.header}>
        <span style={tStyles.label}>● TESTIMONIALS</span>
        <h2 style={tStyles.heading}>
          What our clients <span style={tStyles.accent}>achieved.</span>
        </h2>
        <p style={tStyles.sub}>Proof in weeks from systems they own.</p>
      </div>
      <div style={tStyles.grid}>
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} isActive={i === active} onClick={() => setActive(i)} index={i} />
        ))}
      </div>
      <div style={tStyles.dotsRow}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              ...tStyles.dotBtn,
              width: i === active ? 32 : 8,
              background: i === active ? 'linear-gradient(90deg, #7FFFE3, #40E0D0)' : 'rgba(127,255,212,0.2)',
              boxShadow: i === active ? '0 0 12px rgba(127,255,212,0.6)' : 'none',
            }}
          ></button>
        ))}
      </div>
    </section>
  );
};

const TestimonialCard = ({ t, isActive, onClick, index }) => {
  const [hovered, setHovered] = React.useState(false);
  const lit = isActive || hovered;
  const initials = t.name.split(' ').map(n => n[0]).join('');

  // Avatar gradient — all teal/blue/green family
  const gradients = [
    'linear-gradient(135deg, #7FFFE3, #2DB3A8)',
    'linear-gradient(135deg, #5EEAD4, #1A8A9B)',
    'linear-gradient(135deg, #6EE7B7, #2DB3A8)',
    'linear-gradient(135deg, #A8FFE0, #40E0D0)',
  ];

  return (
    <div
      style={{
        ...tCardStyles.card,
        borderColor: lit ? 'rgba(127,255,212,0.3)' : 'rgba(127,255,212,0.08)',
        transform: lit ? 'translateY(-6px)' : 'none',
        boxShadow: lit
          ? '0 30px 80px rgba(64,224,208,0.12), inset 0 1px 0 rgba(255,255,255,0.06)'
          : '0 10px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.03)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Glossy top */}
      <div style={tCardStyles.gloss}></div>

      <div style={tCardStyles.topRow}>
        <div style={tCardStyles.tag}>{t.tag}</div>
        <span style={tCardStyles.date}>{t.date}</span>
      </div>

      <div style={tCardStyles.quoteIcon}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M3 16C3 11 6 7 11 5L12 7C8 8.5 6.5 11 6.5 13H11V22H3V16ZM18 16C18 11 21 7 26 5L27 7C23 8.5 21.5 11 21.5 13H26V22H18V16Z" fill="rgba(127,255,212,0.2)"/>
        </svg>
      </div>

      <p style={tCardStyles.quote}>"{t.quote}"</p>

      <div style={tCardStyles.divider}></div>

      <div style={tCardStyles.author}>
        <div style={{ ...tCardStyles.avatar, background: gradients[index % gradients.length] }}>
          {t.photo ? (
            <img src={t.photo} alt={t.name} style={tCardStyles.avatarImg}/>
          ) : (
            <span>{initials}</span>
          )}
        </div>
        <div>
          <div style={tCardStyles.name}>{t.name}</div>
          <div style={tCardStyles.role}>{t.role} · {t.company}</div>
        </div>
        <div style={tCardStyles.starRow}>
          {[0,1,2,3,4].map(s => (
            <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1L7.4 4.3L11 4.7L8.3 7.1L9.1 10.6L6 8.8L2.9 10.6L3.7 7.1L1 4.7L4.6 4.3L6 1Z" fill="#7FFFE3"/>
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

const tStyles = {
  section: {
    padding: '120px 64px',
    maxWidth: 1280,
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: 64,
  },
  label: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11, fontWeight: 600,
    letterSpacing: '0.16em',
    color: '#7FFFE3',
    display: 'block',
    marginBottom: 16,
  },
  heading: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 56, fontWeight: 600,
    lineHeight: 1.1, letterSpacing: '-0.02em',
    color: '#f4f9fa',
    margin: '0 0 12px',
  },
  accent: {
    background: 'linear-gradient(135deg, #7FFFE3, #4FD1C5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  sub: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 18,
    color: '#a4b5b8',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 24,
  },
  dotsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: 8,
    marginTop: 40,
  },
  dotBtn: {
    height: 8,
    borderRadius: 9999,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    padding: 0,
  },
};

const tCardStyles = {
  card: {
    position: 'relative',
    background: 'linear-gradient(160deg, rgba(20,40,48,0.7), rgba(8,18,24,0.6))',
    backdropFilter: 'blur(24px) saturate(160%)',
    WebkitBackdropFilter: 'blur(24px) saturate(160%)',
    border: '1px solid rgba(127,255,212,0.08)',
    borderRadius: 20,
    padding: 32,
    transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  gloss: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: 1,
    background: 'linear-gradient(90deg, transparent, rgba(127,255,212,0.4), transparent)',
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  tag: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 10, fontWeight: 600,
    letterSpacing: '0.12em',
    color: '#7FFFE3',
    textTransform: 'uppercase',
    padding: '5px 10px',
    borderRadius: 6,
    background: 'rgba(127,255,212,0.08)',
    border: '1px solid rgba(127,255,212,0.18)',
  },
  date: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11, fontWeight: 500,
    letterSpacing: '0.1em',
    color: 'rgba(164,181,184,0.6)',
    textTransform: 'uppercase',
  },
  quoteIcon: {
    marginBottom: 16,
  },
  quote: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 16,
    lineHeight: 1.7,
    color: '#dfe8ea',
    margin: '0 0 24px',
  },
  divider: {
    height: 1,
    background: 'linear-gradient(90deg, rgba(127,255,212,0.2), transparent)',
    marginBottom: 20,
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 44, height: 44,
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 13, fontWeight: 700,
    color: '#04181E',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 4px 14px rgba(64,224,208,0.25)',
    flexShrink: 0,
    overflow: 'hidden',
  },
  avatarImg: {
    width: '100%', height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  name: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 15, fontWeight: 600,
    color: '#f4f9fa',
  },
  role: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 12,
    color: '#a4b5b8',
  },
  starRow: {
    display: 'flex',
    gap: 2,
    marginLeft: 'auto',
  },
};

window.TestimonialsSection = TestimonialsSection;
