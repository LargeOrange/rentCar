$(document).ready(function(){
  $("#login").click(function(){
    window.location.href="http://localhost:3000/login";
    window.event.returnValue = false;
  });
});