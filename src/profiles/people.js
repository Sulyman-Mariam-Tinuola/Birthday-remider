import React from 'react'
import { peopleArr } from './peopleArr'
import { useState } from 'react'

const People = () => {
    const [users, setUsers] = useState(peopleArr);
  return (
    <div>
        {
            users.map((person) => {
                // console.log(person)
const {id, img, nam, age} = person
return(
    <div key={id} className='objects'>
<img className='imgg' src={img} alt='images'/>
<h4 className='nam'>{nam}</h4>
<p className='age'>{age} {`years`}</p>
    </div>
)
            })
        }
       <button className='btn' onClick={() => {setUsers([])}}>Clear All</button> 
    </div>
    
  )
}

export default People