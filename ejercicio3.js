console.log("\n                                                   ===== EJERCICIO 3 =====")

function registrarActividad(usuario) {
  try {
    const { nombre, fecha } = usuario;

    // Condicional para analizar el codigo
    if (!nombre || !fecha) {
      console.log("No se han definido los valores");
    }

    console.log(`Actividad registrada: Usuario ${nombre} en la fecha ${fecha}`);
    return { nombre, fecha };
    // En caso de que nombre o edad no esten definidos
  } catch (error) {
    console.error("No se ha definido nombre o fecha", error.message);
  }
  return null;
}

const usuario = {
  nombre: "Dan",
  fecha: "22/11/25"
};

registrarActividad(usuario);
