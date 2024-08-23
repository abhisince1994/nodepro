const fruits=['apple','oranges','','mango','','lemon'];

const indicesToInsert=[2,4];
const stringToInsert='empty string';

const transformedFruits = fruits.map((item, index)=>{
if(indicesToInsert.includes(index)){
    return stringToInsert;
}else{
    return item;
}
});
console.log(transformedFruits);