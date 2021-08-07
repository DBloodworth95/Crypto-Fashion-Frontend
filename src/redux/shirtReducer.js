const initialState = {
    shirts: [],
}

export const ActionTypes = {
    ADD_SHIRT: 'ADD_SHIRT',
    GET_SHIRTS: 'GET_SHIRTS',
    DELETE_SHIRT: 'DELETE_SHIRT',
    EDIT_SHIRT: 'EDIT_SHIRT',
}

export const ActionCreators = {
    getShirts: payload => ({ type: ActionTypes.GET_SHIRTS, payload }),
    addShirt: payload => ({ type: ActionTypes.ADD_SHIRT, payload }),
    editShirt: payload => ({ type: ActionTypes.EDIT_SHIRT, payload }),
    deleteShirt: payload => ({ type: ActionTypes.DELETE_SHIRT, payload }),
}

export default function ShirtReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_SHIRT:
            return { ...state, shirts: [...state.shirts, action.payload] };
        case ActionTypes.GET_SHIRTS:
            return { ...state, shirts: [...action.payload] };
        case ActionTypes.DELETE_SHIRT:
            for (let i = 0; i < state.shirts.length; i++) {
                if (state.shirts[i].id === action.payload.id) {
                    state.shirts.splice(i, 1);
                    break;
                }
            }
            return { ...state, shirts: [...state.shirts] };
        case ActionTypes.EDIT_SHIRT:
            for (let i = 0; i < state.shirts.length; i++) {
                if (state.shirts[i].id === action.payload.id) {
                    state.shirts[i].shirtName = action.payload.shirtName;
                }
            }
            return { ...state, shirts: [...state.shirts] }
        default:
            return state;
    }
}