import { ARGENT, DENOMINATIONS, RESTE, RESET } from "../action-type/action-type";

export const setMontant = (argent) => ({
    type: ARGENT,
    payload: argent,
});

export const setDenominations = (denomination) => ({
    type: DENOMINATIONS,
    payload: denomination,
});

export const setReste = (reste) => ({
    type: RESTE,
    payload: reste,
});

export const setReset = () => ({
    type: RESET,
});
