/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

 var firstNonRepeatedCharacter = function (string) {
   // TODO: your solution here
   for(var i=0; i<string.length; i++){
       if(string.indexOf(string[i])===string.lastIndexOf(string[i])){
         return string[i];
       }
   }

 };

 console.log(firstNonRepeatedCharacter('AACBDB'));
