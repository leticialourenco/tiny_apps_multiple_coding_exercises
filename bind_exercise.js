// manually implementing bind function
function bind(func, context){
  return function() {
    func.call(context);
  }
}



// this and bind playground exercise
let sound = 'haha! you have been tricked';

let dog = {
  sound: 'woof',
  talk: function() {
    return this.sound
  }
}

let cat = {
  sound: 'meow',
  talk: function() {
    return this.sound
  }
}

let horse = {
  sound: 'neigh',
  talk: function() {
    return this.sound
  }
}

console.log(dog.talk());
console.log(cat.talk());

const neigh = horse.talk;
const boundNeigh = neigh.bind(horse);
console.log(boundNeigh());