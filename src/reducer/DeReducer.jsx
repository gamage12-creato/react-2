import {useReducer} from "react";

const initialState = {
    brelan: 0,
    totalExperiments: 0,
    results: [],
  };

  const gameDe = (state, action) => {
    switch (action.type) {
      
      case "DE": {
        const { numberExperiments } = action.payload;
        let brelan = 0;
        let results = [];
        for (let i = 0; i < numberExperiments; i++) {
          const dice = [
            Math.ceil(Math.random() * 6),
            Math.ceil(Math.random() * 6),
            Math.ceil(Math.random() * 6),
          ];
          results.push(dice);
          if (dice.every((d) => d === 6)) brelan++;
        }
        return {
          ...state,
          brelan,
          totalExperiments: numberExperiments,
          results,
        };
      }

      case "RESET": {
        return initialState;
      }
      
      default:
        return state;
    }
  };

  
const gameDes = () => useReducer(gameDe, initialState);

export default gameDes;