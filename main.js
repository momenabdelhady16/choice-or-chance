let gameBox = document.getElementById("question-box");
let opt_1 = document.getElementById("option_1");
let opt_2 = document.getElementById("option_2");
let question_number = document.getElementById("question-number");
let ins_question = document.getElementById("question");
let counter = document.getElementById("counter");
let res = document.getElementById("result");
let restart = document.getElementById("restart");
function randOfN(max) {
    return Math.floor(Math.random() * max);
}
function randOfTwo() {
    return Math.floor(Math.random() * 2);
}
function questions() {
    let quests = [
        {
            quest: "Do you go to the gym in the morning or the evening?",
            option_1: [
                "🥳 The gym was empty and you had a great workout.",
                "😓 Oh no! You overslept and missed your session.",
            ],
            option_2: [
                "🥳 You had more energy after eating throughout the day.",
                "😓 Oh no! The gym was so packed you couldn't even get a machine.",
            ],
        },
        {
            quest: "Do you order your coffee hot or iced?",
            option_1: [
                "🥳 It was the perfect temperature to start your day.",
                "😓 Oh no! It was scalding hot and burned your tongue.",
            ],
            option_2: [
                "🥳 Refreshing and exactly what you needed.",
                "😓 Oh no! The cup slipped and spilled all over your shirt.",
            ],
        },
        {
            quest: "For movie night, do you watch a comedy or a thriller?",
            option_1: [
                "🥳 You laughed the whole time, great choice.",
                "😓 Oh no! You fell asleep halfway through and missed the ending.",
            ],
            option_2: [
                "🥳 The plot twist blew your mind.",
                "😓 Oh no! You got so scared you couldn't sleep all night.",
            ],
        },
        {
            quest: "For your commute, do you take the highway or the side streets?",
            option_1: [
                "🥳 Smooth traffic, you got there early.",
                "😓 Oh no! A huge accident backed up traffic for an hour.",
            ],
            option_2: [
                "🥳 No traffic lights held you up, quick trip.",
                "😓 Oh no! You got a flat tire halfway there.",
            ],
        },
        {
            quest: "Do you send the email now or wait to review it later?",
            option_1: [
                "🥳 It was perfect, no follow-up needed.",
                "😓 Oh no! You accidentally sent it to the wrong person.",
            ],
            option_2: [
                "🥳 You caught a mistake and fixed it in time.",
                "😓 Oh no! You forgot about it and missed the deadline.",
            ],
        },
        {
            quest: "Do you go to bed early or stay up late tonight?",
            option_1: [
                "🥳 You woke up refreshed and productive.",
                "😓 Oh no! You knocked your phone off the nightstand and cracked the screen.",
            ],
            option_2: [
                "🥳 You finished everything you needed to get done.",
                "😓 Oh no! You overslept and were late for everything the next day.",
            ],
        },
        {
            quest: "For lunch, do you cook at home or order delivery?",
            option_1: [
                "🥳 It turned out delicious and saved you money.",
                "😓 Oh no! You burned it and set off the smoke alarm.",
            ],
            option_2: [
                "🥳 It arrived hot and exactly as expected.",
                "😓 Oh no! The delivery driver brought the wrong order entirely.",
            ],
        },
        {
            quest: "While debugging, do you rewrite the function or trace it line by line?",
            option_1: [
                "🥳 The new version works perfectly.",
                "😓 Oh no! You introduced a new bug and broke another feature.",
            ],
            option_2: [
                "🥳 You found the exact bug in minutes.",
                "😓 Oh no! You accidentally deleted the working version.",
            ],
        },
        {
            quest: "Do you pack for your trip the night before or the morning of?",
            option_1: [
                "🥳 You packed everything calmly, nothing forgotten.",
                "😓 Oh no! You left your passport on the kitchen counter.",
            ],
            option_2: [
                "🥳 You somehow packed fast and made it on time.",
                "😓 Oh no! You missed your flight because you overslept.",
            ],
        },
        {
            quest: "Do you check your phone right after waking up or after breakfast?",
            option_1: [
                "🥳 Just a quick check, no time wasted.",
                "😓 Oh no! You dropped your phone in the sink while checking it.",
            ],
            option_2: [
                "🥳 You started the day productive and focused.",
                "😓 Oh no! You missed an urgent call and lost the client.",
            ],
        },
    ];
    return function () {
        let questsLength = quests.length;
        if (questsLength == 0) {
            return 0;
        }
        let index = randOfN(questsLength);
        let temp = quests[index];
        quests.splice(index, 1);
        return temp;
    };
}
let startSwitch = 0;
let getQuestion;
let question;
let mistakes = 0;
let number = 1;
let rand;
const MAX_MISTAKES = 4;

res.classList.add("result--idle");
function startGame() {
    if (startSwitch != 0) {
        return;
    } else {
        restart.style.display = "none";
        gameBox.style.display = "flex";
        res.textContent = "";
        res.classList.remove("result--idle");
        getQuestion = questions();
        question = getQuestion();
        startSwitch += 1;
        ins_question.textContent = question.quest;
        question_number.textContent = `Question ${number}`;
        counter.textContent = `You have ${MAX_MISTAKES - mistakes} Tries!`;
    }
}
function finishGame() {
    let medal = "";
    if (mistakes <= 1) {
        medal = "🥇 Incredible! You are the best.";
    } else if (mistakes == 2) {
        medal = "🥈 Amazing! You got second place.";
    } else if (mistakes == 3) {
        medal = "🥉 Well done! You made the top three.";
    }
    res.innerHTML += `<br>🏆 Congrats! All done, you passed all questions 🎉<br>${medal} ( ${number - mistakes} / ${number} )`;
    gameBox.style.display = "none";
    restart.style.display = "block";
}
function action(opt) {
    rand = randOfTwo();
    res.textContent = question[opt][rand];
    if (rand == 1) {
        mistakes += 1;
        if (mistakes >= MAX_MISTAKES) {
            res.appendChild(document.createElement("br"));
            res.appendChild(document.createTextNode("☠️ You Died"));
            gameBox.style.display = "none";
            restart.style.display = "block";
            return;
        }
    }
    question = getQuestion();
    if (question != 0) {
        number += 1;
        question_number.textContent = `Question ${number}`;
        ins_question.textContent = question.quest;
        let chance = MAX_MISTAKES - mistakes;
        counter.textContent = `You have ${chance} ${chance === 1 ? "Try !" : "Tries !"}`;
    } else {
        finishGame();
    }
}
opt_1.addEventListener("click", () => {
    action(opt_1.value);
});
opt_2.addEventListener("click", () => {
    action(opt_2.value);
});
restart.addEventListener("click", () => {
    startSwitch = 0;
    mistakes = 0;
    number = 1;
    startGame();
});

// test();
