import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getConverterRatesAction } from "../../store/ValuteList/ValuteList.thunk";
  import { ValuteListView } from "./ValuteListView";
  export const ValuteListContainer=()=>{

    const  dispatch = useDispatch();
     const[converterData,setConverterData]=useState(null);
     const state = useSelector(state => state.ValuteListReducer.ratesObject);
     const error = useSelector(state => state.ValuteListReducer.error);

   
   
      useEffect(() => {
         
        dispatch(getConverterRatesAction());
        
        console.log(state);
      }, [])
   
    useEffect(() => {
      if(state!==null){
        setConverterData({
         base:state.base,
         rates:Object.assign(state.rates,{"RUB":1}),
         error:error
         })
      }
 
    }, [state])
 
    return(
        <ValuteListView data={converterData}></ValuteListView>
    )
}