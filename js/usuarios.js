$(document).ready(
    function(){
        cargarUsuarios();
        // $('#usuarios').DataTable();
    }
);


async function cargarUsuarios(){
    const options = {
        method: 'GET',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        }};
    const endpoint = 'https://appgizlorecords.herokuapp.com/api/es/usuario/empresa/v1/1'

    const request = await fetch(endpoint, options);
    const listaUsuarios = await request.json();

    let listadoHtml = '';
    for(let usuario of listaUsuarios){
        let btnActualizar = '<button type="button" class="btn btn-info">Actualizar</button>'
        let btnEliminar = '<button type="button" class="btn btn-danger m-2 eliminarUsuario" onclick="eliminarUsuario(' + String(usuario.id) + ')" id="btnEliminar">Eliminar</button>'

        let usuarioHtml = '<tr><td>' + usuario.id
            + '</td><td>' + usuario.nombreCompleto + '</td><td>' + usuario.estado
            + '</td><td>' + usuario.email + '</td><td>' + usuario.contrasenia
            + '</td><td>'+ btnActualizar + btnEliminar +'</td></tr>';
        listadoHtml += usuarioHtml;
    }
    document.querySelector('#usuarios tbody').outerHTML = listadoHtml;
}

async function eliminarUsuario(id){
    alert("FUNCION ELIMINAR")
    if (!confirm("¿Desea eliminar este usuario?")){
        return;
    }
    const endpoint = "https://appgizlorecords.herokuapp.com/api/es/usuario/v1/"+id
    const options = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    const request = await fetch(endpoint, options);
    console.log(request)
    location.reload();
}

