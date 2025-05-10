// Função que recebe um array de receitas e exibe cada uma delas na tela
function mostrarReceitas(array, local = true) {

  // Define o caminho das imagens. Se forem receitas locais, usa a pasta de assets
  const path = local ? "../assets/images/" : "";

  // Percorre o array de receitas
  array.forEach((recipe) => {

    // Cria um elemento div para cada card de receita
    const card = document.createElement("div");
    card.className = "col-md-4";  // Define a largura da coluna usando Bootstrap

    // Estrutura HTML do card com imagem, título, descrição e botões
    card.innerHTML = `
            <div class="card p-4 text-center">
                <img src="${path}${recipe.imagem}" class="card-img-top mb-3" alt="${recipe.receita}" style="border-radius: 20px;">
                <div class="card-body">
                    <h5 class="card-title">${recipe.receita}</h5>
                    <p class="card-text">${recipe.message}</p>
                    <button class="btn btn-primary ver-mais-btn" onclick="window.location.href='../receitas.html'">Ver Mais</button>
                    <button class="btn btn-primary like-btn">Curtir</button>
                    <p class="txtcurtida" style="display:inline; margin-left:5px;">0</p>
                </div>
            </div>`;

    // Adiciona o card no container do carrossel
    carousel.appendChild(card);
  });
}

// Chama a função para exibir as receitas 
mostrarReceitas();
