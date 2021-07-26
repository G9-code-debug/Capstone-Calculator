var first_number = 0;
var second_number = 0;
var xyz = 0;
function add() {
    first_number = document.getElementById("add_first_number").value;
    second_number = document.getElementById("add_second_number").value;
    console.log(first_number);
    console.log(second_number);
    xyz = parseInt(first_number) + parseInt(second_number);
    console.log(xyz);
    document.getElementById("add_answer").innerHTML = xyz;
}
function subtract() {
    first_number = document.getElementById("minus_first_number").value;
    second_number = document.getElementById("minus_second_number").value;
    console.log(first_number);
    console.log(second_number);
    xyz = parseInt(first_number) - parseInt(second_number);
    console.log(xyz);
    document.getElementById("subtract_answer").innerHTML = xyz;
}
function multiply() {
    first_number = document.getElementById("multiply_first_number").value;
    second_number = document.getElementById("multiply_second_number").value;
    console.log(first_number);
    console.log(second_number);
    xyz = parseInt(first_number) * parseInt(second_number);
    console.log(xyz);
    document.getElementById("multiply_answer").innerHTML = xyz;
}
function divide() {
    first_number = document.getElementById("division_first_Number").value;
    second_number = document.getElementById("division_second_number").value;
    console.log(first_number);
    console.log(second_number);
    xyz = first_number/second_number;
    console.log(xyz);
    document.getElementById("division_answer").innerHTML = xyz;
}
