
async function enviarDatos() {
    let datos = {
        'codigo': document.getElementById('username').value,
        'clave': document.getElementById('password').value
    };
    
    try {
        let respuesta = await enviarPeticion(datos);
        if (respuesta.login) {
            localStorage.setItem('usuario', JSON.stringify(respuesta));
            window.location.href = '../home-page/homepage.html';
        } else {
            document.getElementById('username').value = "";
            document.getElementById('password').value = "";
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario o contraseña inválidos',
            });
        }
    } catch (error) {
        console.error("Error al enviar la petición:", error);
    }
}

function enviarPeticion(data) {
    return $.ajax({
        type: "POST",
        url: 'https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/login',
        dataType: 'json',
        data: data
    });
}
