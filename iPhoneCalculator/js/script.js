console.log("iPhone Calculator");


// Rememeber: "This calculator only works with two operands at a time."

// this calculator operates on two operands only at a time.
// if additional operator is added while two operands and an operator are already given :
    // it compute the two operands first and provides it as first operand and then awaits for second operand.
    // since it doesn't accept more than two operands at a time it doesn't compute using bodmas rule.
// AC resets every variable.
// all operators works correctly except +or- operator.
// the calculator doesn't support decimal inputs or '.' at least for a while.
// there are some repeated validations in the functions and if clauses that needs to be optimized.

// HOW IT WORKS:
    // first takes the first operand into 'op1' variable concatenated and stored as string.
    // the moment a user inserts an operator the 'op1' variable is marked as first operand.
    // the operator stored in 'operator' variable.
    // then when user starts to insert the second operand the program checks :
        // checks if the 'operator' variable is '' or not then if not :
            // if not stores the second operand in 'op2' variable as string.
    // if the user wants to get the result and inserts '=' sign :
        // it immediately calls the operation function displays the result
        // if the user wants to continue after the result :
            // is displayed the user can simply insert the next operator by then :
                // it stores the previous result as the current first operand in 'op1'
            // and awaits the second operand as the same as the previous
    // if the user don't want ro insert the '=' sign and still continues with the second operator :
        // the program automatically compute the two operands,
        // and displays the result as the first operand along with the second operator that's being inserted.





var display = $(".value");
var operator = '';
var op1 = '';
var op2 = '';
var allOp = '';
var resultPre = null;

console.log(isNaN('-'));
$(".button").on("click", function (event){

    var button = $(this);
    var buttonText = button.text();

    // this if function checks for second operator sign so that it computes :
        // the first two operands first and accept the operator and awaits for the second operand.

    if (operator != '' && buttonText != 'AC' && buttonText != '=' && buttonText != '±' && isNaN(buttonText)){
        op1 = operation(operator);
        allOp = op1.toString();
        operator = buttonText;
        op2 = '';
    }

    // here for the first time or after AC is used to accept operands

    if(resultPre == null && !isNaN(buttonText) && buttonText != 'AC' && buttonText != '=' && buttonText != '±'){
        operand2(buttonText);
        operand1(buttonText);
    }

    // here to accept an operator

    else if(resultPre == null && isNaN(buttonText) && buttonText != 'AC' && buttonText != '=' && buttonText != '±'){
        operator1(buttonText);
        // display.html(allOp);
    }


    // here if after '=' sign is used and wants to continue with the result value as first operand,
        // accepts operator for the next computation

    else if(resultPre != null && isNaN(buttonText) && buttonText != 'AC' && buttonText != '=' && buttonText != '±'){
        op1 = resultPre;
        allOp = op1;
        operator1(buttonText);
    }

    // to accept the second operand after the first one is set automatically from the perivious result

    else if(resultPre != null && !isNaN(buttonText) && buttonText != 'AC' && buttonText != '=' && buttonText != '±'){
        operand2(buttonText);
    }


    // this updates the display after each input click
    display.html(allOp);


    // calls the switch function to get the result
    if(buttonText == '=')
    {
        display.html(operation(operator));
        clear();
    }

    // this resets every variables in the program
    if (buttonText == 'AC'){
        clear();
        resultPre = null;
        allOp = '';
        display.html('0');
    }

});





// a switch case operates on the two operands by converting them into a number
function operation(operator){
    var result;
    switch(operator){
        case '×' :
            result = parseFloat(op1) * parseFloat(op2);
            break;
        case '÷' :
            result = parseFloat(op1) / parseFloat(op2);
            break;
        case '%' :
            result = parseFloat(op1) % parseFloat(op2);
            break;
        case '+' :
            result = parseFloat(op1) + parseFloat(op2);
            break;
        case '−' :
            result = parseFloat(op1) - parseFloat(op2);
            break;
        default :
            result = 'Undefined';
    }
    console.log(result);
    resultPre = result;
    return result
}

// used to clear only the three input variables
function clear(){
    op1 = '';
    op2 = '';
    operator = '';
}

// checks and accept a first operand there might be validation redundancy
function operand1(buttonText){

    if (!isNaN(buttonText) && operator == '' && buttonText != 'AC' && buttonText != '=' && buttonText != '±'){
        op1 += buttonText;
        allOp += buttonText;

        console.log(op1);
    }
    else{
        return;
    }
}

// checks and accept a second operand there might be validation redundancy
function operand2(buttonText){

    if (!isNaN(buttonText) && operator != '' && buttonText != 'AC' && buttonText != '=' && buttonText != '±'){
        op2 += buttonText;
        allOp += buttonText;

        console.log(op2);
    }
    else{
        return;
    }
}

// checks and accept an operator there might be validation redundancy
function operator1(buttonText){
    if (isNaN(buttonText) && buttonText != 'AC' && buttonText != '=' && buttonText != '±'){
        operator = buttonText;
        allOp += buttonText;
    }
    else{
        return;
    }
}

