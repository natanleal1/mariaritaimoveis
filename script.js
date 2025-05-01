var checkbar = false;
var all = document.getElementById('all');
var selection = document.getElementById('selecao');

function Ative() {
    checkbar = !checkbar;
    if(checkbar) {
        selection.style.marginLeft = "-10vw";
        selection.style.animationName = "animacao";
        all.style.filter = "blur(2px)";
    } else{
        selection.style.marginLeft = "-100vw";
        selection.style.animationName = "";
        all.style.filter = "";
    }
}
function fechar() {
    if (checkbar) {
      Ative();
    }
  }
  window.addEventListener("resize", function (event) {
    if (window.innerWidth > 425 && animacao) {
      Ative();
    }
  });

  darks = false
  var OnOff = document.getElementById('OnOff')
  var Circle = document.getElementById('circle')


  function DarkMode() {
    darks = !darks
    if(darks) {
        OnOff.style.justifyContent = "right"
        OnOff.style.animationName = "darkmodeactive"
        document.body.classList.add('DarkMode')
        OnOff.style.backgroundColor = "#2F2F2F"
        Circle.style.backgroundColor = "white"
        document.documentElement.style.setProperty('--color-rei', '#07182d');
        document.documentElement.style.setProperty('--color-barra', '#000b16');
        document.documentElement.style.setProperty('--color-azul', '#000021');
        document.querySelectorAll('.texto-lado p').forEach(link2 => {
          link2.style.color = "white";
        });
        document.querySelectorAll('#cima').forEach(link3 => {
          link3.classList.add('icones');
          link3.classList.remove('icones-dark')
        });
        document.querySelectorAll('.imagem-a').forEach(link4 => {
          link4.style.border = "2px solid white";
        });
        document.querySelectorAll('.card-container .card').forEach(link5 => {
          link5.style.background = 'linear-gradient(270deg, #222121,black)';
        });
        document.querySelectorAll('.text-container').forEach(link6 => {
          link6.style.color = 'white';
        });
        document.getElementById('retangle').style.backgroundColor = 'black'
    } else{
        OnOff.style.justifyContent = "left"
        OnOff.style.animationName = ""
        document.body.classList.remove('DarkMode')
        OnOff.style.backgroundColor = "white"
        Circle.style.backgroundColor = "#2F2F2F"
        document.documentElement.style.setProperty('--color-rei', '#374B62');
        document.documentElement.style.setProperty('--color-barra', '#1D3753');
        document.documentElement.style.setProperty('--color-azul', '#202070');
        document.querySelectorAll('#cima').forEach(link3 => {
            link3.classList.add('icones-dark');
            link3.classList.remove('icones')
          });
        document.querySelectorAll('.texto-lado p').forEach(link2 => {
            link2.style.color = "black";
          });
          document.querySelectorAll('.imagem-a').forEach(link4 => {
            link4.style.border = "2px solid black";
          });
          document.querySelectorAll('.card-container .card').forEach(link5 => {
            link5.style.background = 'linear-gradient(270deg, #e7dada,#cececec4 ) ';
          });
          document.querySelectorAll('.text-container').forEach(link6 => {
            link6.style.color = 'black';
          });
        document.getElementById('retangle').style.backgroundColor = 'white'
    }
  }
//parte de edson formulário
const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const imovel = document.getElementById("imovel");
const cpf = document.getElementById("cpf")
const data = document.getElementById("date")

form.addEventListener("submit", (event) => {
    event.preventDefault();

   checkForm();
   
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})

telefone.addEventListener("blur", () => {
    checkInputTelefone();
})

cpf.addEventListener("blur", () => {
    checkInputCPF();
})

imovel.addEventListener("blur", () => {
    checkInputImovel();
})

data.addEventListener("blur", () => {
    checkInputData();
})


function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Preencha o seu nome.")
 }else{
    const formItem = username.parentElement;
    formItem.className = "form-content"
}
}

function checkInputData(){
    const dataValue = data.value;

    if(dataValue === ""){
        errorInput(data, "Preencha com uma data.")
 }else{
    const formItem = data.parentElement;
    formItem.className = "form-content"
}
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "O email é obrigatório.")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputCPF(){
    const CPFValue = cpf.value;

    if(CPFValue === ""){
        errorInput(cpf, "O CPF é obrigatório")
    }else{
        const formItem = cpf.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputImovel(){
    const imovelValue = imovel.value;

    if (imovelValue === "Spazio Imperatriz" || 
        imovelValue === "Parque dos Marqueses" || 
        imovelValue === "Portal de Piatã" || 
        imovelValue === "Parque dos Principes" || 
        imovelValue === "Reserva das Flores" || 
        imovelValue === "Reserva da Colina" || 
        imovelValue === "Sensia Urban Piatã" || 
        imovelValue === "Sensia Urban Stiep" || 
        imovelValue === "Solar das Amoreiras") 
    {
        const formItem = imovel.parentElement;
        formItem.className = "form-content";
    } 
    else if (imovelValue === "") 
    {
        errorInput(imovel, "Preencha aqui com o nome do imóvel igual ao anúncio acima");
    } 
    else 
    {
        errorInput(imovel, "O nome do imóvel necessita ser igual ao anúncio acima");
    }
}

function checkInputTelefone(){
    const telefoneValue = telefone.value;

    if(telefoneValue === ""){
        errorInput(telefone, "O telefone é obrigatório.")  
    }else{
        const formItem = telefone.parentElement;
        formItem.className = "form-content"
    }
}

   
function checkForm(){
     checkInputUsername();
    checkInputEmail();
    checkInputTelefone();
    checkInputImovel();

   
   
}

const formItems = form.querySelectorAll(".form-content")

const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
});




function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}
