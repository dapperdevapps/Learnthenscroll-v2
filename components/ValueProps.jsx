const ValueProps = () => {
  const cards = [
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="4" y="4" width="11" height="11" rx="2.5" stroke="#7FFFE3" strokeWidth="1.5" fill="rgba(127,255,212,0.06)"/>
          <rect x="21" y="4" width="11" height="11" rx="2.5" stroke="#40E0D0" strokeWidth="1.5" fill="rgba(64,224,208,0.06)"/>
          <rect x="4" y="21" width="11" height="11" rx="2.5" stroke="#40E0D0" strokeWidth="1.5" fill="rgba(64,224,208,0.06)"/>
          <rect x="21" y="21" width="11" height="11" rx="2.5" stroke="#A8FFE0" strokeWidth="1.5" fill="rgba(168,255,224,0.1)"/>
          <line x1="15" y1="9.5" x2="21" y2="9.5" stroke="#40E0D0" strokeWidth="1" strokeDasharray="2 2"/>
          <line x1="9.5" y1="15" x2="9.5" y2="21" stroke="#40E0D0" strokeWidth="1" strokeDasharray="2 2"/>
          <line x1="26.5" y1="15" x2="26.5" y2="21" stroke="#40E0D0" strokeWidth="1" strokeDasharray="2 2"/>
          <line x1="15" y1="26.5" x2="21" y2="26.5" stroke="#40E0D0" strokeWidth="1" strokeDasharray="2 2"/>
        </svg>
      ),
      eyebrow: '01',
      title: 'Plug AI Into Your Tools',
      desc: 'Connect finance, sales, and operations in one intelligent layer for real-time clarity and control.',
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="13" stroke="#7FFFE3" strokeWidth="1.5" fill="rgba(127,255,212,0.04)"/>
          <circle cx="18" cy="18" r="8" stroke="#40E0D0" strokeWidth="1" strokeDasharray="3 3"/>
          <path d="M11 21L15 16L20 18L26 11" stroke="#A8FFE0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="26" cy="11" r="2.5" fill="#A8FFE0"/>
          <circle cx="26" cy="11" r="4" stroke="#A8FFE0" strokeWidth="0.5" opacity="0.5"/>
        </svg>
      ),
      eyebrow: '02',
      title: 'Optimize Every Task for ROI',
      desc: 'Deploy adaptive AI workflows that continuously improve accuracy, output, and efficiency across your stack.',
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M8 28V18" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 28V13" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round"/>
          <path d="M22 28V14" stroke="#7FFFE3" strokeWidth="2" strokeLinecap="round"/>
          <path d="M29 28V7" stroke="#A8FFE0" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="29" cy="7" r="2.5" fill="#A8FFE0"/>
          <circle cx="29" cy="7" r="4" stroke="#A8FFE0" strokeWidth="0.5" opacity="0.5"/>
          <line x1="6" y1="30" x2="32" y2="30" stroke="#40E0D0" strokeWidth="0.5" opacity="0.4"/>
        </svg>
      ),
      eyebrow: '03',
      title: 'Scale AI Headcount, Not Physical',
      desc: 'Expand capacity and insight without adding complexity—your infrastructure grows smarter with every workflow.',
    },
  ];

  return (
    <section style={vpStyles.section}>
      <div style={vpStyles.headerRow}>
        <div>
          <span style={vpStyles.headerLabel}>WHY SHOOFLYAI</span>
          <h2 style={vpStyles.headerTitle}>Built for compounding leverage.</h2>
        </div>
        <p style={vpStyles.headerLead}>
          We design AI employees that integrate, optimize, and scale across the systems your business already runs on.
        </p>
      </div>

      <div style={vpStyles.grid}>
        {cards.map((card, i) => (
          <ValueCard key={i} card={card} index={i} />
        ))}
      </div>
    </section>
  );
};

