import { assert } from 'chai';
import countPoints from './game-count-points.js';

const builderAnswers = (answers, time) => {
    const arr = [];
    for (let i = 0; i < answers; i++) {
        const answerObj = {
            answer: true,
            times: time,
        };
        arr.push(answerObj);
    };

    return arr;
};

const arr = builderAnswers(8, 2);
const arr2 = builderAnswers(10, 15);
const arr3 = builderAnswers(10, 5);
const arr4 = builderAnswers(10, 25);

describe(`Функция для подсчета очков`, () => {
    it(`Должно выкидывать ошибку на неправельные данные`, () => {
        assert.throws(() => countPoints({}, {}), /Error/);
        assert.throws(() => countPoints(1, 1), /Error/);
        assert.throws(() => countPoints(`er`, 5), /Error/);
        assert.throws(() => countPoints(false, {}), /Error/);
        assert.throws(() => countPoints(undefined, []), /Error/);
        assert.throws(() => countPoints(null), /Error/);
    });

    it(`Должно вернуть -1, если ответов меньше 10`, () => {
        const result = countPoints(arr, 3);
        assert.equal(result, -1);
    });

    it(`Все правельные ответы - 1000 очков`, () => {
        assert.equal(countPoints(arr2, 0), 1000);
    })

    it(`Добовляет доп. 50 очков за каждую жизнь к общим очкам`, () => {
        assert.equal(countPoints(arr2, 3), 1150);
        assert.equal(countPoints(arr2, 5), 1250);
        assert.equal(countPoints(arr2, 0), 1000);
    });

    it(`Должна добовлять 50 очков к ответу за скорость`, () => {
        assert.equal(countPoints(arr3, 3), 1650);
    });

    it(`Должно вычитать 50 очков за медленный ответ`, () => {
        assert.equal(countPoints(arr4, 3), 650);
    });
})
