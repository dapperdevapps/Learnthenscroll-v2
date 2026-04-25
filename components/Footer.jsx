const FooterSection = () => {
  return (
    <footer style={footStyles.footer}>
      {/* CTA Banner */}
      <div style={footStyles.ctaBanner}>
        <div style={footStyles.ctaOrb}></div>
        <div style={footStyles.ctaOrb2}></div>
        <div style={footStyles.ctaGrid}></div>
        <div style={footStyles.ctaContent}>
          <span style={footStyles.ctaTag}>● START YOUR JOURNEY</span>
          <h2 style={footStyles.ctaHeading}>
            AI you own.<br/>
            <span style={footStyles.ctaAccent}>ROI in weeks.</span>
          </h2>
          <p style={footStyles.ctaSub}>Book a strategy call and walk away with a clear AI roadmap for your business.</p>
          <div style={footStyles.ctaBtns}>
            <CtaButton primary>Book Your Strategy Call</CtaButton>
            <CtaButton>Free AI Audit →</CtaButton>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div style={footStyles.grid}>
        <div>
          <a href="#" style={footStyles.brandRow}>
            <img src="assets/shoofly-logo-full.png" alt="ShooflyAI" style={{ height: 32 }}/>
          </a>
          <p style={footStyles.brandDesc}>AI employees for your operations. You own the intelligence.</p>
          <div style={footStyles.socialRow}>
            {[
              { name: 'X', d: 'M2 2L18 18M18 2L2 18' },
              { name: 'IN', d: 'M3 7V17M3 3.5V3.5M8 17V11C8 9 10 9 10 11V17M14 17V11C14 9 16 9 16 11V17' },
              { name: 'YT', d: 'M2 6C2 5 3 4 4 4H16C17 4 18 5 18 6V14C18 15 17 16 16 16H4C3 16 2 15 2 14V6Z M8 7L13 10L8 13V7Z' },
            ].map(s => (
              <a key={s.name} href="#" style={footStyles.socialBtn}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d={s.d} stroke="#7FFFE3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={footStyles.colTitle}>Company</h4>
          {['Home', 'About', 'Services', 'Resources', 'Case Studies'].map(l => (
            <a key={l} href="#" style={footStyles.fLink}>{l}</a>
          ))}
        </div>

        <div>
          <h4 style={footStyles.colTitle}>Solutions</h4>
          {['AI Voice Assistant', 'AI Avatars', 'AI Email Automation', 'Marketing Automation', 'Smart Lead Strategy'].map(l => (
            <a key={l} href="#" style={footStyles.fLink}>{l}</a>
          ))}
        </div>

        <div>
          <h4 style={footStyles.colTitle}>Contact</h4>
          <a href="mailto:info@shooflyai.com" style={footStyles.fLink}>info@shooflyai.com</a>
          <a href="tel:6785179652" style={footStyles.fLink}>(678) 517-9652</a>
          <h4 style={{ ...footStyles.colTitle, marginTop: 24 }}>Legal</h4>
          <a href="#" style={footStyles.fLink}>Privacy Policy</a>
          <a href="#" style={footStyles.fLink}>Terms of Use</a>
        </div>
      </div>

      <div style={footStyles.bottom}>
        <span style={footStyles.copy}>© 2026 Shoofly AI. All Rights Reserved.</span>
        <span style={footStyles.copyRight}>Built with intelligence on the Shoofly Cloud.</span>
      </div>
    </footer>
  );
};

const CtaButton = ({ children, primary }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <button
      style={{
        ...(primary ? footStyles.ctaBtnPrimary : footStyles.ctaBtnSecondary),
        boxShadow: hovered
          ? (primary
              ? '0 0 50px rgba(64,224,208,0.55), 0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)'
              : '0 0 30px rgba(64,224,208,0.25), inset 0 1px 0 rgba(255,255,255,0.06)')
          : (primary
              ? '0 0 25px rgba(64,224,208,0.3), inset 0 1px 0 rgba(255,255,255,0.3)'
              : 'inset 0 1px 0 rgba(255,255,255,0.04)'),
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>
      {primary && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '50%',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.32), transparent)',
          pointerEvents: 'none',
          borderRadius: '9999px 9999px 0 0',
        }}></div>
      )}
    </button>
  );
};

