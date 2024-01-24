let input = document.getElementById('inputBox');
let button = document.querySelectorAll('button');

let string = "";
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.taeget.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (a.taeget.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.taeget.innerHTML == 'DEl') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.taeget.innerHTML;
            input.value = string;
        }

    })
})