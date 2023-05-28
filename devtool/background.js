// Listen to network response events
chrome.webRequest.onCompleted.addListener(
	function (details) {
		// Send a message to the content script with the response body
		chrome.tabs.sendMessage(details.tabId, {
			action: "logResponseBody",
			requestId: details.requestId,
		});
	},
	{ urls: ["<all_urls>"], types: ["main_frame"] }
);

// // Listen to network response events
// chrome.webRequest.onCompleted.addListener(
// 	function (details) {
// 		// Get the response body of the completed network request
// 		chrome.tabs.sendMessage(details.tabId, {
// 			action: "logResponseBody",
// 			requestId: details.requestId,
// 		});
// 	},
// 	{ urls: ["<all_urls>"], types: ["main_frame"] }
// );
