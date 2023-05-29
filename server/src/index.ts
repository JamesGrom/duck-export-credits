import express from "express";
import * as fs from "fs";
import { createObjectCsvWriter } from "csv-writer";
const app = express();
const port = 3005;
app.use((req, res, next): void => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// https://www.linkedin.com/sales-api/salesApiProfiles/(profileId:ACwAAA0DrUwBVYgKNPX9HNcbd6mXP2VOX1aji6c,authType:NAME_SEARCH,authToken:UbPM)?decoration=%28entityUrn%2CobjectUrn%2CfirstName%2ClastName%2CfullName%2Cheadline%2CmemberBadges%2ClatestTouchPointActivity%2Cpronoun%2Cdegree%2CprofileUnlockInfo%2Clocation%2ClistCount%2Csummary%2CsavedLead%2CdefaultPosition%2CcontactInfo%2CcrmStatus%2CpendingInvitation%2Cunlocked%2CflagshipProfileUrl%2CfullNamePronunciationAudio%2Cmemorialized%2CnumOfConnections%2CnumOfSharedConnections%2CshowTotalConnectionsPage%2Cpositions*%28companyName%2Ccurrent%2Cnew%2Cdescription%2CendedOn%2CposId%2CstartedOn%2Ctitle%2Clocation%2CrichMedia*%2CcompanyUrn~fs_salesCompany%28entityUrn%2Cname%2CcompanyPictureDisplayImage%29%29%2CcrmManualMatched%29

app.post("/", (req, res) => {
	console.log("event");
	console.log("event body: ", req.body);
	const existingData = fs.readFileSync("../output.json", "utf-8");
	const jsonData = JSON.parse(existingData);
	jsonData.push(req.body.data);
	const updatedData = JSON.stringify(jsonData);
	fs.writeFileSync("../output.json", updatedData, "utf-8");
	res.json(`succeeded`);
});
app.listen(port, () => {
	console.log(`express server started listening on ${port}`);
});
