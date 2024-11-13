const statusMessage = document.getElementById('statusMessage');
fetch('/send-email', { ... })
  .then(response => response.json())
  .then(data => {
    statusMessage.textContent = 'Message sent successfully!';
    statusMessage.style.color = 'green';
  })
  .catch(error => {
    statusMessage.textContent = 'There was an error sending the message.';
    statusMessage.style.color = 'red';
  });





