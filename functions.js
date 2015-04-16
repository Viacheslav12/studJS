
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


f1();

function f1()
{
    var a = 3;
    document.write(a);       // 3
    if (1)
    {
        var a = 5;           // no "block" scope in JavaScript. Only global and function scope. var a - scope f1()
                             // 'var' the same variable two times not an error but this is the same variable !
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


// __________________________________________________________________________________________________________


function f3()
{
    document.write("F3");
}

function f33(par) // function can be passed as a parameter to another function because can be assigned to a variable, functional parameter is like local variable for function
{
    par();
}

var a  = f33;     // function is 'object' and can be assigned to variable

a(f3);            // variable can be used to invoke (calling) function


// __________________________________________________________________________________________________________


function f4()
{
    document.write(this);      // each function has object this that 'owns' it
    if (this.name) 
        document.write(this.name);
}

f4();                                          // '[object window]' global object for JavaScript functions that executed in browser

document.getElementById("btn1").onclick = f4;  // '[object HTMLButtonElement]' when button pressed

f4.call(document);                             // '[object HTMLDocument]' call method can setup 'this' for a function

var obj = { name : "boo", func : f4};
obj.func();                                    // '[object Object]boo' 

obj = new f4();                                // '[object Object]' but this object new object that function-constructor f4 have to construct


<head>
</head>

<body>
<button id ="btn1">Btn1</button>
<script src="struct.js"></script>
</body>
