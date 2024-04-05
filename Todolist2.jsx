import React from 'react'
import './App.css'
function Todolist2(props) {
    return (
        <>

            <div className="input-group mb-3">
                <div className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" >
                    {props.items}
                </div>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" style={{ background: 'red', border: 'transparent' }} onClick={e => {
                    props.deleteData(props.index)
                }}>Remove</button>
            </div>

        </>
    )
}

export default Todolist2
