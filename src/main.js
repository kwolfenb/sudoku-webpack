import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sudoku } from './sudoku.js';


$(document).ready(function() {
  $('#fill-box').submit(function(event) {
    event.preventDefault();

    var arr=[];
    for(var i=0; i<81; i++){
      arr.push($(`#{i}`).val());
    }
    arr.forEach(function(x) {
      console.log(x);
    });
    
  });
});