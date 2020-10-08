/*-----------HOW TO CALL OR FIND A FORM -----------*/

//Using index of notation 
/* const form = document.forms[0]; */

//using the name of the form 
/* const form = document.forms.search; */

//2 way using the name of the form 
const form = document.forms['search'];


/*----------ACCESSING AN ELEMENT INSIDE THE FORM -----------*/

// write fromt and the name of the element 
const input = form.searchInput;

// other way
/* const input = form['searchInput']; */