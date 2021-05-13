const add = (a,b) =>  a+b;
const generateGreeting = (name = 'anon') => `hello ${name}!!`

test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);

});

test('should pass name to hello name', () => {
    const greet = generateGreeting('sam');
    expect(greet).toBe('hello sam!!');
})

test('should pass no name to hello name', () => {
    const greet = generateGreeting();
    expect(greet).toBe('hello anon!!');
})