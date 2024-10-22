const fileInput = document.getElementById('file-input');
const image = document.getElementById('image');
const description = document.getElementById('prediction');
const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
const inputError = document.getElementById('input-error');

let model;


/**
 * Display the result on the page
 */
function displayDescription(predictions) {
  // Sort by probability
  const result = predictions.sort((a, b) => b.probability - a.probability)[0];

  if (result.probability > 0.2) {
    const probability = Math.round(result.probability * 100);

    // Display result
    description.innerText = `${probability}% sure this is a ${result.className.replace(',', ' or')} `;
  } else {
    description.innerText = 'I am not sure what I should recognize 😢';
  }
}

/**
 * Classify the image with the MobileNet model
 */
function classifyImage() {
  model.classify(image).then((predictions) => {
    displayDescription(predictions);
  });
}

/**
 * Get the image from the file input and display it on the page
 */
function getImage() {
  // Check if an image has been found in the input
  if (!fileInput.files[0]) throw new Error('Image not found');
  const file = fileInput.files[0];

  // Check if the file is an image
  if (!acceptedImageTypes.includes(file.type)) {
    inputError.classList.add('show');
    throw new Error('The uploaded file is not an image');
  } else {
    inputError.classList.remove('show');
  }

  // Get the data URL from the image
  const reader = new FileReader();

  // When the reader is ready, display the image
  reader.onload = function (event) {
    // Get the data URL
    const dataUrl = event.target.result;

    // Create an image object
    const imageElement = new Image();
    imageElement.src = dataUrl;

    // When the image object is loaded
    imageElement.onload = function () {
      // Set <img /> attributes
      image.setAttribute('src', this.src);
      image.setAttribute('height', this.height);
      image.setAttribute('width', this.width);

      // Classify the image
      classifyImage();
    };

    // Add the image-loaded class to the body
    document.body.classList.add('image-loaded');
  };

  // Get data URL
  reader.readAsDataURL(file);
}

/**
 * Load the model
 */
mobilenet.load().then((m) => {
  // Save the model
  model = m;

  // Remove the loading class from the body
  document.body.classList.remove('loading');

  // When the user uploads a new image, display the new image on the webpage
  fileInput.addEventListener('change', getImage);
});
