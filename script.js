// Mecanismo de Pesquisa com Google
let entrada = document.querySelector('.entrada_pesquisa');
let botao = document.querySelector('.botao_pesquisa');
botao.onclick = function(){
  let url = 'https://www.google.com.br/search?q=' + entrada.value;
  window.open(url);
}
/************************************** */

// Progresso barra do perfil
let cont = 70;
function progresso(){
  cont += 30;
  let barraProg = document.querySelector('.barra');
  barraProg.innerHTML = cont + "%";
  barraProg.style.width = cont + "%";
  alert("OK!");
}
//************************************ */

/* Checkbox
const checkBox = document.querySelector("#chk_box");
checkBox.addEventListener("change", function() {
  if (this.checked) {
    console.log("marcado...");
    function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  } else {
    console.log("não selecionado...");
  }
})*/

const cadastro = {};

let nome = document.querySelector("#nome");
nome.addEventListener("blur", (e) => {
  cadastro.usuario = nome;
});

let email1 = document.querySelector("#email");
email1.addEventListener("blur", (e) => {
  cadastro.email = email1;
});

let senha = document.querySelector("#pass");
senha.addEventListener("blur", (e) => {
  cadastro.pass = senha;
});

function validadeFormCadastro() {
  let x = document.forms["formCadastro"]["nome"].value;
  let y = document.forms["formCadastro"]["email"].value;
  let z = document.forms["formCadastro"]["pass"].value;
  if (x !== '' && y !== '' && z !== '') {
    alert("Cadastrado com sucesso!")
    return true;
  } else {
    alert("Preencha os campos corretamente");
    return false;
  }
}

function validateForm() {
  let x = document.forms["meuForm"]["email"].value;
  let y = document.forms["meuForm"]["pswd"].value;
  if (x === cadastro.email && y === cadastro.senha) {
    alert("Bem vindo: " + cadastro.usuario);
    return true;    
  } else {
    alert("Email ou Senha não encontrado!");
    return false;
  }
}

const listaLogin = {};

let l_email = document.querySelector("#email_login");
l_email.addEventListener("blur", (e) => {
  listaLogin.email = l_email;
});

let l_senha = document.querySelector("#pswd");
l_senha.addEventListener("blur", (e) => {
  listaLogin.senha = l_senha;
});


function validaLogin() {
  if (l_email === email1 && l_senha === senha) {
    alert("Login com sucesso!!");
    return true;
  } else {
    return false;
  }
}

// Api CEP
const cep = document.querySelector("#cep");

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

const showData = (result) => {
    for (const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo];
        }
    }
}

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "");
    console.log(search);
    
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {
        response.json()
        .then(data => {
            console.log(data)
            showData(data)
        })
    })
    .catch(e => {
        console.log("ERRO: "+e)
    })
})

/****************************************************** */

//CRIAR COOKIE
/*let user = cadastro.nome;



function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "" && user != null && user != undefined) {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 7);
     }
  }
}*/