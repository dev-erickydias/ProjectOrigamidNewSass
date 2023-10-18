const bola = document.querySelector(".aberto");
const dataAtual = new Date();
const horas = dataAtual.getHours();

if (horas < 7 || horas >= 18) {
  bola.style.backgroundColor = "red";
}