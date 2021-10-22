import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function notifySettings(text) {
 error({
    text: `${text}`,
    delay: 2000,
    closerHover: true,
    mouseReset: true,
  });
}; 

function infoNotify() {
  notifySettings("Введите больше");
}

function noCountry() {
  notifySettings("Введите корректное название");
}

function onError() {
  alert("Ошибка. Попробуйте еще раз.");
}

export { infoNotify, noCountry, onError }; 