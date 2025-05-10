// Executa o código após todo o conteúdo da página ser carregado
document.addEventListener("DOMContentLoaded", function () {

  // Seleciona o container onde os comentários serão exibidos
  const carousel = document.getElementById("recipe-carousel");

  // Função que recebe um array de comentários e os exibe na tela
  function mostrarComentarios(array) {

    // Percorre o array de comentários
    array.forEach((recipe) => {

      // Cria um elemento div para cada comentário
      const card = document.createElement("div");
      card.className = "col-md-4"; // Define a largura da coluna

      // Estrutura HTML do card com nome, email, mensagem e botão "Curtir"
      card.innerHTML = `
        <div class="card p-4 text-center">
            <div class="card-body">
                <h5 class="card-title">${recipe.nome}</h5>
                <p class="card-text">${recipe.email}</p>
                <p class="card-text">${recipe.message}</p>
                <button class="btn btn-primary like-btn">Curtir</button>
                <p class="txtcurtida" style="display:inline; margin-left:5px;">0</p>
            </div>
        </div>`;

      // Adiciona o card criado no container
      carousel.appendChild(card);
    });
  }

  // Requisição para a API para buscar os comentários
  fetch("https://681e3cfbc1c291fa663381dd.mockapi.io/contatos")
    .then((response) => response.json()) // Converte a resposta em JSON
    .then((response) => {

      // Exibe os comentários na tela
      mostrarComentarios(response); 
      console.log(response); // Exibe os dados no console para conferência

      // Seleciona todos os botões "Curtir"
      document.querySelectorAll(".like-btn").forEach((btn) => {

        // Adiciona evento de clique a cada botão
        btn.addEventListener("click", function (event) {

          // Seleciona o contador de curtidas do card atual
          const contagem = event.currentTarget.parentElement.querySelector(".txtcurtida");

          // Incrementa o contador de curtidas
          contagem.textContent = parseInt(contagem.textContent) + 1;
        });
      });
    });
});
