let intentoMax = 3;

function inicioSesion() {
    let user = prompt("Ingrese su usuario:");
    const userStorage = localStorage.getItem("user");

    let password = prompt("Ingrese su contraseña:");
    const passwStorage = localStorage.getItem("password");

    
    for (let conIntentos = 1; conIntentos <= intentoMax; conIntentos++) {
        if (user === userStorage && password === passwStorage) {
            console.log("Inicio de sesión exitoso.");
            return true; 
        }
      
        console.log(`Intento ${conIntentos} de ${intentoMax}.`);
        alert(`Usuario o contraseña incorrectos Intente nuevamente`)
        console.log(`Error: Usuario o contraseña incorrectos. Quedan ${intentoMax - conIntentos} intentos.`);
        
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
