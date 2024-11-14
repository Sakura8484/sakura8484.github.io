
<script src="https://cdn.emailjs.com/sdk/2.6.4/email.min.js"></script>
  
<script>
  emailjs.init("o3b9i6py6NybD5Lr-");

  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;   

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const templateParams   
 = {
      to_name: "Your Name",
      from_name: name,
      reply_to: email,
      message: message
    };

    emailjs.send("service_15bbmrr", "template_a9cv85w", templateParams)
      .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);   

        alert("Thank you for your feedback!");
      })
      .catch(function(error) {
        console.log("FAILED...", error);
        alert("Oops, something went wrong. Please try again later.");
      });
  });
</script>










