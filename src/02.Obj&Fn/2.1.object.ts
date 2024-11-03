let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };

car.brand = 'ford';
// car.color = 'red'

let car1: { brand: string; year: number } = { brand: 'toyota', year: 2020 };

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 10 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// console.log(items[0])

// items[0] = 'hello';

console.log(car, car1, items);
