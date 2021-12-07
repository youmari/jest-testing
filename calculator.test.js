const calculator = require("./calculator");
const capitalizeString = require("./capitalize");

describe("calculator", () => {
  const num1 = 5;
  const num2 = 5;
  describe("test add method", () => {
    test("check a + b give expected result", () => {
      const add = calculator.add(num1, num2);
      expect(add).toBe(10);
    });

    test("check a and b not null", () => {
      const add = calculator.add(null, null);
      expect(add).toBe("a and b are null");
    });

    test("check a + b === 20 ", () => {
      const num1 = 10;
      const num2 = 10;
      const add = calculator.add(num1, num2);
      expect(add).toBe(20);
    });
  });
  describe("test subtract method", () => {
    test("check a - b give expected result", () => {
      const subtract = calculator.subtract(num1, num2);
      expect(subtract).toBe(0);
    });

    test("check 10 - 5 === 5 ", () => {
      const subtract = calculator.subtract(10, 5);
      expect(subtract).toBe(5);
    });

    test("check a - b === 20 ", () => {
      const subtract = calculator.subtract(60, 40);
      expect(subtract).toBe(20);
    });
  });
  describe("test divide method", () => {
    test("check a / b give expected result", () => {
      const divide = calculator.divide(num1, num2);
      expect(divide).toBe(1);
    });

    test("check 10 / 5 === 2 ", () => {
      const divide = calculator.divide(10, 5);
      expect(divide).toBe(2);
    });

    test("check a / b === 2 ", () => {
      const divide = calculator.divide(60, 30);
      expect(divide).toBe(2);
    });
  });
  describe("test divide method", () => {
    test("check a * b give expected result", () => {
      const multiply = calculator.multiply(num1, num2);
      expect(multiply).toBe(25);
    });

    test("check 10 * 5 === 50 ", () => {
      const multiply = calculator.multiply(10, 5);
      expect(multiply).toBe(50);
    });

    test("check a * b === 2 ", () => {
      const multiply = calculator.multiply(100, 10);
      expect(multiply).toBe(1000);
    });
  });
});

describe('capitalize string', () => {
    test('capitalize the string', () => {
        const string = 'hello'
        const capitalize = capitalizeString(string);
        expect(capitalize).toBe('Hello');
    });
    
});

