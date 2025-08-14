let opcion;

while (opcion !== 3) {
  opcion = parseInt(
    prompt(
      "Bienvenido a Banchibchombia \nPorfavor seleecione una opción valida\n1. Iniciar sesión\n2. Quiero registrarme\n3. Salir"
    )
  );

  switch (opcion) {
    case 1:
      {
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
