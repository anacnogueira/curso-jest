const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towel',
    'milk'
];

test('the shopping list has milk on it', () =>{
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk')
})