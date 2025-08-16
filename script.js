document.getElementById('leadForm').addEventListener('submit', function(e) {
  e.preventDefault();
  fetch(e.target.action, {
    method: 'POST',
    body: new FormData(e.target),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    document.getElementById('formMsg').textContent = 'Thank you! We will contact you soon.';
    e.target.reset();
  })
  .catch(error => {
    document.getElementById('formMsg').textContent = 'Oops! There was a problem submitting your form.';
  });
});