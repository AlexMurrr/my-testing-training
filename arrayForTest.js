
const arrayNumber = [150, 2,4,5,1,3];
const fruit = ['banana', 'banana', 'apple', 'orange', 'apple'];
const sortArray = (ar) => {
   return ar.sort((a,b) => a-b);
}

//функция: сделать из массива объект, где ключем будет индекс начиная с единицы,
// а значением - 
//элемент

const fruitSort = (array) => {
   return array.reduce((acc, cur, i) =>{
        i++
        acc[i] = cur;
        return acc; 
    }, {})
}

//деконструирующее присваивание

function topPropInObj (obj) {

   max = 0;
   nameProp = 0;

   for (const [name, num] of Object.entries(obj)){
      if(max<num){
         max=num;
         nameProp=name;
      }
      
   }
   return nameProp; 
}

//рекурсия
function sumSalary(department){
   if(Array.isArray(department)){
      return department.reduce ((sum, cur) => sum + cur.salary,0)
   }else{
      sum=0;
      for(let subDep of Object.values(department)){
         sum += sumSalary(subDep);
      }
      return sum;
   }
}

//плоский массив
function flatten(array){

   const res = [];

   for(let i=0; i<array.length; i++){
       if(Array.isArray(array[i])){
           const flat = flatten(array[i]);
           for(let j=0; j<flat.length; j++){
               res.push(flat[j]);
           }
       }else{
           res.push(array[i]);
       }
   }
   return res;
}

function arrayFromString(str){      
   return str.split(", ");
 }

function trueOneWord(inputVerb, trueVerb){   
   const trueStr = trueVerb.split(", ");      
   return trueStr.includes(inputVerb);       
 }

 function removeEmptySpace(verb){
   return verb.replace(/\s/g,'');
 }

 function oneWordTrue(inputVerb, trueVerb){     
   const inputVerbs = removeEmptySpace(inputVerb);
   const trueVerbs = removeEmptySpace(trueVerb);
   const trueArr = trueVerbs.split(",");      
   return trueArr.includes(inputVerbs);       
 }

 function arrSort (arrNumbers){
   return arrNumbers.sort(function(a,b){
      return a - b;
   })
 } 

 function arrmap(arr){
   return arr.map(i => i+1);
 }

let a = 0;

 function arrReduce(arr){
   return arr.reduce((acc, cur) => 
      {acc + cur}, a   
   );
 }

 function arrForEach(arr){
   arr.forEach((el, index)=>{
    console.log(el, index);
   })
 }
 arrForEach([2,3]);

module.exports = {arrSort, fruitSort, fruit, topPropInObj, sumSalary, arrayFromString, trueOneWord, removeEmptySpace, oneWordTrue, flatten, sortArray, arrayNumber, arrmap, arrReduce, arrForEach};