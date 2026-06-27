import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../styles/comps/yuliya/yula3/yula3.module.css';
import { binders } from '../../data/carddata.js';

// ─── LOADING SCREEN ───────────────────────────────────────────────────────────

const BOOT_LINES = [
  'pokédex os v2.4.1',
  'initializing...',
  'loading card database...',
  'mounting binder storage...',
  'all systems ready ✦',
];

function LoadingScreen({ onDone }) {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[i]]);
        setProgress(Math.round(((i + 1) / BOOT_LINES.length) * 100));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onDone, 500);
        }, 500);
      }
    }, 380);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <motion.div
      className={styles.loadingScreen}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.loadingInner}>
        <div className={styles.loadingLogo}>
          <span className={styles.logoPoke}>Poké</span>
          <span className={styles.logoDex}>DEX</span>
        </div>

        <div className={styles.terminalBox}>
          {lines.map((line, i) => (
            <motion.div
              key={i}
              className={`${styles.termLine} ${i === BOOT_LINES.length - 1 && lines.length === BOOT_LINES.length ? styles.termReady : ''}`}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.18 }}
            >
              <span className={styles.termPrompt}>›</span> {line}
            </motion.div>
          ))}
          {lines.length < BOOT_LINES.length && <span className={styles.cursor}>▍</span>}
        </div>

        <div className={styles.progressWrap}>
          <div className={styles.progressTrack}>
            <motion.div
              className={styles.progressFill}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
          </div>
          <span className={styles.progressLabel}>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── BINDER COVER PREVIEW (left panel) ───────────────────────────────────────

function BinderCover({ binder }) {
  const owned = binder.cards.filter((c) => c.owned).length;
  const previews = binder.cards.filter((c) => c.owned).slice(0, 4);

  return (
    <div className={styles.coverView}>
      <div className={styles.coverCard} style={{ '--bc': binder.color, '--bs': binder.spine, '--ba': binder.accent }}>
        <div className={styles.coverSpineLeft} />
        <div className={styles.coverBody}>
          <div className={styles.coverTop} style={{ background: binder.color }}>
            <span className={styles.coverLabel}>{binder.label}</span>
          </div>
          <div className={styles.coverThumbs}>
            {previews.map((c) => (
              <img key={c.id} src={c.img} alt={c.name} className={styles.coverThumb} />
            ))}
            {[...Array(Math.max(0, 4 - previews.length))].map((_, i) => (
              <div key={i} className={styles.coverThumbEmpty} />
            ))}
          </div>
          <div className={styles.coverFooter}>
            <span className={styles.coverCount} style={{ color: binder.spine }}>{owned}/{binder.cards.length}</span>
            <span className={styles.coverCountLabel}>cards owned</span>
          </div>
        </div>
      </div>
      <p className={styles.coverHint}>tap a card to scan →</p>
    </div>
  );
}

// ─── CARD DETAIL (left panel) ─────────────────────────────────────────────────

