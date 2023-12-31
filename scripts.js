// JavaScript for the lightbox functionality
document.addEventListener('DOMContentLoaded', function () {
    const lightboxTrigger = document.querySelectorAll('.lightbox-trigger');
    lightboxTrigger.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        const imgSrc = this.getAttribute('src');
        const lightboxContent = `<img src="${imgSrc}" alt="Enlarged Image">`;
        document.querySelector('.lightbox').innerHTML = lightboxContent;
        document.querySelector('.lightbox').style.display = 'flex';
      });
    });
  
    document.querySelector('.lightbox').addEventListener('click', function () {
      this.style.display = 'none';
    });
  });
  