const fruitT = require( "./arrayForTest")

let fruit = fruitT;

let checkForString = (array) => {
    for(let item of array){
        if(typeof item === 'string'){
            return true
        }else return false
        
    }
}

test ('extend is array', ()=>{    
    expect(fruit).toStrictEqual(["banana", "banana", "apple", "orange", "apple"]);
})

test ('check all item for string', ()=>{
    expect(checkForString(fruit)).toBeTruthy();
})

test ('containe item', ()=>{
    expect(fruit).toContain('apple');
})



