import styles from '../../../styles/comps/resume/character/hair.module.css';

export default function Hair() {
  return (
    <div className={styles.sectionContent}>
      <div className={styles.pixelCharacter3D}>
        <div className={styles.charWrapper}>
          {/* Hair - Full Messy Middle Part */}

          {/* Crown / Volume */}
          {[1,2,3].map(n => (
            <div key={n} className={`${styles.cube} ${styles['hairCrown'+n]}`}>
              {['Front','Back','Left','Right','Top','Bottom'].map(face => (
                <div key={face} className={`${styles.face} ${styles['hairCrown'+n+face]}`}></div>
              ))}
            </div>
          ))}

          {/* Middle Bangs */}
          {[1,2].map(n => (
            <div key={n} className={`${styles.cube} ${styles['bangsCenter'+n]}`}>
              {['Front','Back','Left','Right','Top','Bottom'].map(face => (
                <div key={face} className={`${styles.face} ${styles['bangsCenter'+n+face]}`}></div>
              ))}
            </div>
          ))}

          {/* Curtain Bangs Left */}
          {[1,2].map(n => (
            <div key={n} className={`${styles.cube} ${styles['bangsLeft'+n]}`}>
              {['Front','Back','Left','Right','Top','Bottom'].map(face => (
                <div key={face} className={`${styles.face} ${styles['bangsLeft'+n+face]}`}></div>
              ))}
            </div>
          ))}

          {/* Curtain Bangs Right */}
          {[1,2].map(n => (
            <div key={n} className={`${styles.cube} ${styles['bangsRight'+n]}`}>
              {['Front','Back','Left','Right','Top','Bottom'].map(face => (
                <div key={face} className={`${styles.face} ${styles['bangsRight'+n+face]}`}></div>
              ))}
            </div>
          ))}

          {/* Side Hair */}
          {['Left','Right'].map(side => ['Top','Bottom'].map(part => (
            <div key={side+part} className={`${styles.cube} ${styles['side'+side+part]}`}>
              {['Front','Back','Left','Right','Top','Bottom'].map(face => (
                <div key={face} className={`${styles.face} ${styles['side'+side+part+face]}`}></div>
              ))}
            </div>
          )))}

          {/* Back Hair */}
          {['backTopLayer','backMiddleLayer','backBottomLayer'].map(layer => (
            <div key={layer} className={`${styles.cube} ${styles[layer]}`}></div>
          ))}

          {/* Flyaways */}
          {[1,2,3,4,5,6,7].map(f => (
            <div key={f} className={`${styles.cube} ${styles['flyaway'+f]}`}></div>
          ))}

        </div>
      </div>
    </div>
  );
}
