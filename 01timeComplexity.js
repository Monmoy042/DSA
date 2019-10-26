//  Time Complexity
/*
    We can calculate different types of time complexity
        1. Assignment Operation
        2. Comparison Operation
        3. Arithmetic Operation
        4. Work in Functions
        5. Function Call
    N.B. We can ignore the complexity while calling a function.

    There are several types of Time Complexity:
        a. Order of 1 --> O(1) [It is called Big 'O' notation]
        b. Order of n --> O(n)
        c. Order of n^2 --> O(n^2)
        d. Order of n! --> O(n!)
        e. Order of n^n --> O(n^n)
 */

// Complexity: O(1) 
/* No of operation:
        1. Arithmetic Operation = 1
        2. Assignment Operation = 3
    Here, number of operations will not depend on the values of n.
    That means the operations will not depend on the input. 
    So, Time Complexity: O(1)
*/
let n1,n2,result;
n1 = 10;
n2 = 20;
result = n1+n2;
console.log(result);

// Another Example:
/*
    Here, Arithmetic Operation: 3
          Assignment Operation: 1
          Total Operations: 4
    Here, also input will not depend on the number of operations.
    So, Time Complexity: O(1)
*/
let n = 3;
let result1 = (n*(n+1))/2;
console.log(`The value of result1 is: ${result1}`);

// Same Example using For Loop
/*
    Here, Assignment Operation: 1
          Arithmetic Operation: 1
    *** Number of operations are proportional to the number of input or num3 ***
    So, Time Complexity: O(2*n) --> 2*O(n) --> Finally, O(n)
    
    n      Operation(2*n)
    ---   ----------------
     1          2
     2          4
     3          6
     4          8
     10         20
     100        200
    N.B. We usually called this type of complexity as "Linear Complexity"
*/
let i,num1=3,result2=0;
for(i=1;i<=num1;i++){
    result2 = result2 + i;
    // console.log(result3);
}
console.log(`The value of Result3 is ${result2}`);
