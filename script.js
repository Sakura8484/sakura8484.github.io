<script>
    function showForm() {
      document.getElementById("feedbackForm").style.display = "block";
    }

    function sendEmail() {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const   
 message = document.getElementById("message").value;   


      emailjs.init("o3b9i6py6NybD5Lr-");

      const templateParams = {
        to_name: "Your Name",
        from_name: name,
        reply_to: email,
        message: message
      };

      emailjs.send("service_15bbmrr","template_a9cv85w", templateParams)
        .then(function(response) {
          console.log("SUCCESS!", response.status,   
 response.text);
          alert("Thank you for your feedback!");
          document.getElementById("feedbackForm").style.display = "none";
        })
        .catch(function(error) {
          console.error("FAILED...", error);
          alert("Oops, something went wrong. Please try again later.");
        });
    }
  </script>








