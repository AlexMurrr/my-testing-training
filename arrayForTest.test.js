const arrayForTest = require( "./arrayForTest")

const arrayNum = arrayForTest.arrayNumber;
const fruit = arrayForTest.fruit;
const sortAr = arrayForTest.sortArray;
const fruitSort = arrayForTest.fruitSort;
const topProp = arrayForTest.topPropInObj;
const sumsal = arrayForTest.sumSalary;
const flatt = arrayForTest.flatten;
const arrFromStr = arrayForTest.arrayFromString;
const trueOneWord = arrayForTest.trueOneWord;
const removeEmptySpace = arrayForTest.removeEmptySpace;
const oneWordTrue = arrayForTest.oneWordTrue;
const arrSort = arrayForTest.arrSort;
const arrmap = arrayForTest.arrmap;

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

test('make flat array', ()=>{   
    const ar = [[1,1], [1,1,[1]]];    
    expect(flatt(ar)).toHaveLength(5);
})

const str = 'a, b';
const oneItems = 'a';

describe('check function array from string', ()=>{
    
    test('check is array', ()=>{
        expect(Array.isArray(arrFromStr(str))).toBeTruthy();
    })

    test('array from string', ()=>{        
        expect(arrFromStr(str)).toContain('a');        
    })
})

describe('check function trueOneWord',()=>{
    test('if one word true',()=>{        
        expect(trueOneWord('a', str)).toBeTruthy();
    })  
    test('if all word true', ()=>{
        expect(trueOneWord('a', oneItems)).toBeTruthy();
    }) 
})

describe('check function removeEmptySpace', ()=>{
    const haveInternalSpace = 'a  a   a  a a';
    const hasExternalSpace = '   a     ';

    test('check internal empty space', ()=>{
        expect(removeEmptySpace(haveInternalSpace)).toBe('aaaaa');
    })
    test('check external space', ()=>{
        expect(removeEmptySpace(hasExternalSpace)).toBe('a')
    })
})

describe('check function oneWordTrue',()=>{
    test('content one word is true', ()=>{
        expect(oneWordTrue('a', 'a, b')).toBeTruthy();
    })
    test('more empty space', ()=>{
        expect(oneWordTrue('   a ', 'a, b')).toBeTruthy();
    })   
})

describe('check arrSort', ()=>{
    test('sort numbers', ()=>{
        expect(arrSort([2,1,4,3])).toEqual([1,2,3,4]);
    })    
})

test('test arrmap', ()=>{
    expect(arrmap([1,2])).toEqual([2,3]);
})







  