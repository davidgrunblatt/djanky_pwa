
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App is live on port ${PORT}`);
});

app.use(express.static('public'));

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
})