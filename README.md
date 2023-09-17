# JavaScript-Projects
Evangadi phase-II javascript projects

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


