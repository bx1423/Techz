export function validateIdentifier(identifier: string): string {
  const value = identifier.trim();

  if (!value) {
    return 'Ingresa tu nombre de usuario o correo electrónico.';
  }

  if (value.includes('@')) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      return 'Ingresa un correo electrónico válido.';
    }
  } else if (value.length < 3) {
    return 'El nombre de usuario debe tener al menos 3 caracteres.';
  }

  return '';
}

export function validatePassword(password: string): string {
  if (!password) {
    return 'Ingresa tu contraseña.';
  }

  if (password.length < 8) {
    return 'La contraseña debe tener al menos 8 caracteres.';
  }

  return '';
}