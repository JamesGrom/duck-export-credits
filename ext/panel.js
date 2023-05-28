chrome.devtools.network.onRequestFinished.addListener((request) => {
	console.log("requestFinished");
	request.getContent((body) => {
		if (request.request && request.request.url) {
			if (request.request.url.includes("https://app.zoominfo.com/anura/userData/viewContacts")) {
				chrome.runtime.sendMessage({
					response: body,
				});
			}
		}
	});
});
