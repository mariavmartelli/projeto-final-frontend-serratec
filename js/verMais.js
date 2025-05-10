// Cria um objeto URLSearchParams com os parâmetros da URL atual
const parametros = new URLSearchParams(window.location.search);

// Obtém o valor do parâmetro "id" da URL
const id = parametros.get("id");

// Exibe o valor de "id" no console para verificação
console.log(id);

// Faz uma requisição GET para buscar os dados da receita com base no ID obtido
fetch(`https://681d4509f74de1d219af4745.mockapi.io/Receitas/${id}`)
  // Converte a resposta da API para JSON
  .then((response) => response.json())
  .then((response) => {
    // Exibe no console o objeto da receita retornado pela API
    console.log(response);

    // Seleciona o elemento HTML onde os detalhes da receita serão exibidos
    const containerReceita = document.getElementById("receita-detalhes");

    // Insere dinamicamente no HTML os dados da receita (imagem, nome, ingredientes e modo de preparo)
    containerReceita.innerHTML = `
      <img src="${response.imagem}" style="width:350px; height:350px; border-radius:50%;">
      <div style="border-radius: 12px; border: 1px solid #6c584c; padding:1rem">
        <p class="titulo" style="border-bottom: 1px solid #6c584c">${response.receita}</p>
        <p class="normal" style="border-bottom: 1px solid #6c584c">${response.igredientes}</p>
        <p class="normal">${response.preparo}</p>
      </div>`;
  });
