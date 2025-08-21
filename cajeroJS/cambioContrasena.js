let Newpassword;
const passwStorage = localStorage.getItem("password");
let intentos = 0;
let intentoMax = 3;

export function cambioContrasena() {
  do {
    alert("¡Bienvenido al modulo para cambio de contraseña!\nLe solicitaremos su contraseña actual por lo que debe recordarla.");
    let password = prompt("Ingrese su contraseña actual");

    if (password === passwStorage) {
      Newpassword = prompt("Digite su nueva contraseña");
      localStorage.setItem("password", Newpassword);  // <- Aquí también te corregí la lógica
      alert("Contraseña actualizada exitosamente");
      break;
    } else {
      intentos++;
      alert("Contraseña incorrecta");

      if (intentos >= intentoMax) {
        alert("Ha superado el número máximo de intentos. Usuario bloqueado.");
        break;
      }
    }
  } while (true);  // ← Aquí cerramos el bloque del do

}