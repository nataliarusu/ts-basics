const add = (
  a: number,
  b: number,
  showResult: boolean,
  resultPhrase: string
) => {
  const result = a + b;
  if (showResult) {
    console.log(resultPhrase + result);
  } else {
    return result;
  }
};

//const num1:number = 5; //not a good practice, it is redundent because TS compiler can detect the type stored in variable and also here we have const

//let num1:number; // we can add type if we will assign a value later
//num1 = '5'; // if we assign a string we will see ts error, because num1 waits for a number

const num1 = 5;
const num2 = 6;
let printResult = true;

let resultPhrase = 'The result is: ';
// resultPhrase = 5; //error, ts will detects it because we assigned a string before. It is equivalent to lines (17,18)


add(num1, num2, printResult, resultPhrase);
