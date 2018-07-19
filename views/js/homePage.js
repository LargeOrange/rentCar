$(document).ready(function(){
  $("#login").click(function(){
    // window.location.href="http://39.106.117.29:3000/login";
    window.location.href="http://localhost:3000/login";
    window.event.returnValue = false;
  });
  $("#addCar").click(function(){
    // window.location.href="http://39.106.117.29:3000/addCar";
    window.location.href="http://localhost:3000/addCar";
    window.event.returnValue = false;
  });
  $("#list").click(function(){
    // window.location.href="http://39.106.117.29:3000/list";
    window.location.href="http://localhost:3000/list";
    window.event.returnValue = false;
  });
  $('#home').click(function() {
    // window.location.href="http://39.106.117.29:3000/";
    window.location.href="http://localhost:3000";
    window.event.returnValue = false;
  })
  $('#vip').click(function() {
    // window.location.href="http://39.106.117.29:3000/vip";
    window.location.href="http://localhost:3000/vip";
    window.event.returnValue = false;
  })
  $('#aboutUs').click(function() {
    // window.location.href="http://39.106.117.29:3000/aboutUs";
    window.location.href="http://localhost:3000/aboutUs";
    window.event.returnValue = false;
  });

  function pageInit() {
    const user = sessionStorage.getItem('user') ? sessionStorage.getItem('user') : getCookieVal(1);
    if (user) {
      $('#login').hide();
    }
  };
  pageInit();

  function SetCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + 1000 * 60 * 60 * 24 * Days);//过期时间 2分钟
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
  }

  function getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
  }
});