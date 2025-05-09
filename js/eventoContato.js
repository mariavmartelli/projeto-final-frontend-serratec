function salvarComentario() {
  console.log("teste");
  const objetoContato = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  fetch("https://681e3cfbc1c291fa663381dd.mockapi.io/contatos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(objetoContato),
  })
    .then((response) => console.log("Sucesso"))
    .catch((response) => console.log("Erro"));
  console.log(objetoContato);
}