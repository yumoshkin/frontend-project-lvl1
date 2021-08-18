import getRandomInt from '../lib/utils.js';
import flow from '../index.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (num1, num2) => (num2 === 0 ? num1 : calculateGcd(num2, num1 % num2));

const createGcdTask = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const question = `${num1} ${num2}`;
  const answer = `${calculateGcd(num1, num2)}`;

  return [question, answer];
};

const runGame = () => flow(createGcdTask, descriptionGame);

export default runGame;
