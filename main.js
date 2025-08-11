let opcion; 

do{
    opcion=parseInt(prompt("Bienvenido a Banchibchombia \nPorfavor seleecione una opción valida\n1. Iniciar sesión\n2. Quiero resgistrarme\n3. Salir"))

    switch(opcion){
        case 1:{
            if (inicioSesion()) {
            ejecutarSistemaBancario();}
        }break
        case 2:{
            registro()
        }break
        case 3:{
            alert("Su sesión ha sido cerrada, gracias por comunicarse con Banchibchombia")
        }break
        default:{
            alert("Opción no valida, concetradito")
        }break
    }
}while(opcion!==3)

