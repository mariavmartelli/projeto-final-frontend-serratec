const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");
console.log(id);

fetch(`https://681d4509f74de1d219af4745.mockapi.io/Receitas/${id}`)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    const containerReceita = document.getElementById("receita-detalhes");
    containerReceita.innerHTML = `<img src="${response.imagem} " style="width:350px; height:350px; border-radius:50%;">
    <div style="border-radius: 12px; border: 1px solid #6c584c; padding:1rem">
    <p class="titulo" style= "border-bottom: 1px solid #6c584c">${response.receita}<p>
    <p class="normal" style= "border-bottom: 1px solid #6c584c">${response.igredientes}<p>
    <p class="normal" >${response.preparo}<p>
    </div>`;
  });
