import getRandomInt from '../lib/utils.js';
import flow from '../index.js';

const descriptionGame = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const createEvenTask = () => {
  const question = getRandomInt();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const runGame = () => flow(createEvenTask, descriptionGame);

export default runGame;
