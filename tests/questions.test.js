let samplet2 = (a,b)=>{
    return a+b
}



test('adds 1+2 to equal to 3', ()=>{
    expect(samplet2(1,5)).toBe(6)
})