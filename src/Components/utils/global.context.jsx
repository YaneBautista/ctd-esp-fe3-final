import { createContext, useEffect, useMemo, useReducer } from "react";


export const initialState = {theme: "light", data: [],favorites: [], };




const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };

    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

      case "TOGGLE_FAVORITE":
        const isFavorite = state.favorites.some((fav) => fav.id === action.payload.id);
        return {
          ...state,
          favorites: isFavorite
            ? state.favorites.filter((fav) => fav.id !== action.payload.id) 
            : [...state.favorites, action.payload], 
        };
      
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        dispatch({ type: "SET_DATA", payload: data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
