import { useState, useEffect } from "react";
import s from "../../styles/comps/yuliya/yula1.module.css";

// ── edit your reasons here ──────────────────────────────────────────────────
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
  "the dumminess",
  "the clinginess",
  "the kindness",
  "the humour",
  "the honesty",
  "the hugs",
  "the kisses",
  "the style",
  "the intelligence",
  "the energy",
  "the vibes",
  "the patience",
  "the warmth",
  "that little frown",
  "the way you text",
  "midnight talks",
  "the soft side",
  "when you zone out",
  "the athleticism",
  "that one look",
  "morning you",
  "sleepy you",
  "when you're pouty",
  "the little things",
  "how you remember stuff",
  "the way you say my name",
  "when you get excited",
  "that contagious mood",
  "the nervous habit",
  "when you overthink",
  "how you apologise",
  "the way you listen",
  "when you're proud",
  "tiny victories",
  "the random facts",
  "when you go quiet",
  "that side profile",
  "the concentration face",
  "when you crash out",
  "the way you walk",
  "how you hold things",
  "the little gestures",
  "when you get shy again",
  "how you smell",
  "the realness",
  "when you're unbothered",
  "that glare",
  "the soft voice",
  "when you check on me",
  "how you make space",
  "the trust",
  "showing up anyway",
  "missing me",
  "feeling safe",
  "being known by you",
  "the reels",
  "growing together",
  "just existing near you",
  "just being you",
];

