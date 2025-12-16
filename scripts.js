const itemName = document.querySelector('.add-item input');

itemName.addEventListener('input', () => {
    console.log(itemName.value);
});