import {Poem, fiveSyl, sevenSyl } from "./js/blscript.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



$(document).ready(function () {
  $('#haiku').submit(function(event) {
    event.preventDefault();
    const line1 = $('#line1').val();
    const line2 = $('#line2').val();
    const line3 = $('#line3').val();

    let poem = new Poem(line1, line2, line3);
    let one = fiveSyl(poem,line1) ? true : false;
    let two = sevenSyl(poem,line2) ? true : false;
    let three = fiveSyl(poem, line3) ? true : false;

    one == true && two == true && three == true ? $("#isNotHaiku").hide() && $("#isHaiku").show() : $("#isHaiku").hide() && $("#isNotHaiku").show();
  });
});