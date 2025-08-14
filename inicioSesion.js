let intentoMax = 3;

function inicioSesion() {
    
    
    for (let conIntentos = 1; conIntentos <= intentoMax; conIntentos++) {
        let user = prompt("Ingrese su usuario:");
        let password = prompt("Ingrese su contraseña:");

        if (user === "admin" && password === "1234") {
            console.log("Inicio de sesión exitoso.");
            return true; 
        } else{
        console.log(`Intento ${conIntentos} de ${intentoMax}.`);
        alert(`Usuario o contraseña incorrectos Intente nuevamente`)
        console.log(`Error: Usuario o contraseña incorrectos. Quedan ${intentoMax - conIntentos} intentos.`)};
        git
        if (conIntentos === intentoMax) {
            alert("Cuenta bloqueada por 24 horas, comunícate con tu banco");
            console.log("Cuenta bloqueada por 24 horas, comunícate con tu banco");
            return false; 
        } 
        user = prompt("Ingrese su usuario:");
        password = prompt("Ingrese su contraseña:");
    }
    return false;
}
inicioSesion()