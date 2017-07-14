import { ADD_PLANT_TO_BASKET, REMOVE_PLANT_FROM_BASKET } from '../actions';

function plantBasket(state = [], action) {
  switch (action.type) {
    case ADD_PLANT_TO_BASKET:
      // console.log(action);
      putPlantInBasket(action.plant);
      return state;
    case REMOVE_PLANT_FROM_BASKET:
      // remove the dang plant
      return state;
    default:
      return state;
  }
}

export default plantBasket;
