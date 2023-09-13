import { createContext, useContext } from "react";

type InputContext = {
  word: string;
  setWord: (word: string) => void;
};

const defaultInputContext: InputContext = {
  word: "",
  setWord: () => {},
};

export const inputContext = createContext<InputContext>(defaultInputContext);

export const InputContexProvider = inputContext.Provider;

export const useInputContext = () => useContext(inputContext);

//New component

//Type of the context
type InputNumberContext = {
  number: number;
  setNumber: (number: number) => void;
};
//Values in default for context
const defaultInputNumberContext: InputNumberContext = {
  number: 1,
  setNumber: () => {},
};

//Use for values in context
export const inputNumberContext = createContext<InputNumberContext>(
  defaultInputNumberContext
);

//Provider the context for use like tag
export const InputContexNumberProvider = inputNumberContext.Provider;
