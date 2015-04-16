
// function can be declared below in text, but calling before

var x = f(2, 3);      // x is number 5
x = f("Sla", "vik");  // x is string "Slavik"

x = f(2);             // x is a number NaN
x = f (2, 3, 4, 5);   // x is a number 5 
                      // it is ok to call a function with the another count of parameters

function f(a, b)
{
    return a + b;
}


// __________________________________________________________________________________________________________


function ff()
{
    document.write("FF");
}

function fff(par)
{
    par();
}

var a  = fff;

a(ff);


// __________________________________________________________________________________________________________


f1();

function f1()
{
    var a = 3;
    document.write(a);       // 3
    if (1)
    {
        var a = 5;           // no "block" scope in JavaScript. Only global and function scope. var a - scope f1()
                             // var the same variable two times not an error but this isthe same variable !
        document.write(a);   // 5
    }
    document.write(a);       // 5
}

// __________________________________________________________________________________________________________


var A = "A";  // variable can be declared with or without var in global scope
B = "B";

function f2()
{
    C = "C";  // but using some variable that not declared with var in function scope 
              // is the same as using global variable (that declared implicitly)
}

function f22()
{
    document.write("\r");
    document.write(A);
    document.write(B);
    document.write(C);
    document.write(D);
}

f2();

// f22(); // Error. D is undeclared here. A variable must be declared before in time (not means exactly above in text)
          // C is declared because we called f2() that declared global variable C. 
          // if we don't call f2() C is undeclared also

D = "D";

f22(); // "ABCD"