const ValueCard = ({ card, index }) => {
  const [hovered, setHovered] = React.useState(false);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const ref = React.useRef(null);

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x, y });
  };
  const onLeave = () => { setTilt({ x: 0, y: 0 }); setHovered(false); };

  return (
    <div
      ref={ref}
      style={{
        ...vpStyles.card,
        transform: `perspective(1200px) rotateX(${tilt.y * -4}deg) rotateY(${tilt.x * 4}deg) translateY(${hovered ? -6 : 0}px)`,
        borderColor: hovered ? 'rgba(127,255,212,0.3)' : 'rgba(127,255,212,0.08)',
        boxShadow: hovered
          ? '0 30px 80px rgba(64,224,208,0.12), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 60px rgba(64,224,208,0.08)'
          : '0 10px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
    >
      {/* Spotlight that follows mouse */}
      <div style={{
        ...vpStyles.spotlight,
        opacity: hovered ? 1 : 0,
        background: `radial-gradient(circle 200px at ${(tilt.x + 0.5) * 100}% ${(tilt.y + 0.5) * 100}%, rgba(127,255,212,0.14), transparent 70%)`,
      }}></div>

      {/* Glossy top edge */}
      <div style={vpStyles.gloss}></div>

      <div style={vpStyles.cardHeader}>
        <div style={vpStyles.iconWrap}>
          {card.icon}
          <div style={vpStyles.iconHalo}></div>
        </div>
        <span style={vpStyles.eyebrow}>{card.eyebrow}</span>
      </div>

      <h3 style={vpStyles.title}>{card.title}</h3>
      <p style={vpStyles.desc}>{card.desc}</p>

      <div style={vpStyles.cardFooter}>
        <span style={vpStyles.learnMore}>Learn more</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="#7FFFE3" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      <div style={{
        ...vpStyles.glowLine,
        opacity: hovered ? 1 : 0.3,
      }}></div>
    </div>
  );
};

const vpStyles = {
  section: {
    padding: '120px 64px',
    maxWidth: 1280,
    margin: '0 auto',
  },
  headerRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 80,
    alignItems: 'end',
    marginBottom: 64,
  },
  headerLabel: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11, fontWeight: 600,
    letterSpacing: '0.16em',
    color: '#7FFFE3',
    display: 'block',
    marginBottom: 16,
  },
  headerTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 56, fontWeight: 600,
    lineHeight: 1.1, letterSpacing: '-0.02em',
    color: '#f4f9fa',
    margin: 0,
  },
  headerLead: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 17, lineHeight: 1.6,
    color: '#cfdde0',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
  },
  card: {
    position: 'relative',
    background: 'linear-gradient(160deg, rgba(20,40,48,0.7), rgba(8,18,24,0.6))',
    backdropFilter: 'blur(24px) saturate(160%)',
    WebkitBackdropFilter: 'blur(24px) saturate(160%)',
    border: '1px solid rgba(127,255,212,0.08)',
    borderRadius: 20,
    padding: 36,
    transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), border-color 0.4s ease, box-shadow 0.4s ease',
    overflow: 'hidden',
    transformStyle: 'preserve-3d',
  },
  spotlight: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    transition: 'opacity 0.4s',
    borderRadius: 20,
  },
  gloss: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: 1,
    background: 'linear-gradient(90deg, transparent, rgba(127,255,212,0.4), transparent)',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  iconWrap: {
    position: 'relative',
    width: 64, height: 64,
    borderRadius: 16,
    background: 'linear-gradient(135deg, rgba(127,255,212,0.1), rgba(64,224,208,0.04))',
    border: '1px solid rgba(127,255,212,0.18)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
  },
  iconHalo: {
    position: 'absolute',
    inset: -4,
    borderRadius: 18,
    background: 'radial-gradient(circle, rgba(127,255,212,0.15), transparent 70%)',
    filter: 'blur(8px)',
    pointerEvents: 'none',
  },
  eyebrow: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11, fontWeight: 700,
    letterSpacing: '0.18em',
    color: 'rgba(127,255,212,0.5)',
  },
  title: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 22, fontWeight: 600,
    color: '#f4f9fa',
    margin: '0 0 12px',
    lineHeight: 1.3,
  },
  desc: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 15, fontWeight: 400,
    lineHeight: 1.65,
    color: '#a4b5b8',
    margin: '0 0 28px',
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    paddingTop: 20,
    borderTop: '1px solid rgba(127,255,212,0.08)',
  },
  learnMore: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 13, fontWeight: 600,
    color: '#7FFFE3',
  },
  glowLine: {
    position: 'absolute',
    bottom: 0,
    left: '10%',
    width: '80%',
    height: 1,
    background: 'linear-gradient(90deg, transparent, #40E0D0, transparent)',
    transition: 'opacity 0.4s ease',
  },
};

window.ValueProps = ValueProps;
