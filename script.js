let url = "https://pokemon.danielpimentel.com.br/v1/pokemon/geracao/1/50/1";
		fetch(url)
			.then((res)=>res.json())
			.then((res)=>searchPokemons(res.pokemon))
			.catch((err_)=>console.log(err_));

           
function showPokemons(arr,pokemon){
	let pokedex = document.getElementById("pokedex");
	let html = "";

	for(let i=0; i<arr.length; ++i){
		const nome = arr[i].nome.charAt(0).toUpperCase() + arr[i].nome.slice(1);
		nome[0] = nome[0].toUpperCase();
		html += `
			<div id="wrapper">
				<img src="${arr[i].img_3d}" height=150 />
				<div>${nome}</div>
			</div>
		`;

		pokedex.innerHTML = html;
	}
}

function searchPokemons(arr) {
    let pokedex = document.getElementById("pokedex");
    let pokemon = document.getElementById("pokemon").value;
    let geracao = document.getElementById("geracao").value;
    for(let i=0; i<arr.length; ++i){
        const nome = arr[i].nome.charAt(0).toUpperCase() + arr[i].nome.slice(1);
        nome[0] = nome[0].toUpperCase();
        if (nome === pokemon) {
            console.log("oi")
        }
    }
    // let s = new Promise((res,rej) => {

    // })
}