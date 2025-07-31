let btn = document.getElementsByTagName("button");
btn[0].onclick = function calculate() {
  // Get input values from user
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;

  let result;

  // Conditional statements to check which operation is to perform
  if (operator === "add") {
    result = num1 + num2;
  }
  else if (operator === "subtract") {
    result = num1 - num2;
  }
  else {
    result = "Invalid operation";
  }
  // Display result
  document.getElementById("result").innerText = "Result: " + result;
}
