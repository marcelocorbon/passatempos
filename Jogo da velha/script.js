const tabuleiro = ["", "", "", "", "", "", "", "", ""];
const jogadores = ["X", "O"];
let jogadorAtual = jogadores[0];
const resultado = document.getElementById("resultado");

function jogar(quadrado, posicao) {
  if (tabuleiro[posicao] === "") {
    tabuleiro[posicao] = jogadorAtual;
    quadrado.innerHTML = jogadorAtual;
    verificarGanhador();
    mudarJogador();
  }
}

function mudarJogador() {
  jogadorAtual = jogadorAtual === jogadores[0] ? jogadores[1] : jogadores[0];
}

function verificarGanhador() {
  const combinacoesGanhadoras = [    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let combinacao of combinacoesGanhadoras) {
    const [a, b, c] = combinacao;
    if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
      resultado.innerHTML = `O jogador ${jogadorAtual} venceu!`;
      return;
    }
  }
  if (tabuleiro.every(posicao => posicao !== "")) {
    resultado.innerHTML = "Empate!";
  }
}

