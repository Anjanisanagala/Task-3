// script.js
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const enlargedImageContainer = document.querySelector('.enlarged-image-container');
    const enlargedImage = document.querySelector('.enlarged-image');
    const closeBtn = document.querySelector('.close-btn');
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        enlargedImage.src = this.src;
        enlargedImageContainer.style.display = 'block';
      });
    });
  
    closeBtn.addEventListener('click', function() {
      enlargedImageContainer.style.display = 'none';
    });
  });
  