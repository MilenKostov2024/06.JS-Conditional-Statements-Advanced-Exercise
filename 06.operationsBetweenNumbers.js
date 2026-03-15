function operationsBetweenNumbers(N1, N2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = N1 + N2;
            console.log(`${N1} ${operator} ${N2} = ${result} - ${result % 2 === 0 ? "even" : "odd"}`);
            break;
        case "-":
            result = N1 - N2;
            console.log(`${N1} ${operator} ${N2} = ${result} - ${result % 2 === 0 ? "even" : "odd"}`);
            break;
        case "*":
            result = N1 * N2;
            console.log(`${N1} ${operator} ${N2} = ${result} - ${result % 2 === 0 ? "even" : "odd"}`);
            break;
        case "/":
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`);
            } else {
                result = (N1 / N2).toFixed(2);
                console.log(`${N1} / ${N2} = ${result}`);
            }
            break;
        case "%":
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`);
            } else {
                result = N1 % N2;
                console.log(`${N1} % ${N2} = ${result}`);
            }
            break;
        default:
            console.log("Invalid operator");
    }
}

operationsBetweenNumbers()