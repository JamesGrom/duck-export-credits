console.log("Duck-Export-Credits extension backgroundjs loaded");
// Listen to network response events
// chrome.webRequest.onCompleted.addListener(
// 	function (details) {
// 		console.log("webRequestBody details from backgroundjs triggered");
// 		// Get the response body of the completed network request
// 		chrome.tabs.sendMessage(details.tabId, {
// 			action: "logResponseBody",
// 			requestId: details.requestId,
// 		});
// 	},
// 	{ urls: ["<all_urls>"], types: ["main_frame"] }
// );
