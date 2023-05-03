console.log('person1: shows  ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('ticket');
      })
})
const getPopcorn = promiseWifeBringingTickets.then((t)=>{
    console.log('wife: i have the tics');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
});
const butter = getPopcorn.then((t)=>{
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need butter on popcorn');
    return new Promise((resolve,reject)=>resolve(`${t} butter`))
});
const getColdDrinks = butter.then((t)=>{
    console.log('husband: I got some butter on popcorn');
    console.log('husband: Let\'s go get some cold drinks');
    console.log('wife: Great idea!');
    return new Promise((resolve,reject)=>resolve(`${t} cold drinks`));
  });
  getColdDrinks.then((t)=>console.log(t));

console.log('person4: shows ticket');
console.log('person5: shows ticket');