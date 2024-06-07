const button = document.querySelector("button");
const modal = document.getElementById('modal');
const buttonClose = document.querySelector('dialog button');

button.onclick = function (){
    modal.showModal();
}
buttonClose.onclick = function (){
    modal.close();
    alert("Sua Mensagem Foi Enviada! Obrigado pelo contado, em brave entraremos em contato com você pelo nomero adicionado!");
} 