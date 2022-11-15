const person = {
    name: 'Betty',
    age: 30,
    hobbies: ['Sports', 'Cooking']
  };
    
let favoriteActivities: string[];//we tell we expect this var will store arr of strings
// favoriteActivities = 'sports'; //error, expects array of strings, not a string
favoriteActivities = ['sports'];
// favoriteActivities = ['sports', 1];//error, expects array of strings

let anyActivities: any[];
//we can assign mixed values in array but we loose benefits of typescript, as it will come normal JS
anyActivities = ['sports', 1];

//benefit of typescript in for loop
for (const hobby of person.hobbies) {
    hobby.toLowerCase();
    //when we type hobby. TS gives automatically autocompletion with all strings methods available 
    //because ts knows the hobby will be a string and not another type
    //hobby.map() will give an error, because hobby can't be an array
    
}
