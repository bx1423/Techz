export function validateName(name: string): string {
  const value = name.trim();

  if (!value) {
    return 'Ingresa tu nombre.';
  }

  if (value.length < 2) {
    return 'El nombre debe tener al menos 2 caracteres.';
  }

  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
    return 'El nombre solo puede contener letras.';
  }

  return '';
}

export function validateUsername(username: string): string {
  const value = username.trim();

  if (!value) {
    return 'Ingresa un nombre de usuario.';
  }

  if (value.length < 3) {
    return 'El nombre de usuario debe tener al menos 3 caracteres.';
  }

  if (!/^[a-zA-Z0-9_]+$/.test(value)) {
    return 'El usuario solo puede contener letras, números y _.';
  }

  return '';
}

export function validateEmail(email: string): string {
  const value = email.trim();

  if (!value) {
    return 'Ingresa tu correo electrónico.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(value)) {
    return 'Ingresa un correo electrónico válido.';
  }

  return '';
}

export function validatePassword(password: string): string {
  if (!password) {
    return 'Ingresa una contraseña.';
  }

  if (password.length < 8) {
    return 'La contraseña debe tener al menos 8 caracteres.';
  }

  if (!/[A-Z]/.test(password)) {
    return 'La contraseña debe contener al menos una mayúscula.';
  }

  if (!/[a-z]/.test(password)) {
    return 'La contraseña debe contener al menos una minúscula.';
  }

  if (!/[0-9]/.test(password)) {
    return 'La contraseña debe contener al menos un número.';
  }

  return '';
}

export function validateConfirmPassword(
  password: string,
  confirmPassword: string
): string {
  if (!confirmPassword) {
    return 'Confirma tu contraseña.';
  }

  if (password !== confirmPassword) {
    return 'Las contraseñas no coinciden.';
  }

  return '';
}