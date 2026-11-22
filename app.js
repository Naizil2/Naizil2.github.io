const { useState, useEffect, useRef, useLayoutEffect } = React;

/* Settings come from config.js (edit that file, not this one) */
const ME = window.CONFIG;
const NAV = ME.nav;
document.title = ME.siteTitle;
const first = ME.name.split(" ")[0];

/* ====== Chatbot brain (rule-based, runs in the browser) ====== */
const has = (q, ...w) => w.some(x => q.includes(x));
function reply(q) {
  q = q.toLowerCase();
  const c = ME.chat, x0 = ME.experience[0], ed = ME.education[0];
  if (/\b(hi|hello|hey)\b/.test(q)) return c.hello.replace("{first}", first);
  if (has(q,"experience","cognizant","career","intern","company","employer","do you work","current role","what do you do")) return `${first} is a ${x0.role} at ${x0.org} (${x0.period}). Before that: ${ME.experience.slice(1).map(x => x.role).join(", ")}. See the Experience section for details.`;
  if (has(q,"education","college","degree","study","university","school","graduat")) return `${ed.degree} at ${ed.school} (${ed.period}).`;
  if (has(q,"certif","course")) return "Certifications: " + ME.certifications.join(", ") + ".";
  if (has(q,"language","speak")) return "Languages: " + ME.languages.map(l => l[0] + " (" + l[1] + ")").join(", ") + ".";
  if (has(q,"leader","community","sigma","mlsa")) return ME.leadership.map(l => l.t + ": " + l.d).join(" ");
  if (has(q,"project","work","built","portfolio")) return "Selected work: " + ME.projects.map(p => p.t).join(", ") + ". Scroll to the Work section for details!";
  if (has(q,"skill","stack","tech","tools")) return "Main skills: " + ME.skills.join(", ") + ".";
  if (has(q,"hire","available","freelance","job")) return c.hire;
  if (has(q,"contact","email","reach","mail","linkedin")) return `You can reach ${first} at ${ME.email}, or on LinkedIn.`;
  if (has(q,"where","location","city","based")) return `Based in ${ME.city}.`;
  if (has(q,"who","about","yourself")) return ME.bio;
  if (has(q,"thank")) return "Anytime! 🖤";
  return c.fallback;
}

function Reveal({ children, className = "" }) {
  const ref = useRef();
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (ref.current.classList.add("in"), io.disconnect()), { threshold: .15 });
    io.observe(ref.current); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={"reveal " + className}>{children}</div>;
}

function Nav({ theme, toggle }) {
  const [active, setActive] = useState("home");
  const [pill, setPill] = useState({ left: 5, width: 0 });
  const refs = useRef({});
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    NAV.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el); });
    return () => io.disconnect();
  }, []);
  useLayoutEffect(() => {
    const el = refs.current[active];
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active]);
  return (
    <nav className="nav">
      <span className="pill" style={pill} />
      {NAV.map(([id, label]) => (
        <a key={id} href={"#" + id} ref={el => refs.current[id] = el} className={active === id ? "on" : ""}>{label}</a>
      ))}
    </nav>
  );
}

function Typed({ text }) {
  const [n, setN] = useState(0);
  const armed = useRef(true), timer = useRef();
  useEffect(() => {
    const el = document.getElementById("home");
    const play = () => {
      clearTimeout(timer.current); let i = 0; setN(0);
      const step = ME.typingMs / text.length;
      const go = () => { i++; setN(i); if (i < text.length) timer.current = setTimeout(go, step); };
      timer.current = setTimeout(go, 150);
    };
    const io = new IntersectionObserver(es => {
      const e = es[es.length - 1];
      if (!e.isIntersecting) { clearTimeout(timer.current); setN(0); armed.current = true; }
      else if (armed.current && e.intersectionRatio >= .35) { armed.current = false; play(); }
    }, { threshold: [0, .35] });
    io.observe(el);
    return () => { io.disconnect(); clearTimeout(timer.current); };
  }, [text]);
  const f = text.split(" ")[0], k = f.length;
  const a = text.slice(0, Math.min(n, k)), b = text.slice(k + 1, Math.max(k + 1, n));
  return <><b className="gt">{a}</b>{n <= k && <i className="caret" />}<br /><span>{b}</span>{n > k && <i className="caret" />}</>;
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="badge"><i className="dot" /> {ME.badge}</div>
      <h1 aria-label={ME.name}><Typed text={ME.name} /></h1>
      <p className="lead">{ME.heroText}</p>
      <div className="btns">
        <a className="btn" href="#work">View my work ↗</a>
        <a className="btn ghost" href="#contact">Let’s talk</a>
      </div>
      <div className="stats">{ME.stats.map(([n, l]) => <div key={l}><b>{n}</b><span className="mono">{l}</span></div>)}</div>
    </section>
  );
}

