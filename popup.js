// Keep track of the text timer so rapid clicks don't conflict
let statusTimeout = null;

document.getElementById("copyBtn").addEventListener("click", async (e) => {
	const btn = e.currentTarget;
	btn.classList.remove("pulse-active");
	void btn.offsetWidth; // This specific line forces a "reflow", tricking Chrome into resetting the animation state
	btn.classList.add("pulse-active");

	const tabs = await chrome.tabs.query({
		highlighted: true,
		currentWindow: true,
	});
	const urlList = tabs.map((tab) => tab.url).join("\n");
	await navigator.clipboard.writeText(urlList);

	// Clear any existing timer from a previous rapid click before setting a new one
	if (statusTimeout) clearTimeout(statusTimeout);
});
