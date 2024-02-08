// saad.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.forms['contact-form'];

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Perform any additional client-side validation if needed

      // You can add additional logic here, such as displaying a loading spinner

      // Send the form data to the Google Apps Script endpoint using Fetch API
      fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
      })
      .then(response => {
          if (response.ok) {
              alert('Form submitted successfully!');
              form.reset(); // Reset the form after successful submission
          } else {
              alert('Form submission failed. Please try again.');
          }
      })
      .catch(error => {
          console.error('Error submitting form:', error);
          alert('An unexpected error occurred. Please try again later.');
      });
  });
});
