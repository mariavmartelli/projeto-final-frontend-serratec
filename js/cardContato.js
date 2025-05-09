document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("recipe-carousel");

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

  fetch("https://681e3cfbc1c291fa663381dd.mockapi.io/contatos")
    .then((response) => response.json())
    .then((response) => {
      mostrarComentarios(response); 
      console.log(response);

      document.querySelectorAll(".like-btn").forEach((btn) => {
        btn.addEventListener("click", function (event) {
          const contagem = event.currentTarget.parentElement.querySelector(".txtcurtida");
          contagem.textContent = parseInt(contagem.textContent) + 1;
        });
      });
    });
});