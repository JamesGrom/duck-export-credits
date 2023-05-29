// The devtools.js file will hold the actual code creating your dev tools extensions.
console.log("Duck-Export-Credits extension devtools.js loaded");

// Mount the main panel
chrome.devtools.panels.create(
	"Duck Export Credits", // title
	"", // icon
	"/panels/mainPanel/MainPanel.html", // content,
	function (panel) {
		console.log(`create panel callback triggered, with response ${panel}`);
	}
);
