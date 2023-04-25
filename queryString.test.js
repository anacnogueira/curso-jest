const {queryString} = require('./queryString');

describe('Object to query string', () =>{
    test('should create a valid query string when an object is provided', () => {
        const obj = {
            name: 'Ana',
            profession: 'developer'
        };
        
        expect(queryString(obj)).toBe(
            'name=Ana&profession=developer'
        );
    });
});

// describe('Query string to object', () =>{

// });