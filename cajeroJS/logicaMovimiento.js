import { obtenerHistorialTransacciones } from "./logicaTransaccion.js";

function consultarMovimientos() {
  const historialTransacciones = obtenerHistorialTransacciones();
  
  if (historialTransacciones.length === 0) {
    console.log("No hay movimientos registrados.");
    alert("No hay movimientos registrados.");
    return;
  }
  


  
  historialTransacciones.forEach((transaccion) => {
    const tipoOperacion = transaccion.tipo === 'retiro' ? 'Retiro' : 'Consignación';
    const fecha = transaccion.fecha;
    const monto = transaccion.monto;
    console.log("=== HISTORIAL DE MOVIMIENTOS ===");
    console.log(`${tipoOperacion}: $${monto.toLocaleString()} - Fecha: ${fecha}`);
    alert(`=== HISTORIAL DE MOVIMIENTOS ===
    ${tipoOperacion}: $${monto.toLocaleString()} - Fecha: ${fecha}`);
    
  });
}

export default consultarMovimientos;