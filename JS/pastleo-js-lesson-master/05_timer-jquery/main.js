// let's start coding:
$(document).ready(function(){ //引入jQuery
  let cnt = 0, running = false, interval

  $('button').click(function(){
    if (running) {
      $('button').text('Start')
      clearInterval(interval) //可以達到暫停的效果
      running = false
      $('#running').slideUp()
    } else {
      $('button').text('Stop') //按鈕變為STOP
      running = true
      interval = setInterval(() => {  //DOM API, 可以用clearInterval()停止
        cnt = cnt + 1
        $('#seconds').text(cnt)
        $('.dots div:last-child').prependTo($('.dots'))
      }, 1000);
      $('#running').slideDown()
    }
  })
})