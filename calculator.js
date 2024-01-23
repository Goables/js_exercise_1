let input1 = null;
let input2 = null;
let operator = "placeholder"
let equation = "";

function setInput(input) {
    if (input === 'input1') {
        input1 = Number(window.prompt("Set input value:", ""));;
    } else {
        input2 = Number(window.prompt("Set input value:", ""));;
    }
}

function onSelect(operatorValue) {
    operator = operatorValue;
}

function calculate() {
    if (!isNaN(input1) && !isNaN(input2) && operator !== "placeholder") {
        console.log("Input 1:" + input1);
        console.log("Input 2:" + input2);
        console.log("Operation:" + operator);
        switch (operator) {
            case "addition":
                equation = (input1 + " + " + input2 + " = " + (input1 + input2))
                break;
            case "subtraction":
                equation = (input1 + " - " + input2 + " = " + (input1 - input2))
                break;
            case "multiplication":
                equation = (input1 + " x " + input2 + " = " + (input1 * input2))
                break;
            case "division":
                equation = (input1 + " / " + input2 + " = " + (input1 / input2))
                break;
            default:
                console.log("This shouldn't happen");
                break;
        }
        document.open();
        console.log(equation);
        document.write(`
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Calculator</title>
            <script src="calculator.js"></script>
        </head>

        <body>
        <section class="inputSection">
            <h2>Input Equation:</h2>
            <p>Input:</p>
            <button id="input1Button" onclick="setInput('input1')">Input 1</button><br>
            <button id="input2Button" onclick="setInput('input2')">Input 2</button><br>
            <h2>Select Operation</h2>
            <select id="operationChoice" required onchange="onSelect(value)">
                <option value="placeholder"> </option>
                <option value="addition">+</option>
                <option value="subtraction">-</option>
                <option value="multiplication">*</option>
                <option value="division">/</option>
            </select>
            <br>
            <button id="calculateButton" onclick="calculate()">Calculate</button>
            <p>Equation: `+ equation + `</p>
        </section>
        </body>`);
        document.close();
    } else if (isNaN(input1) || isNaN(input2)) {
        alert("Please check your inputs!  One or more is not a valid value!");
    } else if (operator === "placeholder") {
        alert("That's not a valid operation!");
    }
}