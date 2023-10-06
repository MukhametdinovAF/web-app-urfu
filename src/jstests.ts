console.log('1243')
const num = 1234;
console.log(typeof num)
const str1 = "1234";
console.log(typeof str1)
const str2 = 'ASDF'
const str3= `asdf ${str1} ${num}`
console.log(str3);


const bool = true;
console.log(typeof bool)
const obj = {test:1,test1:2};
console.log(typeof obj)
const obj2 = {p1:3,p2:3};
console.log({
    ...obj,
    ...obj2,
    test: 'test'
})
console.log(str3.replaceAll ("1","0"))
console.log(str3.split(','))


console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

const array = [1,2,"1234",false,obj];
const array1 = [1,2,3]
const array2 = [4,5,6]
console.log([...array1,...array2])
console.log([...array1,100,1,4,...array2])

console.log(Object.fromEntries([['p1',true],['p2',4]]))
console.log(Object.fromEntries(array.map(e => ['prop'+e,e])))

console.log(array);

array.push(3)
array.pop()
array.splice(2,1)
console.log(array.indexOf(3))
console.log(array1.findIndex(elem => elem>3))
console.log(array1.find(elem => elem>3))
console.log(array1.filter(elem => elem>3))
console.log(array1.map(elem => Math.pow(elem,2)))
console.log(array1.map(elem => {
    return{
        id:elem, 
        name:`app ${elem}`,
        url:`http://app${elem}.ru`,
        healthy: false
    }
}))


const fun1 = function() {
    console.log('fun1')
}

const fun2 = () => {
    console.log('fun2')
}

const fun3 = () => console.log('fun3')

function fun4() {
    console.log('fun4')
}

console.log(typeof fun1)
console.log(typeof fun1())

let und;
console.log(typeof und)

fun1();
fun2();
fun3();
fun4();