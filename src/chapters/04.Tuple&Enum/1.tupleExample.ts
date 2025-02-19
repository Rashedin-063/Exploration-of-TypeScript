let person: [string, number] = ['john', 25];

let date: readonly [number, number, number] = [12, 17, 2001];

function getPerson(): [string, number] {
  return ['john', 25];
}

let randomPerson = getPerson();
console.log(randomPerson);

let susan2: [string, number?] = ['susan'];
