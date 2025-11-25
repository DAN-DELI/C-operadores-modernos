console.log("\n                                                   ===== EJERCICIO 6 =====")

const ventas = [
    { producto: "Teclado", detalles: {precio: 50, unidades: 2} },
    { producto: "Ratón", detalles: {precio: 20, unidades: 5} },
    { producto: "Monitor", detalles: {precio: 200, unidades: 1} }
];

function detallesDelPrimerProducto(){
    const[,,{detalles: {precio, unidades} }] = ventas;
    console.log(`Precio ${precio}, Unidades ${unidades}`);

    return precio * unidades;
}

console.log("El precio del total de productos es de " + detallesDelPrimerProducto());