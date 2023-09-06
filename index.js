const value = document.querySelector('.counting');

const increment = () => {
    let newValue = parseInt(value.innerText);
    newValue = newValue + 1;

    value.innerText = newValue;
}

const decrement = () => {
    let newValue = parseInt(value.innerText);
    newValue = newValue - 1;

    value.innerText = newValue;
}