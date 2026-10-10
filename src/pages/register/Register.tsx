import { useState, type SubmitEvent } from 'react';
import { Link } from 'wouter';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import styles from './Register.module.css';
import { validateName, validateUsername, validateEmail, validatePassword, validateConfirmPassword } from './Register.utils';

function Register() {
  useDocumentTitle('Crear cuenta | TECHZ');

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');
    const newErrors = {
      name: validateName(name),
      lastName: validateName(lastName),
      username: validateUsername(username),
      email: validateEmail(email),
      password: validatePassword(password),
      confirmPassword: validateConfirmPassword(
        password,
        confirmPassword
      ),
    };
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some((error) => error !== '');
    if (hasErrors) { return; }
    setMessage('Cuenta creada correctamente.');
  };

  return (
    <main className={styles.registerPage}>
      <section className={styles.registerCard}>

        <div className={styles.header}>
          <span className={styles.logo}>TECHZ</span>
          <h1>Crear cuenta</h1>
          <p>Regístrate para comenzar a disfrutar de Techz.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" value={name} onChange={(event) => {
                  setName(event.target.value);
                  if (errors.name) {
                    setErrors({
                      ...errors,
                      name: '',
                    });
                  }
                }}
                placeholder="Tu nombre"
                className={
                  errors.name ? styles.inputError : ''
                }
              />
              {errors.name && (
                <span className={styles.error}>
                  {errors.name}
                </span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="lastName">Apellido</label>
              <input type="text" id="lastName" value={lastName} onChange={(event) => {
                  setLastName(event.target.value);
                  if (errors.lastName) {
                    setErrors({
                      ...errors,
                      lastName: '',
                    });
                  }
                }}
                placeholder="Tu apellido"
                className={
                  errors.lastName ? styles.inputError : ''
                }
              />
              {errors.lastName && (
                <span className={styles.error}>
                  {errors.lastName}
                </span>
              )}
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="username">Nombre de usuario</label>
            <input type="text" id="username" value={username} onChange={(event) => {
                setUsername(event.target.value);
                if (errors.username) {
                  setErrors({
                    ...errors,
                    username: '',
                  });
                }
              }}
              placeholder="Ej: techuser"
              className={
                errors.username ? styles.inputError : ''
              }
            />
            {errors.username && (
              <span className={styles.error}>
                {errors.username}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" value={email} onChange={(event) => {
                setEmail(event.target.value);
                if (errors.email) {
                  setErrors({
                    ...errors,
                    email: '',
                  });
                }
              }}
              placeholder="correo@ejemplo.com"
              className={
                errors.email ? styles.inputError : ''
              }
            />
            {errors.email && (
              <span className={styles.error}>
                {errors.email}
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

          <div className={styles.field}>
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(event) => {
                setConfirmPassword(event.target.value);
                if (errors.confirmPassword) {
                  setErrors({
                    ...errors,
                    confirmPassword: '',
                  });
                }
              }}
              placeholder="••••••••"
              className={
                errors.confirmPassword
                  ? styles.inputError
                  : ''
              }
            />
            {errors.confirmPassword && (
              <span className={styles.error}>
                {errors.confirmPassword}
              </span>
            )}
          </div>

          <button type="submit" className={styles.button}>Crear cuenta</button>
          {message && (<p className={styles.success}>{message}</p>)}
        </form>

        <div className={styles.login}>
          <span>¿Ya tienes una cuenta?</span><Link href="/login">Iniciar sesión</Link>
        </div>

      </section>
    </main>
  );
}

export default Register;