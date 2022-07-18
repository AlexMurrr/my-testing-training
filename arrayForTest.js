
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
