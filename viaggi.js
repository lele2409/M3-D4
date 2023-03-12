window.onload = function contaImmagini(){
    let immagini = document.getElementsByClassName('img');
    let numImmagini = immagini.length;
    let contaImmagini = document.getElementById('contatore')
    contaImmagini.innerHTML = numImmagini+ ' album';
}

function removeCard(){
    let cancella = document.getElementsByClassName('img');
    cancella.remove();
}