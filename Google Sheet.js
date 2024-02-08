const scriptURL = 'https://script.google.com/macros/s/AKfycbxH-YM9phi3OJ3F5U-B1-bvr5UlV3KNjgQEY89efexiCOdNLZQBv6bI012LzgK0MLzpHQ/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => response.json())
    .then(data => {
      alert("Thank you! Your form is submitted successfully.");
      window.location.reload();
    })
    .catch(error => console.error('Error!', error.message))
});
