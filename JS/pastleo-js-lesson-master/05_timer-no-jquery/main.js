window.addEventListener('DOMContentLoaded', function(){
  let cnt = 0, running = false, timer
  const btn = document.querySelector('button')
  const seconds = document.getElementById('seconds') 

  btn.addEventListener('click', function(){
    if(running){
      btn.textContent = 'Start'
      running = false
      clearInterval(timer)
    } else {
      btn.textContent = 'Stop'
      running = true
      timer = setInterval(function(){
        cnt = cnt + 1
        seconds.textContent = (Math.floor(cnt / 10))
        document.querySelector('.dots ')
      },100)
    }
  })
})