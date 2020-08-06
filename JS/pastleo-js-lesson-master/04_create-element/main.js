// let's start coding:
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('create-element').addEventListener('click', function() {
    const timeDiv = document.createElement('div')

    timeDiv.className = 'time'
    
    const currentTime = new Date();
    timeDiv.textContent = currentTime.toString()
    document.querySelector('.right').appendChild(timeDiv)
  })
  document.getElementById('reset-inner-html').addEventListener('click', function() {
    document.querySelector('.right').innerHTML = '<div class="title">DOM practice...</div>'
  })
  document.getElementById('remove').addEventListener('click', function() {
    document.querySelector('.right .time:last-child').remove()
  })

})