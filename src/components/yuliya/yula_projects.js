import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import s from "../../styles/comps/yuliya/yula_projects.module.css";

const PASSWORD = "yula2025"; // change this anytime

// ── add your projects here ──────────────────────────────────────────────────
const PROJECTS = [
  {
    name: "77 reasons",
    tag: "made with love 🌸",
    desc: "77 reasons why you are perfect. Every single one of them true.",
    link: "/yula1",
  },
  {
    name: "memory lane",
    tag: "just for us 📺",
    desc: "A cozy virtual living room made just for us. Pull a little journal off the wooden shelves to turn on the TV and flip through our favorite polaroids and sweet moments together.",
    link: "/yula2",
  },
  {
    name: "project three",
    tag: "coming soon 🌷",
    desc: "Another little thing in the works.",
    link: null,
  },
  {
    name: "project four",
    tag: "coming soon 🌷",
    desc: "More to come, always.",
    link: null,
  },
];
// ───────────────────────────────────────────────────────────────────────────

function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [shake, setShake] = useState(false);
  const [unlocking, setUnlocking] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const attempt = () => {
    if (value === PASSWORD) {
      setUnlocking(true);
      sessionStorage.setItem("yula_unlocked", "true");
      setTimeout(onUnlock, 600);
    } else {
      setShake(true);
      setValue("");
      setTimeout(() => setShake(false), 500);
    }
  };

  const onKey = (e) => e.key === "Enter" && attempt();

  return (
    <div className={`${s.gate}${unlocking ? ` ${s.gateOut}` : ""}`}>
      <div className={s.gateInner}>
        <span className={s.gateFlower}>🌸</span>
        <h1 className={s.gateTitle}>just for you</h1>
        <p className={s.gateSub}>enter the password to get in</p>
        <div className={`${s.gateInputWrap}${shake ? ` ${s.gateShake}` : ""}`}>
          <input
            ref={inputRef}
            className={s.gateInput}
            type="password"
            placeholder="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKey}
            autoComplete="off"
          />
          <button className={s.gateBtn} onClick={attempt}>↗</button>
        </div>
      </div>
    </div>
  );
}

function Modal({ project, index, onClose }) {
  const visible = project !== null;

  useEffect(() => {
    if (!visible) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, onClose]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

  if (!project) return null;

  const num = String(index + 1).padStart(2, "0");

  return (
    <>
      <div
        className={`${s.backdrop}${visible ? ` ${s.backdropVisible}` : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`${s.modal}${visible ? ` ${s.modalVisible}` : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
      >
        <div className={s.modalHandle} />
        <div className={s.modalMeta}>
          <p className={s.modalEyebrow}>project {num}</p>
          <span className={s.modalTag}>{project.tag}</span>
        </div>
        <span className={s.modalNum} aria-hidden="true">{num}</span>
        <h2 className={s.modalTitle}>{project.name}</h2>
        <p className={s.modalDesc}>{project.desc}</p>
        <div className={s.modalActions}>
          {project.link ? (
            <Link className={s.modalLink} to={project.link} onClick={onClose}>
              open it ↗
            </Link>
          ) : (
            <span className={s.modalLink} style={{ opacity: 0.5, cursor: "default" }}>
              coming soon
            </span>
          )}
          <button className={s.modalClose} onClick={onClose}>
            ✕ close
          </button>
        </div>
      </div>
    </>
  );
}

export default function YulaProjects() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem("yula_unlocked") === "true"
  );
  const [active, setActive] = useState(null);

  const open = (i) => setActive(i);
  const close = () => setActive(null);
  const activeProject = active !== null ? PROJECTS[active] : null;

  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />;

  return (
    <section className={s.wrap}>
      <header className={s.hero}>
        <p className={s.heroEyebrow}>🌸 made just for you</p>
        <h1 className={s.heroTitle}>
          everything<br />
          made <em>for you</em>
        </h1>
        <p className={s.heroSub}>
          little things i made, all yours. tap any to open it.
        </p>
      </header>

      <ul className={s.grid} role="list">
        {PROJECTS.map((project, i) => (
          <li key={i}>
            <button
              className={s.card}
              style={{ animationDelay: `${0.08 + i * 0.08}s` }}
              onClick={() => open(i)}
              aria-haspopup="dialog"
            >
              <span className={s.cardBg} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={s.cardNum}>{String(i + 1).padStart(2, "0")}</span>
              <span className={s.cardName}>{project.name}</span>
            </button>
          </li>
        ))}
      </ul>

      <footer className={s.footer}>
        <span className={s.footerFlower}>🌷</span>
        <p className={s.footerText}>more coming, always</p>
      </footer>

      <Modal project={activeProject} index={active ?? 0} onClose={close} />
    </section>
  );
}