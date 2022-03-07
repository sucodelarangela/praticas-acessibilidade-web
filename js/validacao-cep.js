// Editar mensagem de erro padrão do browser para campos de formulário com atributo required
var campoCep = document.querySelector('#cep')

// Ao dar erro, executa a função
campoCep.oninvalid = function () {
  this.setCustomValidity('')

  // Se a validação do campo for inválida...
  if (!this.validity.valid) {
    // ...atribui uma validação customizada e
    this.setCustomValidity('Ops! Tem algo errado neste campo!')
    // adiciona ao elemento pai um X vermelho marcando o campo errado
    this.parentNode.classList.add('contatoCampo--erro')
  }
}
