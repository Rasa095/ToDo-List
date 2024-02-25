import React, { useState } from 'react';
import {AppWraper,Input,Form,Button,WhatToDo,WhatToDoList,WhatToDoItem,WhatToDoItemBtn} from "./App-styles"

function App() {
const [inputText,setInputext]=useState<string>("");
const [toDo,setToDo]=useState<string[]>([]);

  function onChangeInput(event:React.ChangeEvent<HTMLInputElement>){
    setInputext(event.target.value);
    
  }
  function saveToDo(event: React.MouseEvent<HTMLButtonElement>){
    event.preventDefault();
    setToDo([...toDo,inputText]);
    setInputext("");
    

  }
  function deletFromList(ind:number){
    const newList=toDo.filter((item,index)=>index!==ind);
    setToDo(newList);

  }
  return (
    <AppWraper>
      <Form>
      <Input value={inputText} onChange={onChangeInput} ></Input>
      <Button onClick={saveToDo}>Save</Button>
      </Form>
      <WhatToDo>
        <WhatToDoList>
        {toDo.map((task, index) => (
          <WhatToDoItem>
             <li key={index}>{task}</li>
             <WhatToDoItemBtn onClick={()=>deletFromList(index)}>x</WhatToDoItemBtn>

          </WhatToDoItem>
          
         
        ))}

        </WhatToDoList>
      </WhatToDo>
    </AppWraper>


   
  );
}

export default App;
