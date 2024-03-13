const form = document.querySelector(".form");
const nickname = document.querySelector('.name');
form.addEventListener("submit", async (event) => {

  event.preventDefault();

  try {

    const response = await fetch("https://polinashneider.space/user", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer: MarinaTalochka"
      },
      body: JSON.stringify({
        "name": "Марина",
        "secondName": "Толочко",
        "phone": 80336555250,
        "email": "marina.tolochko.1990@mail.ru",
        "agree": true
      })
    });

    if (response.ok) {
      alert("Данные успешно отправлены!");
      form.reset();
    } else {

      alert("Произошла ошибка при отправке данных.");
    }
  } catch (error) {

    alert("Произошла ошибка при отправке данных.");
  }
});