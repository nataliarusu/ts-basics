//A tuple type is an array with a predefined length and predefined types in each index position in the array
var person = {
    name: 'Betty',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
person.role.push('editor'); //typescript will compile because it is not handled..., it is an exeption though, typescript can't catch this error
//person.role[1]=10; error because typescript expects string as a second value

person.role = [4, 'admin']; //not an error, we defined it will be a tuple with 2 els ()
//person.role = [4, 'editor', 'admin']; //error, here typescript detects length is 3, expected 2
//remember, arr.push() won't be detected by typescript!
console.log(person);