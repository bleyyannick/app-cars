import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeCost } from '../store'


function CarForm() {
  const dispatch = useDispatch()
  const {name, cost} = useSelector(state => ({ name: state.form.name,cost: state.form.cost})
  )
  const handleChangeName = (event) => {
     dispatch(changeName(event.target.value))
  }
  const handleChangeCost = (event) => {
    const intCost = parseInt(event.target.value) || 0; 
    dispatch(changeCost(intCost))
  }
  return (
    <div className='subtitle is-3'>
      <form>
        <div className="field-group">
           <div className='field'>
              <label className='label'>Name</label>
              <input 
              className="input is-expanded"
              value={name}
              onChange={handleChangeName} />
              <label className='label'>Cost</label>
              <input 
              className="input is-expanded"
              value={cost || ''}
              onChange={handleChangeCost} />
           </div>
        </div>
      </form>

    </div>
  )
}

export default CarForm