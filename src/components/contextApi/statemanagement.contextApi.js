import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import reducer, { INITIAL_STATE } from "../reducer/reducer";
const StateMang = createContext();
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  // const { NgoSearch, SearchedRes } = state;
  const [loading, setloading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [errorMsg, setErrMsg] = useState(false);
  const [error, setErr] = useState("");
  const [donAmt, setDonAmt] = useState(1);
  const five = useRef(null);
  const twenty = useRef(null);
  const twentyFive = useRef(null);
  const fifty = useRef(null);
  const hund = useRef(null);
  const twoHun = useRef(null);

  useEffect(() => {
    setloading(true);
    fetch("https://konect-api.herokuapp.com/ngo/getDetails")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setloading(false);
        dispatch({ type: "display", payload: data });
      })
      .catch((err) => {
        setErrMsg(true);
        setloading(false);
        setErr(err.message);
      });
  }, []);
  useEffect(() => {
    setloading(true);
    fetch("https://konect-api.herokuapp.com/ngo/getDonations")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setloading(false);
        dispatch({ type: "displayDon", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "error", payload: err });
        setErrMsg(true);
        setloading(false);
        setErr(err.message);
      });
  }, []);

  // console.log(Ngo);
  return (
    <StateMang.Provider
      value={{
        donAmt,
        five,
        twenty,
        twentyFive,
        fifty,
        hund,
        twoHun,
        setDonAmt,
        dispatch,
        state,
        loading,
        errorMsg,
        error,checked,setChecked
      }}
    >
      {children}
    </StateMang.Provider>
  );
};
export default Context;
export const ItemContext = () => {
  return useContext(StateMang);
};
