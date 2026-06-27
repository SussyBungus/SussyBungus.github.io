import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../../styles/comps/yuliya/yula2/shelf.module.css';

const characters = {
  keroppi: '/images/kerokerokeroppi.webp',
  pochacco: '/images/pochacco.png',
  cinnamoroll: '/images/cinnamoroll.png',
  pompompurin: '/images/pompompuri.png',
  pinkCat: '/images/cat.png',
  frog: '/images/frog.png'
};

const BULB_COUNT = 7;

const bulbConfigs = [
  { delay: '0s',    duration: '2.8s' },
  { delay: '0.6s',  duration: '3.4s' },
  { delay: '1.1s',  duration: '2.2s' },
  { delay: '0.3s',  duration: '3.8s' },
  { delay: '1.6s',  duration: '2.6s' },
  { delay: '0.9s',  duration: '3.1s' },
  { delay: '0.2s',  duration: '2.4s' },
];

function FairyLights() {
  return (
    <div className={styles.fairyLightsRow} aria-hidden="true">
      <div className={styles.fairyWire} />
      {bulbConfigs.map((cfg, i) => (
        <div
          key={i}
          className={styles.fairyBulbWrap}
          style={{
            left: `${8 + i * (84 / (BULB_COUNT - 1))}%`,
            animationDelay: cfg.delay,
            animationDuration: cfg.duration,
          }}
        >
          <div className={styles.fairyBulb} />
          <div className={styles.fairyCone} />
        </div>
      ))}
    </div>
  );
}

export default function ShelfTower({ side, albums, activeId, onSelectAlbum }) {
  const bookShelfIndex = side === 'left' ? 0 : 1;
  const [pullingId, setPullingId] = useState(null);

  const handleKeyDown = (event, album) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleBookClick(album);
    }
  };

  const handleBookClick = (album) => {
    if (pullingId) return;
    setPullingId(album.id);
    setTimeout(() => {
      onSelectAlbum(album);
      setPullingId(null);
    }, 380);
  };

  const getBookAnimation = (album) => {
    const isSelected = activeId === album.id;
    const isPulling = pullingId === album.id;

    if (isPulling) {
      return {
        y: -18,
        rotate: -6,
        scale: 1.06,
        transition: { type: 'spring', stiffness: 380, damping: 18 }
      };
    }
    if (isSelected) {
      return {
        y: -10,
        rotate: 0,
        scale: 1.04,
        transition: { type: 'spring', stiffness: 300, damping: 22 }
      };
    }
    return {
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 22 }
    };
  };

  const renderBooks = () => {
    return albums.map((album) => {
      const isSelected = activeId === album.id;

      return (
        <div key={album.id} style={{ position: 'relative' }}>
          <motion.div
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              x: '-50%',
              marginBottom: 8,
              background: 'rgba(40, 28, 18, 0.82)',
              color: '#f5ede0',
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              padding: '4px 8px',
              borderRadius: 6,
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              backdropFilter: 'blur(4px)',
              zIndex: 10,
            }}
            initial={{ opacity: 0, y: 4 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
          >
            {album.title}
          </motion.div>

          <motion.div
            role="button"
            tabIndex={0}
            aria-pressed={isSelected}
            aria-label={`Open ${album.title}`}
            className={`${styles.bookSpine} ${isSelected ? styles.bookSelected : ''}`}
            style={{
              backgroundColor: album.color,
              height: `${album.height}px`
            }}
            animate={getBookAnimation(album)}
            whileHover={
              !isSelected && pullingId === null
                ? { y: -6, rotate: 2, scale: 1.02,
                    transition: { type: 'spring', stiffness: 340, damping: 20 } }
                : {}
            }
            whileTap={{ scale: 0.97 }}
            onClick={() => handleBookClick(album)}
            onKeyDown={(event) => handleKeyDown(event, album)}
          >
            <span className={styles.spineText}>{album.title}</span>
            {isSelected && <span className={styles.bookMarker} />}
          </motion.div>
        </div>
      );
    });
  };

  const renderSticker = (name, size = 'medium') => {
    return (
      <motion.div
        className={`${styles.shelfStickerWrap} ${styles[size]}`}
        whileHover={{ y: -4, scale: 1.04 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      >
        <img
          src={characters[name]}
          alt=""
          aria-hidden="true"
          className={styles.shelfSticker}
        />
      </motion.div>
    );
  };

  const renderDecor = (shelfIndex) => {
    if (shelfIndex === bookShelfIndex) {
      return renderBooks();
    }

    if (side === 'left' && shelfIndex === 1) {
      return (
        <div className={styles.stickerScene}>
          {renderSticker('keroppi', 'large')}
          <div className={styles.softStar} />
        </div>
      );
    }

    if (side === 'left' && shelfIndex === 2) {
      return (
        <div className={styles.stickerSceneWide}>
          {renderSticker('pochacco', 'small')}
          {renderSticker('frog', 'medium')}
        </div>
      );
    }

    if (side === 'right' && shelfIndex === 0) {
      return (
        <div className={styles.stickerSceneWide}>
          {renderSticker('cinnamoroll', 'wide')}
          {renderSticker('pompompurin', 'small')}
        </div>
      );
    }

    return (
      <div className={styles.stickerScene}>
        {renderSticker('pinkCat', 'medium')}
        <div className={styles.softPebble} />
      </div>
    );
  };

  return (
    <aside className={styles.tower} aria-label={`${side} bookshelf`}>
      <FairyLights />
      {[0, 1, 2].map((shelfIndex) => (
        <div key={shelfIndex} className={styles.shelfLedge}>
          {renderDecor(shelfIndex)}
        </div>
      ))}
    </aside>
  );
}