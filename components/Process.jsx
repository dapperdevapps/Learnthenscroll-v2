const ProcessSection = () => {
  const [activePhase, setActivePhase] = React.useState(0);
  const phases = [
    {
      num: '01',
      title: 'Discovery & Scope',
      duration: '45 min',
      desc: 'A 45-minute strategy session to understand your business processes, goals, and pain points. We identify inefficiencies and opportunities for AI-driven automation.',
      bullets: ['Identify key areas for AI enhancement', 'Propose pricing & timeline', 'Assemble necessary tools and team'],
    },
    {
      num: '02',
      title: 'Blueprint & Plan',
      duration: '3 days',
      desc: 'A three-day deep dive to document workflows and integrations, select the first AI employees, and design the architecture on your Intelligence Cloud.',
      bullets: ['Map data, tools, and permissions', 'Define AI employees, KPIs, and guardrails', 'Deliver build plan: scope, timeline, pricing'],
    },
    {
      num: '03',
      title: 'Build & Configure',
      duration: '2 weeks',
      desc: 'A two-week sprint to build your first AI employees. We wire up data sources and tools, set accuracy and permissions, and prep the pilot environment.',
      bullets: ['Stand up AI employees & integrations', 'Configure prompts, policies, and RBAC', 'Connect dashboards for live metrics'],
    },
    {
      num: '04',
      title: 'Pilot & QA',
      duration: '1 week',
      desc: 'A one-week pilot in a production-like environment. We validate accuracy, speed, and edge cases, then iterate fast.',
      bullets: ['Test with real users & data', 'Tune prompts, access, and guardrails', 'Approve launch with success criteria'],
    },
    {
      num: '05',
      title: 'Launch & Operate',
      duration: 'ongoing',
      desc: 'Post-launch, we run your system as a managed service—uptime, updates, and scaling handled—with monthly ROI reviews.',
      bullets: ['Go live on your Intelligence Cloud', 'Monitor, secure & support with SLAs', 'Optimize performance; ship new AI employees'],
    },
  ];

  return (
    <section style={procStyles.section}>
      <div style={procStyles.bgGlow}></div>

      <div style={procStyles.header}>
        <span style={procStyles.label}>● OUR PROCESS</span>
        <h2 style={procStyles.heading}>How we work with you.</h2>
        <p style={procStyles.sub}>Strategy, build, and operations on your Intelligence Cloud. Fast proof, no lock-in.</p>
      </div>

      <div style={procStyles.timeline}>
        {/* Vertical line */}
        <div style={procStyles.line}>
          <div style={{
            ...procStyles.lineProgress,
            height: `${(activePhase / (phases.length - 1)) * 100}%`,
          }}></div>
          <div style={{
            ...procStyles.lineRunner,
            top: `${(activePhase / (phases.length - 1)) * 100}%`,
          }}>
            <div style={procStyles.runnerInner}></div>
          </div>
        </div>

        {phases.map((phase, i) => (
          <PhaseCard
            key={i}
            phase={phase}
            index={i}
            isActive={i === activePhase}
            isPast={i < activePhase}
            onClick={() => setActivePhase(i)}
          />
        ))}
      </div>
    </section>
  );
};

