import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getConverterRatesAction } from "../../store/Converter/Converter.thunk";
  import { ConverterView } from "./ConverterView";
  export const ConverterContainer=()=>{

    const  dispatch = useDispatch();
     const[converterData,setConverterData]=useState(null);
     const state = useSelector(state => state.ConverterReducer.ratesObject);
      
   
    
      useEffect(() => {
         
        dispatch(getConverterRatesAction());
        
        console.log(state);
      }, [])
   
    useEffect(() => {
      if(state!==null){
        setConverterData({
         base:state.base,
         rates:Object.assign(state.rates,{"RUB":1})
         })
      }
 
    }, [state])
 
    return(
        <ConverterView data={converterData}></ConverterView>
    )
}
