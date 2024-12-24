chrome.runtime.onInstalled.addListener(() => {
  console.log("BlurChat extension installed");
});

// If the extension icon is clicked, inject CSS on web.whatsapp.com
chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("web.whatsapp.com")) {
    chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ["src/blur.css"]
    });
    console.log("Blur applied to WhatsApp Web");
  } else {
    console.log("BlurChat works only on web.whatsapp.com");
  }
});
