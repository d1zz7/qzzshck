'use strict';
// @d1zz7

const messageTypes = require('./messageTypes');

// при клике на мышь стартуем скрипты
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

  // поиск вопроса на странице
  const questionElement = document.querySelector('[ng-bind-html="question.questionText"]');
  const question = new DOMParser().parseFromString(questionElement.innerHTML, 'text/html').body.textContent;

  // поиск ответов на странице
  const answerElements = document.getElementsByClassName('block ng-binding');

  // проходимся по вопросам
  quizzes.map((quiz) => {
    for (let answerElement of answerElements) {
      let answer = new DOMParser().parseFromString(answerElement.innerHTML, 'text/html').body.textContent;
      // если вопрос/ответ нашелся - отмечаем
      if (answer === quiz.answer && question === quiz.question) {
        answerElement.style.backgroundColor = params.backgroundColor ?? "#34464406";
      }
    }
  });
}
