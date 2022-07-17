const arrayForTest = require( "./arrayForTest")

let arrayNum = arrayForTest.arrayNumber;

const fruit = arrayForTest.fruit;

const sortAr = arrayForTest.sortArray;

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


describe('sort arrays', () => {

    test('checked undefined',() => {
        expect(fruit).not.toBeundefined;
    }),
    test('sort of array numbers', () => {
        expect(sortAr(arrayNum)).toStrictEqual([1,2,3,4,5,150]);
    })
})

console.log(arrayNum);


