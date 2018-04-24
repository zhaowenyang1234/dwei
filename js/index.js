$(function () {
  /*轮播图*/
  $(".carousel").slide({
    mainCell: ".carousel_list ul",
    effect: "fold",
    autoPlay: true,
    easing: "easeInQuint",
    delayTime: 500
  });
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
  /*菜单栏*/
  var $wrap_item=$('.wrap_item')
  $wrap_item.hover(
    function () {
      $(this).css('background','#646464')
      $(this).children('.inner_list').css('display','block')
      $(this).find('.icon-jiantou').css('display','none')
      $(this).find('.icon-triangle-left').css('opacity','1')

    },
    function () {
      $(this).css('background','gray')
      $(this).children('.inner_list').css('display','none')
      $(this).find('.icon-jiantou').css('display','inline')
      $(this).find('.icon-triangle-left').css('opacity','0')

    }
  )
  /*动态获取数据*/
  $.ajax({
    type:"GET",
    url:"http://localhost:3000/service",
    dataType:"json",
    success:function(data) {
      console.log(data);
      //对数据进行遍历
      for(var i = 0;i < data.serve1.length; i++) {
        $(".list1").append('<div class="content_main_item">\n' +
          '          <a href="./shopInfo.html?page=serve1&index='+i+'">\n'+
          '            <img src='+data.serve1[i].imgUrl+' alt="">\n' +
          '            <p class="main_item_title">'+data.serve1[i].name+'</p>\n' +
          '            <p class="main_item_explain">'+data.serve1[i].description+'</p>\n' +
          '            <div class="price_info">\n' +
          '              <span class="price">\n' +
          '                <i>'+data.serve1[i].price+'</i> 元/小时</span>\n' +
          '              <span class="see_info">查看详情</span>\n' +
          '            </div>\n' +
          '           </a>\n     '+
          '          </div>')
        $(".list2").append('<div class="content_main_item">\n' +
          '          <a href="./shopInfo.html?page=serve2&index=\'+i+\'">\n'+
          '            <img src='+data.serve2[i].imgUrl+' alt="">\n' +
          '            <p class="main_item_title">'+data.serve2[i].name+'</p>\n' +
          '            <p class="main_item_explain">'+data.serve2[i].description+'</p>\n' +
          '            <div class="price_info">\n' +
          '              <span class="price">\n' +
          '                <i>'+data.serve2[i].price+'</i> 元/小时</span>\n' +
          '              <span class="see_info">查看详情</span>\n' +
          '            </div>\n' +
          '           </a>\n     '+
          '          </div>')
      }
      for(var i = 0;i < data.partner.length; i++){
       $('.partnership_content').append('<li class="partnership_content_item">\n' +
         '              <img src='+data.partner[i].imgUrl+' alt="">\n' +
         '            </li>')
      }
    },
    error:function(data){
      alert("您请求数据失败了，请检查您的请求格式以及地址！");
    }
  });
})