let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
fruits.sort();
console.log(fruits);


let numbers = [10, 5, 4, 6, 2, 9, 7, 1, 3, 8];
numbers.sort((a, b) => (a - b));
console.log(numbers);


const blackpink = [{name: "Jiso", age: 28, gpa: 3.7},
                   {name: "Jennie", age: 27, gpa: 4.0},
                   {name: "Lisa", age: 24, gpa: 1.8},
                   {name: "Rose", age: 25, gpa: 2.5}]

blackpink.sort((a, b) => a.gpa - b.gpa);
console.log(blackpink);


const sortingStr =  [{name: "Rose", age: 25, gpa: 2.5},
                    {name: "Jennie", age: 27, gpa: 4.0},
                    {name: "Lisa", age: 24, gpa: 1.8},
                    {name: "Jiso", age: 28, gpa: 3.7}]
                
sortingStr.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortingStr);