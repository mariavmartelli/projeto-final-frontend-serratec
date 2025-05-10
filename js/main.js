// Executa o código assim que o conteúdo da página estiver completamente carregado
document.addEventListener("DOMContentLoaded", function () {

  // Seleciona o container onde as receitas serão exibidas
  const carousel = document.getElementById("recipe-carousel");

  // Array contendo receitas locais
  const recipes = [
    {
      receita: "Bolo de Fubá", // Nome da receita
      message: "Bolo quentinho com gosto de tarde na casa da vó.", // Descrição da receita
      imagem: "bolo_fuba.png" // Imagem da receita
    },
    {
      receita: "Canjica Cremosa",
      message: "Cremosa, doce e perfeita para noites frias.",
      imagem: "canjica_cremosa.png"
    },
    {
      receita: "Pudim de Leite",
      message: "Clássico, doce e com aquela calda caramelizada.",
      imagem: "pudim1.png"
    }
  ];

  // Função que exibe as receitas na tela
  function mostrarReceitas(array, local = true) {

    // Define o caminho das imagens, dependendo da origem (local ou API)
    const path = local ? "../assets/images/" : "";

    // Percorre o array de receitas
    array.forEach((recipe) => {

      // Cria um novo card para cada receita
      const card = document.createElement("div");
      card.className = "col-md-4";

      // Estrutura do card com título, descrição, imagem e botões
      card.innerHTML = `
            <div class="card p-4 text-center">
                <img src="${path}${recipe.imagem}" class="card-img-top mb-3" alt="${recipe.receita}" style="border-radius: 20px;">
                <div class="card-body">
                    <h5 class="card-title">${recipe.receita}</h5>
                    <p class="card-text">${recipe.message}</p>
                    <button class="btn btn-primary ver-mais-btn" onclick="window.location.href='../receita.html?id=${recipe.id}'">Ver Mais</button>
                    <button class="btn btn-primary like-btn">Curtir</button>
                    <p class="txtcurtida" style="display:inline; margin-left:5px;">0</p>
                </div>
            </div>`;

      // Adiciona o card no container
      carousel.appendChild(card);
    });
  }

  // Exibe as receitas locais
  mostrarReceitas(recipes);

  // Faz uma requisição à API para buscar receitas adicionais
  fetch("https://681d4509f74de1d219af4745.mockapi.io/Receitas")
    .then((response) => response.json()) // Converte a resposta para JSON
    .then((response) => {

      // Exibe as receitas vindas da API
      mostrarReceitas(response, false);
      console.log(response); // Exibe os dados recebidos no console

      // Adiciona evento de clique aos botões "Curtir"
      document.querySelectorAll(".like-btn").forEach((btn) => {
        btn.addEventListener("click", function (event) {

          // Seleciona o contador de curtidas do card
          const contagem = event.currentTarget.parentElement.querySelector(".txtcurtida");

          // Incrementa o contador ao clicar no botão "Curtir"
          contagem.textContent = parseInt(contagem.textContent) + 1;

          console.log(contagem); // Exibe o novo valor no console
        });
      });
    });
});
