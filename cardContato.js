document.addEventListener("DOMContentLoaded", async function () {
  const carousel = document.getElementById("recipe-carousel");

  // Função para exibir os comentários no carrossel
  function mostrarComentarios(array) {
    array.forEach((recipe) => {
      const card = document.createElement("div");
      card.className = "col-md-4";
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
      carousel.appendChild(card);
    });
  }

  // Requisição assíncrona para buscar os comentários
  try {
    const response = await fetch("https://681e3cfbc1c291fa663381dd.mockapi.io/contatos");
    const data = await response.json();
    mostrarComentarios(data);
    console.log(data);
  } catch (error) {
    console.error("Erro ao buscar comentários:", error);
  }

  // Delegação de eventos para aumentar curtidas de forma mais eficiente
  carousel.addEventListener("click", function (event) {
    if (event.target.classList.contains("like-btn")) {
      const contagem = event.target.parentElement.querySelector(".txtcurtida");
      contagem.textContent = parseInt(contagem.textContent) + 1;
    }
  });
});