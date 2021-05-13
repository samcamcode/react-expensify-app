

const multiplier = {
    nums: [1,2,3,4],
    multBy: 10,
    multiply() {
        return this.nums.map(num => num * this.multBy)
    }

};
console.log(multiplier.multiply())