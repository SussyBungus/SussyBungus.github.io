// MicroPixels.js
import styles from '../../../styles/comps/resume/character/head.module.css';

export default function MicroPixels() {
  const pixels = Array.from({ length: 800 }, (_, i) => {
    // Random position within head area
    const top = Math.floor(Math.random() * 160) + 10; // 10px padding
    const left = Math.floor(Math.random() * 120) + 80; // head left ~80-200px
    // Random shade for depth effect
    const shade = ['#e0bfa3','#d9b393','#f4cba0','#cfa183'][Math.floor(Math.random()*4)];
    
    return (
      <div
        key={`microDetail${i}`}
        className={styles.microDetail}
        style={{ top: `${top}px`, left: `${left}px`, backgroundColor: shade }}
      />
    );
  });

  return <>{pixels}</>;
}
