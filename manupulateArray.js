const person={
    name: 'Max',
    age: 29,
    greet(){
        console.log('hi,i am',this.name);
    }
}
const fruits=['apple','oranges','mangos','lemon'];
fruits.splice(3,0,'empty String');
console.log(fruits);