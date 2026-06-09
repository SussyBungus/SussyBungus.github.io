import { useState, useEffect } from "react";
import s from "../styles/yula1.module.css";

// ── edit your reasons here ──────────────────────────────────────────────────
const REASONS = [
  "Everything about your hair is so cute. Idk how you call your hair chopped is so pretty and smells nice.",
  "Your eyes are so pretty. I like how they are and they are very cute. Every time i stare at u i get lostt",
  "Your cheeks are so cuteee. I loveee to squish them and poke them even though you hate them soo muchh.",
  "How can you hate such a cute face, it's so pretty and beautiful and the silly looks you give me. I love them.",
  "That pretty smile on your face is so gah damn contiguous, everytime i see you smile it makes me happy. It's so cute seeing you happy.",
  "Ticklish ah child, i love tickling especially cause your so ticklish everywhere is so funny.",
  "How can someone call themselves fat when they're literally a baddie, like your legs are baddie shaped wink wink",
  "Everytime you try to be taller than me is so funny, you'll always be my lil cutie hehe.",
  "I just love holding hands with you.",
  "Your voice is so pretty, I love hearing you yap about anything. It is so pretty, I love it, you'll never be annoying in my eyes.",
  "You silly ah laugh, everytime time I do something dumb. I love itt.",
  "I love your shyness, it's so cute when you turn into a cherry blushing, or never looking me in the eyes.",
  "I love how you care so much about, even small details that somehow you can figure out. Like when I'm sad through text.",
  "Everytime you're with me I instantly get happy. Even when I feel abit down everything just goes away.",
  "I love how silly you are, your clumsiness, walking into bins and tripping is clumsy but funny. I just love how silly you are.",
  "I like how you're an oddball like me. Maybe not as an oddball but you match my weirdness and it makes me feel me.",
  "Seeing cute animals like mice or squirrels will always make me smile. You get so happy when you see cute animals.",
  "I love how you're just as autistic as me. You're like my missing chromosome. Always laughing with me, giggling. I love it.",
];

const LABELS = [
  "that hair",
  "those eyes",
  "those cheeks",
  "that face",
  "the smile",
  "ticklish everywhere",
  "such a baddie",
  "lil cutie",
  "holding hands",
  "that voice",
  "the laugh",
  "the shyness",
  "how deeply you care",
  "the presence",
  "the silliness",
  "the weirdness",
  "cute aggression",
  "the autism",
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
        <p className={s.modalEyebrow}>reason {num} - {LABELS[index]}</p>
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
            <p className={s.heroEyebrow}>just for you ✦ {REASONS.length} stars for</p>
            <h1 className={s.heroTitle}>
              {REASONS.length} reasons why<br />
              you are so <em>perfect</em>
            </h1>
            <p className={s.heroSub}>tap each one to open it 🌷</p>
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