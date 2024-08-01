const express = require('express');
const app = express();

require('dotenv').config();

const options = { root: __dirname };

app.get('/', (req, res) => {
	res.sendFile('./index.html', options);
});
app.get('/about', (req, res) => {
	res.sendFile('./about.html', options);
});
app.get('/contact-me', (req, res) => {
	res.sendFile('./contact-me.html', options);
});
app.get('*', (req, res) => {
	res.sendFile('./404.html', options);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
	console.log(`My first Express app - listening on port ${PORT}!`)
);
