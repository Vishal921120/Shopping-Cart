export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT-BY-PRICE":
      return { ...state, sort: action.payload };
    case "FILTER-BY-STOCK":
      return { ...state, byStock: !state.byStock };
    case "FILTER-BY-DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "FILTER-BY-RATING":
      return { ...state, byRating: action.payload };
    case "FILTER-BY-SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR-FILTER":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      };
  }
};
