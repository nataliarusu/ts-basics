//Type Aliases update literal-types.js 
//Type aliases give a type a new name
//Aliasing doesn’t truly create a new type; instead, it gives that type a new name
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

const combine = (
    input1: Combinable,
    input2: Combinable,
    //resultConversion: string
    resultConversion: ConversionDescriptor //not any string, but exactly this literal type (one of these strings)!
  
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