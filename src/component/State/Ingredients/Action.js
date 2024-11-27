
import { api } from "../../config/api";
import {
    CREATE_INGREDIENT_CATEGORY_FAILURE,
    CREATE_INGREDIENT_CATEGORY_SUCCESS,
    CREATE_INGREDIENT_FAILURE,
    CREATE_INGREDIENT_SUCCESS,
    GET_INGREDIENTS,
    GET_INGREDIENT_CATEGORY_FAILURE,
    GET_INGREDIENT_CATEGORY_SUCCESS,
    UPDATE_STOCK,
} from "./ActionType";

export const getIngredientsOfRestaurant = ({ id, jwt }) => {
    return async (dispatch) => {
      try {
        const response = await api.get(`/api/admin/ingredients/restaurant/${id}`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
  
        console.log("Get all ingredients: ", response.data);
  
        dispatch({
          type: GET_INGREDIENTS,
          payload: response.data, // Assuming the response contains the ingredients data
        });
      } catch (error) {
        console.error("Error fetching ingredients: ", error);
        // dispatch({ type: GET_INGREDIENTS_FAILURE, error });
      }
    };
  };

  export const createIngredient = ({ data, jwt }) => {
    return async (dispatch) => {
      try {
        const response = await api.post(`/api/admin/ingredients`, data, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
  
        console.log("Create ingredient: ", response.data);
  
        dispatch({
          type: CREATE_INGREDIENT_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        console.error("Error creating ingredient: ", error);
        dispatch({ type: CREATE_INGREDIENT_FAILURE, error });
      }
    };
  };

  export const createIngredientCategory = ({ data, jwt }) => {
    console.log("Data: ", data, "JWT: ", jwt);
    return async (dispatch) => {
      try {
        const response = await api.post(`/api/admin/ingredients/category`, data, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
  
        console.log("Create ingredient category: ", response.data);
  
        dispatch({
          type: CREATE_INGREDIENT_CATEGORY_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        console.error("Error creating ingredient category: ", error);
        // Dispatch an error action if necessary
        dispatch({ type: CREATE_INGREDIENT_CATEGORY_FAILURE, error });
      }
    };
  };
  

  export const getIngredientCategory = ({ id, jwt }) => {
    return async (dispatch) => {
      try {
        const response = await api.get(`/api/admin/ingredients/restaurant/${id}/category`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
  
        console.log("Get ingredient category: ", response.data);
  
        dispatch({
          type: GET_INGREDIENT_CATEGORY_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        console.error("Error fetching ingredient category: ", error);
        // Dispatch an error action if necessary
        // dispatch({ type: GET_INGREDIENT_CATEGORY_FAILURE, error });
      }
    };
  };

  export const updateStockOfIngredient = ({ id, jwt }) => {
    return async (dispatch) => {
      try {
        const { data } = await api.put(`/api/admin/ingredients/${id}/stock`, {}, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
  
        console.log("Updated ingredient stock: ", data);
  
        dispatch({
          type: UPDATE_STOCK,
          payload: data,
        });
      } catch (error) {
        console.error("Error updating ingredient stock: ", error);
        // Dispatch an error action if necessary
        // dispatch({ type: UPDATE_STOCK_FAILURE, error });
      }
    };
  };