// Variáveis
var new0 = document.querySelector('#new0')
var new1 = document.querySelector('#new1')
var new2 = document.querySelector('#new2')
var btns = document.querySelectorAll('.listaDeArtigos-slider-item')

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
    if (this.getAttribute('data-sliderItem') === '0') {
      new0.style.display = 'block'
      new1.style.display = 'none'
      new2.style.display = 'none'
    } else if (this.getAttribute('data-sliderItem') === '1') {
      new0.style.display = 'none'
      new1.style.display = 'block'
      new2.style.display = 'none'
    } else {
      new0.style.display = 'none'
      new1.style.display = 'none'
      new2.style.display = 'block'
    }

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
