 <script>
   
    function sendEmail() {
      // Capture form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Construct mailto link
      const subject = encodeURIComponent("New Message from " + name);
      const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage:\n" + message);
      const mailtoLink = `mailto:joteoimda@gmail.com?subject=${subject}&body=${body}`;

      // Open the default mail client with the mailto link
      window.location.href = mailtoLink;

      // Optional: Display a thank-you message (without sending form data to server)
      document.getElementById("formResponse").innerText = 
        `Thank you, ${name}! We have received your message.`;

      // Optional: Reset form fields
      document.getElementById("contactForm").reset();
    }
  </script>









