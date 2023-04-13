import React from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const Filter = () => {
  const {
    productState: { byStock, byFastDelivery, sort, byRating},
    productDispatch,
  } = CartState();
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT-BY-PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT-BY-PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            productDispatch({
              type: "FILTER-BY-STOCK",
              payload: "lowToHigh",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER-BY-DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating</label>
        <Rating
          rating={byRating}
          style={{ cursor: "pointer" }}
          onClick={(i) =>
            productDispatch({
              type: "FILTER-BY-RATING",
              payload: i + 1, // bcz we are starting from zeroth index
            })
          }
        />
      </span>
      <Button
        variant="light"
        onClick={(i) =>
          productDispatch({
            type: "CLEAR-FILTER",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
