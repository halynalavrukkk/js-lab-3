function* passwordGenerator() {
    let password = "";
    while (true) {
        let char = yield password;
        if (char === 'done' || char === null) {
            return password;
        }
        password += char;
    }
}

const pwdGen = passwordGenerator();
pwdGen.next();

let input;
do {
    input = prompt("Введіть символ для пароля (або напишіть 'done' для завершення):");
    let result = pwdGen.next(input);
    if (result.done) {
        alert(`Готовий пароль: ${result.value}`);
        break;
    }
} while (input !== 'done' && input !== null);