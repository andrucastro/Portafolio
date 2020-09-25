

/*-------------------------------------------------EXCERSIE I loops and conditionals-----------------------------------------------*/ 

/*-Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions.For numbers divisible by 3, print "Fizz" instead of the number,
and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that 
are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible
 by only one of those).
*/ 

//creater a counter 
let counter = 0 

// repeat this proces 100 times 
while( counter < 100){

    // if the numebr is divisible by 3 and 5 write 'FizzBuzz' (it is very important evaluate this condicion first, otherwise we could put the wrong word)  )
    if( counter % 3 === 0 && counter % 5 === 0){
        console.log('FizzBuzz');
    }
    //if the numebr is divisible by 3 write 'Fizz'
    else if(counter % 3 === 0 ){
        
        console.log('Fizz');
    }
    //if the numebr is divisible by 3 write 'Fizz'
    else if(counter % 5 === 0 ){
        
        console.log('Buzz');
    }
    //if the numebr is divisible by 3 or 5 just write the number of the counter 
    else{
        console.log(counter);
    }
    // add 1 to counter an repeat the process
    counter++
}

/*-------------------------------------------------EXCERSIE II loops and conditionals-----------------------------------------------*/ 


let size = 8;

//new empty line 
let board = "";

// repeat the proces for Y axis "size" times
for (let y = 0; y < size; y++) {

    // repeat the proces for X axis "size" times
  for (let x = 0; x < size; x++) {

    //if x + y is odd:
    if ((x + y) % 2 == 0) {

    //print a white space 
      board += " ";
    // inf not print the characther "#""
    } else {
      board += "#";
    }
  }
 // when the second loop or X-axis ends, print a line break
  board += "\n";
}
console.log(board);


/*---------------------------------------------Section III notes and things that I didn't know -------------------------------------------*/

// Arrow funtions 
/*variable name*/    /*parameters*/       /*actions, and returns value*/
const add2Numbers = (number1, number2) => number1 + number2;

//declare the fuction 
document.getElementById('add2Numbers').innerHTML += " " + add2Numbers(10,20) + " (review the week2_readings,js file) ";
