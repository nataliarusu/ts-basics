## ts-basics
This repository contains the description of basic types in typescript: number, string, boolean, array, object, tuple, literal, union, enum, function, void, any, unknown, never
<details>
    <summary>How to init add watch mode</summary>
    The tsconfig.json file will be created and this means this project is managed by typescript.

        tsc --init

Option 1: After init we can run in terminal tsc without file name. It tells typscript is go ahead and compile all ts files you can find in this project

        tsc


Option 2: To be able to watch the entire project we should navigate to our project and run (only once)

        tsc app.ts -w (OR tsc app.ts --watch)
        Ctrl+C to quit watch mode


</details>

---
<details>
    <summary>Basics how to compile ts and why TypeScript is better than JS</summary>

1. I use VS code and my system is Windows, to be able to compile the code on the terminal instead of using
default powershel, I should change it to cmd (Commpand Prompt choose from right side of VScode terminal)
2. tsc app.ts => run command on terminal, so it will compile ts to js
3. in index.js we should use the path of js file
4. if we have an error, we can see and fix it at compile time, at development time. It doesn't change our code at runtime, it only helps by preventing unexpected types from being passed. 
5. JS vs TS
In JS we can prevent mistakes at runtime only, for exmpl with if else by checking typeof 
In TS we define types during development
The key difference is: JavaScript uses “dynamic types” (resolved at runtime), TypeScript uses “static types” (set during development).
6. It is string and number (etc.), NOT String, Number etc. The core primitive types in TypeScript are all lowercase!
6. By default(but we can change it) ts doesn't block compilation, it will compile even with wrong type argument, but it will points us to this mistake while compiling
7. If both js and ts files are open at the same time in VScode, we can see errors on ts file => just close the js file and it will fix it
</details>
