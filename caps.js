Ananymous

function (string) {
     string = string.toLowerCase().split(' ');
     for (var i = 0; i < string.length; i++) {
       string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1); 
     } 
     console.log(string.join(' '));
   }

//IIFE

   (function (str) {
     str = str.toLowerCase().split(' ');
     for (var i = 0; i < str.length; i++) {
       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
     } 
     return str.join(' ');
   })("I AM A GUVI LEARNER");

//Arrow

titleCase = (str) => {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  return str.join(' ');
}    

