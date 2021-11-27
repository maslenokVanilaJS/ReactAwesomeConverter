 

import axios from 'axios'
import { getConverterRatesFailureCreator, getConverterRatesFINALLYCreator, getConverterRatesSuccesCreator } from './ValuteList.reducer';

export const getConverterRatesAction =()=>{
    return async dispatch=>{
        try{
const response= await axios.get('https://www.cbr-xml-daily.ru/latest.js');

dispatch(getConverterRatesSuccesCreator(response.data))
        }catch(error){
            console.log(error.response)
dispatch(getConverterRatesFailureCreator(error))
        }
    }
}