const PhaseCard = ({ phase, index, isActive, isPast, onClick }) => {
  const [hovered, setHovered] = React.useState(false);
  const lit = isActive || hovered;
  const isEven = index % 2 === 0;

  return (
    <div
      style={{
        ...phaseStyles.row,
        flexDirection: isEven ? 'row' : 'row-reverse',
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        ...phaseStyles.card,
        borderColor: lit ? 'rgba(127,255,212,0.3)' : 'rgba(127,255,212,0.08)',
        boxShadow: lit
          ? '0 30px 80px rgba(64,224,208,0.12), inset 0 1px 0 rgba(255,255,255,0.06)'
          : '0 10px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.03)',
        transform: lit ? 'translateY(-2px)' : 'none',
      }}>
        {/* Glossy top */}
        <div style={phaseStyles.gloss}></div>

        <div style={phaseStyles.topRow}>
          <div style={phaseStyles.numBadge}>
            <span style={phaseStyles.numLabel}>PHASE</span>
            <span style={phaseStyles.num}>{phase.num}</span>
          </div>
          <div style={phaseStyles.duration}>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ marginRight: 5 }}>
              <circle cx="5.5" cy="5.5" r="4.5" stroke="#7FFFE3" strokeWidth="1"/>
              <path d="M5.5 3V5.5L7 7" stroke="#7FFFE3" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            {phase.duration}
          </div>
        </div>

        <h3 style={phaseStyles.title}>{phase.title}</h3>
        <p style={phaseStyles.desc}>{phase.desc}</p>
        <ul style={phaseStyles.bullets}>
          {phase.bullets.map((b, j) => (
            <li key={j} style={phaseStyles.bullet}>
              <span style={phaseStyles.bulletDot}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5L4 7L8 3" stroke="#7FFFE3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Node on the timeline */}
      <div style={phaseStyles.nodeWrap}>
        <div style={{
          ...phaseStyles.node,
          background: lit || isPast ? 'linear-gradient(135deg, #7FFFE3, #40E0D0)' : 'rgba(20,40,48,0.8)',
          border: lit || isPast ? '2px solid #7FFFE3' : '2px solid rgba(127,255,212,0.2)',
          boxShadow: lit ? '0 0 30px rgba(127,255,212,0.7), inset 0 1px 0 rgba(255,255,255,0.4)' : 'none',
        }}>
          {(lit || isPast) && (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5L4 7L8 3" stroke="#04181E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
      </div>

      <div style={phaseStyles.spacer}></div>
    </div>
  );
};

const procStyles = {
  section: {
    position: 'relative',
    padding: '120px 64px',
    maxWidth: 1280,
    margin: '0 auto',
  },
  bgGlow: {
    position: 'absolute',
    top: '20%', left: '30%',
    width: 600, height: 600,
    background: 'radial-gradient(circle, rgba(64,224,208,0.06), transparent 70%)',
    filter: 'blur(60px)',
    pointerEvents: 'none',
  },
  header: {
    position: 'relative',
    textAlign: 'center',
    marginBottom: 80,
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
  sub: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 18,
    color: '#a4b5b8',
    margin: 0,
  },
  timeline: {
    position: 'relative',
  },
  line: {
    position: 'absolute',
    left: '50%',
    top: 0, bottom: 0,
    width: 2,
    background: 'rgba(127,255,212,0.08)',
    transform: 'translateX(-50%)',
    borderRadius: 2,
  },
  lineProgress: {
    width: '100%',
    background: 'linear-gradient(to bottom, #7FFFE3, #40E0D0)',
    transition: 'height 0.6s cubic-bezier(0.22,1,0.36,1)',
    borderRadius: 2,
    boxShadow: '0 0 12px rgba(127,255,212,0.5)',
  },
  lineRunner: {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 16, height: 16,
    transition: 'top 0.6s cubic-bezier(0.22,1,0.36,1)',
  },
  runnerInner: {
    width: '100%', height: '100%',
    borderRadius: '50%',
    background: '#7FFFE3',
    boxShadow: '0 0 20px rgba(127,255,212,1), 0 0 40px rgba(127,255,212,0.5)',
    animation: 'pulse 2s ease-in-out infinite',
  },
};

const phaseStyles = {
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 48,
    cursor: 'pointer',
  },
  card: {
    flex: 1,
    position: 'relative',
    background: 'linear-gradient(160deg, rgba(20,40,48,0.7), rgba(8,18,24,0.6))',
    backdropFilter: 'blur(24px) saturate(160%)',
    WebkitBackdropFilter: 'blur(24px) saturate(160%)',
    border: '1px solid rgba(127,255,212,0.08)',
    borderRadius: 20,
    padding: 32,
    transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
    overflow: 'hidden',
  },
  gloss: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: 1,
    background: 'linear-gradient(90deg, transparent, rgba(127,255,212,0.4), transparent)',
  },
  nodeWrap: {
    width: 80,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 32,
    flexShrink: 0,
    position: 'relative',
    zIndex: 2,
  },
  node: {
    width: 28, height: 28,
    borderRadius: '50%',
    transition: 'all 0.4s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: { flex: 1 },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  numBadge: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 8,
  },
  numLabel: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 10, fontWeight: 600,
    letterSpacing: '0.18em',
    color: 'rgba(127,255,212,0.5)',
  },
  num: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 36, fontWeight: 700,
    background: 'linear-gradient(135deg, #7FFFE3, #40E0D0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: 1,
  },
  duration: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11, fontWeight: 500,
    letterSpacing: '0.08em',
    color: '#7FFFE3',
    display: 'flex',
    alignItems: 'center',
    padding: '5px 12px',
    borderRadius: 9999,
    background: 'rgba(127,255,212,0.06)',
    border: '1px solid rgba(127,255,212,0.18)',
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 26, fontWeight: 600,
    color: '#f4f9fa',
    margin: '0 0 12px',
    lineHeight: 1.3,
  },
  desc: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 15, lineHeight: 1.65,
    color: '#a4b5b8',
    margin: '0 0 22px',
  },
  bullets: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  bullet: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 14,
    color: '#dfe8ea',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  bulletDot: {
    width: 20, height: 20,
    borderRadius: '50%',
    background: 'rgba(127,255,212,0.1)',
    border: '1px solid rgba(127,255,212,0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
};

window.ProcessSection = ProcessSection;
