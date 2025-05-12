document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("recipe-carousel");
  const recipes = [
    {
      receita: "Bolo de Fubá",
      message: "Bolo quentinho com gosto de tarde na casa da vó.",
      imagem: "bolo_fuba.png",
    },
    {
      receita: "Canjica Cremosa",
      message: "Cremosa, doce e perfeita para noites frias.",
      imagem: "canjica_cremosa.png",
    },
    {
      receita: "Pudim de Leite",
      message: "Clássico, doce e com aquela calda caramelizada.",
      imagem: "pudim1.png",
    },
  ];

  function mostrarReceitas(array, local = true) {
    const path = local ? "../assets/images/" : "";
    array.forEach((recipe) => {
      const card = document.createElement("div");
      card.className = "col-md-4";
      card.innerHTML = `
            <div class="card p-4 text-center">
                <img src="${path}${recipe.imagem}" class="card-img-top mb-3" alt="${recipe.receita}" style="border-radius: 20px;">
                <div class="card-body">
                    <h5 class="card-title">${recipe.receita}</h5>
                    <p class="card-text">${recipe.message}</p>
                    <button class="btn btn-primary ver-mais-btn" onclick="window.location.href='../receita.html?id=${recipe.id}'">Ver Mais</button>
                    <button class="btn btn-primary like-btn"  for="txt_curtida_${recipe.id}" >Curtir</button>
                    <p class="txtcurtida" style="display:inline; margin-left:5px;">0</p>
                </div>
            </div>`;
      carousel.appendChild(card);
    });
  }

  mostrarReceitas(recipes);
  fetch("https://681d4509f74de1d219af4745.mockapi.io/Receitas")
    .then((response) => response.json())
    .then((response) => {
      mostrarReceitas(response, false);
      console.log(response);
      document.querySelectorAll(".like-btn").forEach((btn) => {
        btn.addEventListener("click", function (event) {
          const contagem =
            event.currentTarget.parentElement.querySelector(".txtcurtida");
          contagem.textContent = parseInt(contagem.textContent) + 1;
          console.log(contagem);
          // alert("Receita curtida! ❤️");
        });
      });
    });
});