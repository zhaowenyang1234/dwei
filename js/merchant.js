$(function () {
  /*头部动态显示*/
  $(window).scroll(function () {
    var top = $(window).scrollTop();
    var $header=$('.header')
    var $headerHeight=$header.height()
    console.log(top);
    if (top>=$headerHeight) {
      $header.addClass('show')
    }else{
      $header.removeClass('show')
    }
  })
  /*发送ajax请求*/

  $.ajax({
    type:"GET",
    url:"http://localhost:3000/servicepro",
    dataType:"json",
    success:function(data) {
      for(var i = 0; i<data.servicepro.length; i++){
        $(".merchant_main_list").append('<li class="merchant_main_item">\n' +
                    '<a href="./comment.html?index='+i+'">\n'+
          '          <img src='+data.servicepro[i].imgUrl+' alt="">\n' +
          '          <div class="merchant_main_title">\n' +
          '            <i class="iconfont icon-fangzi"></i>\n' +
          '            <span>'+data.servicepro[i].name+'</span>\n' +
          '          </div>\n' +
          '          <div class="merchant_main_info">\n' +
          '            <span>已接单'+data.servicepro[i].order+'单</span>\n' +
          '            <span class="merchant_main_good">好评'+data.servicepro[i].estimate+'%</span>\n' +
          '          </div>\n' +
                      '</a>\n'+
          '        </li>');
      }
    },
    error:function(data){
      alert("您请求数据失败了，请检查您的请求格式以及地址！");
    }

  });

  setTimeout(function () {
    console.log($('.merchant_main_item'));
    $('.merchant_main_item').hover(function () {
      $(this).addClass('addShadow')
      console.log($(this));
    },function () {
      $(this).removeClass('addShadow')
    })
  },1000)

})