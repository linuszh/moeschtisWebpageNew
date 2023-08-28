const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

let uploadedImages = [];

router.post('/', upload.single('image'), (req, res) => {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, "./uploads/" + req.file.originalname);

    fs.rename(tempPath, targetPath, err => {
        if (err) return res.status(500).send(err);

        uploadedImages.push(targetPath);
        res.send({ message: 'uploadSuccess', filePath: targetPath });
    });
});

module.exports = {
    router,
    uploadedImages
};