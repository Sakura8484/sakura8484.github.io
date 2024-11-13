 <script>
   <script>
    function openGmail() {
      // Capture form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Construct Gmail URL
      const subject = encodeURIComponent("New Message from " + name);
      const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage:\n" + message);
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=yourname@gmail.com&su=${subject}&body=${body}`;  // Replace with your Gmail

      // Open Gmail in a new tab
      window.open(gmailLink, '_blank');
    }
  </script>

    
  









