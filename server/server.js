const express = require('express');
const app = express();
const uploadHandler = require('./uploadHandler');
const galleryHandler = require('./galleryHandler');

app.use(express.static('../'));

app.post('/upload', uploadHandler);

app.get('/gallery', galleryHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));