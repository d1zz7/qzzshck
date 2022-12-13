'use strict';
const messageTypes = require("./messageTypes");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case messageTypes.MOUSE_CLICK:
      sendResponse("YEP!");
      break;
    default:
      break;
  }
});
