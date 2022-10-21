import React, {
  createContext,
  useContext,
  useReducer,
  useRef,
} from "react";
import {Query, QueryClient,QueryClientProvider} from '@tanstack/react-query'
import  reducer,{ INITIAL_STATE} from "../reducer/reducer";

const StateMang = createContext();
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const focus= useRef(null);

  const client = new QueryClient()
  
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
export default Context;
export const ItemContext = () => {
  return useContext(StateMang);
};