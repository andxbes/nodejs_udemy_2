const { expect } = require('chai');

it('2 + 3 = 5', () => {
    const num1 = 2;
    const num2 = 3;
    expect(num1 + num2).to.equal(5);
});
it('2 + 3 != 6', () => {
    const num1 = 2;
    const num2 = 3;
    expect(num1 + num2).not.to.equal(6);
});
