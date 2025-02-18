// function object challenge

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number | undefined {
  if (typeof input === 'string') {
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase();
  } else if (typeof input === 'number') {
    return input * input;
  }
}

console.log(processData(10));
console.log(processData('Hello'));
console.log(processData('Hello', { reverse: true }));
