function Logar(){
    var avatar1 = "assets/img/avatar1.png";
    var conectado = "Conectado";
    var email = document.getElementById("login-email").value;
    var imagem = document.getElementsByClassName("mg-avatar1");
    document.getElementById("status-email").innerHTML = email;
    document.getElementById("status-nome").innerHTML = "Fulano";
    document.getElementById("status").innerHTML = conectado;

    document.getElementById("img-avatar").src = avatar1;
    document.getElementById("img-avatar1").src = avatar1;

    document.getElementById("div-avatar").style.marginTop = "-10px"
}