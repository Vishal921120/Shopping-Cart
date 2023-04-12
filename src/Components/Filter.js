import React from 'react'
import { Button , Form } from 'react-bootstrap'
import { useState } from 'react';
import Rating from './Rating';

const Filter = () => {

    const [rate, setRate] = useState(3);
  return (
    <div className = "filters">
        <span className='title'>Filter Products</span>
        <span>
            <Form.Check
               inline
               label="Ascending"
               name = "group1"
               type = "radio"
               id = {`inline-1`}
            />
        </span>
        <span>
            <Form.Check
               inline
               label="Descending"
               name = "group1"
               type = "radio"
               id = {`inline-2`}
            />
        </span>
        <span>
            <Form.Check
               inline
               label="Include Out of stock"
               name = "group1"
               type = "checkbox"
               id = {`inline-3`}
            />
        </span>
        <span>
            <Form.Check
               inline
               label="Fast Delivery Only"
               name = "group1"
               type = "checkbox"
               id = {`inline-4`}
            />
        </span>
        <span>
            <label style={{paddingRight : 10}} >Rating</label>
            <Rating 
                rating={rate} 
                style = {{cursor:"pointer"}}
                onClick={(i) => setRate(i+1)} // bcz we are starting from zero
            />
        </span>
        <Button variant='light'>Clear Filters</Button>
    </div>
  )
}

export default Filter