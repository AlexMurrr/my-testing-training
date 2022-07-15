const fruitT = require( "./arrayForTest")

let fruit = fruitT;

test ('extend is array', ()=>{    
    expect(fruit).toStrictEqual(["banana", "banana", "apple", "orange", "apple"])
})

test()