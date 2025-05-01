var checkbar = false;
var all = document.getElementById('all');
var selection = document.getElementById('selecao');

function Ative() {
    checkbar = !checkbar;
    if(checkbar) {
        selection.style.marginLeft = "-10vw";
        selection.style.padding = "1em"
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
        FAQS.style.backgroundColor = "#5a5a5a"
        Quem.style.backgroundColor = "#2b2b2b"
        Onde.style.backgroundColor = "#0a0a0a"
        document.documentElement.style.setProperty('--color-rei', '#07182d');
        document.documentElement.style.setProperty('--color-barra', '#000b16');
        document.querySelector('h1').style.color = "white";
        document.getElementById('retangle').style.backgroundColor = 'black'
    } else{
        OnOff.style.justifyContent = "left"
        OnOff.style.animationName = ""
        document.body.classList.remove('DarkMode')
        OnOff.style.backgroundColor = "white"
        Circle.style.backgroundColor = "#2F2F2F"
        FAQS.style.backgroundColor = "#888888"
        Quem.style.backgroundColor = "#515151"
        document.documentElement.style.setProperty('--color-rei', '#374B62');
        document.documentElement.style.setProperty('--color-barra', '#1D3753');
        document.querySelector('h1').style.color = "black";
        Onde.style.backgroundColor = "#1E1E1E"
        document.getElementById('retangle').style.backgroundColor = 'white'
    }
  }

  let FAQS = document.getElementById('FAQS');
  let Quem = document.getElementById('option2');
  let Onde = document.getElementById('option3');

  FAQS.addEventListener("change", function() {
    Quem.innerHTML = "<option value=''>Selecione uma opção!</option>";
  
    if(FAQS.value === "opcao1"){
      Quem.innerHTML+=`
      <option value="Documents">Quais documentos preciso para financiar um imóvel?</option>
      <option value="Tirar">Quanto o banco pode aprovar de financiamento?</option>
      <option value="Week">Qual será o valor da minha parcela?</option>
      <option value="His">Qual é o valor do subsídio que posso receber?</option>
      <option value="Find">Tenho pendência no Serasa, posso comprar um imóvel?</option>
      <option value="Substituir">Os imóveis não vão ficar mais baratos?</option>`;
    }
    if(FAQS.value === "opcao3"){
      Quem.innerHTML+=`
      <option value="Teste5">Quem somos?</option>
      <option value="Teste3">Quais tipos de imóveis vocês trabalham?</option>
      <option value="Teste4">A imobiliária tem suporte online?</option>
      <option value="Teste6">A imobiliária cobra para fazer avaliação de imóvel?</option>`;
    }
  })

  Quem.addEventListener("change", function(){
    if(Quem.value === "Tirar"){
      Onde.innerHTML=`
      <p>"O valor do financiamento é definido de forma personalizada. Cada banco faz uma análise detalhada do perfil do comprador, considerando fatores como renda familiar, comprometimento da renda com outros financiamentos, idade dos proponentes e tipo do imóvel. Em geral, é possível financiar até 80% do valor do imóvel."</p>
      `
      Onde.classList.add('resposta2')
    }
    if(Quem.value === "Documents"){
      Onde.innerHTML=`
      <p>Para dar andamento no seu atendimento, é necessário esses documentos: RG, CPF ou CNH, Comprovante de residência atual, Certidão de estado civil. Lembrando que há especificações para cada situação(CLT, Func. Público, MEI, Informal ou Pró-labore), para saber entre em contato.</p>
      `
      Onde.classList.add('resposta2')
    }
    if(Quem.value === "Week"){
      Onde.innerHTML=`
      <p>"O valor da parcela do financiamento depende de diversos fatores: Valor total do imóvel, Percentual financiado aprovado pelo banco, Possível utilização de subsídio do governo (como o Minha Casa, Minha Vida), Uso do saldo do FGTS, Valor da entrada com recursos próprios, Com esses dados, é possível simular uma parcela que caiba no seu orçamento e se encaixe nas exigências da instituição financeira."</p>
      `
      Onde.classList.add('resposta1')
    }
    if(Quem.value === "His"){
      Onde.innerHTML=`
      <p>"O subsídio é um benefício do governo que ajuda a reduzir o valor financiado e, consequentemente, o valor das parcelas. Ele é concedido para famílias com renda de até R$ 4.400,00 mensais.
Já quem possui renda superior a esse valor, mesmo sem direito ao subsídio, pode se beneficiar de taxas de juros reduzidas — algumas das menores do mercado — dependendo do banco e do perfil de crédito."</p>
      `
      Onde.classList.add('resposta1')
    }
    if(Quem.value === "Find"){
      Onde.innerHTML=`
      <p>"Sim, é possível! Mas primeiro, é necessário negociar e quitar a pendência. Após o pagamento, em média, a baixa no Serasa ocorre dentro de 5 dias úteis. Assim que seu nome estiver limpo, você já pode dar andamento no processo de aprovação do financiamento. Ter o nome regularizado é essencial para obter crédito bancário."</p>
      `
      Onde.classList.add('resposta2')
    }
    if(Quem.value === "Substituir"){
      Onde.innerHTML=`
      <p>"É pouco provável. A tendência é de valorização constante, especialmente em regiões em crescimento. Comprar agora é investir antes da alta."</p>
      `
      Onde.classList.add('resposta')
    }
    if(Quem.value === "Teste5"){
      Onde.innerHTML=`
      <p>"Somos uma imobiliária especializada em vendas, locações e administração de imóveis, com atendimento personalizado e foco em soluções seguras e rápidas para nossos clientes."</p>
      `
      Onde.classList.add('resposta')
    }
    if(Quem.value === "Teste4"){
      Onde.innerHTML=`
      <p>"Sim! Atendemos por WhatsApp, redes sociais, e-mail e telefone."</p>
      `
      Onde.classList.add('resposta')
    }
    if(Quem.value === "Teste3"){
      Onde.innerHTML=`
      <p>"Trabalhamos com imóveis residenciais, comerciais, terrenos e lançamentos para venda."</p>
      `
      Onde.classList.add('resposta')
    }
    if(Quem.value === "Teste6"){
      Onde.innerHTML=`
      <p>"Não cobramos pela avaliação inicial para venda ou locação. Nosso objetivo é te ajudar a entender o valor real do seu imóvel no mercado atual."</p>
      `
      Onde.classList.add('resposta')
    }
  })