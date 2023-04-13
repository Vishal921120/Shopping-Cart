import React from "react";
import {
  Container,
  FormControl,
  Navbar,
  Nav,
  Dropdown,
  Badge,
  Button
} from "react-bootstrap";

import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

export const Header = () => {
  const {state : {cart} , dispatch , productDispatch
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/"><b>Shopping Cart</b></Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 400 }}
            placeholder="Search a product"
            className="m-auto"
            onChange={(e) => {
              productDispatch({
                type : "FILTER-BY-SEARCH",
                payload : e.target.value,
              })
            }}
          />
        </Navbar.Text>
        <Nav style={{paddingRight : 100}}>
          <Dropdown>
            <Dropdown.Toggle variant="success" >
              <FaShoppingCart color="white" fontSize="25" />
              <Badge bg="success">{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }} >
              {cart.length>0 ? (
                <>
                   {cart.map((prod) => (
                      <span className="cartitem" key={prod.id} >
                        <img
                            src = {prod.image}
                            className="cartItemImg"
                            alt={prod.name}
                        />
                        <div className="cartItemDetail">
                          <span>{prod.name}</span>
                          <span>{prod.price}</span>
                        </div>
                        <AiFillDelete
                           fontSize="20px"
                           style={{cursor: "pointer"}}
                           onClick={()=> 
                              dispatch({
                                type : "REMOVE_FROM_CART",
                                payload  : prod,
                              })}
                          />
                      </span>
                   ))}
                    <Link to="/cart">
                        <Button style={{width:"95%" , margin : "0 10px"}}>Go To Cart</Button>
                    </Link>
                </>
              ):(
                <span style={{ padding: 10 }}>Cart is empty</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
