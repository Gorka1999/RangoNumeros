const num1 = document.querySelector("#numero1");
const num2 = document.querySelector("#numero2");
const rango = document.querySelector("#rango");

const tres = document.querySelector("#tres");
const impar = document.querySelector("#impar");

//imprime un rango entre dos numeros introducidos

function rangoNumeros() {
  let valor1 = parseInt(num1.value);
  let valor2 = parseInt(num2.value);
  let resultado = " ";
  let i;
  resultado += "<ul>";

  if (valor1 <= valor2) {
    for (i = valor1; i <= valor2; i++) {
      resultado += `<li> ${i} </li>`;
    }
  } else if (valor1 >= valor2) {
    for (i = valor1; i >= valor2; i--) {
      resultado += `<li> ${i} </li>`;
    }
  }
  rango.innerHTML = resultado;
}
// rango de numeros introducidos de 3 en 3
function detresentres() {
  let valor1 = parseInt(num1.value);
  let valor2 = parseInt(num2.value);
  let resultado = " ";
  let i;
  resultado += "<ul>";

  if (valor1 <= valor2) {
    for (i = valor1; i <= valor2; i = i + 3) {
      resultado += `<li> ${i} </li>`;
    }
  } else if (valor1 >= valor2) {
    for (i = valor1; i >= valor2; i = i - 3) {
      resultado += `<li> ${i} </li>`;
    }
  }
  tres.innerHTML = resultado;
}
// rango de numeros impares
function impares() {
  let valor1 = parseInt(num1.value);
  let valor2 = parseInt(num2.value);
  let resultado = " ";
  let i;
  resultado += "<ul>";

  if (valor1 <= valor2) {
    for (i = valor1; i <= valor2; i++) {
      if (i % 2 != 0) {
        resultado += `<li> ${i} </li>`;
      }
    }
  } else if (valor1 >= valor2) {
    for (i = valor1; i >= valor2; i = i - 3) {
      resultado += `<li> ${i} </li>`;
    }
  }
  impar.innerHTML = resultado;
}

function check() {
  let clicau = document.querySelector("#clicau");

  if (clicau.checked) {
    document.querySelector("#boton").disabled = false;
  } else {
    document.querySelector("#boton").disabled = true;
  }
}
function check1() {
  let clicau1 = document.querySelector("#clicau1");

  if (clicau1.checked) {
    document.querySelector("#boton1").disabled = false;
  } else {
    document.querySelector("#boton1").disabled = true;
  }
}
// cliquear el checbox y que se active el boton de aceptar mendiante Switch
function check2() {
  let clicau2 = document.querySelector("#clicau2");
  let pulsado = clicau2.checked;
  switch (pulsado) {
    case true:
      boton2.disabled = false;
      break;
    case false:
      boton2.disabled = true;
      break;
  }
}
