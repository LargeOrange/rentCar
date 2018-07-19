$(document).ready(function(){
  $("#submit").click(function(){
    var phoneNum = $('#phoneNme').val();
    var name = $('#name').val();
    var carModel = $('#carModel').val();
    var carBrand = $('#carBrand').val();
    var otherInfo = $('#otherInfo').val();
    var data = {
      name : name ? name : '',
      mobile: phoneNum ? phoneNum : '',
      car_brand: carBrand ? carBrand : '',
      car_no: carModel ? carModel : '',
      memo: otherInfo ? otherInfo : ''
    };
    $.ajax({
      url: "http://47.100.24.146:8003/api/car/ins_pre_car",
      contentType : "application/x-www-form-urlencoded; charset=UTF-8",
      type: "post",
      data: data,
      success:function(data){
        console.log(data);
      },
      error: function(err) {
        console.error(err);
      }
    })
  });
});