$(document).ready(function(){
  $("#password").click(function(){
    var phoneNum = $('#phoneNme').val();
    $.ajax({
      url: "http://47.100.24.146:8003/api/user/send_login_code",
      type: "post",
      data: {mobile: phoneNum, device_id: 'asdadasdasda'},
      // dataType: 'json'
    }).done(function(data) {
      console.log(data);
    })
      .fail(function(e) {
        console.log("error", e);
      })
  });

  $("#login").click(function(){
    var phoneNum = $('#phoneNme').val();
    var code = $('#code').val();
    $.ajax({
      url: "http://47.100.24.146:8003/api/user/user_login",
      type: "post",
      data: {mobile: phoneNum, device_id: 'asdadasdasda', code: code},
      // dataType: 'json'
    }).done(function(data) {
      console.log(data);
    })
      .fail(function(e) {
        console.log("error", e);
      })
  });
});