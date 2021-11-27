import fx from 'money';
import {  useState } from 'react';
import { Select } from '../Converter/Converter.style';
import { AwesomeHeaderText, ListBoxRow, ListCart, TextDarkBlue } from './ValuteList.style';
 

export const ValuteListView=(props)=>{
 
    fx.base="RUB";
    if(props.data!==null){
        (props.data.rates!=null)?fx.rates=props.data.rates:console.log('rates null');
     }
    const [baseCurr,setBaseCurr]=useState("EUR");

function handleBaseCurr (event) {
    setBaseCurr(event.target.value);
}
    return(
    
        (props.data!==null&&props.data.rates!==null)?
           <div>
          
        <AwesomeHeaderText>Awesome Fresh Valute List!</AwesomeHeaderText>
         <ListCart>
         {  <Select value={baseCurr} onChange={(event)=>{handleBaseCurr(event)}}>
            {Object.keys(props.data.rates).map((item,index)=><option key={index.toString()} >{item}</option>)}
        </Select>  }
            {Object.keys(props.data.rates).map((item,index)=><ListBoxRow><p key={index} >1 {baseCurr} = { fx(1).from(baseCurr).to(item).toFixed(3)} {item} </p><p>↔</p> <TextDarkBlue key={item}> 1 {item} = { fx(1).from(item).to(baseCurr).toFixed(3)}  {baseCurr}  </TextDarkBlue> </ListBoxRow>)}
            </ListCart>
          </div>:
          <p>Wait Please...</p>
          
      
       )
}