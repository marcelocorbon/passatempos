const piada = document.getElementById("piada");

function gerarPiada() {
  const url = "https://official-joke-api.appspot.com/random_joke";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const setup = data.setup;
      const punchline = data.punchline;
      piada.innerHTML = `${setup} <em>${punchline}</em>`;
    })
    .catch(error => console.error(error));
}
