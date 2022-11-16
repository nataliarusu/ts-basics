//union types, when we accept different type of values
const combine = (input1: number | string, input2: number | string) => {
    let result;
    if(typeof input1 ==='number' && typeof input2 === 'number'){
        result = input1+input2;
    } else {
        result = input1.toString()+' '+ input2.toString();//implicitly convert it
    }
    return result;
};

const compineAges = combine(30, 36);
const compineNames = combine('Jhon', 'Smith');

console.log(compineAges, compineNames);