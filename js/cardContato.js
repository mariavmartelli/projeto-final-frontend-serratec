// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {

  // Seleciona o container onde os cards de comentários serão adicionados
  const carousel = document.getElementById("recipe-carousel");

  // Função responsável por criar e exibir os comentários na tela
  function mostrarComentarios(array) {
    array.forEach((recipe) => {
      // Cria um novo elemento de card para cada comentário
      const card = document.createElement("div");
      card.className = "col-md-4";

      // Define o conteúdo HTML do card
      card.innerHTML = `
        <div class="card p-4 text-center">
            <div class="card-body">
                <h5 class="card-title">${recipe.nome}</h5> <!-- Nome do usuário -->
                <p class="card-text">${recipe.email}</p>    <!-- Email do usuário -->
                <p class="card-text">${recipe.message}</p>  <!-- Comentário enviado -->
                <button class="btn btn-primary like-btn">Curtir</button> <!-- Botão de curtir -->
                <p class="txtcurtida" style="display:inline; margin-left:5px;">0</p> <!-- Contador de curtidas -->
            </div>
        </div>`;

      // Adiciona o card ao container principal
      carousel.appendChild(card);
    });
  }

  // Faz uma requisição GET para buscar os comentários da API
  fetch("https://681e3cfbc1c291fa663381dd.mockapi.io/contatos")
    .then((response) => response.json()) // Converte a resposta em JSON
    .then((response) => {
      // Chama a função que exibe os comentários
      mostrarComentarios(response);

      // Exibe os dados no console para depuração
      console.log(response);

      // Adiciona funcionalidade de curtir para cada botão de curtir
      document.querySelectorAll(".like-btn").forEach((btn) => {
        btn.addEventListener("click", function (event) {
          // Localiza o contador de curtidas ao lado do botão clicado
          const contagem = event.currentTarget.parentElement.querySelector(".txtcurtida");

          // Incrementa o número de curtidas
          contagem.textContent = parseInt(contagem.textContent) + 1;
        });
      });
    });
});
