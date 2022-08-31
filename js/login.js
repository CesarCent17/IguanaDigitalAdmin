async function login(){
    // alert("Funcion Login")
 
    let email = document.getElementById('EmailTxt').value;
    let password = document.getElementById('PasswordTxt').value;
    if(email == '' || password == ''){
        alert("Error debe llenar los campos")
        return;
    }
    // alert(email);
    // alert(password);

    let url = 'http://10.35.3.16:9898/api/es/usuario/v1/'+email+'/'+password
    alert(url);
    const request = await fetch(url, {
        method: 'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    usuario = await request.json();
    let mensaje = "El usuario "+usuario.nombreCompleto+" ha iniciado sesion!"
    alert(mensaje);
    if(request.ok){
        window.location.href = 'usuarios.html'
    } else if(request.status == 500) {
        alert("Las credenciales son incorrectas");
    }
}