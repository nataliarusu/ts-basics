/*
do not do
we only tell ts that it is type of object, but we should tell js which type of obj! this also cause error
because typescript doesn't know about properties types this obj should have
const person: object = {
    name: 'Betty',
    age: 30
}
 */

/*
may do
{key: type; key:type;} specify the object type of person, it is typescript representation of an object type
const person: { name: string, age: number } = {
  name: 'Betty',
  age: 30,
};
 */
 const person = {
    name: 'Betty',
    age: 30,
  }; 

// Let's say you have this JavaScript object:
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

// This would be the type of such an object:

// {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }
// So you have an object type in an object type
