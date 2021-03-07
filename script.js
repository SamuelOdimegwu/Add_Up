const num1 = document.getElementById("inpt1");
const num2 = document.getElementById("inpt2");
const button = document.getElementById("button");

button.onclick = function() {
    if (num1.value == "" || num2.value == "") {
        alert("Empty Input!");
    }
    alert(parseInt(num1.value) + parseInt(num2.value));
}