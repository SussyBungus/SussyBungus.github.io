import { useState, useEffect } from "react";
import s from "../styles/yula1.module.css";

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

// flower variety mix — lily, peony, hydrangea, tulip alternating
const PETALS = ["🌸", "🌷", "💐", "🌺", "🌸", "🌷", "💐", "🌺", "🌸"];

function Loader({ hidden }) {
  return (
    <div className={`${s.loader}${hidden ? ` ${s.loaderHidden}` : ""}`} aria-hidden={hidden}>
      <div className={s.loaderInner}>
        <div className={s.loaderPetals}>
          {PETALS.map((p, i) => (
            <span
              key={i}
              className={s.loaderPetal}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {p}
            </span>
          ))}
        </div>
        <p className={s.loaderText}>something for you…</p>
      </div>
    </div>
  );
}

function Modal({ reason, index, onClose }) {
  const visible = reason !== null;

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
        aria-label={`Reason ${index + 1}`}
      >
        <div className={s.modalHandle} />
        <p className={s.modalEyebrow}>reason {num}</p>
        <span className={s.modalNumber} aria-hidden="true">{num}</span>
        <p className={s.modalText}>{reason}</p>
        <button className={s.modalClose} onClick={onClose}>
          <span>✕</span> close
        </button>
      </div>
    </>
  );
}

export default function Yula() {
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
        <main className={s.page}>
          <header className={s.hero}>
            <p className={s.heroEyebrow}>just for you ✦</p>
            <h1 className={s.heroTitle}>
              {REASONS.length} reasons<br />
              you are <em>perfect</em>
            </h1>
            <p className={s.heroSub}>tap any to open it</p>
          </header>

          <ul className={s.grid} role="list">
            {LABELS.map((label, i) => (
              <li key={i}>
                <button
                  className={s.card}
                  style={{ animationDelay: `${0.08 + i * 0.07}s` }}
                  onClick={() => open(i)}
                  aria-haspopup="dialog"
                >
                  <span className={s.cardBg} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={s.cardArrow} aria-hidden="true">↗</span>
                  <span className={s.cardNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={s.cardLabel}>{label}</span>
                </button>
              </li>
            ))}
          </ul>

          <footer className={s.footer}>
            <span className={s.footerFlower}>🌷</span>
            <p className={s.footerText}>don't you ever forget it</p>
          </footer>
        </main>
      )}

      <Modal reason={activeReason} index={activeIndex ?? 0} onClose={close} />
    </>
  );
}