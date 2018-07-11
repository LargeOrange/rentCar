$(document).ready(function(){
  $("#password").click(function(){
    // $.ajaxSetup({
    //   data: {csrfmiddlewaretoken: '{{ csrf_token }}' },
    // });
    var phoneNum = $('#phoneNme').val();
    // var form = new FormData();
    // form.append('mobile', phoneNum);
    // console.error(form);
    // $.ajax({
    //   url: "http://47.100.24.146:8003/api/user/send_login_code",
    //   type: "post",
    //   data: form,
    //   // processData:false,
    //   // contentType:false,
    //   dataType:'text',
    //   success: function(data) {
    //     console.log(data);
    //   },
    //   error: function(e){
    //     console.error(e);
    //   }
    // })

    var form = new FormData();
    form.append("mobile", phoneNum);
    // form.append("password",123456);
    $.ajax({
      url:"http://47.100.24.146:8003/api/user/send_login_code",
      type:"post",
      data:form,
      processData:false,
      contentType:false,
      success:function(data){
        window.clearInterval(timer);
        console.log("over..");
      }
    });
  });

  $("#login").click(function(){
    var phoneNum = $('#phoneNme').val();
    var code = $('#code').val();
    $.ajax({
      url: "http://47.100.24.146:8003/api/user/user_login",
      type: "post",
      data: {mobile: phoneNum, code: code},
      // dataType: 'json'
    }).done(function(data) {
      console.log(data);
    })
      .fail(function(e) {
        console.log("error", e);
      })
  });
});