function rearrangeFruits(fruits) {
    // Remove the last 4 fruits from the end of the array
    const removedFruits = fruits.splice(-4);

    // Add the removed fruits to the beginning of the array in the same order they were removed
    fruits.unshift(...removedFruits);

    return fruits;
}

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];
console.log(rearrangeFruits(fruits));
