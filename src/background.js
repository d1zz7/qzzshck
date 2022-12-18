//'use strict';
//const messageTypes = require("./messageTypes");
//const { controller } = require('./controller');
//
//chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
//  switch (request.type) {
//    case messageTypes.GET_ANSWER:
//      await controller.post(`/api/quizzes/get-answer`, {
//        token: 'fP9Upf&C6sA9qV9t)^I!IneU',
//        question: request.question,
//      })
//        .then(function(res) {
//          sendResponse(res.data);
//        })
//        .catch(function(error) {
//          console.log(error);
//        });
//      break;
//    default:
//      break;
//  }
//});
