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