const footStyles = {
  footer: {
    padding: '0 64px 40px',
    maxWidth: 1280,
    margin: '0 auto',
  },
  ctaBanner: {
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, rgba(64,224,208,0.10), rgba(20,40,48,0.6))',
    border: '1px solid rgba(127,255,212,0.18)',
    borderRadius: 28,
    padding: '90px 64px',
    textAlign: 'center',
    marginBottom: 100,
    backdropFilter: 'blur(20px) saturate(160%)',
    WebkitBackdropFilter: 'blur(20px) saturate(160%)',
    boxShadow: 'inset 0 1px 0 rgba(127,255,212,0.15), 0 30px 80px rgba(0,0,0,0.3)',
  },
  ctaOrb: {
    position: 'absolute',
    width: 500, height: 500,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(127,255,212,0.18) 0%, transparent 70%)',
    filter: 'blur(50px)',
    top: '-30%', right: '-10%',
    pointerEvents: 'none',
    animation: 'floatY 12s ease-in-out infinite',
  },
  ctaOrb2: {
    position: 'absolute',
    width: 400, height: 400,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(64,224,208,0.15) 0%, transparent 70%)',
    filter: 'blur(50px)',
    bottom: '-30%', left: '-5%',
    pointerEvents: 'none',
    animation: 'floatY 14s ease-in-out infinite reverse',
  },
  ctaGrid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(rgba(127,255,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(127,255,212,0.04) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    maskImage: 'radial-gradient(ellipse 60% 80% at 50% 50%, black 30%, transparent 80%)',
    WebkitMaskImage: 'radial-gradient(ellipse 60% 80% at 50% 50%, black 30%, transparent 80%)',
    pointerEvents: 'none',
  },
  ctaContent: {
    position: 'relative',
    zIndex: 2,
  },
  ctaTag: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11, fontWeight: 600,
    letterSpacing: '0.16em',
    color: '#7FFFE3',
    display: 'block',
    marginBottom: 20,
  },
  ctaHeading: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 64, fontWeight: 700,
    color: '#f4f9fa',
    margin: '0 0 20px',
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
  },
  ctaAccent: {
    background: 'linear-gradient(135deg, #7FFFE3 0%, #40E0D0 50%, #4FD1C5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  ctaSub: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 17,
    color: '#cfdde0',
    margin: '0 auto 36px',
    maxWidth: 520,
    lineHeight: 1.6,
  },
  ctaBtns: {
    display: 'flex',
    justifyContent: 'center',
    gap: 16,
    flexWrap: 'wrap',
  },
  ctaBtnPrimary: {
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Manrope', sans-serif",
    fontSize: 16, fontWeight: 600,
    padding: '16px 40px',
    borderRadius: '9999px',
    border: '1px solid rgba(127,255,212,0.4)',
    background: 'linear-gradient(135deg, #40E0D0 0%, #2DB3A8 60%, #1A8A9B 100%)',
    color: '#04181E',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  ctaBtnSecondary: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 16, fontWeight: 600,
    padding: '16px 40px',
    borderRadius: '9999px',
    border: '1px solid rgba(127,255,212,0.3)',
    background: 'rgba(127,255,212,0.03)',
    color: '#7FFFE3',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: 48,
    paddingBottom: 48,
    borderBottom: '1px solid rgba(127,255,212,0.08)',
  },
  brandRow: {
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: 16,
    textDecoration: 'none',
  },
  brandDesc: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 14, lineHeight: 1.6,
    color: '#a4b5b8',
    margin: '0 0 24px',
    maxWidth: 280,
  },
  socialRow: {
    display: 'flex',
    gap: 10,
  },
  socialBtn: {
    width: 38, height: 38,
    borderRadius: '50%',
    background: 'rgba(127,255,212,0.04)',
    border: '1px solid rgba(127,255,212,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  },
  colTitle: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11, fontWeight: 600,
    letterSpacing: '0.16em',
    color: '#7FFFE3',
    textTransform: 'uppercase',
    margin: '0 0 18px',
  },
  fLink: {
    display: 'block',
    fontFamily: "'Manrope', sans-serif",
    fontSize: 14,
    color: '#a4b5b8',
    textDecoration: 'none',
    marginBottom: 11,
    transition: 'color 0.2s',
  },
  bottom: {
    paddingTop: 32,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 16,
  },
  copy: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 13,
    color: 'rgba(164,181,184,0.6)',
  },
  copyRight: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 12,
    letterSpacing: '0.08em',
    color: 'rgba(127,255,212,0.4)',
  },
};

window.FooterSection = FooterSection;
