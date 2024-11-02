let notSure: any = 4;

notSure = 'maybe a string instead';

notSure = false;

console.log(notSure);

let random;

random = 'boolean';
random = true;

console.log(random);

const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === 'Brave New World') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

// foundBook = 10

console.log(foundBook?.length);
console.log(foundBook);
