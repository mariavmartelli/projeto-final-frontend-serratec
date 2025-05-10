// Função que coleta os dados do formulário e os envia para a API
function salvarReceita() {

  // Exibe uma mensagem no console para verificar o funcionamento da função
  console.log("teste");

  // Cria um objeto com os dados preenchidos no formulário
  const objetoReceita = {
    autor: document.getElementById("autor").value, // Nome do autor da receita
    receita: document.getElementById("receita").value, // Nome da receita
    message: document.getElementById("message").value, // Descrição da receita
    igredientes: document.getElementById("igredientes").value, // Ingredientes da receita
    preparo: document.getElementById("preparo").value, // Modo de preparo
    imagem: document.getElementById("imagem").value // URL da imagem da receita
  };

  // Envia os dados para a API usando o método POST
  fetch("https://681d4509f74de1d219af4745.mockapi.io/Receitas", {
    method: "POST", // Método de envio dos dados
    headers: { "Content-Type": "application/json" }, // Define o formato dos dados
    body: JSON.stringify(objetoReceita) // Converte o objeto em uma string JSON
  })
    .then((response) => console.log("Sucesso")) // Exibe uma mensagem de sucesso
    .catch((response) => console.log("Erro")); // Exibe uma mensagem de erro
}
