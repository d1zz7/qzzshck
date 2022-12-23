'use strict';
// @d1zz7

const messageTypes = require('./messageTypes');

window.onwheel = () => {
  chrome.runtime.sendMessage(
    {
      type: messageTypes.GET_QUIZZES,
    },
    (response) => {
      scanPage(response);
    }
  );
}

const scanPage = (data) => {
  const { quizzes, params } = data;

    const questionElement = document.querySelector('[ng-bind-html="question.questionText"]');
    const question = new DOMParser().parseFromString(questionElement.innerHTML, 'text/html').body.textContent;

    const answerElements = document.getElementsByClassName('block ng-binding');

    quizzes.map((quiz) => {
      for (let answerElement of answerElements) {
        let answer = new DOMParser().parseFromString(answerElement.innerHTML, 'text/html').body.textContent;
        if (answer.includes(quiz.answer) && question.includes(quiz.question)) {
          answerElement.style.backgroundColor = "#34464406";
          answerElement.style.marginTop = "15px";
        }
        if (answer === quiz.answer && question === quiz.question) {
          answerElement.style.backgroundColor = "rgba(255,255,230,0.81)";
          answerElement.style.marginTop = "15px";
        }
      }
    });
}
