const TIME_LIMIT = {
    FAST: 10,
    LOW: 20,
    LIMIT: 30
};

const countPoints = (answers, lives) => {
    if (!Array.isArray(answers) && typeof lives !== `Number`) throw new Error(`Error`);
    let numberOfAnswers = 0;
    let points = 0;

    answers.forEach((it) => {
        if (it.answer) {
            points += 100;
            numberOfAnswers += 1;
        };
        if (it.times <= TIME_LIMIT.FAST) {
            points += 50;
        };
        if (it.times >= 20) {
            points -= 50;
        };
    });

    if (numberOfAnswers < 10) return -1;

    if (lives > 0) { points += lives * 50; };

    return points;
};

export default countPoints;
/*
const quetions = [{
    text: `long text`,
    answers: [
        { title: `yes`, isCorrect: false },
        { title: `no`, isCorrect: false },
        { title: `very long text`, isCorrect: true },
    ]
}];

const history = [];

const changeText = (newText) => {
    console.log(newText);
    const oldText = quetions[0].text;
    console.log(`oldText: ${quetions[0].text}`);

    quetions[0].text = newText;
    console.log(`change newText: ${quetions[0].text}`);
    console.log(`history: ${history}`);

    history.push(() => {
        quetions[0].text = oldText;
        console.log(`text after push: ${quetions[0].text}`);

        return newText;
    });
};

changeText(`someText`);
changeText(`someText2`);

const undoValue = history.pop()();
console.log(quetions[0].text);

changeText(undoValue);
console.log(quetions[0].text);

history.pop()();
console.log(quetions[0].text);

history.pop()();
console.log(quetions[0].text);
*/

// const callbacks = new Set();

// const addAsyncListener = (fn) => {
//     callbacks.add(fn);
// };

// const startAsync = () => {
//     setTimeout(() => {
//         for (const cb of callbacks) {
//             console.log(`cb: ${cb}`)
//             console.log(callbacks.delete(cb));
//             console.log(`cb after delete: ${cb}`);
//             console.log(`callbacks after delete cb: ${callbacks}`);

//             console.log(cb());
//         }
//         console.log(`Done`);
//     }, 500);
// };

// addAsyncListener(() => { console.log(1) });
// const log2 = () => console.log(2);
// addAsyncListener(log2);
// addAsyncListener(log2);
// addAsyncListener(() => { console.log(3) });

// console.log(`Wait...`);
// startAsync();

// addAsyncListener(() => { console.log(4) });
// addAsyncListener(() => { console.log(5) });
