var firstNumber;
var secondNumber;


function start () {
  document.getElementById('result').onkeydown = sprawdz;
  firstNumber = Math.round(Math.random() * 10);
  secondNumber = Math.round(Math.random() * firstNumber);
  document.getElementById('result').value = ''
  document.getElementById('result').style.backgroundColor = 'white';

  document.getElementById('firstnumber').innerText = firstNumber;
  document.getElementById('secondnumber').innerText = secondNumber;

  var dolnaramka = document.getElementById('dolnaramka');

  dolnaramka.innerHTML = null;

  drawkratki();

}

function sprawdz() {
  var odpowiedz = parseInt(document.getElementById('result').value)
  var roznica = firstNumber - secondNumber;
    if (event.keyCode === 13) {
     console.log(odpowiedz) 

     if (odpowiedz === roznica) {
      console.log('brawo jasiu')
      document.getElementById('result').style.backgroundColor = 'green'
      setTimeout( start, 2000 )
    } else {
      document.getElementById('result').style.backgroundColor = 'red'
    }
    }

}

function fillkratka(event) {
  let kratka = event.target

  let color = kratka.dataset.index < 5
    ? 'red' 
    : 'green'

  kratka.style.backgroundColor = kratka.style.backgroundColor === color
    ? 'white'
    : color
}


function drawkratki() {
  var dolnaramka = document.getElementById('dolnaramka');
  for (let kratkaIndex = 0; kratkaIndex < 10; kratkaIndex++) {
    var kratka = document.createElement("div");
    kratka.className = 'kratka';
    dolnaramka.appendChild(kratka);
    kratka.dataset.index = kratkaIndex;
    kratka.onclick = fillkratka
  }
}

