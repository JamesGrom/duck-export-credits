import * as bodyParser from "body-parser";
import express from "express";
const app = express();
const port = 3000;
app.use((req, res, next): void => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	next();
});
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.json(`home path`);
});
app.listen(port, () => {
	console.log(`express server started listening on ${port}`);
});
