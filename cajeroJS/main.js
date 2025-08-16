let opcion;

while (opcion !== 3) {
  opcion = parseInt(
    prompt(
      "Bienvenido a Banchibchombia \nPorfavor seleecione una opción valida\n1. Iniciar sesión\n2. Quiero registrarme\n3.Cambiar contraseña\n4. Salir"
    )
  );

  switch (opcion) {
    case 1:
       if (inicioSesion()) {
        ejecutarSistemaBancario();
      }
      break;
    case 2:
      {
        registroUsuario();
      }
      break;
    case 3:
      {
        cambioContrasena();
      }
      break;
      case 4:
      {
        alert(
          "Su sesión ha sido cerrada, gracias por comunicarse con Banchibchombia"
        );
      }
      break;
    default:
      {
        alert("Opción no valida, concetradito");
      }
      break;
  }
}
