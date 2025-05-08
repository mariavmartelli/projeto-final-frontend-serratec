
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById("recipe-carousel");
    const recipes = [
        { title: "Bolo de Fubá", description: "Bolo quentinho com gosto de tarde na casa da vó.", img: "bolo_fuba.png" },
        { title: "Canjica Cremosa", description: "Cremosa, doce e perfeita para noites frias.", img: "canjica_cremosa.png" },
        { title: "Pudim de Leite", description: "Clássico, doce e com aquela calda caramelizada.", img: "pudim1.png" }
    ];

    recipes.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "col-md-4";
        card.innerHTML = `
            <div class="card p-4 text-center">
                <img src="assets/images/${recipe.img}" class="card-img-top mb-3" alt="${recipe.title}" style="border-radius: 20px;">
                <div class="card-body">
                    <h5 class="card-title">${recipe.title}</h5>
                    <p class="card-text">${recipe.description}</p>
                    <button class="btn btn-primary like-btn">Curtir</button>
                </div>
            </div>`;
        carousel.appendChild(card);
    });

    document.querySelectorAll(".like-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            alert("Receita curtida! ❤️");
        });
    });
});