function CardDetail({ card, onBack }) {
  return (
    <motion.div
      className={styles.dataView}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2 }}
    >
      <div className={styles.dataHeader}>
        <span className={styles.dataNum}>{card.num}</span>
        <button className={styles.backBtn} onClick={onBack}>← back</button>
      </div>

      <h2 className={styles.dataName}>
        {card.owned ? card.name : '— unknown —'}
      </h2>

      <div className={styles.dataImageWrap}>
        <img
          src={card.img}
          alt={card.name}
          className={`${styles.dataImage} ${!card.owned ? styles.unowned : ''}`}
        />
      </div>

      <div className={styles.statsBox}>
        <div className={styles.statRow}>
          <span className={styles.statKey}>type</span>
          <span className={styles.statVal}>{card.owned ? card.type : '???'}</span>
        </div>
        <div className={styles.statRow}>
          <span className={styles.statKey}>rarity</span>
          <span className={styles.statVal}>{card.owned ? card.rarity : '???'}</span>
        </div>
        <p className={styles.dexEntry}>
          {card.owned ? card.pokedexEntry : 'No data available. This Pokémon has not been captured yet.'}
        </p>
      </div>
    </motion.div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function PokedexBinder() {
  const [loading, setLoading] = useState(true);
  const [openBinder, setOpenBinder] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredBinder, setHoveredBinder] = useState(null);
  // On mobile: left panel is only shown when a card is selected or binder is open
  const [mobileShowLeft, setMobileShowLeft] = useState(false);

  const previewBinder = openBinder || hoveredBinder;

  const handleOpenBinder = (binder) => {
    setOpenBinder(binder);
    setSelectedCard(null);
    setMobileShowLeft(true);
  };

  const handleCloseBinder = () => {
    setOpenBinder(null);
    setSelectedCard(null);
    setMobileShowLeft(false);
  };

  const handleSelectCard = (card) => {
    const next = selectedCard?.id === card.id ? null : card;
    setSelectedCard(next);
    if (next) setMobileShowLeft(true);
  };

  const handleBack = () => {
    setSelectedCard(null);
  };

  if (loading) return <LoadingScreen onDone={() => setLoading(false)} />;

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >

      {/* LEFT PANEL — pokédex display */}
      <div className={`${styles.leftPanel} ${mobileShowLeft ? styles.mobileVisible : ''}`}>

        {/* Mobile back button */}
        {mobileShowLeft && (
          <button
            className={styles.mobileBack}
            onClick={() => {
              if (selectedCard) { setSelectedCard(null); }
              else { handleCloseBinder(); }
            }}
          >
            ← back to binders
          </button>
        )}

        <div className={styles.dexShell}>
          {/* Top bar */}
          <div className={styles.dexTop}>
            <div className={styles.dexLightBig} />
            <div className={styles.dexLightsRow}>
              <span className={`${styles.dexLight} ${styles.lightPink}`} />
              <span className={`${styles.dexLight} ${styles.lightMint}`} />
              <span className={`${styles.dexLight} ${styles.lightLavender}`} />
            </div>
            <span className={styles.dexBrand}>pokédex</span>
          </div>

          {/* Screen */}
          <div className={styles.dexScreen}>
            <div className={styles.screenInner}>
              <AnimatePresence mode="wait">
                {selectedCard ? (
                  <CardDetail key={`card-${selectedCard.id}`} card={selectedCard} onBack={handleBack} />
                ) : previewBinder ? (
                  <motion.div key={`cover-${previewBinder.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <BinderCover binder={previewBinder} />
                  </motion.div>
                ) : (
                  <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.idleState}>
                    <span className={styles.idleEmoji}>✦</span>
                    <p>hover a binder</p>
                    <p>to preview</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom bar */}
          <div className={styles.dexBottom}>
            <div className={styles.dpad}>
              <div className={styles.dpadH} /><div className={styles.dpadV} />
            </div>
            <div className={styles.abRow}>
              <div className={`${styles.abBtn} ${styles.btnB}`} />
              <div className={`${styles.abBtn} ${styles.btnA}`} />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL — binder browser */}
      <div className={`${styles.rightPanel} ${mobileShowLeft ? styles.mobileHidden : ''}`}>
        <AnimatePresence mode="wait">

          {/* Binder grid */}
          {!openBinder && (
            <motion.div
              key="grid"
              className={styles.binderGridView}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.gridHeader}>
                <h1 className={styles.gridTitle}>My Binders</h1>
                <span className={styles.gridSub}>{binders.length} collections</span>
              </div>
              <div className={styles.binderGrid}>
                {binders.map((binder) => {
                  const owned = binder.cards.filter((c) => c.owned).length;
                  return (
                    <motion.button
                      key={binder.id}
                      className={styles.binderBtn}
                      style={{ '--bc': binder.color, '--bs': binder.spine, '--ba': binder.accent }}
                      onClick={() => handleOpenBinder(binder)}
                      onMouseEnter={() => setHoveredBinder(binder)}
                      onMouseLeave={() => setHoveredBinder(null)}
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className={styles.btnSpine} />
                      <div className={styles.btnFace}>
                        <div className={styles.btnStrip} />
                        <div className={styles.btnName}>{binder.label}</div>
                        <div className={styles.btnMeta}>{owned}/{binder.cards.length} owned</div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Open binder */}
          {openBinder && (
            <motion.div
              key={`open-${openBinder.id}`}
              className={styles.openView}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.22 }}
            >
              <div className={styles.openHeader}>
                <button className={styles.closeBtn} onClick={handleCloseBinder}>← all binders</button>
                <span className={styles.openTitle}>{openBinder.label}</span>
                <span className={styles.openCount}>
                  {openBinder.cards.filter((c) => c.owned).length}/{openBinder.cards.length}
                </span>
              </div>

              <div className={styles.openBody}>
                {/* Spine */}
                <div className={styles.openSpine} style={{ background: openBinder.spine }}>
                  {[...Array(5)].map((_, i) => <div key={i} className={styles.ring} />)}
                </div>

                {/* Cards */}
                <div className={styles.openContent}>
                  <div className={styles.cardGrid}>
                    {openBinder.cards.map((card) => (
                      <motion.div
                        key={card.id}
                        className={`${styles.cardSlot} ${selectedCard?.id === card.id ? styles.cardSelected : ''}`}
                        style={selectedCard?.id === card.id ? { '--sg': openBinder.color } : {}}
                        onClick={() => handleSelectCard(card)}
                        whileTap={{ scale: 0.94 }}
                      >
                        <img
                          src={card.img}
                          alt={card.name}
                          className={`${styles.cardImg} ${!card.owned ? styles.unowned : ''}`}
                        />
                        <span className={styles.cardNum}>{card.num}</span>
                        {!card.owned && <div className={styles.cardLock}>?</div>}
                      </motion.div>
                    ))}
                    {[...Array(Math.max(0, 9 - openBinder.cards.length))].map((_, i) => (
                      <div key={`e-${i}`} className={`${styles.cardSlot} ${styles.cardEmpty}`} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </motion.div>
  );
}