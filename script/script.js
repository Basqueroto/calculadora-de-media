var form = document.getElementById('form')
var container = document.getElementById('container')
var inp = document.getElementsByClassName('nota')
var pai = document.getElementById('pai')
var txt = document.getElementById('texto')
var contagem = 0
var position = []

function gerar (btn) {
    var pai = btn.parentElement
    var n = btn.dataset.indice
    position.push(parseFloat(n))
    console.log(position)
    pai.innerHTML = ""
    pai.innerHTML = `
               <input type="text" class="pesoB" name="peso" required>
               <button data-indice="`+ n +`" onclick="apagar(this)">apagar</button>
        `
}

function apagar (btn) {
    var pai = btn.parentElement
    var n = btn.dataset.indice
    if (position.length < 2) {
        position.pop()
    }else {
        for (var i = 0; i < position.length; i++) {
            if (position[i] == n) {
                position.splice(i, 1)
            }
        }
    } 
    console.log(position)
    pai.innerHTML = ""
    pai.innerHTML = `
    <button data-indice="`+ n +`" class="bnt-peso" onclick="gerar(this)">gerar</button>           
      `
}

function add () {
    contagem += 1
    console.log(contagem)
    container.innerHTML += `
    <div class="contain-name">
        <div class="inpt">
            <label for="nota" class="label">Notas</label>
            <input type=text name="nota1" class="nota">
        </div>
        <div class="peso">
            <button data-indice="`+ contagem +`" class="bnt-peso" onclick="gerar(this)">gerar</button>   
        </div> 
    </div>
    `
}

function tra () {
    contagem = contagem - 1 
    position.pop()  
    container.removeChild(container.lastElementChild) 
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    var inputs = document.querySelectorAll(".nota")
    var peso = document.querySelectorAll(".pesoB")
    var aInp = []
    var aPeso = []
    var soma = 0
    var somanote = 0
    var final = 0

    for (var i = 0; i < inputs.length; i++) {
        aInp.push(parseFloat(inputs[i].value))
    }

    for (var i = 0; i < peso.length; i++) {
        aPeso.push(parseFloat(peso[i].value))
    }
    console.log(position)
    if (aPeso.length > 0) {
        for(var i = 0; i < position.length; i++){
            aInp[position[i]] = aPeso[i] * aInp[position[i]]
        }
        for(var i = 0; i < aPeso.length; i++) {
            soma += aPeso[i]
        }
        for(var i = 0; i < aInp.length; i++) {
            somanote += aInp[i]
        }

        console.log(aPeso)
        console.log(aInp)

        soma += aInp.length - aPeso.length
        final = somanote / soma
        console.log(final)
    }
    else {
        for(var i = 0; i < aInp.length; i++) {
            somanote += aInp[i]
        }
        final = somanote / aInp.length
        console.log(final)
    }

    if (final >= 7) {
        texto.innerHTML = "o aluno passou com a nota de " + final.toFixed(1)
    }
    else if (final >= 5) {
        texto.innerHTML = "o aluno ficou de exame com a nota de " + final.toFixed(1)
    }
    else {
        texto.innerHTML = "o aluno foi reprovado " + final.toFixed(1)
    }
})
