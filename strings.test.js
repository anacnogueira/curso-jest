test('There is no I in team', ()=> {
    expect('team').not.toMatch(/I/);
});

test('But there is "stop" on Christoph', () =>{
    expect('Christoph').toMatch(/stop/);
});
