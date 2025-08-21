let saldoCuenta = parseFloat(localStorage.getItem("saldo")) || 0; 

function mostrarBienvenida() {
    let nombreUsuario = localStorage.getItem("user") || "Usuario desconocido";
    alert(`Bienvenido al sistema bancario\n` +
        `------------------------------\n` +
        `Usuario: ${nombreUsuario}\n` +
        `Saldo actual: $${saldoCuenta.toLocaleString()}\n` +
        `------------------------------`
    );
}   

function retirarDinero(monto) {
    if (monto <= 0) {
        alert("Error, el monto sólo puede contener números positivos");
        return false;
    }
    
    if (monto > saldoCuenta) {
        alert(`Error: Saldo insuficiente. Su saldo actual es: $${saldoCuenta.toLocaleString()}`);
        return false;
    }
    
    saldoCuenta -= monto;
    localStorage.setItem("saldo", saldoCuenta); //  Guardar nuevo saldo
alert(
        `Retiro exitoso\n` +
        `------------------------------\n` +
        `Monto retirado: $${monto.toLocaleString()}\n` +
        `Saldo actual: $${saldoCuenta.toLocaleString()}\n` +
        `------------------------------`
    );
    return true;
}

function consignarDinero(monto) {
    if (monto <= 0) {
        alert("Error, el monto sólo puede contener números positivos");
        return false;
    }
    
    saldoCuenta += monto;
    localStorage.setItem("saldo", saldoCuenta); //  Guardar nuevo saldo
   alert(
        `Consignación exitosa\n` +
        `------------------------------\n` +
        `Monto consignado: $${monto.toLocaleString()}\n` +
        `Saldo actual: $${saldoCuenta.toLocaleString()}\n` +
        `------------------------------`
    );
    return true;
}

function consultarSaldo() {
    let nombreUsuario = localStorage.getItem("user") || "Usuario desconocido";
   alert(
        `Consulta de saldo\n` +
        `------------------------------\n` +
        `Usuario: ${nombreUsuario}\n` +
        `Saldo actual: $${saldoCuenta.toLocaleString()}\n` +
        `------------------------------`
    );
    return saldoCuenta;
}

// Método principal

export function ejecutarSistemaBancario() {
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
                let montoRetiro = parseFloat(prompt("Ingrese el monto a retirar: $"));
                retirarDinero(montoRetiro);
                break;
                
            case "2":
                let montoConsignacion = parseFloat(prompt("Ingrese el monto a consignar: $"));
                consignarDinero(montoConsignacion);
                break;
                
            case "3":
                consultarSaldo();
                break;
                
            case "4":
                alert(
                    `Gracias por usar nuestro sistema bancario\n` +
                    `Hasta luego`
                );
                continuar = false;
                break;
                
            default:
                alert("Opción inválida. Por favor seleccione una opción entre 1 y 4.");
        }
        
    }
}