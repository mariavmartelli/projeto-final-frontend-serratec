function salvarReceita() {
  console.log("Iniciando o salvamento da receita...");

  // Captura dos valores dos inputs
  const objetoReceita = {
    autor: document.getElementById("autor").value.trim(),
    receita: document.getElementById("receita").value.trim(),
    message: document.getElementById("message").value.trim(),
    ingredientes: document.getElementById("igredientes").value.trim(),
    preparo: document.getElementById("preparo").value.trim(),
    imagem: document.getElementById("imagem").value.trim(),
  };

  // Verificação para evitar o envio de campos vazios
  if (!objetoReceita.autor || !objetoReceita.receita || !objetoReceita.message || 
      !objetoReceita.ingredientes || !objetoReceita.preparo || !objetoReceita.imagem) {
    console.error("Erro: Todos os campos devem ser preenchidos.");
    alert("Por favor, preencha todos os campos antes de salvar!");
    return;
  }

  fetch("https://681d4509f74de1d219af4745.mockapi.io/Receitas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(objetoReceita),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Receita salva com sucesso!", data);
      alert("Receita salva com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao salvar a receita:", error);
      alert("Ocorreu um erro ao salvar a receita. Tente novamente.");
    });
}