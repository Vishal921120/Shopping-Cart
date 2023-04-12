import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'

const SingleProduct = ({prod}) => {
    const {
        state : {cart},
        dispatch,
    } = CartState();
  return (
    <div className='products'> 
        <Card>
            <Card.Img variant='top' src={prod.image} alt={prod.name}/>
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle style={{paddingBottom:10}}>
                    <span>Rs {prod.price.split(".")[0]}</span>
                    {prod.fastDeliver ? (
                        <div>Fast Deliver</div>
                    ):(
                        <div>4 Days Delivery</div>
                    )}
                    <Rating rating={prod.rating} />
                </Card.Subtitle>
                {cart.some((p) => p.id === prod.id) ? (
                    <Button variant="danger">Remove from cart</Button>
                ):(
                    <Button disabled={!prod.inStock}>{!prod.inStock ? "Out of Stock" : "Add to cart"}
                    </Button>
                )}      
            </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct