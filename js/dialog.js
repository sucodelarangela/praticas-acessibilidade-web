// Variáveis
var btnAbreDialog = document.querySelector('#abreDialog')
var dialog = document.querySelector('.dialogNewsletter')
var dialogBody = document.querySelector('.dialogNewsletter-body')
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay')
var conteudoForaDialog = document.querySelector('#conteudoForaDialog')
var video = document.querySelector('video')

btnAbreDialog.style.display = 'block'

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function () {
  dialog.classList.add('dialogNewsletter--aberto')
  document.querySelector('.dialogNewsletter-campo').focus()
  conteudoForaDialog.inert = true //lib
  video.removeAttribute('controls') // remove os controles, que não perdem o foco com o inert
})

function fechandoDialog() {
  document.activeElement.blur()
  dialog.classList.remove('dialogNewsletter--aberto')
  conteudoForaDialog.inert = false // lib
  btnAbreDialog.focus() // retorna o foco para o botão de receber destaques, senão o foco voltará para o início da página
  video.setAttribute('controls', true) // adiciona novamente os controles
}

// Listeners
document
  .querySelector('.dialogNewsletter-fechar')
  .addEventListener('click', fechandoDialog)

// Fechar dialog clicando no overlay
dialogOverlay.addEventListener('click', fechandoDialog)

// Fechar dialog com ESC
document.addEventListener('keyup', evento => {
  if (evento.keyCode == 27) {
    fechandoDialog()
  }
})
