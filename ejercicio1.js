console.log("\n                                                   ===== EJERCICIO 1 =====")

function procesarPedido(a, ...extras){
    const {cliente, producto, cantidad} = a;

    return {
        cliente,
        producto,
        cantidad,
        extras
    }

}

const pedido = {
    cliente: "Dan",
    producto: "Manzanas",
    cantidad: "3"
}

let nuevo = procesarPedido(pedido, "Extra1", "Extra2", "Extra3");

console.log(nuevo);