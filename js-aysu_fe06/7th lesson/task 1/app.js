

const obj1 = {
    name: 'x',
    age: 50,
    job : () => {
        console.log('coding');
    }
}

const obj2 = {}
for (let key in obj1) {
    obj2[key] = obj1[key]
}

obj2.name = 'y'

console.log(obj1);
console.log(obj2);

