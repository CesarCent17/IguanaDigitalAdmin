document.getElementById("Login").addEventListener("click", LoginAPI);

async function LoginAPI(){
    alert("Funcion LoginAPI")
    
    const options = {method: 'GET'};
    let email = document.getElementById('EmailTxt').value;
    let password = document.getElementById('PasswordTxt').value;
    if(email == '' || password == ''){
        alert("Error debe llenar los campos")
        return;
    }
    let endpoint = 'http://localhost:9898/api/es/usuario/v1/'+email+'/'+password
    alert(endpoint)
    await fetch(endpoint, options)
    .then(response => response.json())
    .then(response =>{
        // alert(response)
        obj = response;
        let mensaje = "El usuario "+obj.nombreCompleto+" ha iniciado sesion!"
        alert(mensaje);
        window.location.href = 'html/usuarios.html'
    })
    .catch(err => console.error(err));
    alert("fin de promesa")
}
