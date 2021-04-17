export default async function loadPokemon(){

    const $containerCards = document.querySelector(".container-cards");
    let   $cards = "";
          

        try {
            $containerCards.innerHTML = `<img class="loader" src=".././assets/puff.svg" alt="cargando">`;
            let resp = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"),
                respJson = await resp.json();
    
            //console.log(resp, respJson);

            if(!resp.ok) throw { status: resp.status, statusText: resp.statusText }; 

            for(let i = 0; i < respJson.results.length; i++){
                
                //console.log(respJson.results[i]);

                try {
                    let resp = await fetch(`${respJson.results[i].url}`),
                        pokemon = await resp.json();

                        //console.log(pokemon);

                        if(!resp) throw { status: resp.status, statusText: resp.statusText};

                        //console.log(pokemon.sprites.other.dream_world.front_default);

                        $cards += `
                        <div class="card">  
                                <span>${pokemon.name}</span><span>${pokemon.stats[0].base_stat}Hp</span></br>
                                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
                                <p>Tipo: ${pokemon.types[0].type.name}</p>
                                <hr>
                                <div class="estadisticas">                                
                                    <p>Speed ${pokemon.stats[5].base_stat}</p>
                                    <p>Atack ${pokemon.stats[1].base_stat}</p>
                                    <p>Defense ${pokemon.stats[2].base_stat}</p>
                                </div>                            
                        </div>    
                        `;

                } catch (error) {
                    let message = "Ocurrio un error" || error.status;
                    console.log(`Error: ${error.status} - ${message}`);

                    $cards += `
                    <figcaption>
                        <p>Error: ${error.status} - ${message}</p>
                    </figcaption>
                    `;
                }
            }
            $containerCards.innerHTML = "";
            $containerCards.innerHTML = $cards;

        } catch (error) {

            console.log(error);
            let message = "Ocurrio un error" || statusText;
                console.log(`<p>Error: ${error.status} - ${message}</p>`); 
        }
    }
        
