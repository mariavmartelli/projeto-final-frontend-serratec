// Função que coleta os dados do formulário de contato e os envia para a API
function salvarComentario() {

  // Exibe uma mensagem no console para verificar o funcionamento da função
  console.log("teste");

  // Cria um objeto com os dados preenchidos no formulário
  const objetoContato = {
    nome: document.getElementById("nome").value, // Nome do usuário
    email: document.getElementById("email").value, // Email do usuário
    message: document.getElementById("message").value // Mensagem enviada
  };

  // Envia os dados para a API usando o método POST
  fetch("https://681e3cfbc1c291fa663381dd.mockapi.io/contatos", {
    method: "POST", // Define o método de envio
    headers: { "Content-Type": "application/json" }, // Especifica o formato dos dados
    body: JSON.stringify(objetoContato) // Converte o objeto em uma string JSON
  })
    .then((response) => console.log("Sucesso")) // Exibe mensagem de sucesso no console
    .catch((response) => console.log("Erro")); // Exibe mensagem de erro no console

  // Exibe o objeto criado no console para conferência
  console.log(objetoContato);
}
