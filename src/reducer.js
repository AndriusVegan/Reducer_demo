// reducer is basically the Store

export const initialState = {
    basket: [],
    user: nul,
    total: 0,
}

const reducer = (state, action) = {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // manipulate the data layer
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        default:
            console.error(`${action.type} is not supported`);
            return state;
    }

}

export default reducer