window.addEventListener('DOMContentLoaded', function() {
  const statusDiv = document.querySelector('.status') //只會選第一個, 要多個要用querySelectorAll
  const statusSpan = document.querySelector('.status span')

  document.getElementById('on').addEventListener('click', function() {
    document.body.classList.add('light')
    statusDiv.classList.remove('off')
    statusDiv.classList.add('on')
    statusSpan.textContent = '開'
  })
  document.getElementById('off').addEventListener('click', function() {
    document.body.classList.remove('light')
    statusDiv.classList.remove('on')
    statusDiv.classList.add('off')
    statusSpan.textContent = '關'
  })
})