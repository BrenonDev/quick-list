// obtém os elementos
const itemName = document.querySelector('.add-item input');
const addButton = document.querySelector('.add-button');
const list = document.querySelector('.list');
const item = document.querySelectorAll('.item');
const deleteButton = document.querySelectorAll('.delete');
const alert = document.querySelector('.alert');

// captura o texto digitado no input
itemName.addEventListener('input', () => {

    // captura o clique no botão de adicionar item
    addButton.onclick = () => {
        
        // verifica se o input está vazio
        if (itemName.value.trim() === "") {
            alert("Por favor, digite um item para adicionar à lista.");
            return;
        };

        // cria o elemento de item da lista
        const item = document.createElement('li');
        item.classList.add('item');
        
        // cria input do tipo checkbox que envolve o item
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', '');
        input.setAttribute('id', '');

        // cria a caixa de seleção do item
        const checkbox = document.createElement('span');
        checkbox.classList.add('checkbox');

        // cria o texto do item e atribui o valor do input
        const text = document.createElement('span');
        text.classList.add('text');
        text.textContent = itemName.value.trim();

        // cria o botão de deletar o item
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');

        // cria a imagem interna do botão de deletar o item
        const imageDelete = document.createElement('img');
        imageDelete.setAttribute('src', 'assets/icons/delete.svg');
        imageDelete.setAttribute('alt', 'ícone de lixeira');

        // insere a imagem de lixeira dentro do botão de deletar o item
        deleteButton.appendChild(imageDelete);

        // insere todos os elementos dentro do item da lista
        item.appendChild(input);
        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(deleteButton);

        // insere o item na lista
        list.appendChild(item);

        // limpa o input após adicionar o item
        itemName.value = "";
    };
});

// exclui o item da lista ao clicar no botão de deletar
addEventListener('click', (event) => {

    // verifica se o alvo do clique é o botão de deletar ou ícone de lixeira
    if (event.target.classList.contains('delete') || event.target.closest('.delete')) {

        // obtém o item pai do botão de deletar clicado
        const itemToDelete = event.target.closest('.item');
        list.removeChild(itemToDelete);

        // exibir a mensagem de item excluído
        alert.classList.remove('hide');
        setTimeout(() => {
            alert.classList.add('hide');
        }, 3000);
    }

    // verifica se o alvo do clique é o botão de fechar da mensagem de alerta
    if (event.target.classList.contains('remove') || event.target.closest('.remove')) {

        // oculta a mensagem de alerta
        alert.classList.add('hide');
    };
});