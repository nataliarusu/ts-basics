//Enums, or Enumerated types, are data structures of constant length that hold a set of constant values

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

//**********custom type enum

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
  }
  //behind the science every enum el will receive a number 0, 1, 2
  //to be precise enum assign labels to numbers!
  
  //assign starting number
  enum Permission {
    WRITE = 6,
    READ_ONLY,
    EDIT,
  } //6,7,8
  
  //assign custom numbers
  enum Hobbies {
    SPORT = 20,
    COOKING = 100,
  } // numbers 20 and 100 labeled if we implicitely add them
  
  //assign label to string
  enum Values {
    MINIMUM = 'min',
    MAXIMUM = 'max',
  }
  
  
  
  // numbers 20 and 100 labeled if we implicitely add them
  const person = {
    name: 'Betty',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN, //acces as an object
  };
  