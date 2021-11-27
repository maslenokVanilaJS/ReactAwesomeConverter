import styled from "styled-components";

 export const Button=styled.button`
width:70%;
height: 30px;
font-size: 20px;

display:block;
margin:auto;
margin-top:10%;
background-color:blue;
color:white;
border:none;
box-shadow: 0px 0px 5px 0px blue;
text-transform:uppercase;
border-radius:10px;
:hover{
    box-shadow: 0px 0px 1px 0px blue;
    transition:all 0.2s;
   
}
:active{
    box-shadow: 0px 0px 15px 0px blue;
    transition:all 0.2s;
   
}

`
export const Select=styled.select`
    width: 20%;
    font-size: 20px;
    margin: 0;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgb(34 60 80 / 20%);
    flex-basis:29vw;
`
export const Input=styled.input`
width: 75%;
border-radius: 10px;
height: 30px;
    margin: auto;
    margin-top: 5vh;
    box-shadow: 0px 0px 2px 0px rgb(34 60 80 / 20%);

`
export const ShadowContainer=styled.div`
width: 80vw;
margin: auto;
margin-top:20px;
box-shadow: 0px 0px 10px 0px rgb(34 60 80 / 20%);
padding:10px;
padding-bottom:30px;
color:blue;
:hover{
    box-shadow: 0px 0px 15px 0px rgb(34 60 80 / 20%);
  
}
@media (min-width:1024px){
    width:30vw;
}
`
export const HeadingMsg=styled.h3`
text-align:center;
`