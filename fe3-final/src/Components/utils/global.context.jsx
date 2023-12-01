import { createContext, useReducer, useMemo } from "react";

const actionTypes = {
  SET_DATA: "SET_DATA",
  SET_THEME: "SET_THEME",
};

export const initialState = { theme: "light", data: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return { ...state, data: action.payload };
    case actionTypes.SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const contextValue = useMemo(() => {
    const toggleTheme = () => {
      dispatch({
        type: actionTypes.SET_THEME,
        payload: state.theme === "light" ? "dark" : "light",
      });
    };

    return {
      state,
      dispatch,
      toggleTheme,
      actionTypes,
    };
  }, [state, dispatch]);

  return (
    <ContextGlobal.Provider value={{ contextValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};
