let uploadedImages = [];

function displayGallery() {
    const gallery = document.querySelector('#gallery');
    gallery.innerHTML = '';

    uploadedImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        gallery.appendChild(imgElement);
    });
}

window.addEventListener('newImage', (event) => {
    uploadedImages.push(event.detail);
    displayGallery();
});