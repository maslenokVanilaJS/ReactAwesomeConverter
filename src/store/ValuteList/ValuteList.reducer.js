
const RatesState={
    ratesObject:null,
    requestState:'pending',
    error:null
}

const GET_CONVERTER_RATES_SUCCES="GET_CONVERTER_RATES_SUCCES";
 
const GET_CONVERTER_RATES_FAILURE="GET_CONVERTER_RATES_FAILURE";

 

export default function ValuteListReducer (state = RatesState, action)  {
    switch (action.type) {
         

    case GET_CONVERTER_RATES_SUCCES:
        return { ...state, ratesObject:action.payload ,requestState:'succes',error:null}

         case GET_CONVERTER_RATES_FAILURE:
            return { ...state, requestState:'failed',ratesObject:null,error:action.payload
        }
  
            default:
        return state
    }
};

export const getConverterRatesSuccesCreator=(payload)=>({
type:'GET_CONVERTER_RATES_SUCCES',
payload
});

export const getConverterRatesFailureCreator=(payload)=>({
    type:'GET_CONVERTER_RATES_FAILURE',
    payload
    });

    

