test('2 plus 2 equals 4 ', () => {
    expect( 2 +2).toBe(4);
});

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
});