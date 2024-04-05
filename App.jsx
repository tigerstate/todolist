import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todolist from './Todolist'
import Todolist2 from './Todolist2'

function App() {

  const [inputList, setList] = useState([]);

  let addList = (inputTask) => {
    if (inputTask !== '')
      setList([...inputList, inputTask])
  }

  let deleteListItem = (key) => {

    let newListValue = [...inputList];
    newListValue.splice(key, 1);
    setList([...newListValue]);
  }

  // const [inputDate, setInputDate] = useState('');
  // const [inputStarttime, setInputStartTime] = useState('');
  // const [inputEndtime, setInputEndTime] = useState('');


  return (
    <>
      <Todolist addList={addList} />

      {inputList.map((ItmeList, i) => {

        return (
          <Todolist2 key={i} items={ItmeList} index={i} deleteData={deleteListItem} />
        )
      })}
    </>
  )
}

export default App
