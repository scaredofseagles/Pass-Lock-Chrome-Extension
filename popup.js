let changeColour = document.getElementById("changeColour");

chrome.storage.sync.get("color", ({colour}) => {
    changeColour.style.backgroundColor = colour
});

changeColour.addEventListener("click", async () =>{
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
    });
});

const setPageBackgroundColor = () => {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = color;
    });
}