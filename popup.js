// let changeColour = document.getElementById("changeColour");

// chrome.storage.sync.get("color", ({colour}) => {
//     changeColour.style.backgroundColor = colour
// });

// changeColour.addEventListener("click", async () =>{
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: setPageBackgroundColor,
//     });
// });

// const setPageBackgroundColor = () => {
//     chrome.storage.sync.get("color", ({ color }) => {
//         document.body.style.backgroundColor = color;
//     });
// }

let addPassBtn = document.getElementById("addPassBtn");

addPassBtn.addEventListener("click", () => {
	chrome.scripting.executeScript({
		target: { tabId },
		function: injectAcctDetails,
	});
});

const injectAcctDetails = () => {
	let emailElementsList = document.getElementsByName("email");
	let passwordElement = document.querySelectorAll("input[type=password]");
	let emailElement;

	emailElementsList.forEach(elem => {
		if (elem.tagName === "input") emailElement = elem;
	});

	emailElement.value = "test@test.com";
	passwordElement = "test123!@#";
};