function Portrait() {
  const [src, setSrc] = useState(() => { try { return localStorage.getItem("ph") || ME.photo; } catch (e) { return ME.photo; } });
  const ref = useRef();
  const pick = e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => { setSrc(r.result); try { localStorage.setItem("ph", r.result); } catch (x) {} };
    r.readAsDataURL(f);
  };
  const tilt = e => {
    const b = ref.current.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5;
    ref.current.style.transform = "perspective(900px) rotateY(" + x * 9 + "deg) rotateX(" + (-y * 9) + "deg)";
  };
  return (
    <figure className="pf" ref={ref} onMouseMove={tilt} onMouseLeave={() => { ref.current.style.transform = ""; }}>
      <div className="pf-ring" />
      <div className="pf-frame">
        {src ? <img src={src} alt={ME.name} /> : (
          <div className="pf-ph">
            <span className="pf-ini">{ME.name.split(" ")[0][0] + ME.name.split(" ").slice(-1)[0][0]}</span>
            {location.search.includes("edit") && <label className="btn ghost pf-up">Preview a photo<input type="file" accept="image/*" onChange={pick} hidden /></label>}
          </div>
        )}
        <div className="pf-fade" />
        <i className="c tl" /><i className="c tr" /><i className="c bl" /><i className="c br" />
        <figcaption className="pf-cap">
          <div><b>{ME.name}</b><small>{ME.role}</small></div>
          <span className="dot" />
        </figcaption>
      </div>
    </figure>
  );
}

