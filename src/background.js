/* 
 * BlurChat Extension - Background Script
 * Author: Naeem
 * Description: This script handles the installation of the BlurChat extension and applies CSS to blur WhatsApp Web
 * Version: 1.0.0
 */

/* 
 * Event listener for when the extension is installed
 * Logs a message indicating that the BlurChat extension has been successfully installed.
 */
chrome.runtime.onInstalled.addListener(() => {
  console.log("BlurChat extension installed");
});

/* 
 * Event listener for when the extension icon is clicked
 * Checks if the current tab is WhatsApp Web, and if so, injects the CSS to apply the blur effect
 * Logs appropriate messages based on whether the CSS injection is successful or not.
 */
chrome.action.onClicked.addListener((tab) => {
  // Check if the current tab's URL includes web.whatsapp.com
  if (tab.url.includes("web.whatsapp.com")) {
    // Inject the CSS file to blur WhatsApp Web
    chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ["src/blur.css"]
    });
    console.log("Blur applied to WhatsApp Web");
  } else {
    console.log("BlurChat works only on web.whatsapp.com");
  }
});
