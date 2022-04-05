/*
LINK : https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
QUESTION :
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"
*/

//SOLUTION 1 :

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

//SOLUTION 2:
function printArray(array){
  return array.join();
}
/*
join() :
The arr.join() method is used to join the elements of an array into a string. The elements of the string will be separated by a specified separator and its 
default value is a comma(, ).
array.join(separator)

INPUT :
var a = [1, 2, 3, 4, 5, 6];
print(a.join('|'));
OUTPUT:
1|2|3|4|5|6


INPUT :
var a = [1, 2, 3, 4, 5, 6];
print(a.join());
OUTPUT:
1, 2, 3, 4, 5, 6

INPUT :
var a = [1, 2, 3, 4, 5, 6];
print(a.join(''));
OUTPUT:
123456
*/
