

const square = function(x) {
    return x*x
}
console.log(square(3))

const arrowFunc = (x) => x*x;
console.log(arrowFunc(4))

function cubed(x) {
    return x*x*x
}
console.log(cubed(3))

// Challenge
const getFirstName = (name) => {
    return name.split(' ')[0]
}
console.log(getFirstName('samuel camacho'))

const getFirstName2 = fname => fname.split(' ')[0] 
console.log(getFirstName2('samuel camacho'))