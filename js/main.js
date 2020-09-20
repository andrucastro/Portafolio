// Links assignments 
const links = [ 
    {
    label: "week1",
    link:"/week1/reading_assignment.html"
    },

    {
    label: "week2",
    link: "/week1/reading_assignment.html"    
    }
];

/* I tried to do several things during the week to create the menu, but I had many problems to get the elements from the object within the loop.
 I also had problems to create an element "a" and  "li"  using the method append child. 
 I had not inserted two elements at the same tag before, and it was harder than I thought.
 I will continue working on this the next week because I think it is a really good challenge. */

//number of links on the list
var links_number = links.length;

console.log(links[1].label)


function add_link(){

    //create a link per every item in the array 
  i = 0;    
  while (i <= links_number){
        
        const content_table = document.getElementById("content_table");

        var newElement = document.createElement('a');

        newElement.innerHTML =links[i].label;
        newElement.href = links[i].links;
        
        i++;
    }
}

add_link();
