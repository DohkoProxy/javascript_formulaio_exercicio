document.getElementById('form-valores').addEventListener('submit',function(event) {
    event.preventDefault(); //impede o envio do formular, recarga de página!


const valorA = parseFloat(document.getElementById('valor-a').value);
const valorB = parseFloat(document.getElementById('valor-b').value);
const mensagem = document.getElementById('mensagem'); //o parseFloat vai buscar um valor numérico, decimal para comparaçao.

if (valorB > valorA) {
    mensagem.textContent = 'Formulário válidado.'
    mensagem.style.color = 'green'
} else {
    mensagem.textContent = 'O valor B deve ser MAIOR que o valor A!!!'
    mensagem.style.color = 'red'
    mensagem.style.display = ''
}
});
