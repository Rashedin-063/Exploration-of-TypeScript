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
processValue(true);
