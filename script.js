
<script>
  const form = document.getElementById('feedbackForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;   

    const feedback = document.getElementById('feedback').value;   


    // Send the data to a server-side script (e.g., PHP, Node.js)
    // or directly to an email using a library like EmailJS
    // Here's a simplified example using a hypothetical function:
    sendFeedback(name, email, feedback);

    // Display a success message to the user
    alert('Thank you for your feedback!');

    // Optionally, reset the form
    form.reset();
  });

  // Hypothetical function to send feedback (replace with actual implementation)
  function sendFeedback(name, email, feedback) {
    // ... code to send the data to a server or email service
  }
</script>








