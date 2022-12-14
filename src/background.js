'use strict';
const messageTypes = require("./messageTypes");
const data = require("./data");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case messageTypes.MOUSE_CLICK:
      sendResponse(data);
      break;
    default:
      break;
  }
});
