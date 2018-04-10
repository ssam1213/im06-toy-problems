/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange){

  // console.log('keys', Object.keys(apple));
  // if(Object.keys(apple).length === Object.keys(orange).length ){
  //   for(var i=0; i<Object.keys(apple).length; i++){
  //     if(typeof apple[i]==='object'){
  //       deepEquals(apple[i], orange[i])
  //     }
  //     if(apple[i]===orange[i]){
  //       return true
  //     }
  //   }
  // }
 

  for(var key in apple){
    console.log(key);
    if(typeof apple[key] ==='object' && typeof orange[key] ==='object'){
        deepEquals(apple[key], orange[key])
      }
    if(Object.keys(apple)===Object.keys(orange)){
      console.log(Object.keys(apple));
      
      return true;
    } 
  } 

};

var output = deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); 
console.log(output);
