//Ananymous

function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  }

//IIFE

(function(array){
   for(var i = 0 ; i< array.length ; i++){
              if(array[i]%2!=0){
                 console.log(array[i])
              } 
         }
   })([1,2,3,4])


//Arrow

let oddNum = (array) => {
   for(var i = 0 ; i< array.length ; i++){
        if(array[i]%2!=0){
           console.log(array[i])
        } 
   }
        }
        oddNum()
