function data() {
    wordlen = 5;
    guess = 'clean';
    answer = 'charm';

    guessAry = [];
    ansAry = [];
    for (i=0; i < wordlen; i++) {
        guessAry.push(guess.charAt(i));
        ansAry.push(answer.charAt(i));
    }
    console.log(guessAry);
    console.log(ansAry);
    return('done');
}

const quiz = [
    ["What is superman's real name", "Clark Kent"],
    ["What is wonder woman's real name", "Diana Prince"],
    ["What is batman's real name", "Bruce Wayne"]
];

let score = 0;

for(const [question, answer] of quiz) {
    const response = prompt(question);
    if(response === answer) {
        alert('Correct');
        score++;
    } else {
        alert(`No moron, the answer was ${answer}`);
    }
}

alert(`Game over, you scored ${score}`);

