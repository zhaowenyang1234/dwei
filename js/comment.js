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

 /*获取页面信息*/
  var index
  $(".comment_page").delegate("span", "click", function(){
    index=$(this).index()-1
    console.log(index);
    $(this).addClass('red')
    $(this).siblings().removeClass('red')
    $.ajax({
      type:"GET",
      url:"http://localhost:3000/comments?page="+index,
      dataType:"json",
      success:function(data) {
        console.log(data)
        var htmlComment=''
        /*var url = window.location.href;
        console.log(url);
        //http://localhost:63342/dwei/html/comment.html?index=0
       var index=url.split('?')[1].split('=')[1]
        console.log(index);*/
        /*卢星星*/
        var startCount=''
        for(var i=0;i<data.length;i++){
          startCount=''
          var count=0
          var starNumber=data[i].star
          /*if(starNumber%1===0){
              for(var j=0;j<starNumber;j++){
                startCount+='<i class="iconfont icon-xingxing"></i>'
              }
              for(var k=0;k<5-starNumber;k++){
                startCount+='<i class="iconfont icon-xingxing gray"></i>'
              }
          }else{

            for(var z=0;z<Math.floor(starNumber);z++){
              count++
              startCount+='<i class="iconfont icon-xingxing"></i>'
            }
            if((starNumber-Math.floor(starNumber))*10>5){
              count++
              startCount+='<i class="iconfont icon-xingxingbanla"></i>'
            }
            for(var l=0;l<5-count;l++){
              startCount+='<i class="iconfont icon-xingxingabc"></i>'
            }
          }*/
          for(var z=0;z<Math.floor(starNumber);z++){
            count++
            startCount+='<i class="iconfont icon-xingxing"></i>'
          }
          if((starNumber-Math.floor(starNumber))*10>5){
            count++
            startCount+='<i class="iconfont icon-xingxingbanla"></i>'
          }
          for(var l=0;l<5-count;l++){
            startCount+='<i class="iconfont icon-xingxing gray"></i>'
          }

          htmlComment +='<div class="user_comment_item">\n' +
            '            <img src='+data[i].iconUrl+' alt="">\n' +
            '            <div class="user_comment_item_info">\n' +
            '              <p class="user_comment_username">'+data[i].nick+'</p>\n' +
            '              <p class="start_time">\n' +
            '                <span class="start">\n' +
            startCount+
            '                </span>\n' +
            '                <span class="time">'+moment(data[i].createtime).format('L')+'</span>\n' +
            '              </p>\n' +
            '              <p class="comment_content">'+data[i].comment+'</p>\n' +
            '              <p class="comment_address"><i class="iconfont icon-weizhi"></i>'+data[i].city+''+data[i].area+'</p>\n' +
            '            </div>\n' +
            '          </div>'

        }
        $('.user_comment_list').html(htmlComment)

      },
      error:function(data){
        alert("您请求数据失败了，请检查您的请求格式以及地址！");
      }
    });
  });
  /*上一页*/
  $('.first_page').on('click',function () {
    console.log($('.red').html());
   var currentIndex=$('.red').html()*1
   if(currentIndex>1){
     index=currentIndex-2;
     $('.comment_page>span').eq(index).addClass('red')
     $('.comment_page>span').eq(index).siblings().removeClass('red')
     console.log(index);
   }else if(currentIndex===1){
     $('.first_page').css('color','gray')
   }
    $.ajax({
      type:"GET",
      url:"http://localhost:3000/comments?page="+index,
      dataType:"json",
      success:function(data) {
        console.log(data)
        var htmlComment=''
        /*var url = window.location.href;
        console.log(url);
        //http://localhost:63342/dwei/html/comment.html?index=0
       var index=url.split('?')[1].split('=')[1]
        console.log(index);*/
        /*卢星星*/
        var startCount=''
        for(var i=0;i<data.length;i++){
          startCount=''
          var count=0
          var starNumber=data[i].star
          /*if(starNumber%1===0){
              for(var j=0;j<starNumber;j++){
                startCount+='<i class="iconfont icon-xingxing"></i>'
              }
              for(var k=0;k<5-starNumber;k++){
                startCount+='<i class="iconfont icon-xingxing gray"></i>'
              }
          }else{

            for(var z=0;z<Math.floor(starNumber);z++){
              count++
              startCount+='<i class="iconfont icon-xingxing"></i>'
            }
            if((starNumber-Math.floor(starNumber))*10>5){
              count++
              startCount+='<i class="iconfont icon-xingxingbanla"></i>'
            }
            for(var l=0;l<5-count;l++){
              startCount+='<i class="iconfont icon-xingxingabc"></i>'
            }
          }*/
          for(var z=0;z<Math.floor(starNumber);z++){
            count++
            startCount+='<i class="iconfont icon-xingxing"></i>'
          }
          if((starNumber-Math.floor(starNumber))*10>5){
            count++
            startCount+='<i class="iconfont icon-xingxingbanla"></i>'
          }
          for(var l=0;l<5-count;l++){
            startCount+='<i class="iconfont icon-xingxing gray"></i>'
          }

          htmlComment +='<div class="user_comment_item">\n' +
            '            <img src='+data[i].iconUrl+' alt="">\n' +
            '            <div class="user_comment_item_info">\n' +
            '              <p class="user_comment_username">'+data[i].nick+'</p>\n' +
            '              <p class="start_time">\n' +
            '                <span class="start">\n' +
            startCount+
            '                </span>\n' +
            '                <span class="time">'+moment(data[i].createtime).format('L')+'</span>\n' +
            '              </p>\n' +
            '              <p class="comment_content">'+data[i].comment+'</p>\n' +
            '              <p class="comment_address"><i class="iconfont icon-weizhi"></i>'+data[i].city+''+data[i].area+'</p>\n' +
            '            </div>\n' +
            '          </div>'

        }
        $('.user_comment_list').html(htmlComment)

      },
      error:function(data){
        alert("您请求数据失败了，请检查您的请求格式以及地址！");
      }
    });
  })
  /*下一页*/
  $('.last_page').on('click',function () {
    console.log($('.red').html());
    var currentIndex=$('.red').html()*1
    if(currentIndex<9){
      index=currentIndex;
      $('.comment_page>span').eq(index).addClass('red')
      $('.comment_page>span').eq(index).siblings().removeClass('red')
      console.log(index);
    }else if(currentIndex===1){
      $('.last_page').css('color','gray')
    }
    $.ajax({
      type:"GET",
      url:"http://localhost:3000/comments?page="+index,
      dataType:"json",
      success:function(data) {
        console.log(data)
        var htmlComment=''
        /*var url = window.location.href;
        console.log(url);
        //http://localhost:63342/dwei/html/comment.html?index=0
       var index=url.split('?')[1].split('=')[1]
        console.log(index);*/
        /*卢星星*/
        var startCount=''
        for(var i=0;i<data.length;i++){
          startCount=''
          var count=0
          var starNumber=data[i].star
          /*if(starNumber%1===0){
              for(var j=0;j<starNumber;j++){
                startCount+='<i class="iconfont icon-xingxing"></i>'
              }
              for(var k=0;k<5-starNumber;k++){
                startCount+='<i class="iconfont icon-xingxing gray"></i>'
              }
          }else{

            for(var z=0;z<Math.floor(starNumber);z++){
              count++
              startCount+='<i class="iconfont icon-xingxing"></i>'
            }
            if((starNumber-Math.floor(starNumber))*10>5){
              count++
              startCount+='<i class="iconfont icon-xingxingbanla"></i>'
            }
            for(var l=0;l<5-count;l++){
              startCount+='<i class="iconfont icon-xingxingabc"></i>'
            }
          }*/
          for(var z=0;z<Math.floor(starNumber);z++){
            count++
            startCount+='<i class="iconfont icon-xingxing"></i>'
          }
          if((starNumber-Math.floor(starNumber))*10>5){
            count++
            startCount+='<i class="iconfont icon-xingxingbanla"></i>'
          }
          for(var l=0;l<5-count;l++){
            startCount+='<i class="iconfont icon-xingxing gray"></i>'
          }

          htmlComment +='<div class="user_comment_item">\n' +
            '            <img src='+data[i].iconUrl+' alt="">\n' +
            '            <div class="user_comment_item_info">\n' +
            '              <p class="user_comment_username">'+data[i].nick+'</p>\n' +
            '              <p class="start_time">\n' +
            '                <span class="start">\n' +
            startCount+
            '                </span>\n' +
            '                <span class="time">'+moment(data[i].createtime).format('L')+'</span>\n' +
            '              </p>\n' +
            '              <p class="comment_content">'+data[i].comment+'</p>\n' +
            '              <p class="comment_address"><i class="iconfont icon-weizhi"></i>'+data[i].city+''+data[i].area+'</p>\n' +
            '            </div>\n' +
            '          </div>'

        }
        $('.user_comment_list').html(htmlComment)

      },
      error:function(data){
        alert("您请求数据失败了，请检查您的请求格式以及地址！");
      }
    });
  })
  $('.first_span').trigger('click')
})