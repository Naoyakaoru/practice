const timeoutPromise = ms => new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve();
  }, ms);
})

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-post-form');
  const submitBtn = form.querySelector('button[type=submit]');

  form.addEventListener('submit', async event => {
    event.preventDefault();

    // let's start coding

  });
})
