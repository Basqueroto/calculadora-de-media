var form = document.getElementById('feed-name')
var container = document.getElementById('container')

function gerar (btn) {
    var pai = btn.parentElement
    pai.innerHTML = ""
    container.innerHTML = `
               <input type="text" class="peso" name="peso" required>
               <button onclick="apagar(this)">apagar</button>
        `
}

function apagar (btn) {
    var pai = btn.parentElement
    pai.innerHTML = ""
    container.innerHTML = `
    <button class="bnt-peso" onclick="gerar(this)">gerar</button>           
      `
}

function add () {
    container.innerHTML += `
    <div class="contain-name">
        <div class="inpt">
            <label for="nota" class="label">Notas</label>
            <input type=text name="nota1" class="nota" required="" placeholder="=digite a nota">
        </div>
        <div class="peso">
            <button class="bnt-peso" onclick="gerar(this)">gerar</button>   
        </div> 
    </div>
    `
}

function tra () {
    container.removeChild(container.lastElementChild) 
}

form.addEventListener('submit', () => {
    
})






