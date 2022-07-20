
exports.arrayNumber = [150, 2,4,5,1,3];
exports.fruit = ['banana', 'banana', 'apple', 'orange', 'apple'];
exports.sortArray = (ar) => {
   return ar.sort((a,b) => a-b);
}

//функция: сделать из массива объект, где ключем будет индекс начиная с единицы,
// а значением - 
//элемент

exports.fruitSort = (array) => {
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

exports.topPropInObj = topPropInObj;
