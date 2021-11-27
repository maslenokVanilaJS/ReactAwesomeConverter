import styled from "styled-components";

 export const ListBoxRow=styled.div`
 display:flex;
 justify-content:space-evenly;
  color:blue;
  animation:change 1s linear;
 border-bottom:1px solid blue;
 :hover{
     color:white;
     background:blue;
     border-bottom:1px solid black;
     transition:all 0.5s;
        
 }
 @media (min-width:1024px){
   flex-basis:29vw;
   border-right:1px solid blue;

}
@keyframes change{
    from{
        opacity :0;

    }
    to{
        opacity:1;
    }
}
  `
  export const TextDarkBlue=styled.p`
  font-style:italic;
   `
   export const ListCart=styled.div`
   width:90vw;
   margin:auto;
//margin-top:10vh;
   box-shadow: 0px 0px 10px 0px rgb(34 60 80 / 20%);
   @media (min-width:1024px){
    width:90vw;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    :hover{
        box-shadow: 0px 0px 15px 0px rgb(34 60 80 / 20%);
      
    }
}
   `
   export const AwesomeHeaderText=styled.h2`
   margin-top:10vh;
   text-align:center;
   `
   
  
 