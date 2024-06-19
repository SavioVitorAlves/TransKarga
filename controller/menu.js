const menu = document.getElementById('menu');
const lista = document.getElementById('lista'); 


function ativaMenu(){
    if(lista.style.display == 'none'){
        lista.style.display = 'block';
        
    }else{
        lista.style.display = 'none';
        
    }
}