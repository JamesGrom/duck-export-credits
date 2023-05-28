chrome.devtools.network.onRequestFinished.addListener((request) => {
	request.getContent((body) => {
		console.log("authillo - ", body);
	});
});
