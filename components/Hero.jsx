const HeroSection = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0.5, y: 0.5 });
  const [scrollY, setScrollY] = React.useState(0);
  const heroRef = React.useRef(null);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={heroRef} style={heroStyles.wrapper}>
      {/* Cosmic parallax universe — replaces flat aurora */}
      <CosmicBackground scrollY={scrollY} mouseX={mousePos.x} mouseY={mousePos.y} />

      {/* Subtle aurora highlights */}
      <div style={{
        ...heroStyles.aurora,
        background: 'radial-gradient(ellipse 800px 600px at 70% 30%, rgba(64,224,208,0.16) 0%, transparent 60%)',
        transform: `translate3d(${mousePos.x * -30}px, ${mousePos.y * -20 + scrollY * 0.2}px, 0)`,
      }}></div>
      <div style={{
        ...heroStyles.aurora,
        background: 'radial-gradient(ellipse 700px 500px at 20% 70%, rgba(0,150,200,0.32) 0%, transparent 60%)',
        transform: `translate3d(${mousePos.x * 25}px, ${mousePos.y * 15 + scrollY * 0.15}px, 0)`,
      }}></div>
      <div style={{
        ...heroStyles.aurora,
        background: 'radial-gradient(ellipse 500px 400px at 50% 50%, rgba(127,255,212,0.16) 0%, transparent 60%)',
        transform: `translate3d(${mousePos.x * 15}px, ${mousePos.y * -25 + scrollY * 0.1}px, 0)`,
      }}></div>

      {/* Floating glass orb (right) */}
      <div style={{
        ...heroStyles.glassOrb,
        transform: `translate(${(mousePos.x - 0.5) * -40}px, ${(mousePos.y - 0.5) * -30 + scrollY * 0.1}px)`,
      }}>
        <div style={heroStyles.glassOrbInner}></div>
        <div style={heroStyles.glassOrbHighlight}></div>
      </div>

      {/* Floating glass cube (left) */}
      <div style={{
        ...heroStyles.glassCube,
        transform: `translate(${(mousePos.x - 0.5) * 25}px, ${(mousePos.y - 0.5) * 20 + scrollY * 0.05}px) rotate(${scrollY * 0.05}deg)`,
      }}></div>

      {/* HUD frames */}
      <div style={{ ...heroStyles.hudCorner, top: 100, left: 40 }}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path d="M0 20V0H20" stroke="rgba(64,224,208,0.4)" strokeWidth="1"/>
          <circle cx="6" cy="6" r="2" fill="#40E0D0"/>
        </svg>
      </div>
      <div style={{ ...heroStyles.hudCorner, top: 100, right: 40 }}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path d="M64 20V0H44" stroke="rgba(64,224,208,0.4)" strokeWidth="1"/>
          <circle cx="58" cy="6" r="2" fill="#40E0D0"/>
        </svg>
      </div>
      <div style={{ ...heroStyles.hudCorner, bottom: 40, left: 40 }}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path d="M0 44V64H20" stroke="rgba(64,224,208,0.4)" strokeWidth="1"/>
        </svg>
      </div>
      <div style={{ ...heroStyles.hudCorner, bottom: 40, right: 40 }}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path d="M64 44V64H44" stroke="rgba(64,224,208,0.4)" strokeWidth="1"/>
        </svg>
      </div>

      <div style={{
        ...heroStyles.content,
        transform: `translateY(${scrollY * -0.15}px)`,
        opacity: Math.max(0, 1 - scrollY / 600),
      }}>
        <div style={heroStyles.labelRow}>
          <span style={heroStyles.labelDotPulse}></span>
          <span style={heroStyles.label}>AI-POWERED OPERATIONS</span>
          <span style={heroStyles.labelDivider}></span>
          <span style={heroStyles.labelSub}>ENTERPRISE READY</span>
        </div>

        <h1 style={heroStyles.heading}>
          Add AI Employees Into<br/>
          <span style={heroStyles.headingAccent}>
            Your Operations
            <svg style={heroStyles.underlineSvg} viewBox="0 0 600 12" preserveAspectRatio="none">
              <path d="M2 8 Q 150 2, 300 6 T 598 8" stroke="url(#underlineGrad)" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <defs>
                <linearGradient id="underlineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#40E0D0" stopOpacity="0"/>
                  <stop offset="50%" stopColor="#7FFFE3"/>
                  <stop offset="100%" stopColor="#40E0D0" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <p style={heroStyles.subtext}>
          Integrate AI across finance, sales, and operations to optimize workflows,
          improve efficiency, and scale capacity without adding physical resources.
        </p>

        <div style={heroStyles.ctaRow}>
          <GlossButton primary>Book Your Strategy Call</GlossButton>
          <GlossButton>Free AI Audit →</GlossButton>
        </div>

        <div style={heroStyles.statsRow}>
          {[
            { num: '12+', label: 'AI Employees Deployed' },
            { num: '4 wk', label: 'To First Pilot' },
            { num: '60%', label: 'Avg Workflow Speedup' },
            { num: '100%', label: 'Data Ownership' },
          ].map((s, i) => (
            <div key={i} style={heroStyles.stat}>
              <div style={heroStyles.statNum}>{s.num}</div>
              <div style={heroStyles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div style={heroStyles.bottomFade}></div>
    </section>
  );
};

const GlossButton = ({ children, primary }) => {
  const [hovered, setHovered] = React.useState(false);
  const base = primary ? heroStyles.primaryBtn : heroStyles.secondaryBtn;
  return (
    <button
      style={{
        ...base,
        boxShadow: hovered
          ? (primary
              ? '0 0 50px rgba(64,224,208,0.55), 0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)'
              : '0 0 30px rgba(64,224,208,0.25), inset 0 1px 0 rgba(255,255,255,0.06)')
          : (primary
              ? '0 0 25px rgba(64,224,208,0.3), inset 0 1px 0 rgba(255,255,255,0.3)'
              : 'inset 0 1px 0 rgba(255,255,255,0.04)'),
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        background: hovered && !primary ? 'rgba(64,224,208,0.1)' : base.background,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>
      {primary && <div style={heroStyles.btnGloss}></div>}
    </button>
  );
};

const heroStyles = {
  wrapper: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '140px 64px 100px',
  },
  aurora: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
    willChange: 'transform',
  },
  glassOrb: {
    position: 'absolute',
    top: '15%',
    right: '8%',
    width: 280, height: 280,
    borderRadius: '50%',
    background: 'radial-gradient(circle at 30% 30%, rgba(127,255,212,0.18), rgba(64,224,208,0.06) 60%, transparent 80%)',
    backdropFilter: 'blur(40px) saturate(180%)',
    WebkitBackdropFilter: 'blur(40px) saturate(180%)',
    border: '1px solid rgba(127,255,212,0.18)',
    boxShadow: 'inset 0 2px 40px rgba(127,255,212,0.15), 0 30px 80px rgba(64,224,208,0.15)',
    transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
    animation: 'floatY 8s ease-in-out infinite',
    pointerEvents: 'none',
  },
  glassOrbInner: {
    position: 'absolute',
    top: '15%', left: '15%',
    width: '40%', height: '40%',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.4), transparent 70%)',
    filter: 'blur(8px)',
  },
  glassOrbHighlight: {
    position: 'absolute',
    top: '8%', right: '20%',
    width: '20%', height: '8%',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.6)',
    filter: 'blur(6px)',
  },
  glassCube: {
    position: 'absolute',
    bottom: '15%',
    left: '6%',
    width: 140, height: 140,
    borderRadius: 24,
    background: 'linear-gradient(135deg, rgba(64,224,208,0.22), rgba(0,180,200,0.08))',
    backdropFilter: 'blur(30px) saturate(180%)',
    WebkitBackdropFilter: 'blur(30px) saturate(180%)',
    border: '1px solid rgba(127,255,212,0.2)',
    boxShadow: 'inset 0 2px 30px rgba(127,255,212,0.12), 0 20px 60px rgba(64,224,208,0.18)',
    transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
    animation: 'floatY 10s ease-in-out infinite reverse',
    pointerEvents: 'none',
  },
  hudCorner: { position: 'absolute', zIndex: 2, opacity: 0.7 },
  content: {
    position: 'relative',
    zIndex: 3,
    maxWidth: 980,
    textAlign: 'center',
    transition: 'opacity 0.3s',
  },
  labelRow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '8px 16px',
    borderRadius: 9999,
    background: 'rgba(127,255,212,0.06)',
    border: '1px solid rgba(127,255,212,0.18)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    marginBottom: 32,
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 20px rgba(64,224,208,0.08)',
  },
  labelDotPulse: {
    width: 6, height: 6, borderRadius: '50%',
    background: '#7FFFE3',
    boxShadow: '0 0 12px #7FFFE3',
    animation: 'pulse 1.6s ease-in-out infinite',
  },
  label: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11, fontWeight: 600,
    letterSpacing: '0.16em',
    color: '#7FFFE3',
  },
  labelDivider: {
    width: 1, height: 12,
    background: 'rgba(127,255,212,0.3)',
  },
  labelSub: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11, fontWeight: 600,
    letterSpacing: '0.16em',
    color: 'rgba(127,255,212,0.6)',
  },
  heading: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 84, fontWeight: 700,
    lineHeight: 1.05, letterSpacing: '-0.035em',
    color: '#f4f9fa',
    margin: '0 0 28px',
    textShadow: '0 4px 40px rgba(64,224,208,0.15)',
  },
  headingAccent: {
    background: 'linear-gradient(135deg, #7FFFE3 0%, #40E0D0 40%, #4FD1C5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    position: 'relative',
    display: 'inline-block',
  },
  underlineSvg: {
    position: 'absolute',
    bottom: -6, left: 0, right: 0,
    width: '100%',
    height: 12,
    overflow: 'visible',
  },
  subtext: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 19, fontWeight: 400,
    lineHeight: 1.6,
    color: '#cfdde0',
    maxWidth: 680,
    margin: '0 auto 44px',
  },
  ctaRow: {
    display: 'flex', gap: 16,
    justifyContent: 'center', flexWrap: 'wrap',
    marginBottom: 80,
  },
  primaryBtn: {
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Manrope', sans-serif",
    fontSize: 16, fontWeight: 600,
    padding: '16px 36px',
    borderRadius: '9999px',
    border: '1px solid rgba(127,255,212,0.4)',
    background: 'linear-gradient(135deg, #40E0D0 0%, #2DB3A8 60%, #1A8A9B 100%)',
    color: '#04181E',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  btnGloss: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: '50%',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0.32), transparent)',
    pointerEvents: 'none',
    borderRadius: '9999px 9999px 0 0',
  },
  secondaryBtn: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 16, fontWeight: 600,
    padding: '16px 36px',
    borderRadius: '9999px',
    border: '1px solid rgba(127,255,212,0.3)',
    background: 'rgba(127,255,212,0.03)',
    color: '#7FFFE3',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: 60,
    flexWrap: 'wrap',
    paddingTop: 48,
    borderTop: '1px solid rgba(127,255,212,0.1)',
    maxWidth: 800,
    margin: '0 auto',
  },
  stat: { textAlign: 'center' },
  statNum: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 32, fontWeight: 700,
    background: 'linear-gradient(135deg, #7FFFE3, #40E0D0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11, fontWeight: 500,
    letterSpacing: '0.12em',
    color: '#849aa0',
    textTransform: 'uppercase',
  },
  bottomFade: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    height: 200,
    background: 'linear-gradient(to bottom, transparent, #050d14)',
    pointerEvents: 'none',
    zIndex: 1,
  },
};

window.HeroSection = HeroSection;
