export const INITIAL_STATE = {
  Ngo: [],
  isLoading: false,
  viewNgo: [],
  viewDonation: null,
  NgoSearch: "",
  SearchedRes: [],
  SearchedResDon: [],
  DonSearch: "",
  Donation: [],
  StoreValue: [],
  StoreValueDon: [],
  isError: false,
  errorMsg: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "display":
      return { ...state, Ngo: [action.payload], isLoading: true };
    case "displayDon":
      return { ...state, Donation: [action.payload], isLoading: true };
    case "view Ngo":
      return { ...state, viewNgo: [action.payload], isLoading: true };
    case "view Donation":
      return { ...state, viewDonation: action.payload, isLoading: true };
    case "Ngo_InputVal":
      return { ...state, NgoSearch: action.payload };
    case "DonInputVal":
      return { ...state, DonSearch: action.payload };
    case "searchedRes":
      return { ...state, SearchedRes: [action.payload] };
    case "searchedResDon":
      return { ...state, SearchedResDon: [action.payload] };
    case "STORE_INPUTVAL":
      return { ...state, StoreValue: action.payload };
    case "STORE_INPUTVAL_Don":
      return { ...state, StoreValueDon: action.payload };
    case "ADD_TO_RESULTARR":
      return { ...state, StoreValue: [...state.StoreValue, action.payload] };
    case "ADD_TO_RESULTARR_Don":
      return { ...state, StoreValueDon: [...state.StoreValueDon, action.payload] };
    case "Filtered_Search_Res":
      return { ...state, StoreValue: [...state.StoreValue, action.payload] };
    case "Filtered_Search_Res_Don":
      return { ...state, StoreValueDon: [...state.StoreValueDon, action.payload] };

    case "CLEAR_Ngo_INPUTVAL":
      return { ...state, NgoSearch: "" };
    case "error":
      return {
        ...state,
        error: true,
        isLoading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
