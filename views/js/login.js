$(document).ready(function(){
  $("#password").click(function(){
    var phoneNum = $('#phoneNum').val();

    var form = new FormData();
    form.append("mobile", phoneNum);
    form.append("device_id", null);
    console.log(form);
    $.ajax({
      url:"http://47.100.24.146:8003/api/user/send_login_code",
      type:"post",
      contentType : "application/x-www-form-urlencoded; charset=UTF-8",
      data:{mobile: phoneNum, device_id: 'aaaa'},
      success:function(data){
        console.log(data);
      }
    });
  });

  $("#login").click(function(){
    var phoneNum = $('#phoneNum').val();
    var code = $('#code').val();
    $.ajax({
      url: "http://47.100.24.146:8003/api/user/user_login",
      contentType : "application/x-www-form-urlencoded; charset=UTF-8",
      type: "post",
      data: {mobile: phoneNum, code: code, device_id: 'aaaa'},
      success:function(data){
        console.log(data);
        if (!data.result) {
          alert('登录成功');
          sessionStorage.setItem('user', JSON.stringify(data.data));
          if ($('#remember').is(':checked')) {
            SetCookie(user, JSON.stringify(data.data));
          }
          window.location.href="http://localhost:3000";
          window.event.returnValue = false;
        } else {
          alert('登录失败');
        }
      }
    })
  });

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