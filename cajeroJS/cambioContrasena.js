export function cambioContrasena() {

  let intentos = 0;
  const intentosMax = 3;

  let passGuardada = localStorage.getItem("password");

  while (intentos < intentosMax) {
    let passActual = prompt("¡Bienvenido al modulo para cambio de contraseña!\nIngrese su contraseña actual:");
    if (passActual === passGuardada) {
      let nueva = prompt("Digite su nueva contraseña:");
      if (nueva) {
        localStorage.setItem("password", nueva);
        alert("Contraseña actualizada exitosamente");
      } else {
        alert("No ingresaste una nueva contraseña");
      }
      return;
    } else {
      intentos++;
      alert("Contraseña incorrecta. Intentos restantes: " + (intentosMax - intentos));
    }
  }

  alert("Superaste el número máximo de intentos. Usuario bloqueado");
}