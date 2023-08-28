const fs = require('fs');
const path = require('path');

let uploadedImages = [];

fs.readdir('./uploads', (err, files) => {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    } 

    files.forEach((file, index) => {
        const filePath = path.join('./uploads', file);
        uploadedImages.push(filePath);
    });
});

module.exports = {
    getImages: function(req, res) {
        res.json(uploadedImages);
    }
};