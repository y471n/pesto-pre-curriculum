const {add, subtract, divide, multiply} = require('./index')
const {
    describe,
    it,
    expect,
    matchers 
  } = require('./testing_framework')

describe('Addition', () => {
    it('Adds two numbers', () => {
        const result = add(1, 2);
        expect(result).toBe(3);
    });

    it('Returns undefined in case the parameters passed are not numbers', () => {
        const result = add('1', 2);
        expect(result).toBe(undefined);
    });
});

describe('Subtraction', () => {
    it('Subtracts two numbers', () => {
        const result = subtract(1, 2);
        expect(result).toBe(-1);
    });

    it('Returns undefined in case the parameters passed are not numbers', () => {
        const result = subtract('1', 2);
        expect(result).toBe(undefined);
    });
});


describe('Multiplication', () => {
    it('Multiplies two numbers', () => {
        const result = multiply(2, 3);
        expect(result).toBe(6);
    });

    it('Returns undefined in case any of the passed parameters passed is not a number', () => {
        const result = multiply('1', 2);
        expect(result).toBe(undefined);
    });
});


describe('Division', () => {
    it('Divides two numbers', () => {
        const result = divide(8, 2);
        expect(result).toBe(4);
    });

    it('Returns undefined in case any of the passed parameters passed is not a number', () => {
        const result = divide('1', 2);
        expect(result).toBe(undefined);
    });

    it('Returns infinity in case of division by 0', () => {
        const result = divide(4, 0);
        expect(result).toBe(Infinity);
    })
});

