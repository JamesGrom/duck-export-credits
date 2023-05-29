// Mount the main panel
chrome.devtools.panels.create(
	"Duck Export Credits", // title
	"", // icon
	"/panels/mainPanel/MainPanel.html", // content,
	function (panel) {
		console.log(`create panel callback triggered, with response ${panel}`);
	}
);

function sendRequestLog(path, body) {
	// Send the log entry to the Node server
	const serverUrl = `http://localhost:3005${path}`; // Replace with your server URL
	return fetch(serverUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body,
	})
		.then((response) => {
			if (response.ok) {
				console.log("Log entry sent successfully");
			} else {
				console.error("Failed to send log entry:", response.status, response.statusText);
			}
		})
		.catch((error) => {
			console.error("Failed to send log entry:", error);
		});
}

// Listen to network response events
chrome.devtools.network.onRequestFinished.addListener(function (request) {
	const url = request.request.url;
	if (url.includes("https://app.zoominfo.com/anura/userData/viewContacts")) {
		request.getContent(function (content, encoding) {
			console.log("Response Body:", content);
			sendRequestLog("/", content);
		});
	}
	if (url.includes("https://www.linkedin.com/sales-api/salesApiProfiles/")) {
		request.getContent(function (content, encoding) {
			console.log("Response Body:", content);
			sendRequestLog("/linkedin", content);
		});
	}
});
