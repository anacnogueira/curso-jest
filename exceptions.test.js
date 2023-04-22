function compileAndroidCode() {
    throw new Error('You are using the wrong JDK!');
}

test('Compiling android ges as expected', () =>{
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    //You can also use a string that must be containeed in the error message or a regexp
    expect(() => compileAndroidCode()).toThrow('You are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);

    //Or you can mtach an exact error message using regexp lke below
    //expect(() => compileAndroidCode()).toThrow(/^You are using the wrong JDK$/); //test Fails
    expect(() => compileAndroidCode()).toThrow(/^You are using the wrong JDK!$/); //tyest Pass
})