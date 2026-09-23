let userNameInput = prompt("Введіть ім'я для об'єкта user:");

const user = {
    name: userNameInput || 'Alex',
    say() {
        alert(`Hello, ${this.name}`);
    }
};

const helloBtn = document.getElementById("hello");

helloBtn.addEventListener("click", () => {
    user.say();
});