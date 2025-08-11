let saldoCuenta = 50000; 
let nombreUsuario = "Juan Pérez"; 

function mostrarBienvenida() {
    console.log("\n Bienvenido al sistema bancario ");
    console.log(`Usuario: ${nombreUsuario}`);
    console.log(`Saldo actual: ${saldoCuenta.toLocaleString()}`);}

function retirarDinero(monto){
    if (monto <= 0) {
        alert("Error, el monto sólo puede contener números positivos");
        console.log("Error, el monto sólo puede contener números positivos");
        return false;
    }
    
    if (monto > saldoCuenta) {
        alert("Error: Saldo insuficiente.");
        console.log(`Error: Saldo insuficiente. Su saldo actual es: $${saldoCuenta.toLocaleString()}`);
        return false;
    }
    
    saldoCuenta -= monto;
    console.log(`Retiro exitoso de $${monto.toLocaleString()}`);
    console.log(`Su saldo actual es: $${saldoCuenta.toLocaleString()}`);
    return true;
}

function consignarDinero(monto) {
    if (monto <= 0) {
        console.log("Error, el monto sólo puede contener números positivos");
        return false;
    }
    
    saldoCuenta += monto;
    console.log(`Consignación exitosa de $${monto.toLocaleString()}`);
    console.log(`Su saldo actual es: $${saldoCuenta.toLocaleString()}`);
    return true;
}

// Método para consultar saldo
function consultarSaldo() {
    console.log(`Su saldo actual es: $${saldoCuenta.toLocaleString()}`);
    return saldoCuenta;
}

// Método principal
if (inicioSesion()) {
    ejecutarSistemaBancario();
}

function ejecutarSistemaBancario() {
    console.log("Sistema bancario iniciado");
    let continuar = true;
    
 
    mostrarBienvenida();
    
    while (continuar) {
 
        let menuInicial = `

           MENÚ PRINCIPAL            
Seleccione una opción (1-4):

1. Retirar dinero                 
2. Consignar dinero               
3. Consultar saldo                
4. Salir                          `;

        let opcion = prompt(menuInicial);
        
        switch (opcion) {
            case "1":
                console.log("\n--- RETIRAR DINERO ---");
                let montoRetiro = parseFloat(prompt("Ingrese el monto a retirar: $"));
                retirarDinero(montoRetiro);
                break;
                
            case "2":
                console.log("\n--- CONSIGNAR DINERO ---");
                let montoConsignacion = parseFloat(prompt("Ingrese el monto a consignar: $"));
                consignarDinero(montoConsignacion);
                break;
                
            case "3":
                console.log("\n--- CONSULTAR SALDO ---");
                consultarSaldo();
                break;
                
            case "4":
                console.log("\n Gracias por usar nuestro sistema bancario ");
                console.log(" Hasta luego");
                continuar = false;
                break;
                
            default:
                console.log("Opción inválida. Por favor seleccione una opción entre 1 y 4.");
        }
        
    }
}
ejecutarSistemaBancario();
