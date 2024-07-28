const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();

const sendButton = document.querySelector('#button');
const clearButton = document.querySelector('#clear');

sendButton.addEventListener('click', () => {
  fetch(`https://polinashneider.space/user`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer: PolinaShneider'
    },
    body: JSON.stringify({
      "name": "Полина",
      "secondName": "Shneider",
      "phone": 89990000000,
      "email": "polina@gmail.com",
      "agree": true
    }),
})
  .then((result) => {
    console.log(result);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
})
  
});

