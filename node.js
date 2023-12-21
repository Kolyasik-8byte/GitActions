const assert = require('assert');

function add(a, b) {
    return a + b;
}

describe('Мій Node.js тест', () => {
    it('Повинен правильно додавати два числа', () => {
        assert.strictEqual(add(10, 5), 15);
    });

    it('Повинен коректно обробляти відємні числа', () => {
        assert.strictEqual(add(-10, 25), 15);
    });
});

const result = add(10, 5);
console.log('Результат додавання: ', result);
