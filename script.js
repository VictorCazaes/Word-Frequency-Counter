const text = document.querySelector('#text-check');
const display = document.querySelector('.display');
const check = document.querySelector('.check');
const reset = document.querySelector('.reset');


check.addEventListener('click', () => {
    display.innerHTML = '';
    const input = text.value;
    let arrayWords = input.split(' ');
    let result = "";
    const inputLength = arrayWords.length;
    arrayWords.forEach(word => {
        const newArrayWords = arrayWords.filter(eachWord => eachWord != word);
        const wordCount = inputLength - newArrayWords.length;
        const resultArray = result.split(' ');
        if (resultArray.includes(word)) {
            return;
        } else {
            result = `${result} ${word}`;
            display.innerHTML = display.innerHTML + `<div class="display-content">${word.toUpperCase()} = ${wordCount} times</div>`;
        }

    });
});
reset.addEventListener('click', () => {
    text.value = '';
    display.innerHTML = '';
});
