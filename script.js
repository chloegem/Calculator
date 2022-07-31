
function add(num1, num2)
{ 
    return num1+num2;
}

function subtract(num1, num2)
{
    return num1-num2;
}

function multiply(num1, num2)
{
    return num1*num2;
}

function divide(num1, num2)
{
    return num1/num2;
}
  
function operate(str)
{
    let operators = "/*-+"; 
    for (let i = 0; i < 4; i++) {
      const op = operators.charAt(i);
      const pos = str.indexOf(op);
      if (pos > 0 && operators.indexOf(str.charAt(pos - 1)) == -1) {
        let left = operate(str.substr(0, pos));
        let right = operate(str.substr(pos + 1));
        switch (op) {
            case "+": return add(left,right); 
            case "-": return subtract(left,right);
            case "*": return multiply(left,right);
            case "/": return divide(left,right);
          
         
          
        }
      }
    }
    return Number(str);
}

function solve()
{
    let left1 = document.querySelector('#result').value
    let right1 = operate(left1)
    document.querySelector('#result').value = right1
}

function clearData()
{
    document.querySelector('#result').value =""
}

function display(num)
{
    document.querySelector('#result').value+=num
}