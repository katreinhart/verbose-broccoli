import { combineReducers } from 'redux';
import plantBasket from './PlantBasket';
import plants from './PlantContainer';

const rootReducer = combineReducers({
  plantBasket,
  plants
});

export default rootReducer;
