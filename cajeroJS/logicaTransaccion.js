import consultarMovimientos from "./logicaMovimiento.js";

let saldoCuenta = parseFloat(localStorage.getItem("saldo")) || 0; 


const historialTransacciones = [];

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
   
    if (Number.isNaN(monto)) {
        alert("Operación cancelada o valor no válido.");
        return false;
    }

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

    
    historialTransacciones.push({
        tipo: 'retiro',
        monto: monto,
        fecha: new Date().toLocaleString()
    });

    return true;
}

function consignarDinero(monto) {
    
    if (Number.isNaN(monto)) {
        alert("Operación cancelada o valor no válido.");
        return false;
    }

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

    
    historialTransacciones.push({
        tipo: 'consignacion',
        monto: monto,
        fecha: new Date().toLocaleString()
    });

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

function obtenerHistorialTransacciones() {
    return historialTransacciones;
}

// Método principal

export function ejecutarSistemaBancario() {
    let continuar = true;
    
    mostrarBienvenida();
    
    while (continuar) {
 
        let menuInicial = `

MENÚ PRINCIPAL            
Seleccione una opción (1-5):

1. Retirar dinero                 
2. Consignar dinero               
3. Consultar saldo                
4. Consultar movimientos          
5. Salir                          `;

        let opcion = prompt(menuInicial);
        
        switch (opcion) {
            case "1":
                let inputRetiro = prompt("Ingrese el monto a retirar: $");
                // Aqui hacemos la opcion de cancelar la operacion con el prompt
                if (inputRetiro === null) {
                    alert("Operación de retiro cancelada.");
                } else {
                    let montoRetiro = parseFloat(inputRetiro);
                    retirarDinero(montoRetiro);
                }
                break;
                
            case "2":
                let inputConsignacion = prompt("Ingrese el monto a consignar: $");
                
                if (inputConsignacion === null) {
                    alert("Operación de consignación cancelada.");
                } else {
                    let montoConsignacion = parseFloat(inputConsignacion);
                    consignarDinero(montoConsignacion);
                }
                break;
                
            case "3":
                consultarSaldo();
                break;
                
            case "4":
                consultarMovimientos();
                break;
                
            case "5":
                alert(
                    `Gracias por usar nuestro sistema bancario\n` +
                    `Hasta luego`
                );
                continuar = false;
                break;
                
            default:
                alert("Opción inválida. Por favor seleccione una opción entre 1 y 5.");
        }
        
    }
}

export { retirarDinero, consignarDinero, obtenerHistorialTransacciones };