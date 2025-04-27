const botaoMensagem = document.getElementById('botao-mensagem');  // Correção: botao-mensagem
const mensagem = document.getElementById('mensagem');

botaoMensagem.addEventListener('click', function() {
    mensagem.textContent = "Acredite em si mesmo! Você é capaz!";
});