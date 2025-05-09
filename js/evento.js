function salvarReceita() {
  console.log("teste");
  const objetoReceita = {
    autor: document.getElementById("autor").value,
    receita: document.getElementById("receita").value,
    message: document.getElementById("message").value,
    igredientes: document.getElementById("igredientes").value,
    preparo: document.getElementById("preparo").value,
    imagem: document.getElementById("imagem").value,
  };
  fetch("https://681d4509f74de1d219af4745.mockapi.io/Receitas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(objetoReceita),
  })
    .then((response) => console.log("Sucesso"))
    .catch((response) => console.log("Erro"));
//   console.log(objetoReceita);
}
