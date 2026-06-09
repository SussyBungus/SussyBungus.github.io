import { useState, useEffect } from "react";
import "../styles/yula1.css";

// ── edit your reasons here ──────────────────────────────────────────────────
const REASONS = [
  "You make every room feel warmer just by being in it",
  "Your laugh is genuinely contagious — it's impossible not to smile",
  "You care so deeply about the people you love, even when you don't say it",
  "You're stronger than you ever give yourself credit for",
  "The way your eyes light up when you talk about things you love",
  "You always know exactly what to say — or when to say nothing at all",
  "You find beauty in the small, ordinary moments others walk right past",
  "You've grown so much, and you don't even see how far you've come",
  "You make ordinary days feel like something worth remembering",
  "Simply because you are you — and that's more than enough",
];

// short label shown on each card row
const LABELS = [
  "the way you show up",
  "that laugh",
  "how deeply you care",
  "your quiet strength",
  "the light in your eyes",
  "your perfect timing",
  "noticing the little things",
  "how far you've come",
  "making ordinary magical",
  "just being you",
];
// ───────────────────────────────────────────────────────────────────────────

function Loader({ hidden }) {
  const petals = ["🌸", "🌷", "🌸", "🌷", "✿", "🌷", "🌸", "🌷", "🌸"];
  return (
    <div className={`loader${hidden ? " hidden" : ""}`} aria-hidden={hidden}>
      <div className="loader__petals">
        {petals.map((p, i) => (
          <span key={i} className="loader__petal">{p}</span>
        ))}
      </div>
      <p className="loader__text">something for you…</p>
    </div>
  );
}

function Modal({ reason, index, onClose }) {
  const visible = reason !== null;

  // close on backdrop click or Escape key
  useEffect(() => {
    if (!visible) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, onClose]);

  // lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

  return (
    <>
      <div
        className={`backdrop${visible ? " visible" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`modal${visible ? " visible" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={`Reason ${index + 1}`}
      >
        <div className="modal__handle" />
        <p className="modal__eyebrow">reason {String(index + 1).padStart(2, "0")}</p>
        <span className="modal__number" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="modal__text">{reason}</p>
        <button className="modal__close" onClick={onClose}>
          <span>✕</span> close
        </button>
      </div>
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [loaderHidden, setLoaderHidden] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const t1 = setTimeout(() => setLoaderHidden(true), 2600);
    const t2 = setTimeout(() => setLoaded(true), 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const open = (i) => setActiveIndex(i);
  const close = () => setActiveIndex(null);

  const activeReason = activeIndex !== null ? REASONS[activeIndex] : null;

  return (
    <>
      <Loader hidden={loaderHidden} />

      {loaded && (
        <main className="page">
          {/* ── hero ── */}
          <header className="hero">
            <p className="hero__eyebrow">just for you ✦</p>
            <h1 className="hero__title">
              {REASONS.length} reasons<br />
              you are <em>perfect</em>
            </h1>
            <p className="hero__sub">tap any reason to open it</p>
          </header>

          {/* ── list ── */}
          <ul className="list" role="list">
            {LABELS.map((label, i) => (
              <li key={i} style={{ listStyle: "none" }}>
                <button
                  className="card"
                  style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                  onClick={() => open(i)}
                  aria-haspopup="dialog"
                >
                  <span className="card__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="card__label">{label}</span>
                  <span className="card__arrow" aria-hidden="true">↗</span>
                </button>
              </li>
            ))}
          </ul>

          {/* ── footer ── */}
          <footer className="footer">
            <span className="footer__flower">🌷</span>
            <p className="footer__text">don't you ever forget it</p>
          </footer>
        </main>
      )}

      {/* ── modal ── */}
      <Modal reason={activeReason} index={activeIndex ?? 0} onClose={close} />
    </>
  );
}