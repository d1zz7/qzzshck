'use strict';
const messageTypes = require("./messageTypes");
const data = require("./data");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case messageTypes.GET_QUIZZES:
        sendResponse(data);
      break;
    default:
      break;
  }
});
