

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

/*----------------------------------------------------------Call backs practice----------------------------------------------------------*/

// Tax calculator 

// stept 1: get the price from the input price.  
function getprice(){
  // find the input with the ID 'price' and store the value in the variable 'price'
  let price = parseFloat(document.getElementById('price').value)
  
  //return the variable price 
  return price;
}

// This function calculates the price by applying a discount percentage
function calculateDiscount(price){

  // assign the value returned by the function getPrice() to parameter price. 
  price = getprice();

  // find the input with the ID 'discoun' and store the value in the variable 'discoun'
  let discount = parseFloat(document.getElementById('discount').value);

  // Declare a variable 'discountApplayed' to store the final result 
  let discountApplayed = 0;

  // evaluate : if the user doesn't enter any value assign 0 to "discountApplayed" and "price" variable
  if(discount === "" ){

    discountApplayed = 0; 
  }
  
  // if the discount value is between 100% and 0% calculate the discount and store the value in the "discountApplayed" variable 
  else if( discount <= 100  && discount >= 0 ){

     discountApplayed = price - ((discount / 100) * price);
  }

  // in any other case the "discountApplayed" variable will be 0
  else{

    discountApplayed = 0;
  }
  
  // retunr the "discountApplayed" variable 
  return discountApplayed;
  
}

//get the estate chosen by the user
function getstate(){
  // find the input with the ID 'stateOption' and store the value in the variable 'state'
  let state = document.getElementById('stateOption').value
  
   //return the variable state
  return state;
}

function main(price, state){
  
  // assign the value returned by the function calculateDiscount() to parameter price. 
  price = calculateDiscount()
  
  // assign the value returned by the function getstate() to parameter state. 
  state = getstate()
  
  // declare a variable to store the final result with taxes 
   let total="";

   // evaluate the estate and assign a tax rate, and calculate the final price 
    if(state === "Texas"){
        total = price * 0.0625 + price
    }
    else if(state === "NewYork"){
        total = price * 0.0575 + price
    }
    else if(state === "California"){
        total = price * 0.0825 + price
    }
    else if(state === "Florida"){
        total = price * 0.06 + price
    }

  // display the total amount to the user 
  document.getElementById('result').innerHTML = total.toFixed(2);
}








