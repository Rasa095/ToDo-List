import styled from "styled-components"
interface aa{
    value:string;
}
export const AppWraper=styled.div`
width:100vw;
height:100vh;
background-color: #444444;
position: relative;
`
export const Form=styled.form`
width: 150px;
height: 150px;
position: absolute;
top:30%;
right: 45%;

`
export const Input=styled.input<aa>`
background-color:black;
color: white;
`
export const Button=styled.button`
margin-left:51px;
margin-top: 15px;
cursor: pointer;
background-color: silver;
box-shadow:0 0 10px 5px rgba(0, 0, 0, 0.3);
`
export const WhatToDo=styled.div`
background-color:#fff;
width: 400px;
height: 200px;
position: absolute;
top: 40%;
right: 36%;
border-radius: 10px;
box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.3);
`
export const WhatToDoList=styled.ul`
    
`
export const WhatToDoItem=styled.div`
    display: flex;
    gap:50px;
  

`
export const WhatToDoItemBtn=styled.button`
      background-color: silver;
`