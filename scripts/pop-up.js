document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('form').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const snackbar = document.getElementById('snackbar');
      snackbar.classList.add('show');
      setTimeout(() => {
        snackbar.classList.remove('show');
      }, 5000);
      form.reset();
    });
  });
});