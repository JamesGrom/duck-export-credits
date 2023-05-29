// The devtools.js file will hold the actual code creating your dev tools extensions.
console.log("Duck-Export-Credits extension devtools.js loaded");

// Mount the main panel
chrome.devtools.panels
	.create(
		"Duck Export Credits", // title
		"", // icon
		"/panels/mainPanel/MainPanel.html" // content
	)
	.then((newPanel) => {
		newPanel.onShown.addListener(initialisePanel);
		newPanel.onHidden.addListener(unInitialisePanel);
	});
