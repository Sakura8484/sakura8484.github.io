// Select the container to add the form into
const formContainer = document.getElementById('form-container');

// Create the form element
const form = document.createElement('form');
form.action = '/submit-feedback';  // The server endpoint where form data will be sent
form.method = 'post';  // Set method to POST for submitting data

// Create and append the Name label and input
const nameLabel = document.createElement('label');
nameLabel.for = 'name';
nameLabel.textContent = 'Name:';
form.appendChild(nameLabel);

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.id = 'name';
nameInput.name = 'name';
nameInput.required = true;
form.appendChild(nameInput);

// Line break for better layout
form.appendChild(document.createElement('br'));

// Create and append the Email label and input
const emailLabel = document.createElement('label');
emailLabel.for = 'email';
emailLabel.textContent = 'Email:';
form.appendChild(emailLabel);

const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
emailInput.name = 'email';
emailInput.required = true;
form.appendChild(emailInput);

form.appendChild(document.createElement('br'));

// Create and append the Message label and textarea
const messageLabel = document.createElement('label');
messageLabel.for = 'message';
messageLabel.textContent = 'Message:';
form.appendChild(messageLabel);

const messageTextarea = document.createElement('textarea');
messageTextarea.id = 'message';
messageTextarea.name = 'message';
messageTextarea.required = true;
form.appendChild(messageTextarea);

form.appendChild(document.createElement('br'));

// Create and append the Submit button
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit Feedback';
form.appendChild(submitButton);

// Append the form to the container
formContainer.appendChild(form);





