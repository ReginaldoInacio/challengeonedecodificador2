/* blink imagem */
let i = 0

var img = document.getElementById('blinking_image')
var delay = 1000
while (i < 10) {
  delay,
    setTimeout(function () {
      var interval = window.setInterval(function () {
        if (img.style.visibility == 'visible') {
          img.style.visibility = 'hidden'
        } else {
          img.style.visibility = 'visible'
        }
      }, 1000)
    }, delay),
    i++
}

var input = document.querySelector('textarea#campo')
var input2 = document.querySelector('textarea#campo2')
input.focus()

function codificar() {
  if (input.value.length == 0) {
    alert('Tell me your thoughts')
    input.focus()
  } else {
    document.getElementById('none').innerHTML = ''
    document.querySelector('img.icone').style.display = 'none'

    var texto = input.value
    var txt = texto.replace(/e/gim, 'enter')
    var txt = txt.replace(/i/gim, 'imes')
    var txt = txt.replace(/a/gim, 'ai')
    var txt = txt.replace(/o/gim, 'ober')
    var txt = txt.replace(/u/gim, 'ufat')

    document.getElementById('campo2').innerHTML = `${txt}`

    document.getElementById('copy').innerHTML =
      '<button class="botao botao3" onclick="copy()">Copiar</button>'
  }
}

function decodificar() {
  if (input.value.length == 0) {
    alert('Dont be a dumb...')
    input.focus()
  } else {
    document.getElementById('none').innerHTML = ''
    document.querySelector('img.icone').style.display = 'none'
    document.getElementById('campo').innerHTML = ''

    var texto = input.value
    var txt = texto.replace(/enter/gim, 'e')
    txt = txt.replace(/imes/gim, 'i')
    txt = txt.replace(/ai/gim, 'a')
    txt = txt.replace(/ober/gim, 'o')
    txt = txt.replace(/ufat/gim, 'u')

    document.getElementById('campo2').innerHTML = `${txt}`

    document.getElementById('copy').innerHTML =
      '<button class="botao botao3" onclick="copy()">Copiar</button>'
  }
}

function copy() {
  document.querySelector('#campo2').select()
  document.execCommand('copy')
  alert('Taked!')
}

var botao1 = document.querySelector('button.botao1')
botao1.onclick = codificar

var botao2 = document.querySelector('button.botao2')
botao2.onclick = decodificar
