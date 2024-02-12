import Immutable, { Map } from "immutable";

const foods = Map({
    'breakfast': 'Bread',
    'teabreak': 'Ndizi',
    'lunch': 'ugali',
    'dinner': 'rice'
});

const revFoods = foods.set('breakfast', 'chapati');
foods.set('dinner', 'fish')

console.log(foods);
console.log(revFoods);

console.log(Immutable.is(foods, revFoods));
