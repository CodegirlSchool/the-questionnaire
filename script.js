const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    // Здесь твой код
    const sendButton = document.querySelector("#button");


    sendButton.addEventListener('click', () => {

        fetch(`https://polinashneider.space/user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: Aliceman93'
            },
            body: JSON.stringify({
                "name": document.querySelector("#name").value,
                "secondName": document.querySelector("#secondName").value,
                "phone": document.querySelector("#phone").value,
                "email": document.querySelector("#email").value,
                "agree": document.querySelector("#agree").value
            }),
        }).then((result) => {
            return result.json()
        }).then((data) => {
            document.getElementById("clear").reset();
            console.log(data);
            alert('Ваш ответ принят')
        }).catch((error) => {
            console.log(error)
            alert('Попробуйте еще раз')
        });

    })
})