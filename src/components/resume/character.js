import styles from '../../styles/comps/resume/character.module.css';
import Hair from './character/hair';
import Head from './character/head';

export default function Character() {
  return (<div className={styles.sectionContent}>
  <div className={styles.pixelCharacter3D}>
    <div className={styles.charWrapper}>
      {/* ========== HEAD ========== */}
        <Head />
    </div>
  </div>
</div>
  );
}
