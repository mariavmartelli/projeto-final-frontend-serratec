function salvarComentario() {
  // Apenas para teste, exibe "teste" no console quando a função é chamada
  console.log("teste");

  // Cria um objeto com os valores preenchidos no formulário
  const objetoContato = {
    nome: document.getElementById("nome").value,     // Obtém o valor do input com id="nome"
    email: document.getElementById("email").value,   // Obtém o valor do input com id="email"
    message: document.getElementById("message").value // Obtém o valor do textarea com id="message"
  };

  // Envia os dados do objeto para a API usando o método POST
  fetch("https://681e3cfbc1c291fa663381dd.mockapi.io/contatos", {
    method: "POST", // Método HTTP para criar novo recurso
    headers: { "Content-Type": "application/json" }, // Cabeçalho indicando que o corpo é JSON
    body: JSON.stringify(objetoContato) // Converte o objeto JS para string JSON
  })
    // Se a requisição for bem-sucedida, recarrega a página
    .then((response) => window.location.reload())
    // Se houver erro na requisição, exibe mensagem de erro no console
    .catch((response) => console.log("Erro"));

  // Mostra no console o objeto que foi enviado para a API (útil para depuração)
  console.log(objetoContato);
}