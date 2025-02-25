import { ARGENT, DENOMINATIONS, RESTE, RESET } from "../action-type/action-type";

const initialState = {
    argents: 0,
    denominations: [100, 50, 20, 10, 5, 1],
    restes: {},
};

const denoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ARGENT:
            return { ...state, argents: action.payload };

        case DENOMINATIONS:
            return { ...state, denominations: action.payload };

        case RESTE:
            return { ...state, restes: action.payload };
            
        case RESET:
            return initialState;
        default:
            return state;
    }
};

export default denoReducer;
