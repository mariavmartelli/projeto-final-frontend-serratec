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
                    <button class="btn btn-primary ver-mais-btn" onclick="window.location.href='../receitas.html'">Ver Mais</button>
                    <button class="btn btn-primary like-btn"  for="txt_curtida_${recipe.id}" >Curtir</button>
                    <p class="txtcurtida" style="display:inline; margin-left:5px;">0</p>
                </div>
            </div>`;
      carousel.appendChild(card);
    });
  }

  mostrarReceitas();