function About() {
  return (
    <section id="about">
      <Reveal>
        <div className="mono">{ME.sections.about[0]}</div>
        <h2>{ME.sections.about[1]}</h2>
        <div className="about"><Portrait />
          <p>{ME.bio} {ME.aboutExtra}</p>
          <div className="tags">{ME.skills.map(s => <span className="tag" key={s}>{s}</span>)}</div>
        </div>
      </Reveal>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <Reveal>
        <div className="mono">{ME.sections.experience[0]}</div>
        <h2>{ME.sections.experience[1]}</h2>
        <div className="xp">
          {ME.experience.map(x => (
            <div className="xp-item" key={x.role + x.period}>
              <div className="xp-head">
                <div><h3>{x.role}</h3><p className="xp-org">{x.org} · {x.place}</p></div>
                <span className="xp-per">{x.period}</span>
              </div>
              <ul>{x.points.map(p => <li key={p[0]}><b>{p[0]}:</b> {p[1]}</li>)}</ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Education() {
  return (
    <section id="education">
      <Reveal>
        <div className="mono">{ME.sections.education[0]}</div>
        <h2>{ME.sections.education[1]}</h2>
        <div className="edu">
          {ME.education.map(e => (
            <div className="xp-item" key={e.school}>
              <span className="xp-per">{e.period}</span>
              <h3>{e.school}</h3><p className="xp-org">{e.degree}</p>
            </div>
          ))}
        </div>
        <h3 className="sub">{ME.labels.certifications}</h3>
        <div className="tags">{ME.certifications.map(c => <span className="tag" key={c}>{c}</span>)}</div>
        <h3 className="sub">{ME.labels.languages}</h3>
        <div className="tags">{ME.languages.map(l => <span className="tag" key={l[0]}>{l[0]} · {l[1]}</span>)}</div>
        <h3 className="sub">{ME.labels.leadership}</h3>
        <div className="edu">
          {ME.leadership.map(l => <div className="xp-item" key={l.t}><h3>{l.t}</h3><p className="xp-org">{l.d}</p></div>)}
        </div>
      </Reveal>
    </section>
  );
}

function Work() {
  const move = e => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--x", e.clientX - r.left + "px"); e.currentTarget.style.setProperty("--y", e.clientY - r.top + "px"); };
  return (
    <section id="work">
      <Reveal>
        <div className="mono">{ME.sections.work[0]}</div>
        <h2>{ME.sections.work[1]}</h2>
        <div className="grid">
          {ME.projects.map((p, i) => (
            <div className="card" key={p.t} onMouseMove={move}>
              <div className="n">0{i + 1}</div>
              <h3>{p.t}</h3><p>{p.d}</p>
              <div className="tags">{p.s.map(s => <span className="tag" key={s}>{s}</span>)}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal>
        <div className="mono">{ME.sections.contact[0]}</div>
        <h2>{ME.sections.contact[1]}</h2>
        <a className="big" href={"mailto:" + ME.email}>{ME.email}</a>
        <div className="socials">{ME.links.map(([n, u]) => <a key={n} className="btn ghost" href={u} target="_blank" rel="noopener">{n} ↗</a>)}</div>
      </Reveal>
    </section>
  );
}

function Chat() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ who: "bot", t: ME.chat.greeting.replace("{name}", ME.name) }]);
  const [val, setVal] = useState("");
  const [typing, setTyping] = useState(false);
  const end = useRef();
  useEffect(() => { end.current && end.current.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing, open]);
  const send = text => {
    text = text.trim(); if (!text || typing) return;
    setMsgs(m => [...m, { who: "me", t: text }]); setVal(""); setTyping(true);
    setTimeout(() => { setMsgs(m => [...m, { who: "bot", t: reply(text) }]); setTyping(false); }, 700 + Math.random() * 500);
  };
  return (
    <>
      {open && (
        <div className="chat" role="dialog" aria-label="Chat assistant">
          <div className="ch"><div className="av">✦</div><div>{ME.chat.title}<small>● online</small></div><button onClick={() => setOpen(false)} aria-label="Close">×</button></div>
          <div className="msgs">
            {msgs.map((m, i) => <div key={i} className={"m " + m.who}>{m.t}</div>)}
            {typing && <div className="m bot typing"><span /><span /><span /></div>}
            <div ref={end} />
          </div>
          <div className="chips">{ME.chat.chips.map(c => <button key={c} onClick={() => send(c)}>{c}</button>)}</div>
          <div className="inp">
            <input value={val} onChange={e => setVal(e.target.value)} onKeyDown={e => e.key === "Enter" && send(val)} placeholder={ME.chat.placeholder} />
            <button onClick={() => send(val)} aria-label="Send">↑</button>
          </div>
        </div>
      )}
      <button className="fab" onClick={() => setOpen(o => !o)}>✦ <span className="t">{open ? "Close" : ME.chat.button}</span></button>
    </>
  );
}

function App() {
  const items = [...ME.skills, ...ME.skills];
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem("th") || ME.defaultTheme; } catch (e) { return ME.defaultTheme; } });
  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem("th", theme); } catch (e) {} }, [theme]);
  const toggle = e => {
    const next = theme === "dark" ? "light" : "dark", d = document.documentElement;
    const apply = () => { d.dataset.theme = next; ReactDOM.flushSync(() => setTheme(next)); };
    if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      d.classList.add("fade"); apply(); setTimeout(() => d.classList.remove("fade"), 800); return;
    }
    const r = e.currentTarget.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(apply).ready.then(() => d.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
      { duration: 800, easing: "cubic-bezier(.4,0,.2,1)", pseudoElement: "::view-transition-new(root)" }
    )).catch(() => {});
  };
  useEffect(() => {
    const r = document.documentElement.style;
    const onS = () => { const y = window.scrollY, h = document.body.scrollHeight - innerHeight; r.setProperty("--sy", y); r.setProperty("--p", h > 0 ? y / h : 0); };
    const onM = e => { r.setProperty("--mx", e.clientX + "px"); r.setProperty("--my", e.clientY + "px"); };
    onS(); addEventListener("scroll", onS, { passive: true }); addEventListener("mousemove", onM);
    return () => { removeEventListener("scroll", onS); removeEventListener("mousemove", onM); };
  }, []);
  return (
    <>
      <div className="aurora"><i /><i /><i /></div><div className="grain" /><div className="prog" />
      <Nav theme={theme} toggle={toggle} />
      <button className="tg" onClick={toggle} role="switch" aria-checked={theme === "light"} aria-label="Toggle light and dark theme">
        <span className="kn" />
        <svg className="ic moon" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" fill="currentColor" /></svg>
        <svg className="ic sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" fill="currentColor" /><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      </button>
      <Hero /><About />
      <div className="marq"><div>{items.map((s, i) => <span key={i}>{s} ✦</span>)}</div></div>
      <Experience /><Work /><Education /><Contact />
      <footer>{ME.footer.replace("{name}", ME.name)}</footer>
      {ME.chat.enabled && <Chat />}
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
