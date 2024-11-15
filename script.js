 <script>
    emailjs.init("o3b9i6py6NybD5Lr-");

    document.getElementById("my-form").addEventListener("submit", function(event) {
      event.preventDefault();

      emailjs.sendForm("service_15bbmrr, "Template_a9cv85w, this)
              .then(function() {
          console.log('SUCCESS!');   

                  // Add a success message or redirect the user here
    alert('Email sent successfully!');
          
    });
  </script>







