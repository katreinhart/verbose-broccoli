export const ADD_PLANT_TO_BASKET = 'ADD_PLANT_TO_BASKET';
export const REMOVE_PLANT_FROM_BASKET = 'REMOVE_PLANT_FROM_BASKET';

export function putPlantInBasket(id) {
  console.log("Action triggered");
  return{
    type: ADD_PLANT_TO_BASKET,
    id: id
  }
}

export function removePlantFromBasket(id) {
  return {
    type: REMOVE_PLANT_FROM_BASKET,
    id: id
  }
}
