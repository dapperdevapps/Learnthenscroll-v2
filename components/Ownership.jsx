const OwnershipSection = () => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <section style={ownStyles.section}>
      {/* Background image */}
      <div style={ownStyles.bgImage}></div>
      <div style={ownStyles.bgGrid}></div>

      <div style={ownStyles.inner}>
        <div style={ownStyles.left}>
          <span style={ownStyles.label}>● INTELLIGENCE CLOUD</span>
          <h2 style={ownStyles.heading}>
            You own the intelligence.<br/>
            <span style={ownStyles.dim}>We operate the cloud.</span>
          </h2>
          <p style={ownStyles.body}>
            Strategy → Build → Manage on the Shoofly Intelligence Cloud.
            You own the data, models, and IP; we manage and secure the cloud.
          </p>
          <ul style={ownStyles.list}>
            {[
              'Your data, models & IP — never ours.',
              'Enterprise-grade security & RBAC.',
              'No lock-in. Migrate anytime.',
            ].map((item, i) => (
              <li key={i} style={ownStyles.listItem}>
                <span style={ownStyles.checkmark}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7L6 10L11 4" stroke="#7FFFE3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <button
            style={{
              ...ownStyles.btn,
              boxShadow: hovered
                ? '0 0 50px rgba(64,224,208,0.45), 0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)'
                : '0 0 25px rgba(64,224,208,0.25), inset 0 1px 0 rgba(255,255,255,0.3)',
              transform: hovered ? 'translateY(-2px)' : 'none',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Learn More
            <span style={{ marginLeft: 8 }}>→</span>
          </button>
        </div>
        <div style={ownStyles.right}>
          <div style={ownStyles.diagram}>
            {/* Outer dashed ring */}
            <div style={ownStyles.diagramRing2}></div>
            {/* Mid solid ring */}
            <div style={ownStyles.diagramRing}></div>
            {/* Inner glow */}
            <div style={ownStyles.diagramInnerGlow}></div>

            {/* Connecting SVG lines */}
            <svg style={ownStyles.connectorSvg} viewBox="0 0 360 360" fill="none">
              <defs>
                <linearGradient id="connGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7FFFE3" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#40E0D0" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <line x1="180" y1="60" x2="180" y2="180" stroke="url(#connGrad)" strokeWidth="1" strokeDasharray="3 3"/>
              <line x1="80" y1="260" x2="180" y2="180" stroke="url(#connGrad)" strokeWidth="1" strokeDasharray="3 3"/>
              <line x1="280" y1="260" x2="180" y2="180" stroke="url(#connGrad)" strokeWidth="1" strokeDasharray="3 3"/>
            </svg>

            {/* Core */}
            <div style={ownStyles.diagramCore}>
              <div style={ownStyles.coreInner}>
                <img src="assets/shoofly-icon.png" alt="" style={{ width: 56, height: 56, filter: 'drop-shadow(0 0 12px rgba(127,255,212,0.5))' }}/>
              </div>
              <div style={ownStyles.coreRotor}></div>
            </div>

            {[
              { label: 'Strategy', sub: 'discover & scope', top: '8%', left: '50%', delay: '0s' },
              { label: 'Build', sub: 'configure & ship', top: '70%', left: '15%', delay: '0.4s' },
              { label: 'Manage', sub: 'operate & scale', top: '70%', left: '85%', delay: '0.8s' },
            ].map((node, i) => (
              <div key={i} style={{
                ...ownStyles.diagramNode,
                top: node.top, left: node.left,
                animationDelay: node.delay,
              }}>
                <div style={ownStyles.nodeDot}></div>
                <span style={ownStyles.nodeLabel}>{node.label}</span>
                <span style={ownStyles.nodeSub}>{node.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ownStyles = {
  section: {
    position: 'relative',
    padding: '120px 64px',
    maxWidth: 1280,
    margin: '0 auto',
    overflow: 'hidden',
  },
  bgImage: {
    position: 'absolute',
    top: '50%', right: '-10%',
    transform: 'translateY(-50%)',
    width: 700, height: 700,
    background: 'radial-gradient(circle, rgba(64,224,208,0.08) 0%, transparent 60%)',
    filter: 'blur(40px)',
    pointerEvents: 'none',
  },
  bgGrid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(rgba(127,255,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(127,255,212,0.04) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    maskImage: 'radial-gradient(ellipse 50% 60% at 70% 50%, black 30%, transparent 80%)',
    WebkitMaskImage: 'radial-gradient(ellipse 50% 60% at 70% 50%, black 30%, transparent 80%)',
    pointerEvents: 'none',
  },
  inner: {
    position: 'relative',
    zIndex: 2,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 80,
    alignItems: 'center',
  },
  left: {},
  label: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11, fontWeight: 600,
    letterSpacing: '0.16em',
    color: '#7FFFE3',
    display: 'block',
    marginBottom: 20,
  },
  heading: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 56, fontWeight: 600,
    lineHeight: 1.1, letterSpacing: '-0.025em',
    color: '#f4f9fa',
    margin: '0 0 24px',
  },
  dim: {
    background: 'linear-gradient(135deg, #7FFFE3, #4FD1C5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  body: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 18, lineHeight: 1.65,
    color: '#cfdde0',
    margin: '0 0 28px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 36px',
  },
  listItem: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 15,
    color: '#cfdde0',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 14,
  },
  checkmark: {
    width: 22, height: 22,
    borderRadius: '50%',
    background: 'rgba(127,255,212,0.1)',
    border: '1px solid rgba(127,255,212,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  btn: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 15, fontWeight: 600,
    padding: '14px 32px',
    borderRadius: '9999px',
    border: '1px solid rgba(127,255,212,0.4)',
    background: 'linear-gradient(135deg, #40E0D0 0%, #2DB3A8 60%, #1A8A9B 100%)',
    color: '#04181E',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
  },
  right: {
    display: 'flex',
    justifyContent: 'center',
  },
  diagram: {
    position: 'relative',
    width: 420, height: 420,
  },
  diagramRing: {
    position: 'absolute',
    top: '50%', left: '50%',
    transform: 'translate(-50%,-50%)',
    width: 220, height: 220,
    borderRadius: '50%',
    border: '1px solid rgba(127,255,212,0.18)',
    animation: 'spinSlow 25s linear infinite',
    boxShadow: '0 0 30px rgba(64,224,208,0.1) inset',
  },
  diagramRing2: {
    position: 'absolute',
    top: '50%', left: '50%',
    transform: 'translate(-50%,-50%)',
    width: 360, height: 360,
    borderRadius: '50%',
    border: '1px dashed rgba(127,255,212,0.12)',
    animation: 'spinSlow 40s linear infinite reverse',
  },
  diagramInnerGlow: {
    position: 'absolute',
    top: '50%', left: '50%',
    transform: 'translate(-50%,-50%)',
    width: 160, height: 160,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(127,255,212,0.18), transparent 70%)',
    filter: 'blur(20px)',
  },
  connectorSvg: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
  },
  diagramCore: {
    position: 'absolute',
    top: '50%', left: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: 3,
    width: 120, height: 120,
  },
  coreInner: {
    width: '100%', height: '100%',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 30% 30%, rgba(127,255,212,0.3), rgba(64,224,208,0.1) 60%, rgba(8,18,24,0.8))',
    border: '1px solid rgba(127,255,212,0.4)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'inset 0 2px 30px rgba(127,255,212,0.18), 0 20px 60px rgba(64,224,208,0.25)',
  },
  coreRotor: {
    position: 'absolute',
    top: -6, left: -6, right: -6, bottom: -6,
    borderRadius: '50%',
    border: '1px solid transparent',
    borderTopColor: '#7FFFE3',
    borderRightColor: 'rgba(127,255,212,0.3)',
    animation: 'spinSlow 8s linear infinite',
  },
  diagramNode: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(20,40,48,0.7)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(127,255,212,0.25)',
    borderRadius: 14,
    padding: '10px 18px',
    zIndex: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.3)',
    animation: 'floatY 6s ease-in-out infinite',
  },
  nodeDot: {
    width: 4, height: 4,
    borderRadius: '50%',
    background: '#7FFFE3',
    boxShadow: '0 0 8px #7FFFE3',
    marginBottom: 2,
  },
  nodeLabel: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 13, fontWeight: 600,
    color: '#f4f9fa',
  },
  nodeSub: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 9, fontWeight: 500,
    letterSpacing: '0.12em',
    color: 'rgba(127,255,212,0.6)',
    textTransform: 'uppercase',
  },
};

window.OwnershipSection = OwnershipSection;
