// Função chamada ao salvar uma nova receita
function salvarReceita() {
  // Apenas um teste no console para indicar que a função foi chamada
  console.log("teste");

  // Cria um objeto com os dados inseridos no formulário
  const objetoReceita = {
    autor: document.getElementById("autor").value,               // Nome do autor da receita
    receita: document.getElementById("receita").value,           // Nome da receita
    message: document.getElementById("message").value,           // Mensagem complementar
    igredientes: document.getElementById("igredientes").value,   // Lista de ingredientes
    preparo: document.getElementById("preparo").value,           // Modo de preparo
    imagem: document.getElementById("imagem").value              // URL da imagem da receita
  };

  // Envia o objeto criado para a API usando o método POST
  fetch("https://681d4509f74de1d219af4745.mockapi.io/Receitas", {
    method: "POST", // Método para criar um novo registro
    headers: { "Content-Type": "application/json" }, // Define o tipo de conteúdo enviado
    body: JSON.stringify(objetoReceita) // Converte o objeto para JSON antes de enviar
  })
    // Se a requisição for bem-sucedida, redireciona para a página inicial (home)
    .then((response) =>  window.location.href = "http://127.0.0.1:5500/index.html")
    // Se houver erro, exibe "Erro" no console
    .catch((response) => console.log("Erro"));
}

// Função para voltar manualmente para a página inicial
function voltarParaHome(){
  // Redireciona o navegador para a home (index.html)
  window.location.href = "http://127.0.0.1:5500/index.html";
}