var form = document.getElementById('form')
var container = document.getElementById('container')
var inp = document.getElementsByClassName('nota')
var pai = document.getElementById('pai')

function gerar(btn) {
    var pai = btn.parentElement
    pai.innerHTML = ""
    pai.innerHTML = `
               <input type="text" class="peso" name="peso" required>
               <button onclick="apagar(this)">Apagar</button>
        `
}

function apagar(btn) {
    var pai = btn.parentElement
    pai.innerHTML = ""
    pai.innerHTML = `
    <button class="bnt-peso" onclick="gerar(this)">Gerar</button>           
      `
}

function add() {
    container.innerHTML += `
    <div class="contain-name">
        <div class="inpt">
            <label for="nota" class="label">Notas</label>
            <input type=text name="nota1" class="nota" required="" placeholder="Digite a nota">
        </div>
        <div class="peso">
            <button class="bnt-peso" onclick="gerar(this)">Gerar</button>   
        </div> 
    </div>
    `
}

function tra() {
    container.removeChild(container.lastElementChild)
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    var inputs = document.querySelectorAll(".nota")
    var peso = document.querySelectorAll(".peso")
    var aInp = []
    var aPeso = []

    for (let i = 0; i < inputs.length; i++) {
        aInp.push(inputs[i].value)
    }

    for (let i = 0; i < peso.length; i++) {
        aPeso.push(inputs[i].value)
    }




    console.log(aInp)
    console.log(aPeso)
})






