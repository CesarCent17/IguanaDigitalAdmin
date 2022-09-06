// alert("Pruebaaaa")
// eliminarUsuario("97795f25-dc25-42ba-8b22-ae8e18c67e23")
// const BtnEliminar = document.querySelector(".eliminarUsuario")

// const BtnEliminar = document.getElementById(btnEliminar).onclick = function(){
//     eliminarUsuario(id)
// }

// async function eliminarUsuario(id){
//     alert("FUNCION ELIMINAR")
//     if (!confirm("¿Desea eliminar este usuario?")){
//         return;
//     }
//     const endpoint = "https://appgizlorecords.herokuapp.com/api/es/usuario/v1/"+id
//     const options = {
//         method: 'DELETE',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }
//     }
//     const request = await fetch(endpoint, options);
//     console.log(request)
//     location.reload();
// }