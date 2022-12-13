'use strict';
const messageTypes = require("./messageTypes");
const { sendMessage } = require("./service.js")

window.onmousedown = () => {
  sendMessage(messageTypes.MOUSE_CLICK);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'COUNT') {
    console.log(`Current count is ${request.payload.count}`);
  }

  sendResponse({});
  return true;
});
