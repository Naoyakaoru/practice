let ary = [1, 2, 3, 4, 5]

let [first, second] = ary

console.log(first)

console.log(second)

let [head, ...tails] = ary

console.log(head)
console.log(tails)

let student = {name: 'john', age: 13, gender: 'M'};
// let studentName = student.name;
// let studentAge = student.age;
let {name: studentName, age: studentAge} = student;
console.log(studentName);
console.log(studentAge);

let {name: studentName, age: studentAge} = {name: 'john', age: 13, gender: 'M'};

