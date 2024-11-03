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
