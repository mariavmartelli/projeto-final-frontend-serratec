// Aguarda até que o conteúdo da página esteja completamente carregado
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona o container onde as receitas serão exibidas
    const carousel = document.getElementById("recipe-carousel");

    // Array com as receitas a serem exibidas inicialmente
    const recipes = [
        { title: "Bolo de Fubá", description: "Bolo quentinho com gosto de tarde na casa da vó.", img: "bolo_fuba.png" },
        { title: "Canjica Cremosa", description: "Cremosa, doce e perfeita para noites frias.", img: "canjica_cremosa.png" },
        { title: "Pudim de Leite", description: "Clássico, doce e com aquela calda caramelizada.", img: "pudim1.png" }
    ];

    // Cria e insere os cards das receitas no container
    recipes.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "col-md-4";  // Define a largura do card usando Bootstrap

        // Estrutura do card: imagem, título, descrição e botão "Curtir"
        card.innerHTML = `
            <div class="card p-4 text-center">
                <img src="assets/images/${recipe.img}" class="card-img-top mb-3" alt="${recipe.title}" style="border-radius: 20px;">
                <div class="card-body">
                    <h5 class="card-title">${recipe.title}</h5>
                    <p class="card-text">${recipe.description}</p>
                    <button class="btn btn-primary like-btn">Curtir</button>
                </div>
            </div>`;

        // Insere o card no container
        carousel.appendChild(card);
    });

    // Adiciona o evento de clique nos botões "Curtir"
    document.querySelectorAll(".like-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            alert("Receita curtida! ❤️");
        });
    });
});
