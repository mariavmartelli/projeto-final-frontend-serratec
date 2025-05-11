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
    .then((response) =>  window.location.href = "http://127.0.0.1:5500/index.html")
    .catch((response) => console.log("Erro"));
//   console.log(objetoReceita);
}

function voltarParaHome(){
    window.location.href = "http://127.0.0.1:5500/index.html";
}


