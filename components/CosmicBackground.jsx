// Cosmic parallax background — multiple layers of stars, nebula clouds, and grid
// All rendered in teal/blue/green palette. Subtle, not overwhelming.
const CosmicBackground = ({ scrollY, mouseX, mouseY }) => {
  // Generate stars deterministically (seeded) so they don't shift on re-render
  const stars = React.useMemo(() => {
    const seed = (n) => { let x = Math.sin(n) * 10000; return x - Math.floor(x); };
    return Array.from({ length: 80 }, (_, i) => ({
      x: seed(i * 1.1) * 100,
      y: seed(i * 2.3) * 100,
      size: seed(i * 3.7) * 1.8 + 0.5,
      opacity: seed(i * 4.1) * 0.6 + 0.2,
      speed: seed(i * 5.3) * 0.4 + 0.1,
      delay: seed(i * 6.7) * 4,
    }));
  }, []);

  const farStars = React.useMemo(() => {
    const seed = (n) => { let x = Math.sin(n + 1000) * 10000; return x - Math.floor(x); };
    return Array.from({ length: 120 }, (_, i) => ({
      x: seed(i * 1.1) * 100,
      y: seed(i * 2.3) * 100,
      size: seed(i * 3.7) * 1.0 + 0.3,
      opacity: seed(i * 4.1) * 0.4 + 0.15,
    }));
  }, []);

  return (
    <div style={cosmicStyles.layer}>
      {/* Layer 1: Far star field — slow parallax */}
      <div style={{
        ...cosmicStyles.fullLayer,
        transform: `translate3d(${(mouseX - 0.5) * 8}px, ${(mouseY - 0.5) * 6 + scrollY * 0.05}px, 0)`,
      }}>
        {farStars.map((s, i) => (
          <div key={`far-${i}`} style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            borderRadius: '50%',
            background: '#A8FFE0',
            opacity: s.opacity,
            boxShadow: `0 0 ${s.size * 2}px rgba(127,255,212,0.5)`,
          }}/>
        ))}
      </div>

      {/* Layer 2: Mid star field — medium parallax with twinkle */}
      <div style={{
        ...cosmicStyles.fullLayer,
        transform: `translate3d(${(mouseX - 0.5) * 18}px, ${(mouseY - 0.5) * 14 + scrollY * 0.12}px, 0)`,
      }}>
        {stars.map((s, i) => (
          <div key={`mid-${i}`} style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size * 1.5,
            height: s.size * 1.5,
            borderRadius: '50%',
            background: i % 5 === 0 ? '#7FFFE3' : '#cfdde0',
            opacity: s.opacity,
            boxShadow: `0 0 ${s.size * 4}px rgba(127,255,212,0.6)`,
            animation: `twinkle ${3 + s.delay}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
          }}/>
        ))}
      </div>

      {/* Layer 3: Nebula cloud — soft teal */}
      <div style={{
        ...cosmicStyles.fullLayer,
        transform: `translate3d(${(mouseX - 0.5) * 30}px, ${(mouseY - 0.5) * 22 + scrollY * 0.18}px, 0)`,
      }}>
        <div style={{
          position: 'absolute',
          left: '60%', top: '20%',
          width: 700, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(64,224,208,0.18) 0%, rgba(64,224,208,0.05) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}/>
        <div style={{
          position: 'absolute',
          left: '5%', top: '55%',
          width: 600, height: 450,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,150,200,0.18) 0%, rgba(0,150,200,0.04) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}/>
        <div style={{
          position: 'absolute',
          left: '40%', top: '70%',
          width: 500, height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(127,255,212,0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}/>
      </div>

      {/* Layer 4: Foreground shooting stars / drift particles */}
      <div style={{
        ...cosmicStyles.fullLayer,
        transform: `translate3d(${(mouseX - 0.5) * 50}px, ${(mouseY - 0.5) * 38 + scrollY * 0.25}px, 0)`,
      }}>
        {[
          { left: '15%', top: '25%', delay: '0s', dur: '8s' },
          { left: '75%', top: '60%', delay: '3s', dur: '10s' },
          { left: '40%', top: '15%', delay: '6s', dur: '9s' },
        ].map((p, i) => (
          <div key={`drift-${i}`} style={{
            position: 'absolute',
            left: p.left, top: p.top,
            width: 2, height: 2,
            borderRadius: '50%',
            background: '#7FFFE3',
            boxShadow: '0 0 12px #7FFFE3, 0 0 24px rgba(127,255,212,0.6)',
            animation: `drift ${p.dur} ease-in-out infinite`,
            animationDelay: p.delay,
          }}/>
        ))}
      </div>

      {/* Vignette overlay to keep contrast in center */}
      <div style={cosmicStyles.vignette}></div>
    </div>
  );
};

const cosmicStyles = {
  layer: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
    zIndex: 0,
  },
  fullLayer: {
    position: 'absolute',
    inset: 0,
    transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
    willChange: 'transform',
  },
  vignette: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse 70% 60% at 50% 40%, transparent 30%, rgba(5,13,20,0.5) 100%)',
    pointerEvents: 'none',
  },
};

window.CosmicBackground = CosmicBackground;
