import { ADD_PLANT_TO_BASKET, REMOVE_PLANT_FROM_BASKET } from '../actions';
import { createPlant } from './helpers';

function plantBasket(state = [], action) {
  switch (action.type) {
    case ADD_PLANT_TO_BASKET:
      let plants = [...state, createPlant(action.id)];
      return plants;
    case REMOVE_PLANT_FROM_BASKET:
      plants = plants.filter(item => (item.id !== action.id));
      return state;
    default:
      return state;
  }
}

export default plantBasket;
