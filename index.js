const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');

	let file = '';
	if (req.url === '/') {
		res.statusCode = 200;
		file = 'index.html';
	} else if (req.url === '/about') {
		res.statusCode = 200;
		file = 'about.html';
	} else if (req.url === '/contact-me') {
		res.statusCode = 200;
		file = 'contact-me.html';
	} else {
		res.statusCode = 404;
		file = '404.html';
	}

	fs.readFile(`./${file}`, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			res.write(data);
			res.end();
		}
	});
});

server.listen(8080);
