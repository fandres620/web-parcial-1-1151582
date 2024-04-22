mostrarDatosUsuario();
async function mostrarDatosUsuario() {

  let usuario = await getUsuario();
  let notas =  await obtenerNotas(usuario.codigo);
  console.log(notas);

  if (usuario) {
      document.getElementById('codigo').value = usuario.codigo;
      document.getElementById('nombre').value = usuario.nombre;
  } else {
      let userDataDiv = document.getElementById('userData');
      userDataDiv.innerHTML = `<p>No hay usuario registrado.</p>`;
  }
}

async function obtenerNotas(codigo) {
  try {
      const response = await fetch(`https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/students/${codigo}/notas`);
      if (!response.ok) {
          throw new Error('Error al obtener las notas');
      }
      const data = await response.json();
      console.log(data); // Aquí puedes hacer lo que necesites con los datos recibidos
  } catch (error) {
      console.error("Error en la petición:", error);
  }
}
