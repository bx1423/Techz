import { useState, type SubmitEvent } from 'react';
import { Link } from 'wouter';
import styles from './Login.module.css';
import { validateIdentifier, validatePassword } from './Login.utils';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function Login() {
  useDocumentTitle('Iniciar sesión | TECHZ');

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({identifier: '', password: ''});
  const [message, setMessage] = useState('');

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');
    const identifierError = validateIdentifier(identifier);
    const passwordError = validatePassword(password);
    setErrors({ identifier: identifierError, password: passwordError });
    if (identifierError || passwordError) { return;}
    setMessage('Datos válidos. Iniciando sesión...');
  };

  return (
    <main className={styles.loginPage}>
      <section className={styles.loginCard}>

        <div className={styles.header}>
          <span className={styles.logo}>TECHZ</span>
          <h1>Iniciar sesión</h1>
          <p>Ingresa con tu nombre de usuario o correo electrónico.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>

          <div className={styles.field}>
            <label htmlFor="identifier">Usuario o correo electrónico</label>
            <input type="text" id="identifier" value={identifier} onChange={(event) => {
                setIdentifier(event.target.value);
                if (errors.identifier) {
                  setErrors({
                    ...errors,
                    identifier: '',
                  });
                }
              }}
              placeholder="usuario o correo@ejemplo.com"
              className={
                errors.identifier ? styles.inputError : ''
              }
            />
            {errors.identifier && (
              <span className={styles.error}>
                {errors.identifier}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" value={password} onChange={(event) => {
                setPassword(event.target.value);
                if (errors.password) {
                  setErrors({
                    ...errors,
                    password: '',
                  });
                }
              }}
              placeholder="••••••••"
              className={
                errors.password ? styles.inputError : ''
              }
            />
            {errors.password && (
              <span className={styles.error}>
                {errors.password}
              </span>
            )}
          </div>

          <button type="submit" className={styles.button}>Iniciar sesión</button>
          {message && (<p className={styles.success}>{message}</p>)}
        </form>

        <div className={styles.register}>
          <span>¿No tienes una cuenta?</span>
          <Link href="/register">Crear cuenta</Link>
        </div>

      </section>
    </main>
  );
}

export default Login;