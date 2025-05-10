// Cria um array vazio para armazenar os dados das receitas
var resultados = [];

// Aguarda o carregamento completo do DOM para executar o código
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o elemento onde as receitas serão exibidas (um carrossel ou container de cards)
  const carousel = document.getElementById("recipe-carousel");

  // Função para exibir os cards de receitas na tela
  function mostrarReceitas(array, local = true) {
    array.forEach((recipe) => {
      // Cria uma div com a classe do Bootstrap para colunas
      const card = document.createElement("div");
      card.className = "col-md-4";

      // Define o conteúdo HTML do card da receita
      card.innerHTML = `
            <div id="${recipe.id}" class="card p-4 text-center">
                <img src="${recipe.imagem}" class="card-img-top mb-3" alt="${recipe.receita}" style="border-radius: 20px;">
                <div class="card-body">
                    <h5 class="card-title">${recipe.receita}</h5>
                    <p class="card-text">${recipe.message}</p>
                    <button class="btn btn-primary ver-mais-btn" onclick="window.location.href='../receitas.html?id=${recipe.id}'">Ver Mais</button>
                    <button class="btn btn-primary like-btn" for="txt_curtida_${recipe.id}">Curtir</button>
                    <p class="txtcurtida" style="display:inline; margin-left:5px;">${recipe.curtidas}</p>
                </div>
            </div>`;
      
      // Adiciona o card ao carrossel
      carousel.appendChild(card);
    });
  }

  // Faz uma requisição à API para buscar todas as receitas
  fetch("https://681d4509f74de1d219af4745.mockapi.io/Receitas")
    .then((response) => response.json())
    .then((response) => {
      // Armazena as receitas no array 'resultados', adicionando o campo 'curtidas' com valor 0 para cada item
      resultados = response.map((receita) => {
        return { ...receita, curtidas: 0 };
      });

      // Mostra os cards de receitas na tela
      mostrarReceitas(resultados, false);

      // Cria os eventos de clique nos botões de "Curtir"
      criaClickCurtida();
    });
});

// Função para filtrar receitas com base no texto digitado na barra de pesquisa
function pesquisar() {
  // Obtém o valor do input de pesquisa
  const txtPesquisa = document.getElementById("input-pesquisa").value;

  // Filtra as receitas que possuem exatamente o mesmo nome digitado
  const filtro = resultados.filter((item) => {
    return item.receita === txtPesquisa;
  });

  // Seleciona o container onde os cards são exibidos
  const carousel = document.getElementById("recipe-carousel");

  // Limpa os cards atuais
  carousel.innerHTML = "";

  // Define se será usada a lista filtrada ou todas as receitas
  const lista = txtPesquisa === "" ? resultados : filtro;

  // Renderiza novamente os cards com base no filtro
  lista.forEach((recipe) => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
            <div id="${recipe.id}" class="card p-4 text-center">
                <img src="${recipe.imagem}" class="card-img-top mb-3" alt="${recipe.receita}" style="border-radius: 20px;">
                <div class="card-body">
                    <h5 class="card-title">${recipe.receita}</h5>
                    <p class="card-text">${recipe.message}</p>
                    <button class="btn btn-primary ver-mais-btn" onclick="window.location.href='../receitas.html?id=${recipe.id}'">Ver Mais</button>
                    <button class="btn btn-primary like-btn" for="txt_curtida_${recipe.id}">Curtir</button>
                    <p class="txtcurtida" style="display:inline; margin-left:5px;">${recipe.curtidas}</p>
                </div>
            </div>`;
    carousel.appendChild(card);
  });

  // Reatribui os eventos de clique para os novos botões de "Curtir"
  criaClickCurtida();
}

// Função que adiciona o evento de clique para os botões de "Curtir"
function criaClickCurtida() {
  // Seleciona todos os botões com a classe "like-btn"
  document.querySelectorAll(".like-btn").forEach((btn) => {
    // Adiciona um ouvinte de evento de clique
    btn.addEventListener("click", function (event) {
      // Obtém o ID da receita clicada a partir do atributo da div pai
      const idDaReceita = event.currentTarget.parentElement.parentElement.getAttribute("id");

      // Localiza o objeto da receita no array 'resultados'
      const objetoReceita = resultados.find((item) => {
        return item.id === idDaReceita;
      });

      // Incrementa o contador de curtidas do objeto
      objetoReceita.curtidas += 1;

      // Atualiza o número de curtidas exibido no HTML
      const contagem = event.currentTarget.parentElement.querySelector(".txtcurtida");
      contagem.textContent = parseInt(contagem.textContent) + 1;

      // Mostra no console a nova contagem de curtidas
      console.log(contagem);
    });
  });
}
