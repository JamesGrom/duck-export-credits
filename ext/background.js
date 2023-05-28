function getFileEntry(fileSystem, callback) {
	fileSystem.root.getFile("request_logs.txt", { create: true }, callback, errorHandler);
}

function appendToFile(fileEntry, content) {
	fileEntry.createWriter(function (fileWriter) {
		fileWriter.seek(fileWriter.length); // Move to the end of the file
		const blob = new Blob([content], { type: "text/plain" });
		fileWriter.write(blob);
	}, errorHandler);
}

function downloadLogs(details) {
	if (details.url.includes("example.com")) {
		const logEntry = `Request URL: ${details.url}\n`;
		chrome.fileSystem.chooseEntry({ type: "openWritableFile" }, function (fileEntry) {
			if (fileEntry) {
				appendToFile(fileEntry, logEntry);
			}
		});
	}
}

chrome.webRequest.onBeforeRequest.addListener(downloadLogs, { urls: ["<all_urls>"] }, ["blocking"]);

chrome.runtime.onStartup.addListener(function () {
	chrome.webRequest.handlerBehaviorChanged();
});

function errorHandler(error) {
	console.error("Error:", error);
}
