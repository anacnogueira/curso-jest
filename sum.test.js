const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

test('2 plus 2 equals 4 ', () => {
    expect( 2 +2).toBe(4);
})

test('object assignment', () =>{
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2})
});

test('adding positive numbers is to zero', ()=>{
    for(let a = 1; a < 10; a++) {
        for(let b =1; b < 10; b++) {
            expect(a +b).not.toBe(0);
        }
    }
})

test('null', ()=>{
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
})

test('zero', ()=>{
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test('two plus two', () =>{
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    //toBe e toEqual são equivalentes para números
    expect(value).toBe(4);
    expect(value).toEqual(4);
})

test('adding floating point numbers', () =>{
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
})