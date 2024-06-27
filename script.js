
let diccionario=["Apple"]

let random=Math.random()*diccionario.length
random= Math.floor(random)


let palabraSecreta=diccionario[random].toUpperCase()

let oportunidades=6;

let button=document.getElementById("guess-button")
let input =document.getElementById("guess-input")

let grid=document.getElementById("grid")

button.addEventListener("click",intentar)

function intentar(){

let intento =input.value.toUpperCase()
console.log(intento)
console.log(palabraSecreta)

if (intento== palabraSecreta){
    gameOver("ganaste")

}

let row=document.createElement("div")
let letra=document.createElement("span")
row.className="row"
for (let i in palabraSecreta){
    
    letra.className="letter"
    letra.innerHTML=intento[i]
    console.log(letra)
    row.appendChild(letra)
    
if (palabraSecreta[i]==intento[i]){

    letra.innerHTML=intento[i]
    console.log(intento[i], "verde")

}else if(palabraSecreta.includes(intento[i])){
    letra.innerHTML=intento[i]
    console.log(intento[i],"amarillo")
    

}else{
    letra.innerHTML=intento[i]

    console.log(intento[i],"gris")
}
                 
} 
 
  
 grid.appendChild(row) 
if(oportunidades==0){
    gameOver("perdiste")
}

          
}


    
function gameOver(mensaje){
    button.disabled=true
    input.disabled=true
    let contenedor=document.getElementById("guesses")
    contenedor.innerHTML="<h1>"+ mensaje +"</h1>"
    
}




