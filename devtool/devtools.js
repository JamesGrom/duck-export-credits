// // Create a new panel in the DevTools
// chrome.devtools.panels.create("Network Logger", "", "panel.html", function (panel) {});

// Connect to the background script
const backgroundPageConnection = chrome.runtime.connect({
	name: "devtools-page",
});
// Send a message to the background script to initialize the DevTools panel
backgroundPageConnection.postMessage({
	name: "init",
	tabId: chrome.devtools.inspectedWindow.tabId,
});

// Listen for messages from the background script
backgroundPageConnection.onMessage.addListener(function (message) {
	if (message.action === "logResponseBody") {
		const { requestId } = message;
		// Log the response body to the console
		chrome.devtools.network.getResponseBody(requestId, function (responseBody) {
			console.log("Response Body:", responseBody.body);
		});
	}
});

// // // Create a new panel in the DevTools
// // chrome.devtools.panels.create("Network Logger", "", "panel.html", function (panel) {});

// // // Listen to network response events
// // chrome.devtools.network.onRequestFinished.addListener(function (request) {
// // 	// Log the response body to the console
// // 	request.getContent(function (content, encoding) {
// // 		console.log("Response Body:", content);
// // 	});
// // });
