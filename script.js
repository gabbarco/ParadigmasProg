let btn = document.getElementById("searchPokemon");
let pokeName = document.getElementById("name");
let pokeGen = document.getElementById("gen");
let result = document.getElementById("result");

btn.addEventListener('click', checkValidity);

function checkValidity(){
	let gen = pokeGen.value;

	searchPokemon()
	.then((pokemon)=>{
		if(pokemon==undefined){
			alert("Não existe pokemon com esse nome");
			return;
		}

		if(pokemon.geracao==gen){
			pokemon.nome = pokemon.nome.charAt(0).toUpperCase()+pokemon.nome.slice(1);

			let html = `
				<div><img src="${pokemon.img}"\\></div>
				<div>
					<div>Número: ${pokemon.numero}</div>
					<div>Nome: ${pokemon.nome}</div>
					<div>Tipo: ${pokemon.tipo}</div>
					<div>Geração: ${pokemon.geracao}</div>
				</div>
			`

			result.innerHTML = html;
		}
		else
			alert("O nome do pokemon não condiz com a geração selecionada");
	})
	.catch((err_)=>alert(err_));
}

function searchPokemon(){
	let name = pokeName.value.toLowerCase();

	return new Promise((res, rej)=>{
		fetch(`https://pokemon.danielpimentel.com.br/v1/pokemon/nome/${name}`)
				.then((poke)=>poke.json())
				.then((pokemon)=>res(pokemon.pokemon))
				.catch(()=>rej("Erro de comunicação com a API."));
	});
}