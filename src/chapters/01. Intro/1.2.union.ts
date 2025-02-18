// union type

let tax: number | string = 10;

tax = 100;
tax = '$50';

console.log(tax);

// literal type

let requestStatus: 'pending' | 'success' | 'error' = 'pending';

requestStatus = 'error';

console.log(requestStatus);
