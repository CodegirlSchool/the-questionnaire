const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();

const name = document.querySelector("#name");
const secondName = document.querySelector("#secondName");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const agree = document.querySelector("#agree");


  fetch("https://polinashneider.space/user", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer: Alexandrovna7'
    },
    body: JSON.stringify({
      name: name.value,
      secondName: secondName.value,
      phone: phone.value,
      email: email.value,
      agree: agree.checked
    }),
})
  .then((data) => {
    return data.JSON();
  })
  .then((data) => {
    if(data.message) {
      alert(data.message);
    }
    form.reset()
  })
  .catch((error) => {
    alert('произошла ошибка');
  })
})
