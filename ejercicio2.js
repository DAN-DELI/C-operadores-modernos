console.log("\n                                                   ===== EJERCICIO 2 =====")

const inventario = ["camara", "tripode", "microfono"]

function agregarInventario(lista, ...nuevoItem){
    const nuevaLista = [...lista, ...nuevoItem]
    console.log(`La lista actualizada contiene ${nuevaLista.lenght} argumentos`)
    return nuevaLista
}

const nuevaLista = agregarInventario(inventario, "periferico", "celular");

console.log(inventario)
console.log(nuevaLista)