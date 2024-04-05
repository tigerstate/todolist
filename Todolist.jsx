import React, { useState } from 'react';
import './App.css'
let Todolist = (props) => {

  const [inputTask, setInputText] = useState('');

  // const [inputDate, setInputDate] = useState('');
  // const [inputStarttime, setInputStartTime] = useState('');
  // const [inputEndtime, setInputEndTime] = useState('');



  return (<>



    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" style={{ fontWeight: 'bold' }} href="#"> T Typhon</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Feature</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">AI tools</a>
            </li>

          </ul>
          <button type="button" className="btn btn-outline-dark" style={{ marginRight: '1rem' }}>Dark</button>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

        </div>
      </div>
    </nav>
    <div className="task-box">

      <div className="form-box">
        <form action="">
          <div className="to-do-list-title" style={{ position: 'relative', top: '5rem', left: '7rem', fontWeight: 'bold', fontSize: '2rem' }}>2 DO LIST</div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter task" aria-label="Recipient's username" aria-describedby="button-addon2" value={inputTask} onChange={e => { setInputText(e.target.value) }} />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => { props.addList(inputTask), setInputText("") }}>Add Task</button>
          </div>












          {/* <div className="input-group mb-3">
            <input type="date" value={inputDate} className="form-control" placeholder="Enter date" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={e => { setTextinput(e.target.value) }} />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add date</button>
          </div>
          <div className="input-group mb-3">
            <input type="time" value={inputStarttime} className="form-control" placeholder="Enter starting time" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={e => { setTextinput(e.target.value) }} />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Starting time</button>
          </div>
          <div className="input-group mb-3">
            <input type="time" value={inputEndtime} className="form-control" placeholder="Enter starting time" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={e => { setTextinput(e.target.value) }} />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Ending time</button>
          </div> */}
        </form>

      </div>


    </div>





  </>)

}



export default Todolist;
