function sendRequestLog(details) {
	if (details.url.includes("example.com")) {
		const logEntry = `Request URL: ${details.url}\n`;
		console.log(logEntry);

		// Send the log entry to the Node server
		const serverUrl = "http://localhost:3000/"; // Replace with your server URL
		fetch(serverUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ fuck: "you" }),
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
}

chrome.webRequest.onBeforeRequest.addListener(sendRequestLog, { urls: ["<all_urls>"] }, [
	"blocking",
]);

chrome.runtime.onStartup.addListener(function () {
	chrome.webRequest.handlerBehaviorChanged();
});

// // function appendToFile(fileEntry, content) {
// // 	fileEntry.createWriter(function (fileWriter) {
// // 		fileWriter.seek(fileWriter.length); // Move to the end of the file
// // 		const blob = new Blob([content], { type: "text/plain" });
// // 		fileWriter.write(blob);
// // 	}, errorHandler);
// // }

// // function downloadLogs(details) {
// // 	if (details.url.includes("example.com")) {
// // 		const logEntry = `Request URL: ${details.url}\n`;
// // 		chrome.fileSystem.chooseEntry({ type: "openWritableFile" }, function (fileEntry) {
// // 			if (fileEntry) {
// // 				appendToFile(fileEntry, logEntry);
// // 			}
// // 		});
// // 	}
// // }

// function dispatchLogs(details) {
// 	if (details.url.includes("example.com")) {
// 		//
// 	}
// }
// chrome.webRequest.onBeforeRequest.addListener(dispatchLogs, { urls: ["<all_urls>"] }, ["blocking"]);

// chrome.runtime.onStartup.addListener(function () {
// 	chrome.webRequest.handlerBehaviorChanged();
// });

// function errorHandler(error) {
// 	console.error("Error:", error);
// }
