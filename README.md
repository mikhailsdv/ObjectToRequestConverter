# ObjectToRequestConverter
Convert multidimensional JavaScript object to x-www-form-urlencoded request object.

### Usage

Call `convert(array, name)` where `array` is an array or an object that needs to be converted and `name` (optional) is a string that will go before every path in the result object.
```
//let's say we have some complex object like this
let arr = [{"a":1,"b":[1,2,3]},[{"c":4,"d":5,"e":[6,{"f":7}]}],8];

console.log(convert(arr, "name")); //with name
/*
  {
    name[0][a]: 1
    name[0][b][0]: 1
    name[0][b][1]: 2
    name[0][b][2]: 3
    name[1][0][c]: 4
    name[1][0][d]: 5
    name[1][0][e][0]: 6
    name[1][0][e][1][f]: 7
    name[2]: 8
  }
*/


console.log(convert(arr)); //without name
/*
  {
    [0][a]: 1
    [0][b][0]: 1
    [0][b][1]: 2
    [0][b][2]: 3
    [1][0][c]: 4
    [1][0][d]: 5
    [1][0][e][0]: 6
    [1][0][e][1][f]: 7
    [2]: 8
  }
*/
```
