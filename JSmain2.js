let arr = [{name: 'Temo', age: 25},
{name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]

let index = arr[0].age

for(let obj of arr){
    if(obj.age<index)
    index = obj.age
}
console.log(index)