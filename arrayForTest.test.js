const arrayForTest = require( "./arrayForTest")

const arrayNum = arrayForTest.arrayNumber;
const fruit = arrayForTest.fruit;
const sortAr = arrayForTest.sortArray;
const fruitSort = arrayForTest.fruitSort;
const topProp = arrayForTest.topPropInObj;
const sumsal = arrayForTest.sumSalary;

let checkForString = (array) => {
    for(let item of array){
        if(typeof item === 'string'){
            return true
        }else return false
        
    }
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
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


describe('check object resulting from array', () => {
    test('checking for define', () => {
        expect(fruitSort(fruit)).toBeDefined;
    });

    const fruitObj = fruitSort(fruit);
    
    test('check empty object', () => {
        expect(isEmpty(fruitObj)).toBeFalsy();
    });    

    test('checking for an object', () => {
        expect(Array.isArray(fruitObj)).not.toBeTruthy();
        expect(fruitObj['1']).toBe("banana");
        
    })
});

//const fruitObj = fruitSort(fruit);
//console.log(fruitObj['1'])

const salaries = {
    "Katy": 150,
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  describe ('check function topPropInObj',() => {
    test ('is not undefined', ()=>{
        expect(topProp(salaries)).not.toBeUndefined();
    });
    test ('name properties with max properties', ()=>{
        expect(topProp(salaries)).toBe('Pete')
    });
  }

  )

  const company = {
    sales:[{name:'John', salary: 100},
            {name:'Alice', salary: 100}],
    development:{
        sites:[{name:'Peter', salary:100},
               {name: 'Alex', salary: 100}],
        internals:[{name:'Jack', salary:100}]
    }   
       
  }

  const company1 = {
    sales:[{name:'John', salary: 100},
            {name:'Alice', salary: 100}],

  }

describe('checking the recursion', ()=> {
    test('not undefined', () => {
        expect(sumsal(company)).toBeDefined();
    });
    test('checking sum', ()=> {
        expect(sumsal(company)).toBe(500);
    })
})

  