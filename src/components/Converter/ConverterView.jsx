import fx from 'money';
import { useEffect, useState } from 'react';
import { Button, HeadingMsg, Input, Select, ShadowContainer } from './Converter.style';
 

 export const ConverterView=(props)=>{
    const [from, setFrom] = useState("RUB");
    const [to,setTo]=useState("EUR");
    const[amount,setAmount]=useState(0);
    const[result,setResult]=useState(0);

    useEffect(() => {
       (amount!=0)?setResult(fx(amount).from(from).to(to)):setResult(0);
    }, [amount,from,to])

fx.base="RUB";
if(props.data!==null){
    (props.data.rates!=null)?fx.rates=props.data.rates:console.log('rates null');
   
}

function handleRevert() {
    setFrom(to);
    setTo(from);
    fx(amount).from(from).to(to);
}
function handleFrom(event) {
    setFrom(event.target.value)
}
function handleTo(event) {
    setTo(event.target.value)
  
}
function handleInputAmount(event){


setAmount(event.target.value)
}



 return(
    
     (props.data!==null&&props.data.rates!==null)?
        <ShadowContainer>
        <HeadingMsg onClick={()=>{console.log( fx(amount).from(from).to(to),props.data.rates)}}>Awesome Converter</HeadingMsg>
     {  <Select  value={from} onChange={(event)=>{handleFrom(event)}}>
            {Object.keys(props.data.rates).map((item,index)=><option key={index} >{item}</option>)}
        </Select>  }
            <Input onInput={(event)=>{handleInputAmount(event)}}  type="number" />
            <div></div>
            <Input value={result.toFixed(3)} disabled type="number" />
            {  <Select  value={to} onChange={(event)=>{handleTo(event)}}>
            {Object.keys(props.data.rates).map((item,index)=><option value={item} key={index} >{item}</option>)}
        </Select>  }
        <Button onClick={handleRevert} >revert</Button>
       </ShadowContainer>:
       <p>Wait Please...</p>
       
   
    )
}