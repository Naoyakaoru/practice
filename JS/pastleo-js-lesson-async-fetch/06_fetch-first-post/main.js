document.addEventListener('DOMContentLoaded', () => {
  fetch('https://pastleo-posts-api.herokuapp.com/api/posts')
    .then(request => request.json()) //拿到.json的format
    .then(posts => { //
      console.log(posts)
      const post = posts[0]

      document.querySelector('.post-created-at').textContent = post.created_at
      document.querySelector('.post-author').textContent = post.author
      document.querySelector('.post-title').textContent = post.title
      document.querySelector('.post-description').textContent = post.description

      document.querySelector('.post-title').href = post.url
      document.querySelector('.post-link').href = post.url
      document.querySelector('.post-link').classList.remove('hidden') 

    })

})