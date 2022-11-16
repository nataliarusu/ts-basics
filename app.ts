//types: unknown, never, function

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {//will never return a value
  throw { message: message, errorCode: code };//nor undefined
  // while (true) {}
}

generateError('An error occurred!', 500);
function add(n1: number, n2: number) {
    return n1 + n2;
  }
  
  function printResult(num: number): void {
    console.log('Result: ' + num);
  }
  
  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {//func type ()=>
    const result = n1 + n2;
    cb(result);
  }
  
  
