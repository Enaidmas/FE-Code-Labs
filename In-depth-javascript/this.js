// let person = {
//     name: "john",
//     age: 45,
//     printName: function(){
//         console.log(this.name)
//     }
// }
// person.printName()

let student = {
    name: "jane"
}

function printName(){
    console.log(this.name)
}

printName.call(student)