const REASONS = [
  "Everything about your hair is so cute. Idk how you call your hair chopped is so pretty and smells nice.",
  "Your eyes are so pretty. I like how they are and they are very cute. Every time i stare at u i get lostt",
  "Your cheeks are so cuteee. I loveee to squish them and poke them even though you hate them soo muchh.",
  "How can you hate such a cute face, it's so pretty and beautiful and the silly looks you give me. I love them.",
  "That pretty smile on your face is so gah damn contagious, everytime i see you smile it makes me happy. It's so cute seeing you happy.",
  "Ticklish ah child, i love tickling especially cause your so ticklish everywhere is so funny.",
  "How can someone call themselves fat when they're literally a baddie, like your legs are baddie shaped wink wink",
  "Everytime you try to be taller than me is so funny, you'll always be my lil cutie hehe.",
  "I just love holding hands with you.",
  "Your voice is so pretty, I love hearing you yap about anything. It is so pretty, I love it, you'll never be annoying in my eyes.",
  "You silly ah laugh, everytime I do something dumb. I love itt.",
  "I love your shyness, it's so cute when you turn into a cherry blushing, or never looking me in the eyes.",
  "I love how you care so much, even small details that somehow you can figure out. Like when I'm sad through text.",
  "Everytime you're with me I instantly get happy. Even when I feel a bit down everything just goes away.",
  "I love how silly you are, your clumsiness, walking into bins and tripping is so funny. I just love how silly you are.",
  "I like how you're an oddball like me. Maybe not as an oddball but you match my weirdness and it makes me feel like me.",
  "Seeing cute animals like mice or squirrels will always make me smile. You get so happy when you see cute animals.",
  "I love how you're just as autistic as me. You're like my missing chromosome. Always laughing with me, giggling. I love it.",
  "Along with being so silly and cute, i love you dum dum. The way you get so confused on the little things is funny. NEVER call yourself stupid, ONLY I get to.",
  "I LOVEEE how you're so clingy sometimes, holding my arm or hugging me. I JUSTTT LOVEEEE itttt",
  "You're so kind and nice to me, always smiling and laughing and giving me your charger heh.",
  "The way you make me laugh and giggle over the silly things you say, or just laugh with me is so cute.",
  "Even though you try to hide bad stuff from me, I like how you still open up to me and tell me after a while.",
  "I love hugging you or getting hugged by you. It makes me feel happy, especially when I miss you a lot. I like being clingy.",
  "Even though ur ahh don't kiss me a lot I lovee when you doo. You turn into a little cherry so cuteee AND DENY everytime.",
  "Everything you wear is so tuff, your fits and you just baddie combo. SO SOSO TUFFF",
  "You're so smart, even though you think you dumb but you're nott.",
  "I love how you're always energetic, even though sometimes you're a little gloomy but whenever I'm with you you're always silly and hyped.",
  "Your vibes are so tuff, you make me feel silly and I like being with you.",
  "I love how you're always patient with mee, especially when I make sounds or try to be a little bit annoying. I love how you're never tired of me.",
  "Everytime i see you, you make me switch up so quickly. Like my spark, I can go from gloomy to happy instantly when I see you.",
  "Everytime u get annoyed or pouty is so cute. The frown on that face is soo cutee and adorable like a babyyy.",
  "I love how you send me so many selfies of your cute little pretty faceee. I love them alll. It is so cute seeing you as my time and in my gallery.",
  "Even though we don't always have midnight talks, when we do you are always so silly. Your sleepy ahh so cute and yapping about how you smell me is funny.",
  "I just know you have one for me 🙂",
  "Whenever I start yapping to you and you slowly daze off like a silly goon is so funny. Always so lost.",
  "They are so tuff and athletic, having bigger biceps than me and so tuff in taekwondo. I hope I watch you get your black belt.",
  "The side eye you give me after I do something silly or say something dumb is so cuteeee. I lovee teasing you so much.",
  "Whenever you wake up, text me good morning and send me a morning selfie. It is so cute. I love them soo muchh",
  "Sleepy you is so cute, sleeping anywhere and when you wake up you're so lost is so silly.",
  "I LOVEEE WHEN YOUR POUTY, it's so funny to purposely tease you to get the pouty face is so cuteeee. YOU JUST VERY CUTE",
  "Telling me that you smell me is so funny, cause I'll never know how you smell me from that far.",
  "Whenever you remember the little things that I forget, like how I'm lactose or how I can't do this or that.",
  "You saying my Chinese name is so cute, the way you try to pronounce it is so funny. Maybe one day I'll tell you how to properly say it hehe.",
  "Seeing you happy is just so cute, the way you smile and just happy. Never hide your feelings from me silly even when you wanna cry.",
  "Your mood changes me so quickllyyy. Seeing you happy or sad makes me happy or sad instantllyy.",
  "Whenever you start blushing or get so shy you never look at me and lie you're not cherry which is so cute.",
  "When you tell me about your dreams, how you think you're not good enough, how I'll break up with you. Trust me I'll never, you're the best and I LOVE YOU SO MUCH",
  "When you apologize to me it is so cute. Because you're so stubborn with it, never giving up after a couple times.",
  "You listening to me is so funny, it's like you chose when to listen and when to not and it's so silly.",
  "Whenever you're happy about yourself you get so giddy and happy. You should be proud of yourself just like the way I see it. I'm always proud of you",
  "Beating me in anything is so sillllyy. You're so cute when you realize you beat me like when you found out your biceps are bigger tsks.",
  "Whenever you tell me random stuff like how you're banned from almost everything in your house is funny. How does one blow up a microwave more than once",
  "Your silly ah going quiet whenever your mad, is so silly I love teasing you with chicken or noise. I'll always love youuu",
  "Your side view is soo pretty, any angle you just a baddieee so pretty. LIKE how can one be so gah damn stunning",
  "When you're locked in on something like the pigeon game it is so cute. You're just really cute.",
  "I love when you crash out, the way you say I'm gonna choke you, or kakashka is so funny. I just lovee ragebaiting you sometimes.",
  "When we walk together either from home or from sports or just dates, your waddles are so cute and adorable. It makes me so happy.",
  "Idk i like your hands they soft and nice to hold.",
  "Your hugs, your kisses, when you hold my hand, grab my arm I love ittt. I LOVE THEM ALLL",
  "Hehee, when you get shyyy. OHHH I LOVE IT SO SO MUCHHH. Such a cutieee",
  "YOU SMELL like apples and sunshine even with my stupid smell defect. You smell like cherries and blooms",
  "I like how sometimes you're real with me. UHHH idkk I LOVEEE YOUU",
  "HEHHE I MAKE SURE UR NEVER UNBOTHERED RAAAAAAAAAAA, i miss you yula, if you see this one you owe me a kiss ON DA LIPS 😘",
  "I love your stares, especially when you're pouting. Hehe, they are so cute. The side eyes, or staring into my eyes I love them all.",
  "I love your voice so much, happy, sad, excited. I love it all. It's so cuteeee. Hope you know you're never annoying I'll always want to hear you talk.",
  "Whenever you ask me if I'm okay or if I'm sad I love it. Even though I'm scared to open up, I always do. I love you for that.",
  "Everytime i wanna do something with you, you always find a way to do it. Another 10 mins sitting with you or even going to my games.",
  "I like how I can trust you with everything you say. Even though I doubt you sometimes, end of the day I still trust you so much alott",
  "I love how you always find me, especially at lunch. It's so cutee and your hugs are so warm and touching.",
  "HEHE I love how you always tell me you miss me, I feel loved and I hope you'll be like this foreverrr.",
  "I hope you feel safe with me, you make me feel safe with you, whenever I'm with you I can just be me. Silly and goofy.",
  "I love that I had the balls to talk to you and ask you out, it might actually be the best thing I've ever done. You're the first girl I've asked out. I hope I don't hurt you.",
  "I love how you spam me with reels and tiktokss I love to watch them all, especially the first time when you said you can spam me with reels. I'll watch it all. It was so cute.",
  "I love being with you and I hope we last long and forever. The places I wanna go, the things we can eat, new things I wanna try, everything.",
  "I love being near you. It makes me feel happy and ye. I MISS YOU YULAA if you see this one YOU OWE ME ANOTHER KISSS",
  "Lastly my 77th reason why you're perfect is just you. YOU'RE the best silly, I'll always be proud of you, I'll always be happy with you or when I see you. You make me happy, you make my eyes shine and my life bloom. Even though the saying no one's perfect, you might be the one.",
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
            <p className={s.footerText}>
            Don’t you ever forget it, you’re the best girlfriend I’ll ever have. 
            You always care for me and make sure I’m doing okay. 
            I really love having you in my life, and I want to make a lot of great memories with you. <br></br> :)</p>
          </footer>
        </main>
      )}

      <Modal reason={activeReason} index={activeIndex ?? 0} onClose={close} />
    </>
  );
}