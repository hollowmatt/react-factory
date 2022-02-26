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

alert(data());