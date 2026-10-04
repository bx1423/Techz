import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        TECHZ
      </div>

      <div className={styles.menu}>
        <a href="/">Inicio</a>
        <a href="/products">Productos</a>
        <a href="/contact">Contacto</a>
        <a href="/login">Iniciar sesión</a>
        <a href="/register">Registrarse</a>
      </div>
    </nav>
  );
}

export default Navbar;