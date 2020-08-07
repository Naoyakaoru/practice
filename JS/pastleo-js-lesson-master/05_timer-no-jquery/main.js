window.addEventListener('DOMContentLoaded', function(){
  let cnt = 0, running = false, timer
  const btn = document.querySelector('button')
  const seconds = document.getElementById('seconds') 
  const run_tag = document.querySelector('#running')

  btn.addEventListener('click', function(){
    if(running){
      btn.textContent = 'Start'
      running = false
      clearInterval(timer)
      run_tag.style.height = '0' //若點擊停止，則run_tag消失
    } else {
      btn.textContent = 'Stop'
      running = true
      timer = setInterval(function(){
        cnt = cnt + 1
        seconds.textContent = (Math.floor(cnt / 10))
        document.querySelector('.dots').insertAdjacentElement('afterbegin', document.querySelector('.dots>div:last-child'))
      },100)
      run_tag.style.height = null
    }
  })
})