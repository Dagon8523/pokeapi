
const entradaid = document.getElementById('botonid').value
const idpokemon = parseInt(entradaid)
const API = "https://pokeapi.co/api/v2/pokemon/"+`${idpokemon}`
const obtenerpoke = document.getElementById('botonobtener')





console.log(entradaid)
obtenerpoke.addEventListener("click",()=>{
    obtenerpokemon(API)
})
 
const obtenerpokemon = (url)=>{
    return fetch(url)
    .then((response)=>response.json())
    .then((json)=>{
         dibujarpokemon(json)
        
    })
    .catch((error)=>{
        console.log("Pailas",error)
    })
}



const dibujarpokemon = (json)=>{
    let html =""
    
    html += `<h1 class="text-center text-light">${json.name}</h1>`
    html += `<img class="imagen" src="${json.sprites.front_default}" ">`
    html += `<h3 class="text-center text-light">PESO</h3>`
    html += `<h4 class="card-text text-light text-center ">${json.weight}</h4>` 
    html += `<h3 class="text-center text-light">ALTURA</h3>`
    html += `<h4 class="card-text text-light text-center ">${json.height}</h4>`

    
    document.getElementById('menu-poquemones').innerHTML=html

    console.log(json)
}

