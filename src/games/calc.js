import getRandomInt from '../lib/utils.js';
import flow from '../index.js';

const descriptionGame = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return a * b;
  }
};

const createCalcTask = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = `${calculate(num1, num2, operator)}`;

  return [question, answer];
};

const runGame = () => flow(createCalcTask, descriptionGame);

export default runGame;
