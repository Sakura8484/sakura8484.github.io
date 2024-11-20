 


emailjs.init("o3b9i6py6NybD5Lr-");

document.getElementById("my-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    emailjs.sendForm("service_15bbmrr", "template_a9cv85w", this)
        .then(function() {
            console.log('SUCCESS!');
            alert('Email sent successfully!');
        })
        .catch(function(error) {
            console.log('FAILED...', error);
            alert('Failed to send email');
        });
});




