'use strict';
// @d1zz7

const { controller } = require('./controller');
let pause = false;

window.onwheel = () => {
  if (!pause) {
    scanPage().then(r => {
    });
  }
};

const scanPage = async () => {
  pause = true;
  const questionElement = document.querySelector('[ng-bind-html="question.questionText"]');
  const question = new DOMParser().parseFromString(questionElement.innerHTML, 'text/html').body.textContent;
  const answerElements = document.getElementsByClassName('block ng-binding');

  await controller.post(`/api/quizzes/get-answer`, {
    token: 'fP9Upf&C6sA9qV9t)^I!IneU',
    question: question,
  })
    .then(function(res) {
      pickAnswer(res.data, answerElements);
      pause = false;
    })
    .catch(function(error) {
      pause = false;
    });

// TODO: перенести в background.js
//  chrome.runtime.sendMessage(
//    {
//      type: messageTypes.GET_ANSWER,
//      question,
//    },
//    (response) => {
//      pickAnswer(response, answerElements);
//    },
//  );
};

const pickAnswer = (correctAnswer, answerElements) => {
  for (let answerElement of answerElements) {
    let answer = new DOMParser().parseFromString(answerElement.innerHTML, 'text/html').body.textContent;
    if (answer === correctAnswer) {

      answerElement.style.backgroundColor = '#34464406';
      answerElement.style.marginTop = '15px';
    }
  }
};
