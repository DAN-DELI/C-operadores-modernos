console.log("\n                                                   ===== EJERCICIO 4 =====")

const defaults = { tema: "claro", idioma: "español"}

function configuracionUsuario(defaults, personalizadas){
    const configuracionCombinada = {...defaults, ...personalizadas};

    return configuracionCombinada;
}

const personalizacion1 = {idioma: "english"}
const {tema, idioma} = configuracionUsuario(defaults, personalizacion1)

console.log("personalizacion 1: Color de tema " + tema + " junto con el idioma " + idioma)