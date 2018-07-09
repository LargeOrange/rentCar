// var script = document.createElement('script');
// script.type = "text/javascript";
// script.src = "jquery.js";
// var $ = require("jquery");
// document.getElementsByTagName('head').appendChild
$(document).ready(function(){
  $("#login").click(function(){
    window.location.href="http://localhost:3000/login.html";
  });
});
// (function($) {
//   $("#login").click(function(e) {
//     e.preventDefault();
//     window.location.href="http://localhost:3000/login.ejs";
//   })
// })();