'use strict';

const numbersArray = [1, 2, 3, 4];
const lettersArray = ['r', 'e', 'd', 'u', 'c', 'e', 'r'];

const reducerCallback = (acc, item) => {
    console.log('Accumulator, item', acc, item);
    return acc + item;
}

const total = numbersArray.reduce(reducerCallback, 0);
const newString = lettersArray.reduce(reducerCallback, '');

console.log({newString});

const stateReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.item
        case 'REST':
            return '';
        default:
            return state;
    }
}

//Global object to store the state changes
let wordStore = '';
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'r' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'e' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'd' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'u' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'x' });
console.log({wordStore})