/*
LINK : https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
QUESTION :
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"
*/

function printArray(array){
  let resStr = "";
  for(let i  = 0 ; i < array.length ; i++){
    if(i != (array.length-1))
      resStr+=array[i]+',';
    else
      resStr+=array[i];
  }
  return resStr;
}
