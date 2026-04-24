const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'About', 'Services', 'Resources', 'Case Studies', 'Contact'];

  return (
    <nav style={{
      ...navStyles.bar,
      background: scrolled ? 'rgba(8,18,24,0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px) saturate(160%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(160%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(64,224,208,0.08)' : '1px solid transparent',
      boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.3)' : 'none',
    }}>
      <div style={navStyles.inner}>
        <a href="#" style={navStyles.logo}>
          <img src="assets/shoofly-logo-full.png" alt="ShooflyAI" style={navStyles.logoImg}/>
        </a>
        <div style={navStyles.links}>
          {links.map(link => (
            <NavLink key={link} label={link} active={link === 'Home'} />
          ))}
        </div>
        <button
          style={navStyles.cta}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(64,224,208,0.5), inset 0 0 20px rgba(64,224,208,0.1)';
            e.currentTarget.style.background = 'rgba(64,224,208,0.12)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = '0 0 0 rgba(64,224,208,0)';
            e.currentTarget.style.background = 'rgba(64,224,208,0.04)';
          }}
        >Free AI Audit</button>
      </div>
    </nav>
  );
};

const NavLink = ({ label, active }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href="#"
      style={{
        ...navStyles.link,
        color: hovered || active ? '#7FFFE3' : '#cfdde0',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      <span style={{
        ...navStyles.linkUnderline,
        transform: (hovered || active) ? 'scaleX(1)' : 'scaleX(0)',
      }}></span>
    </a>
  );
};

const navStyles = {
  bar: {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
    padding: '0 64px',
  },
  inner: {
    maxWidth: 1280, margin: '0 auto',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    height: 76,
  },
  logo: { display: 'flex', alignItems: 'center', textDecoration: 'none' },
  logoImg: { height: 36, width: 'auto', display: 'block', filter: 'drop-shadow(0 0 12px rgba(64,224,208,0.25))' },
  links: { display: 'flex', gap: 36 },
  link: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 14, fontWeight: 500,
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    position: 'relative',
    paddingBottom: 4,
  },
  linkUnderline: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    height: 1,
    background: 'linear-gradient(90deg, #40E0D0, #80FFCC)',
    transformOrigin: 'left',
    transition: 'transform 0.3s ease',
    boxShadow: '0 0 8px rgba(64,224,208,0.6)',
  },
  cta: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 14, fontWeight: 600,
    padding: '11px 26px',
    borderRadius: '9999px',
    border: '1px solid rgba(64,224,208,0.4)',
    background: 'rgba(64,224,208,0.04)',
    color: '#7FFFE3',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  },
};

window.Navbar = Navbar;
