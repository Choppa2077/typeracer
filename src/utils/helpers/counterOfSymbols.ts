const counter = (text: string) => {
  const text_len = text.split('');
  return text_len.length;
};

console.log(
  counter(
    'I love my computer, don’t you?',
  ),
);

const counterOfWords = (text: string) => {
  const text_len = text.split(' ');
  return text_len.length;
};

console.log(
  counterOfWords(
    'Lorem ipsum zaebal blyat sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  ),
);
