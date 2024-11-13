// Get the container to inject the form
const formContainer = document.getElementById('recipe-form-container');

// Create the form element
const form = document.createElement('form');
form.action = '/submit-recipe'; // Replace with your server endpoint
form.method = 'post';
form.enctype = 'multipart/form-data'; // Required for file uploads

// Recipe Name
const nameLabel = document.createElement('label');
nameLabel.for = 'recipe-name';
nameLabel.textContent = 'Recipe Name:';
form.appendChild(nameLabel);

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.id = 'recipe-name';
nameInput.name = 'recipe-name';
nameInput.required = true;
form.appendChild(nameInput);

form.appendChild(document.createElement('br'));

// Recipe Description
const descriptionLabel = document.createElement('label');
descriptionLabel.for = 'description';
descriptionLabel.textContent = 'Description:';
form.appendChild(descriptionLabel);

const descriptionTextarea = document.createElement('textarea');
descriptionTextarea.id = 'description';
descriptionTextarea.name = 'description';
descriptionTextarea.required = true;
form.appendChild(descriptionTextarea);

form.appendChild(document.createElement('br'));

// Photo Upload
const photoLabel = document.createElement('label');
photoLabel.for = 'photo';
photoLabel.textContent = 'Upload Photo:';
form.appendChild(photoLabel);

const photoInput = document.createElement('input');
photoInput.type = 'file';
photoInput.id = 'photo';
photoInput.name = 'photo';
photoInput.accept = 'image/*'; // Restrict to image files
photoInput.required = true;
form.appendChild(photoInput);

form.appendChild(document.createElement('br'));

// Video Upload
const videoLabel = document.createElement('label');
videoLabel.for = 'video';
videoLabel.textContent = 'Upload Video (optional):';
form.appendChild(videoLabel);

const videoInput = document.createElement('input');
videoInput.type = 'file';
videoInput.id = 'video';
videoInput.name = 'video';
videoInput.accept = 'video/*'; // Restrict to video files
form.appendChild(videoInput);

form.appendChild(document.createElement('br'));

// Submit Button
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit Recipe';
form.appendChild(submitButton);

// Append the form to the container
formContainer.appendChild(form);








