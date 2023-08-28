const uploadForm = document.getElementById('uploadForm');

uploadForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    uploadImage(formData);
});

function uploadImage(formData) {
    fetch('/server/uploadHandler.js', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            uploadedImages.push(data.image);
            document.dispatchEvent(new CustomEvent('uploadSuccess', { detail: data.image }));
            document.dispatchEvent(new CustomEvent('newImage', { detail: data.image }));
        } else {
            console.error('Upload failed:', data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}