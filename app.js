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
    { name: "TINKERBELL1.jpg", img: "images/TINKERBELL1.jpg" },
    { name: "TINKERBELL2.jpg", img: "images/TINKERBELL2.jpg" },
    { name: "TINKERBELL3.jpg", img: "images/TINKERBELL3.jpg" },
    { name: "TINKERBELL4.jpg", img: "images/TINKERBELL4.jpg" },
    { name: "TINKERBELL5.jpg", img: "images/TINKERBELL5.jpg" },
    { name: "TINKERBELL6.jpg", img: "images/TINKERBELL6.jpg" }
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

  function verificarPareja() {
    var cards = document.querySelectorAll("img");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "images/reverso.png");
      cards[opcionDosId].setAttribute("src", "images/reverso.png");
      alert(";Diste click a la misma imagen!");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      alert(";correcto!");
      cards[opcionUnoId].setAttribute("src", "images/blank.png");
      cards[opcionDosId].setAttribute("src", "imageș/blank.png");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventlistener("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "images/reverso.png");
      cards[opcionDosId].setAttribute("src", "images/reverso.png");
      alert("iIntenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.length === cardAdj.length / 2) {
      resultado.textContent = "!Felicidades, encontraste todos los pares!";
    }
  }

  //----------------- lecture_04 ----------------------------------//

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }

  crearTablero();
});
