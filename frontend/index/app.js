const apiUrl = "http://localhost:4000/api/usuarios"; // Reemplaza con la URL de tu API

function suscribirse() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
        name: name,
        email: email,
        password: password
    };

    // Realiza la solicitud POST a la API
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Manejar la respuesta de la API
        console.log(data);
        window.location.href = './zapato.html';
    })
    .catch(error => {
        console.error('Error:', error);
        // Puedes mostrar mensajes de error al usuario
    });
}