//
function createString(arg: string): string {
  return arg;
}
function createNumber(arg: number): number {
  return arg;
}

// Define a generic function
// function genericFunction<T>(arg: T): T {
//   return arg;
// }

function genericFunction<T>(arg: T): T {
  return arg
}


const someStringValue = genericFunction<string>('Hello World');
const someNumberValue = genericFunction<number>(2);

// Define a generic interface
// interface GenericInterface<T> {
//   value: T;
//   getValue: () => T;
// }

interface GenericInterface<T> {
  value: T;
  getValue: () => T
}

const genericString: GenericInterface<string> = {
  value: 'Hello World',
  getValue() {
    return this.value;
  },
};


