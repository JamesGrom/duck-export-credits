// import * as bodyParser from "body-parser";
import express from "express";
const app = express();
const port = 3000;
app.use((req, res, next): void => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", (req, res) => {
// 	console.log("bruv");
// 	res.json(`home path`);
// });
app.post("/", (req, res) => {
	console.log("event");
	// console.log(req);
	console.log(req.body);
	res.json(`succeeded`);
});
app.listen(port, () => {
	console.log(`express server started listening on ${port}`);
});
