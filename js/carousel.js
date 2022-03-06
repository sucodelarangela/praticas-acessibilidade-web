// Variáveis
var new0 = document.querySelector('#new0')
var new1 = document.querySelector('#new1')
var new2 = document.querySelector('#new2')
var btns = document.querySelectorAll('.listaDeArtigos-slider-item')

new0.style.display = 'block'

// Percorre todos os botoes controladores
btns.forEach(function (btn) {
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

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function (btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})
