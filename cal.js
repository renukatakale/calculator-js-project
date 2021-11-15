
const buttons = document.querySelectorAll('button');

const display = document.querySelector('.display');

buttons.forEach(function (button) {
    button.addEventListener('click', calculate);
});
function calculate(event) {
    const clickedButtonValue = event.target.value;
    if (clickedButtonValue === '=') {
        // check if the display is not empty then only do the calculation
        if (display.value !== '') {
            // calculate and show the answer to display
            display.value = eval(display.value);
        }
    } else if (clickedButtonValue === 'C') {
        // clear everything on display
        display.value = '';
    } else {
        // otherwise concatenate it to the display
        display.value += clickedButtonValue;
    }


}
