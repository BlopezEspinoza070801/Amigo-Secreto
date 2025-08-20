let amigos=[];
let listaAmigos=document.getElementById('listaAmigos');
let resultado=document.getElementById('resultado');

function agregarAmigo(){
    let amigo=document.getElementById('amigo').value;
    resultado.innerHTML="";
    if(amigo==""){
        alert("Por favor inserte un nombre")
    }else{
        if(amigos.includes(amigo)){
            alert("Este nombre ya esta agregado,inserte otro")
        }else{
            amigos.push(amigo);
        }
        document.querySelector('#amigo').value=''
        ListaGrafica()
    }
}

function ListaGrafica(){
    listaAmigos.innerHTML="";
    let longitud=amigos.length-1;
    let inicio=0
    while(inicio<=longitud){
        let li=document.createElement("li");
        li.textContent=amigos[inicio];
        listaAmigos.appendChild(li);
        inicio++
    }
}

function CondicionesIniciales(){
    listaAmigos.innerHTML="";
    amigos=[];
}


function sortearAmigo(){
    if(amigos.length==0){
        alert("No introduciste ningun amigo para sortear")
    }else{
        if(amigos.length==1){
            alert("Necesitas introducir mínimo 2 amigos para hacer el sorteo")
        }else{
            let numeroMaximo=amigos.length;
            let numeroAleatorio=Math.floor(Math.random()*numeroMaximo);
            console.log(amigos[numeroAleatorio])
            resultado.innerHTML=""
            resultado.innerHTML=`El amigo sorteado es: ${amigos[numeroAleatorio]}`
            CondicionesIniciales()   
        }
    }
}


