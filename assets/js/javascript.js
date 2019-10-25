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

function Logar2(){

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
    document.getElementById("UCsenha").innerHTML = senha;
    document.getElementById("labelteste").innerHTML = data;
}

function Sair(){
    var avatar1 = "assets/img/avatar0.png";
    var conectado = "Desconectado";
    var email = "...";
    var senha = "";
    var MEmail = "";
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

    document.getElementById("login-senha").value = senha;
    document.getElementById("login-email").value = MEmail;
}


function Sair2(){
    var senha = "";
    var MEmail = "";
    document.getElementById("login-senha").value = senha;
    document.getElementById("login-email").value = MEmail;


    document.getElementById("botao-sair").style.visibility = "hidden";
    document.getElementById("img-avatar1").style.visibility= "hidden";
    document.getElementById("botao-login").style.visibility = "visible";
    document.getElementById("botao-cadastrar").style.visibility = "visible";
}


// adiciona nova LInha na tabela de tópicos
function adicionaLinha() {
    var tabela = document.getElementById("tabela");
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);   
    var celula3 = linha.insertCell(2); 

    var Nmensagem = "0";
    var Nvisual = "0";

    celula1.innerHTML = "<a href=''>" + document.getElementById("titulo").value +"</a>"; 
    celula2.innerHTML =  Nmensagem; 
    celula3.innerHTML =  Nvisual;
}

// funcao remove uma linha da tabela
function removeLinha(linha) {
  var i=linha.parentNode.parentNode.rowIndex;
  document.getElementById("tabela").deleteRow(i);
} 

// função para resposta do tópico
function responder(){
    var resposta = document.getElementById("MsgR").value;
    document.getElementById("textoResposta").value = resposta;

    document.getElementById("imagemResposta").style.visibility = "visible";
    document.getElementById("textoResposta").style.visibility = "visible";   
}


//nao finalizado
function novaSenha(){
    var novasenha = document.getElementById("Nlogin-senha").value;
    document.getElementById("UCsenha").innerHTML = novasenha;
}