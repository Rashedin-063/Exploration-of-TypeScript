function calculateDiscount(price: number): string | number {
  const hasDiscount = true;

  if (hasDiscount) {
    return `Discount Applied`;
  }
  return price * 0.9;
}
function calculateDiscount2(price: number): void {
  // return price * 0.9;
  console.log(price);
}

const finalPrice = calculateDiscount(200);

console.log(finalPrice);


function addThree(number: any) {
  let anotherNumber: number = 3;

  return number + anotherNumber;
}

const result = addThree(3);

const someValue = result;

// someValue.myMethod()

console.log(result);

