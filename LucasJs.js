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
        document.documentElement.style.setProperty('--color-rei', '#07182d');
        document.documentElement.style.setProperty('--color-barra', '#000b16');
        document.querySelectorAll('.texto p').forEach(link3 => {
            link3.style.color = "white"
        })
        document.querySelectorAll('.texto-feedback h2').forEach(link4 => {
            link4.style.color = "white"
        })
        document.getElementById('retangle').style.backgroundColor = 'black'
    } else{
        OnOff.style.justifyContent = "left"
        OnOff.style.animationName = ""
        document.body.classList.remove('DarkMode')
        OnOff.style.backgroundColor = "white"
        Circle.style.backgroundColor = "#2F2F2F"
        document.documentElement.style.setProperty('--color-rei', '#374B62');
        document.documentElement.style.setProperty('--color-barra', '#1D3753');
        document.querySelectorAll('.texto').forEach(link2 => {
            link2.classList.remove('textoDark');
          });
          document.querySelectorAll('.texto-feedback h2').forEach(link4 => {
            link4.style.color = "black"
        });
        document.querySelectorAll('.texto p').forEach(link3 => {
            link3.style.color = "black"
        });
        document.getElementById('retangle').style.backgroundColor = 'white'
    }
  }