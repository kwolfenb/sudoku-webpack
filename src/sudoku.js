export class Sudoku {

 checkNumbers(arr) {
 if (arr.include("1") && arr.include("2") && arr.include("3") && arr.include("4") && arr.include("5") && arr.include("6") && arr.include("7") && arr.include("8") && arr.include("9")) {
   return true;
 }
 return false;

  }

  checkRow(arr) {
    var check = true;
  for (var i=0; i<=80; i+=9) 
  {
    rowArr = [arr[i], arr[i+1], arr[i+2], arr[i+3], arr[i+4], arr[i+5], arr[i+6], arr[i+7], arr[i+8]];
    check = checkNumbers(rowArr);
  }
  }


}