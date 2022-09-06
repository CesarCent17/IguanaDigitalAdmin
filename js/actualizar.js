async function updateUser(){
    let obj = {};
    obj.id = document.getElementById('idUsuarioTxt').value
    obj.nombreCompleto = document.getElementById('nombreCompletoTxt').value
    obj.email = document.getElementById('EmailTxt').value
    obj.estado = document.getElementById('estadoOpciones').value
    obj.contrasenia = document.getElementById('PasswordTxt').value

    console.log(obj)
    const request = await fetch('https://appgizlorecords.herokuapp.com/api/es/usuario/v1', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    alert("El usuario fue actualizado con exito!")
    // window.location.href = 'html/usuarios.html';
    // window.location.reload('html/usuarios.html')
    // location.reload();
}

