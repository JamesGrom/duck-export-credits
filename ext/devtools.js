chrome.devtools.panels.create("loggerPanel", null, "panel.html");
chrome.devtools.network.onRequestFinished.addListener((request) => {
	console.log("requestFinished");
	request.getContent((body) => {
		console.log("authillo - ", body);
	});
});
