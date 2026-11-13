import { useEffect, useRef, useState } from 'react';
import FlexCarousel from './components/FlexCarousel';
import { projects, items, skills } from './data';
import './App.css';
 
const B = import.meta.env.BASE_URL;
const story = 'I started with a few lines of Java and a terminal full of asterisks, and I have been chasing that feeling ever since: simple rules producing something with shape. In Principles of Data Science I met the Central Limit Theorem, a bell curve hiding inside chaos, and could not stop thinking about it. Since then I have built a course recommender on a cloud database, studied 211,218 crypto trades against market sentiment, and written a research paper on neural networks for forecasting markets. At PriyaQubit I turned messy data into dashboards that stakeholders could actually read. Now I want to understand why these methods work, not only how to run them.'.split(' ');
const stats = [[8.35, 2, '/10', 'CGPA, First Class'], [8.0, 1, '', 'IELTS band'], [211218, 0, '', 'trades analysed'], [3600, 0, '+', 'courses in one recommender']];
const steps = [
  ['2021', 'ICSE, 94%', 'Java was my first language, and the first program printed a triangle of asterisks.'],
  ['2023', 'ISC, 92.67%', 'Commerce with Maths and Computer Science, then straight into a BCA at Christ University.'],
  ['2025', 'First research paper', 'A CNN, BiLSTM and attention model for financial forecasting, presented at ADSSS 2025.'],
  ['Nov 2025', 'Data Analyst Intern', 'PriyaQubit. SQL, Python, and dashboards in Power BI, Tableau, Looker Studio and Grafana.'],
  ['2026', 'BCA graduate, 8.35 CGPA', 'Eight projects shipped. Next stop: an MSc in Data Science.']
];
 
function Count({ to, dec, suffix }) {
  const ref = useRef(); const [v, setV] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now();
      const tick = t => { const k = Math.min(1, (t - t0) / 1600); setV(to * (1 - Math.pow(1 - k, 4))); if (k < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
    io.observe(ref.current); return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec })}{suffix}</span>;
}
 
export default function App() {
  const [i, setI] = useState(0);
  const p = projects[i];
  useEffect(() => {
    const root = document.documentElement; const scenes = [...document.querySelectorAll('.scene')]; let raf = 0;
    const run = () => {
      raf = 0; const h = innerHeight;
      scenes.forEach(s => { const r = s.getBoundingClientRect(); s.style.setProperty('--p', Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - h))).toFixed(4)); });
      root.style.setProperty('--sp', (scrollY / Math.max(1, document.body.scrollHeight - h)).toFixed(4));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(run); };
    const mm = e => { root.style.setProperty('--mx', e.clientX + 'px'); root.style.setProperty('--my', e.clientY + 'px'); };
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('in')), { threshold: 0.2 });
    document.querySelectorAll('.rv').forEach(n => io.observe(n));
    run(); addEventListener('scroll', on, { passive: true }); addEventListener('resize', on); addEventListener('mousemove', mm);
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); removeEventListener('mousemove', mm); io.disconnect(); };
  }, []);
  return (
    <>
      <i className="bar" />
      <nav className="nav"><b>AR</b><div><a href="#story">Story</a><a href="#journey">Journey</a><a href="#research">Research</a><a href="#work">Work</a><a href="#contact">Contact</a></div></nav>
 
      <section className="scene hero" id="top" style={{ height: '260vh' }}><div className="pin">
        <div className="orb o1" /><div className="orb o2" />
        <p className="eyebrow">Aman Rukhsar · Data Analyst</p>
        <h1>I turn raw data<br />into decisions.</h1>
        <p className="scroll">Scroll ↓</p>
      </div></section>
 
      <section className="scene" id="story" style={{ height: '450vh' }}><div className="pin">
        <p className="words" style={{ '--k': ((story.length * 1.05 + 1) / 0.9).toFixed(1) }}>{story.map((w, k) => <span key={k} style={{ '--i': k }}>{w} </span>)}</p>
      </div></section>
 
      <section className="stats">{stats.map(([n, d, s, l]) => (
        <div className="stat rv" key={l}><strong><Count to={n} dec={d} suffix={s} /></strong><span>{l}</span></div>
      ))}</section>
 
      <section className="scene" id="journey" style={{ height: '520vh' }}><div className="pin col">
        <h2 className="ttl">The journey</h2>
        <div className="track">{steps.map(([y, t, d]) => <article className="card" key={y}><small>{y}</small><h3>{t}</h3><p>{d}</p></article>)}</div>
      </div></section>
 
      <section className="scene" id="research" style={{ height: '300vh' }}><div className="pin split">
        <div className="rtext">
          <p className="eyebrow">Research</p>
          <h2>Teaching a neural network to notice when the market changes mood.</h2>
          <p>My first-author paper combines multi-scale CNNs, BiLSTMs and regime-aware attention gating for financial time series forecasting.</p>
          <div className="nums"><div><strong>R² 0.711</strong><span>specialised single-task model</span></div><div><strong>81.4%</strong><span>accuracy</span></div></div>
        </div>
        <svg className="chart" viewBox="0 0 600 300" aria-label="Illustration of a price series with market regimes">
          {[[0, 200, '#c6ff3d', 0.1], [200, 210, '#ff5c8a', 0.35], [410, 190, '#7c5cff', 0.6]].map(([x, w, c, d]) => <rect key={x} x={x} y="0" width={w} height="300" fill={c} className="band" style={{ '--d': d }} />)}
          <path className="line" pathLength="1" d="M0 220 C40 200 60 240 100 210 S160 120 200 150 S260 260 300 230 S360 90 410 120 S480 200 520 110 S570 60 600 40" />
        </svg>
        <small className="note">Illustrative sketch, not real data.</small>
      </div></section>
 
      <section id="work" className="work">
        <h2>Selected work</h2>
        <p className="hint">Drag, scroll or use the arrow keys. Click the centre card to zoom.</p>
        <div className="stage"><FlexCarousel items={items} preset="liquid" intro="rise" cardHeight={0.5} fit="landscape" gap={12} onChange={setI} /></div>
        <div className="info" key={i}><p>{p.desc}</p><a className="btn small" href={p.url} target="_blank" rel="noreferrer">View project ↗</a></div>
      </section>
 
      <div className="marquee"><div>{[...skills, ...skills].map((s, k) => <span key={k}>{s}</span>)}</div></div>
 
      <footer id="contact" className="contact">
        <h2 className="rv">Let's build something<br />with data.</h2>
        <div className="links rv">
          <a className="btn" href={`${B}Aman_Rukhsar_Resume.pdf`} target="_blank" rel="noreferrer">Download resume</a>
          <a href="mailto:aman.rukhsar.19@gmail.com">Email</a><a href="https://www.linkedin.com/in/aman-rukhsar/">LinkedIn</a><a href="https://github.com/Whirls19?tab=repositories">GitHub</a>
        </div>
        <small>© 2026 Aman Rukhsar</small>
      </footer>
    </>
  );
}
 
