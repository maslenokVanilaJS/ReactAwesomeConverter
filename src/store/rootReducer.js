import {combineReducers} from 'redux';
import ConverterReducer from './Converter/Converter.reducer';
import ValuteListReducer from './ValuteList/ValuteList.reducer';
 
export const rootReducer=combineReducers({
ConverterReducer,
ValuteListReducer
});