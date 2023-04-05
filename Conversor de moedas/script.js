const quantidade = document.getElementById("quantidade");
const moeda1 = document.getElementById("moeda1");
const moeda2 = document.getElementById("moeda2");
const resultado = document.getElementById("resultado");

function converter() {
  const url = `https://api.exchangerate-api.com/v4/latest/${moeda1.value}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const taxa = data.rates[moeda2.value];
      const valorConvertido = quantidade.value * taxa;
      resultado.innerText = `${quantidade.value} ${moeda1.value} = ${valorConvertido.toFixed(2)} ${moeda2.value}`;
    })
    .catch(error => console.error(error));
}
