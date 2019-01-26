var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var itensLista = JSON.parse(localStorage.getItem('list_itens')) || ['']


function renderList() {

    listElement.innerHTML = ''

    for (itens of itensLista) {
        var itensElement = document.createElement('li')
        var itensText = document.createTextNode(itens)

        var linkELement = document.createElement('a')
        linkELement.setAttribute('href', '#')

        var pos = itensLista.indexOf(itens)
        linkELement.setAttribute('onclick', 'deleteItem(' + pos + ')')

        var linkText = document.createTextNode('Excluir')

        linkELement.appendChild(linkText);

        itensElement.appendChild(itensText)
        itensElement.appendChild(linkELement)

        listElement.appendChild(itensElement)
    }
}

renderList()

function addItens(){
    var itemText = inputElement.value

    itensLista.push(itemText)
    inputElement.value = ''
    renderList()
    saveToStorage()
}

buttonElement.onclick = addItens;

function deleteItem (pos){
    itensLista.splice(pos, 1)

    renderList()
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('list_itens', JSON.stringify(itensLista))
}