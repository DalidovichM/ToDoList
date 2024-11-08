const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');
const btnClear = document.querySelector('#clear')
btn.addEventListener('click', function(){
    const item = document.createElement('div');
    const text = document.createElement('li');
    text.innerText = inputField.value;
    if(inputField.value.length === 0){
        return false;
    }

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    toDoContainer.appendChild(item);
    item.appendChild(text);
    item.appendChild(checkBox);
    item.classList.add('item');
    text.classList.add('added');
    checkBox.classList.add('checkbox');
    inputField.value = "";
    
    checkBox.addEventListener('click', function(){
        text.classList.add('toDoCompleted');
    }
)
    btnClear.addEventListener('click', () => {
        toDoContainer.innerHTML = "";
    })
});

