let result = document.getElementById("result");
function clearScreen() {
    result.value = "";
}
function display(value) {
    result.value += value;
}
function calculate() {
    let a = result.value;
    let b = eval(a);
    result.value = b;
}