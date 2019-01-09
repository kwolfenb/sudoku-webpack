import { Sudoku } from './../src/sudoku.js';
describe('Sudoku', function() {
    var reusableSudoku;

    beforeEach(function() {
        reusableSudoku = new Sudoku(1,2,3,4,5,6,7,8,9);
    });
    it('should show how beforeEach works', function() {
        console.log(reusableSudoku);
      });
    it('shoudl return first number in Sudoku Row', function() {
        expect(reusableSudoku.a).toEqual(1);
    });

    it('should return duplicate number in Sudoku Row', function() {
        var duplicatedNumber = new Sudoku(1, 2, 3, 3, 4, 5, 6, 6, 7);
        expect(duplicatedNumber.checkRow()).toEqual("this row is incorrect");
    });
});