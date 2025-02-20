// A Promise in JavaScript (and thus TypeScript) is an object representing the eventual completion or failure of an asynchronous operation.

{
//   async function someFunc(): Promise<string> {
//   return 'Hello World';
  // }
  
  async function someFunc():Promise<string> {
    return "Hello World";
  }

  async function someNumberFunc(): Promise<number>{
    return 123;
  }

const result = someFunc();
}