import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>Tecnología de Alto Rendimiento</span>
          <h1 className={styles.title}>
            Equípate para tu <span className={styles.highlight}>Próximo Nivel</span>
          </h1>
          <p className={styles.description}>
            Descubre los mejores componentes, laptops y accesorios tecnológicos con la potencia y el respaldo que necesitas para tus proyectos.
          </p>
          <div className={styles.actions}>
            <a href="#products" className={styles.btnPrimary}>
              Ver Productos
            </a>
            <a href="#categories" className={styles.btnSecondary}>
              Categorías
            </a>
          </div>
        </div>

        <div className={styles.visualContainer}>
          <div className={styles.cardPreview}>
            <div className={styles.imagePlaceholder}>
              💻
            </div>
            <div className={styles.cardInfo}>
              <span className={styles.cardCategory}>Laptop Setup Pro</span>
              <h3 className={styles.cardTitle}>Techz Power Workstation</h3>
              <p className={styles.cardPrice}>$1.299.990</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};