import { filterByCategory } from "../actions/filterActions";

const initialState = {
  category: "",
  price: "",
  brand: "",
  color: "",
  rating: "",
  shipping: "",
  keyword: "",
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        category: action.payload,
        filteredProducts: filterByCategory(action.payload),
      };

    default:
      return state;
  }
};
