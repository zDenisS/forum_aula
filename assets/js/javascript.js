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

    document.getElementById("div-avatar").style.marginTop = "-10px";
    document.getElementById("botao-sair").style.visibility = "visible";
    document.getElementById("img-avatar1").style.visibility= "visible";
    document.getElementById("botao-login").style.visibility = "hidden";
    document.getElementById("botao-cadastrar").style.visibility = "hidden";

}

function Cadastrar(){
    var nome = document.getElementById("Cnome").value;
    var email = document.getElementById("Cemail").value;
    var senha = document.getElementById("Csenha").value;
    var data = document.getElementById("Cdata").value;    

    document.getElementById("UCnome").innerHTML = nome;
    document.getElementById("UCemail").innerHTML = email;
    document.getElementById("UCsenha").value = senha;
    document.getElementById("labelteste").innerHTML = data;
}

function Sair(){
    var avatar1 = "assets/img/avatar0.png";
    var conectado = "Desconectado";
    var email = "...";
    var imagem = document.getElementsByClassName("mg-avatar1");
    document.getElementById("status-email").innerHTML = email;
    document.getElementById("status-nome").innerHTML = "...";
    document.getElementById("status").innerHTML = conectado;

    document.getElementById("img-avatar").src = avatar1;
    document.getElementById("img-avatar1").src = avatar1;

    document.getElementById("div-avatar").style.marginTop = "0";
    document.getElementById("botao-sair").style.visibility = "hidden";
    document.getElementById("img-avatar1").style.visibility= "hidden";
    document.getElementById("botao-login").style.visibility = "visible";
    document.getElementById("botao-cadastrar").style.visibility = "visible";
}

function Sair2(){

    document.getElementById("botao-sair").style.visibility = "hidden";
    document.getElementById("img-avatar1").style.visibility= "hidden";
    document.getElementById("botao-login").style.visibility = "visible";
    document.getElementById("botao-cadastrar").style.visibility = "visible";
}