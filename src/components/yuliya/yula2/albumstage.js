import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Images, Maximize2, Minimize2, X } from 'lucide-react';
import styles from '../../../styles/comps/yuliya/yula2/albumstage.module.css';

const SCATTER_ROTATIONS = [-3.5, 2.8, -1.8, 3.2, -2.4, 1.6, -3, 2.2, -1.4];

const albumVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 24,
      staggerChildren: 0.06
    }
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: -8,
    transition: { duration: 0.18 }
  }
};

const getCardVariants = (rotation) => ({
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: rotation,
    transition: { type: 'spring', stiffness: 280, damping: 24 }
  }
});

export default function AlbumStage({ activeAlbum, onClose }) {
  const [flippedPhotos, setFlippedPhotos] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);

  const photos = activeAlbum?.photos ?? [];
  const coverPhoto = photos[0];

  useEffect(() => {
    setFlippedPhotos({});
    setIsExpanded(false);
  }, [activeAlbum?.id]);

  const albumSubtitle = useMemo(() => {
    if (!activeAlbum) return '';
    if (photos.length === 1) return '1 saved memory';
    return `${photos.length} saved memories`;
  }, [activeAlbum, photos.length]);

  const handlePhotoClick = (photoId) => {
    setFlippedPhotos((prev) => ({
      ...prev,
      [photoId]: !prev[photoId]
    }));
  };

  const handleCloseAlbum = () => {
    setIsExpanded(false);
    onClose();
  };

  const renderIdleState = () => (
    <motion.div
      key="idle"
      className={styles.tvIdleMode}
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35 }}
    >
      <img
        src="/images/yula.jpg"
        alt="Us"
        className={styles.tvWallpaper}
      />
      <div className={styles.idleOverlay}>
        <div className={styles.idleIcon}>
          <Images size={20} />
        </div>
        <p className={styles.tvIdleKicker}>Memory Library</p>
        <h2 className={styles.tvIdleTitle}>Choose a journal</h2>
        <p className={styles.tvIdleText}>
          Pull a book from the shelves to open its little chapter.
        </p>
      </div>
    </motion.div>
  );

  const renderAlbumPreview = () => (
    <motion.div
      key={activeAlbum.id}
      className={styles.albumPreview}
      variants={albumVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={styles.previewCover}>
        {coverPhoto ? (
          <img src={coverPhoto.img} alt={activeAlbum.title} />
        ) : (
          <div className={styles.previewCoverFallback}>
            <Images size={26} />
          </div>
        )}
      </div>

      <div className={styles.previewContent}>
        <p className={styles.albumKicker}>{albumSubtitle}</p>
        <h2
          className={styles.previewTitle}
          style={{ color: activeAlbum.color }}
        >
          {activeAlbum.title}
        </h2>
        <p className={styles.previewText}>
          A little chapter from the shelf. Open it up to flip through the saved
          moments.
        </p>
        <div className={styles.previewActions}>
          <button
            className={styles.openAlbumBtn}
            onClick={() => setIsExpanded(true)}
            type="button"
          >
            <BookOpen size={16} />
            Open Album
          </button>
          <button
            className={styles.tvIconBtn}
            onClick={handleCloseAlbum}
            type="button"
            aria-label="Close album"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );

  const renderAlbumGrid = () => (
    <motion.div
      className={styles.tvAlbumContainer}
      variants={albumVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={styles.tvAlbumHeader}>
        <div className={styles.albumTitleGroup}>
          <p className={styles.albumKicker}>{albumSubtitle}</p>
          <h2
            className={styles.tvAlbumTitle}
            style={{ color: activeAlbum.color }}
          >
            {activeAlbum.title}
          </h2>
        </div>
        <div className={styles.headerActions}>
          <button
            className={styles.tvCloseBtn}
            onClick={() => setIsExpanded(false)}
            type="button"
            aria-label="Minimize album"
          >
            <Minimize2 size={16} />
          </button>
          <button
            className={styles.tvCloseBtn}
            onClick={handleCloseAlbum}
            type="button"
            aria-label="Close album"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {photos.length > 0 ? (
        <motion.div className={styles.tvPolaroidGrid}>
          {photos.map((photo, index) => {
            const isFlipped = flippedPhotos[photo.id];
            const isFeatured = index === 0;
            const rotation = isFeatured ? 0 : SCATTER_ROTATIONS[index % SCATTER_ROTATIONS.length];

            return (
              <motion.div
                key={photo.id}
                className={`${styles.tvPolaroidWrapper} ${
                  isFeatured ? styles.featuredPolaroid : ''
                }`}
                variants={getCardVariants(rotation)}
              >
                <motion.div
                  className={styles.tvPolaroidCard}
                  onClick={() => handlePhotoClick(photo.id)}
                  animate={{
                    rotateY: isFlipped ? 180 : 0,
                    rotate: isFlipped ? 0 : rotation
                  }}
                  whileHover={{
                    y: -6,
                    rotate: 0,
                    scale: 1.03,
                    transition: { type: 'spring', stiffness: 300, damping: 22 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.42, ease: 'easeInOut' }}
                  style={{ originX: '50%', originY: '100%' }}
                >
                  <div className={styles.tvPolaroidFront}>
                    <div className={styles.tvPhotoFrame}>
                      <img
                        src={photo.img}
                        alt={photo.title}
                        className={styles.tvActualImg}
                      />
                    </div>
                    <div className={styles.photoCaptionBar}>
                      <h3 className={styles.tvPhotoTitle}>{photo.title}</h3>
                      <span className={styles.flipHint}>Tap for note</span>
                    </div>
                  </div>

                  <div className={styles.tvPolaroidBack}>
                    <div className={styles.noteBack}>
                      <p className={styles.noteLabel}>Little note</p>
                      <h3 className={styles.noteTitle}>{photo.title}</h3>
                      <p className={styles.tvPhotoDesc}>{photo.description}</p>
                      <span className={styles.flipHint}>Tap to see photo</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      ) : (
        <motion.div className={styles.emptyAlbumText} variants={getCardVariants(0)}>
          <p className={styles.emptyTitle}>Nothing pasted in this journal yet.</p>
          <span>Add a few photos and this chapter will come alive.</span>
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <>
      <div className={styles.tvFrame}>
        <div className={styles.tvScreen}>
          <AnimatePresence mode="wait">
            {!activeAlbum ? renderIdleState() : renderAlbumPreview()}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {activeAlbum && isExpanded && (
          <motion.div
            className={styles.tvOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`${styles.tvFrame} ${styles.tvFrameExpanded}`}
              initial={{ opacity: 0, scale: 0.72, y: 34 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.76, y: 28 }}
              transition={{ type: 'spring', stiffness: 190, damping: 24 }}
            >
              <div className={styles.tvScreen}>{renderAlbumGrid()}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}