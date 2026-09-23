function* chatBot() {
    let name = yield "Hi! What is your name?";
    let feeling = yield `Nice to meet you, ${name}! How are you?`;
    yield "Goodbye!";
}

const bot = chatBot();

let step1 = bot.next().value;
let answer1 = prompt(step1);

let step2 = bot.next(answer1).value;
let answer2 = prompt(step2);

let step3 = bot.next(answer2).value;
alert(step3);