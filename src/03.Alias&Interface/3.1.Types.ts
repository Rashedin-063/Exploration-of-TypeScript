type User = {
  id: number;
  name: string;
  isActive: boolean;
};

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): {
  id: number;
  name: string;
  isActive: boolean;
} {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

createUser(john);
createUser(susan);

type StringOrNumber = string | number;

let value: StringOrNumber;
value = 'hello';
value = 123;

type Theme = 'light' | 'dark';

let myTheme: Theme;

myTheme = 'light';
myTheme = 'dark';

function setTheme(t: Theme) {
  myTheme = t;
}

setTheme('dark');
