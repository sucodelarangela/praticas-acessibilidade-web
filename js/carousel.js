// Variáveis
var new0 = document.querySelector('#new0')
var new1 = document.querySelector('#new1')
var new2 = document.querySelector('#new2')
var btns = document.querySelectorAll('.listaDeArtigos-slider-item')
var noticias = document.querySelectorAll('.listaDeArtigos-item')

new0.style.display = 'block'

// Criando indicador de slide atual
var indicadorSlideAtual = document.createElement('span')
indicadorSlideAtual.classList.add('escondeVisualmente')
indicadorSlideAtual.setAttribute('id', 'escondeVisualmente')
indicadorSlideAtual.textContent = '(Slide atual)'

// Percorre todos os botoes controladores
btns.forEach(function (btn) {
  // Mostra ou esconde a notícia conforme botao selecionado no carrossel
  btn.addEventListener('click', function () {
    noticias.forEach(
      function (noticia) {
        noticia.style.display = 'none'

        if (
          this.getAttribute('data-sliderItem') ===
          noticia.getAttribute('data-noticia')
        ) {
          noticia.style.display = 'block'
        }
      }.bind(this)
    )

    // Remove o indicador do slide anterior
    document.querySelector('#escondeVisualmente').remove()

    // Inclui o indicador no slide selecionado
    this.append(indicadorSlideAtual)

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function (btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})
