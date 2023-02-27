//----------------- lecture_01 ----------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  //----------------- lecture_02 ----------------------------------//
  const cardAdj = [
    { name: "TINKERBELL1.jpg", img: "images/TINKERBELL1.jpg" },
    { name: "TINKERBELL2.jpg", img: "images/TINKERBELL2.jpg" },
    { name: "TINKERBELL3.jpg", img: "images/TINKERBELL3.jpg" },
    { name: "TINKERBELL4.jpg", img: "images/TINKERBELL4.jpg" },
    { name: "TINKERBELL5.jpg", img: "images/TINKERBELL5.jpg" },
    { name: "TINKERBELL6.jpg", img: "images/TINKERBELL6.jpg" },
    { name: "TINKERBELL7.jpg", img: "images/TINKERBELL7.jpg" },
    { name: "TINKERBELL8.jpg", img: "images/TINKERBELL8.jpg" }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");

      carta.setAttribute("src", "images/reverso.png");

      carta.setAttribute("data-id", i);

      carta.addEventListener("click", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }
});
