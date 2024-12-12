document.querySelector('form').addEventListener('submit', (e) => {
    alert('Your message has been sent successfully!');
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Show the popup message on page load
    document.getElementById("popupMessage").style.display = "flex";
    
    // Close the popup when the user clicks anywhere inside the popup
    document.getElementById("popupMessage").addEventListener("click", function(e) {
      if (e.target === this) {
        this.style.display = "none";
      }
    });
  });
  