import { filterByCategory } from "../actions/filterActions";
import { useRecoveryData } from "../../hooks/useRecoveryData";

const initialFilterState: any = {
  category: "",
  filteredProducts: [],
};

export const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case filterByCategory:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
