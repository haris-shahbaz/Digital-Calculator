let buttons = document.querySelectorAll(".button");
let string = "";
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", function (e) {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string; 
        } 
        else if (e.target.innerHTML == "AC") {
            string = "";
            document.querySelector("input").value = string;
        } else {
        console.log(e.target.innerHTML)
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
        }
    })
})
 
