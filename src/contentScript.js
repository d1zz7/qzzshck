'use strict';
const messageTypes = require("./messageTypes");
const { sendMessage } = require("./service.js")

window.onmousedown = () => {
  sendMessage(messageTypes.MOUSE_CLICK);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

});
