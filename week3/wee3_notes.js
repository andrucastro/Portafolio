//"THIS" CONSTRUCTION INVOCATION 
/* The value this make reference to the new object that is being created*/
/* it is very importat use the word "new" - In this case, the vaule "this"can help us to pass 
the paramaters of a function as properties for a new object. */

//consturtor funtion 
function cat (breed, color) {

    this.breed = breed;
    this.color = color;
    console.log(this);
    // cat ('angora', 'black');
}
// new object 
const guizmo = new cat('angora', 'black');


//"THIS" CALLLING METHODS
/* in this case, when we declare the value "this" inside the method of the object, we are making reference to the object it self */ 
const rouco = {
    nombre: 'Rouco',
    especie: 'gato',
    saludar() {
                                //imagine something like ${this.nombre} 
        console.log('Miauuuuu (Hola me llamo ${this.nombre})');
                                //rouco === rouco
        console.log(this === rouco);
    }
};

rouco.saludar(); 
// Miauuuuu (Hola me llamo Rouco) 
// true


// THIS IN ARROW FUNCTIONS
/*when we use "this" in arrow functions, this value always is associate to the immediate external environment. In the next example the
value "this" is making reference to the window object.*/

const funcion = () => {
    console.log(this === window);
};
funcion(); // true
/* in this case, we will use the value this, to make reference to enviroment conunter nad get access to the porperty quantity.*/

const counter = {
    quantity: 0,
    increase() {
        setInterval(() => {

            while( this.quantity < 10) {
            console.log(++this.quantity);
            }
        }, 1000);
    }
};

counter.increase();

// Finding all the Properties of an Object

const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

/*
1) create a variable "key in this case" 
2) use the value in an the name of the object
3) the variable "key" is going to take the values of each property of the object in order. 
* the values will appear where is the "key" variable *
*/
for(const key in superman) {
    console.log(key + ": " + superman[key]);
}

// ACCESS ONLY THE KEYS OF THE OBJECT 
/*
1) create a variable key
2) Use the method object.key("name of the object")
3) This method is going to read all the keys of the object 
* the values will appear where is the "key" variable *

if you wanto to know the values just reaplace the word keys by values
Example : for(const key of Object.Values(superman))
*/

  //variable key
for(const key of Object.keys(superman)) {
    console.log(key);
}


/*------------------------------------------------------DOM---------------------------------------------------------------*/

//GET ELEMENT BY TAG NAME 
/*sintaxis */
const listItems = document.getElementsByTagName('li');
/* Esample */
// we can use the index notation to find each individual tag of the HTML document 
listItems[0];
//<< <li class='hero'>Superman</li>
listItems[1];
//<< <li class='vigilante hero' id='bats'>Batman</li>
listItems[2];
//<< <li class='hero'>Wonder Woman</li>

/*------------------------------------------------------Events---------------------------------------------------------------*/

// call the document with the id 'clicl'
const clickParagraph = document.getElementById('click');
//add an event listener when user cliks and display the 'word' in the console 
clickParagraph.addEventListener('click',() => console.log('click') );
//add an event listener when user scroll down and display the 'down' in the console 
clickParagraph.addEventListener('mousedown',() => console.log('down') );
//add an event listener when user scroll up and display the 'up' in the console 
clickParagraph.addEventListener('mouseup',() => console.log('up') );



//DOUBE CLICK 


// get the element with the id "dblclickParagraph"
const dblclickParagraph = document.getElementById('dblclick');

// add an event listener to the element inside the constant "dblclickParagraph" and run the function highlight
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event){

    //add or remove the class highlight every time user makes doube click (This new class change the color backgorund)
    event.target.classList.toggle('highlight');
}


//MOUSE OVER

const mouseParagraph = document.getElementById('mouse');
// add the class highlight when the mouse is hover the element. (like pseudo class hover in css)
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);


//MOUSE MOVE example 

mouseParagraph.addEventListener('mousemove', () =>  console.log('You Moved!') );


// KEY EVENTS 

addEventListener('keydown',highlight);