const form = document.querySelector(".form");
const nameUser = document.getElementById('name');
const secondName = document.getElementById('secondName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const agree = document.getElementById('agree');

function makeNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '30px';
    notification.style.right = '30px';
    notification.style.backgroundColor = '#FD51AF';
    notification.style.color = 'white';
    notification.style.padding = '15px';
    notification.style.borderRadius = '4px';
    notification.style.zIndex = '1000';
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    fetch(`https://polinashneider.space/user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: Ansirotko'
            },
            body: JSON.stringify({
                "name": nameUser.value,
                "secondName": secondName.value,
                "phone": phone.value,
                "email": email.value,
                "agree": agree.checked
            }),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Ошибка сети!');
        })
        .then(data => {
            console.log('Успешно отправлено!', data);
            makeNotification('Данные успешно отправлены!')
            form.reset();
        })
        .catch(error => {
            console.error('Ошибка при отправке данных!', error);
            makeNotification('Произошла ошибка!')
        })
});