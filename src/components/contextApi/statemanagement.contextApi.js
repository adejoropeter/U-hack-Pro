import React, {
  createContext,
  useContext,
  useReducer,
  useRef,
} from "react";
import  reducer,{ INITIAL_STATE} from "../reducer/reducer";

const StateMang = createContext();
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const focus= useRef(null);
  return <StateMang.Provider value={{focus }}>{children}</StateMang.Provider>;
};
export default Context;
export const ItemContext = () => {
  return useContext(StateMang);
};