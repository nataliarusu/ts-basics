/**
 * const person: object = { //we only tell ts that it is type of object, but we should tell js which type of obj!
    name: 'Betty',
    age: 30
}
 */
/*we add {key: type; key:type;} pairs to specify the object type of person
const person: { name: string, age: number } = {//it is typescript representation of an object type
  name: 'Betty',
  age: 30,
};
*/
var person = {
    name: 'Betty',
    age: 30
};
console.log(person);
