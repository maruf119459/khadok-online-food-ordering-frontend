

import { api } from "../../config/api";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEARE_CART_FAILURE, CLEARE_CART_REQUEST, CLEARE_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEMS_FAILURE, GET_ALL_CART_ITEMS_REQUEST, GET_ALL_CART_ITEMS_SUCCESS, REMOVE_CARTITEM_FAILURE, REMOVE_CARTITEM_REQUEST, REMOVE_CARTITEM_SUCCESS, UPDATE_CARTITEM_FAILURE, UPDATE_CARTITEM_REQUEST, UPDATE_CARTITEM_SUCCESS } from "./ActionTypes";

export const findCart = (token) => {
    return async (dispatch) => {
        dispatch({ type: FIND_CART_REQUEST }); // Dispatch request action
        try {
            const response = await api.get('/api/cart', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch({ type: FIND_CART_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: FIND_CART_FAILURE, payload: error });
        }
    };
};

export const getAllCartItems = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_CART_ITEMS_REQUEST }); 
        try {
            const response = await api.get(`/api/carts/${reqData.cartId}/items`, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`,
                },
            });
            dispatch({ type: GET_ALL_CART_ITEMS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: GET_ALL_CART_ITEMS_FAILURE, payload: error });
        }
    };
};

export const addItemToCart = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: ADD_ITEM_TO_CART_REQUEST });

        try {
            // Validate input data
            if (!reqData?.cartItem || !reqData?.token) {
                throw new Error("Invalid request data: cartItem or token is missing.");
            }

            const { data } = await api.put(
                '/api/cart/add', 
                reqData.cartItem, 
                {
                    headers: {
                        Authorization: `Bearer ${reqData.token}`,
                    },
                }
            );

            console.log("Item added to cart:", data);
            dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });

        } catch (error) {
            // Log more detailed error info
            console.error("Error adding item to cart:", error?.response?.data || error.message);

            dispatch({
                type: ADD_ITEM_TO_CART_FAILURE,
                payload: error?.response?.data?.message || error.message,
            });
        }
    };
};


export const updateCartItem = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_CARTITEM_REQUEST });
        try {
            const { data } = await api.put('/api/cart-item/update', reqData.data, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            console.log("Cart item updated:", data);
            dispatch({ type: UPDATE_CARTITEM_SUCCESS, payload: data });
        
        } catch (error) {
            console.log("Error updating cart item:", error);
            dispatch({ type: UPDATE_CARTITEM_FAILURE, payload: error.message });
        }
    };
};

export const removeCartItem = ({ cartItemId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: REMOVE_CARTITEM_REQUEST });
        try {
            const { data } = await api.delete(`/api/cart-item/${cartItemId}/remove`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("Cart item removed:", data);
            dispatch({ type: REMOVE_CARTITEM_SUCCESS, payload: cartItemId });
        } catch (error) {
            console.log("Error removing cart item:", error);
            dispatch({ type: REMOVE_CARTITEM_FAILURE, payload: error.message });
        }
    };
};


export const clearCartAction = () => {
    return async (dispatch) => {
        dispatch({ type: CLEARE_CART_REQUEST });
        try {
            const { data } = await api.put('/api/cart/clear', {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
            });

            dispatch({ type: CLEARE_CART_SUCCESS, payload: data });
            console.log("Cart cleared successfully:", data);
        } catch (error) {
            console.log("Error clearing cart:", error);
            dispatch({ type: CLEARE_CART_FAILURE, payload: error.message });
        }
    };
};
