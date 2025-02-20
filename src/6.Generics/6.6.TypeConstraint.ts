{
  function pair<T, U>(param1: T, param2: U): [T, U] {
    return [param1, param2];
  }

  // Usage
  let result = pair(123, 'Hello');

  //  const [name,setName] = useState('')
  //  const [products,setProducts] = useState<Product[]>([])

  // type constraint on the generic type T, generic type can be either a number or a string.

  function processValue<T extends number | string>(value: T): T {
    console.log(value);
  }

  processValue('hello');
  processValue(12);
  // processValue(true);

  type Car = {
    brand: string;
    model: string;
  };

  const car: Car = {
    brand: 'ford',
    model: 'mustang',
  };

  type Product = {
    name: string;
    price: number;
  };

  const product: Product = {
    name: 'shoes',
    price: 1.99,
  };

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'peter',
    age: 20,
  };

  // T extends Student is a type constraint on the generic type T. It means that the type T can be any type, but it must be a subtype of Student or Student itself. In other words, T must have at least the same properties and methods that Student has.

  // function printName<T extends Student>(input: T): void {
  //   console.log(input.name);
  // }

  // function printName<T extends Student>(input:T):void {
  //   console.log(input.name)
    
  // }

  // function printName2(input: Student): void {
  //   console.log(input.name);
    
  // }

  // printName(student);

  // function printName<T extends Student | Product>(input: T): void {
  //   console.log(input.name);
  // }

  // printName(product);

  // The extends { name: string } part is a type constraint on T. It means that T can be any type, but it must be an object that has at least a name property of type string.
  // In other words, T must have at least the same properties and methods that { name: string } has.
  function printName<T extends { name: string }>(input: T): void {
    console.log(input.name);
  }

  printName(student);
  printName(product);

}