import { useReducer } from "react";
import storage from "local-storage-fallback";

import on from "../assets/sounds/on.mp3";
import off from "../assets/sounds/off.mp3";

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      storage.setItem('isDark', !state.isDark);
      state.isDark && !undefined ? new Audio(on).play() : new Audio(off).play();

      return {
        isDark: !state.isDark,
        isNoise: state.isNoise
      }
    case 'TOGGLE_NOISE':
      storage.setItem('isNoise', !state.isNoise);

      return {
        isNoise: !state.isNoise,
        isDark: state.isDark
      }
    default: {
      return state
    }
  }
};

const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, {
    isDark: storage.getItem('isDark') 
    ? JSON.parse(storage.getItem('isDark')) 
    : false,

    isNoise: storage.getItem('isNoise') 
    ? JSON.parse(storage.getItem('isNoise')) 
    : true,
  });

  return { state, dispatch }
};

export default useGlobalState