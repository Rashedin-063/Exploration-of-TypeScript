{
  type ValueType = string | number | boolean;

  let value: ValueType;
  const random = Math.random();
  value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

  function checkValue(value: ValueType): void {
    if (typeof value === 'string') {
      console.log(value.toLowerCase());
      return;
    }
    if (typeof value === 'number') {
      console.log(value.toFixed(2));
      return;
    }
    console.log(`boolean: ${value}`);
  }

  checkValue(value);
}