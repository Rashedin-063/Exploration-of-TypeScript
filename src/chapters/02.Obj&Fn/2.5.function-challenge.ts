const newArray: string[] = ['Rob', 'John', 'Sansa', 'Bran', 'Arya', 'Rickon'];

function checkNames(name: string): boolean {
  const result = newArray.includes(name);

  if (newArray.length > 1) {
    newArray.forEach((n) => console.log(n));
  }

  return result;
}

const isExist = checkNames('Arya');

console.log(isExist);
