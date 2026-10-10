import { Link } from 'wouter';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.tag}>TECNOLOGÍA QUE TE IMPULSA</span>

        <h1>
          Tienda tecnologica
          <br />
          <span>para gamers</span>
        </h1>

        <p>Encuentra tecnología, accesorios y productos para gaming de primera a ultima generacion.</p>

        <div className={styles.actions}>
          <Link href="/products" className={styles.primaryButton}>Ver productos</Link>
          <Link href="/register" className={styles.secondaryButton}> Crear cuenta</Link>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.circle}></div>
        <div className={styles.techCard}>
          <span>TECHZ</span>
          <strong>TECH</strong>
          <small>INNOVATION</small>
        </div>
      </div>
    </section>
  );
}

export default Hero;