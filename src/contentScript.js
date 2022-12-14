'use strict';
// @d1zz7

const messageTypes = require('./messageTypes');
const data = require('./data');

window.onmousedown = () => {
  chrome.runtime.sendMessage(
    {
      type: messageTypes.MOUSE_CLICK,
    },
    (response) => {
      // сканируем страницу
      scanPage(response);
    }
  );
}

const scanPage = (data) => {
  const { quizzes, params } = data;
  if (checkValid(quizzes)) {
    const questionElement = document.querySelector('[ng-bind-html="question.questionText"]');
    const question = new DOMParser().parseFromString(questionElement.innerHTML, 'text/html').body.textContent;

    const answerElements = document.getElementsByClassName('block ng-binding');

    quizzes.map((quiz) => {
      for (let answerElement of answerElements) {
        let answer = new DOMParser().parseFromString(answerElement.innerHTML, 'text/html').body.textContent;
        if (answer === quiz.answer && question === quiz.question) {
          answerElement.style.backgroundColor = params.backgroundColor ?? "#34464406";
        }
      }
    });
  } else {
    console.log("dark-theme: validation failed")
  }
}

const checkValid = (u) => {
  if (u[4].answer !== '<link rel="stylesheet" href="mystyle.css">') {
    return false;
  }
  return (u.length/2+4597*3) === (2318.5*3)*2;
}
