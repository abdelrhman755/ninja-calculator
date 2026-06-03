let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");
const slashsound = new Audio("./sounds/sword.mp3");
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) =>{
        if(e.target.innerHTML == '=') {
            string = eval(string);
            inputvalue = string;
            input.value = inputvalue;
            slashsound.currentTime = 0;
            slashsound.play();
        }
        else if(e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL') {
            string = string.slice(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})