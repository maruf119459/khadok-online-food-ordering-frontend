import {
    GET_USERS_NOTIFICATION_SUCCESS,
    GET_USERS_ORDERS_FAILURE,
    GET_USERS_ORDERS_REQUEST,
    GET_USERS_ORDERS_SUCCESS,
} from "./ActionTypes";

const initialState = {
    loading: false,
    orders: [],
    error: null,
    notifications: [],
};

export const orderReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_USERS_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case GET_USERS_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: payload,
                error: null,
            };

        case GET_USERS_NOTIFICATION_SUCCESS:
            return {
                ...state,
                notifications: payload,
                loading: false,
                error: null,
            };

        case GET_USERS_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            };

        default:
            return state;
    }
};
