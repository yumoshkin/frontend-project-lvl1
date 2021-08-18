import getRandomInt from '../lib/utils.js';
import flow from '../index.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const createPrimeTask = () => {
  const question = getRandomInt(2, 99);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const runGame = () => flow(createPrimeTask, descriptionGame);

export default runGame;
