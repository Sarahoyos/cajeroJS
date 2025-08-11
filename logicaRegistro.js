let doc_id;
let usuario;
let email;
let password;
let password_confirm;

//Fuente validacion correo electreonico: https://www.geeksforgeeks.org/javascript/how-to-validate-email-address-using-regexp-in-javascript/

let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let estado

function validacionEmail(){
    do{
        email = prompt("Ingrese su correo electronico")
        if (regex.test(email)) {
            console.log("Valido");
            estado=true
        } else{
            console.log("Invalido");
            estado=false
            alert('Correo invalido. Intentelo nuevamente')
        }
    } while(estado!=true)

    return email;
}



function registroUsuario() {
    doc_id = parseInt(prompt("\n Ingrese su identificacion"))
    usuario = prompt("\n Ingrese su usuario")
    email = validacionEmail();

    do{
    password = prompt("\n Ingrese su contraseña")
    password_confirm = prompt("\n Confirme su contraseña")

    if(password !== password_confirm){
        alert("Sus contraseñas no coinciden, intentelo nuevamente");
    }

    } while(password!==password_confirm)
    
    alert("Registro completado")
    console.log("Registro completado con exito");

    alert(`-----Resumen de registro-----\n
    Documento registrado: ${doc_id}\n
    Usuario: ${usuario}\n
    Email: ${email}\n
    Contraseña: ************\n
    Si crees que hubo algun error comunicate a la linea 018000422222`)

    console.log(`-----Resumen de registro-----\n
    Documento registrado: ${doc_id}\n
    Usuario: ${usuario}\n
    Email: ${email}\n
    Contraseña: ************\n
    Si crees que hubo algun error comunicate a la linea 018000422222`)

    return true
}
