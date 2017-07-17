import plants_json from '../components/data/plants.json';
import { ADD_PLANT_TO_BASKET, REMOVE_PLANT_FROM_BASKET } from '../actions';
import { createPlant } from './helpers';

function plants(state = plants_json, action) {
  switch(action.type) {
    case ADD_PLANT_TO_BASKET:
      let plants = state.filter(item => item.id !== action.id);
      return plants;
    case REMOVE_PLANT_FROM_BASKET:
      plants = [...state, createPlant(action.id)];
      return plants;
    default:
      return state;
  }
}

export default plants;
