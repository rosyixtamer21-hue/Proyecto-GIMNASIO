document.getElementById('formContacto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || correo === '' || mensaje === '') {
        alert('Por favor, completa todos los campos antes de enviar.');
        return;
    }

    if (!correo.includes('@') || !correo.includes('.')) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    const datosCliente = {
        nombre: nombre,
        correo: correo,
        mensaje: mensaje
    };

    fetch('http://localhost:8080/api/contacto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosCliente)
    })
    .then(response => {
        if (response.ok) {
            alert('¡Mensaje enviado correctamente a Spring Boot!');
            document.getElementById('formContacto').reset();
        } else {
            alert('Hubo un error al enviar los datos al servidor.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('No se pudo conectar con el servidor.');
    });
});