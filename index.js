const path = require("path");
const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const helmet = require("helmet");

const config = require("./modules/config");

const app = express();

const email = {
	// user: 'woodstorysender',
	// pass: 'woodstorysender228',
	// to:   ['tavrida.media@mail.ru', 'trissenkov@gmail.com'],
};

if (config.https) {
	app.use(
		helmet.hsts({
			maxAge: 31536000,
			preload: true
		})
	);
}

app.use(compression())
	.use(express.static(path.join(__dirname, "client/build")))

	.use(bodyParser.json({ limit: "10Mb" }))
	.use(bodyParser.urlencoded({ extended: true, limit: "10Mb" }))

	.use(pino)

	.get("/ping", (req, res) => {
		req.log.info("Ping success!");

		res.send("Pong! ").end();
	})

	.get("/*", (req, res) => {
		res.sendFile(path.join(__dirname, "client/build/index.html"));
	});

const port = process.env.PORT || config.port;
app.listen(port);

console.log("App is listening on port " + port);
