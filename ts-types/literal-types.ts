//literal types
//A literal is a more concrete sub-type of a collective type.
//There are three sets of literal types available in TypeScript today: strings, numbers, and booleans;
//by using literal types you can allow an exact value which a string, number, or boolean must have.

const combine = (
    input1: number | string,
    input2: number | string,
    //resultConversion: string
    resultConversion: 'as-number' | 'as-text' //not any string, but exactly this literal type (one of these strings)!
  
  ) => {
    let result;
    if (
      (typeof input1 === 'number' && typeof input2 === 'number') ||
      resultConversion === 'as-number'//'as-numb' will be detected by ts as wrong value because of literal type!
    ) {
      result = Number(input1) + Number(input2);
    } else {
      result = input1.toString() + ' ' + input2.toString(); //implicitly convert it
    }
  
    return result;
  };
  
  const compineAges = combine(30, 36, 'as-number');//'as-numb' will be detected by ts as wrong value because of literal type!
  const compineNames = combine('Jhon', 'Smith', 'as-text');
  const compineStringAges = combine('30', '36', 'as-number');
  
  console.log(compineAges, compineNames, compineStringAges);