{
  try {
    // Some code that may throw an error
    throw new Error('This is an error');
  } catch (error) {
    if (error instanceof Error) {
      console.log('Caught an Error object: ' + error.message);
    } else {
      console.log('Caught an unknown error');
    }
  }

  function checkInput(input: Date | string): string {
    if (input instanceof Date) {
      return input.getFullYear().toString();
    }
    return input;
  }

  const year = checkInput(new Date());
  const random = checkInput('2020-05-05');
  console.log(year);
  console.log(random);
}